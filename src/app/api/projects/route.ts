// src/app/api/projects/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import ProjectModel from '@/models/Project';
import { projectData as defaultProjects } from '@/data/projects';

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      // Return local static data as fallback
      return NextResponse.json({
        success: true,
        data: defaultProjects,
        isFallback: true,
      });
    }

    const projects = await ProjectModel.find({}).sort({ order: 1, createdAt: -1 }).lean();

    // If database is connected but collection is empty, seed with default projects
    if (projects.length === 0) {
      try {
        await ProjectModel.insertMany(defaultProjects);
        const seeded = await ProjectModel.find({}).sort({ order: 1, createdAt: -1 }).lean();
        return NextResponse.json({ success: true, data: seeded });
      } catch {
        return NextResponse.json({ success: true, data: defaultProjects });
      }
    }

    return NextResponse.json({ success: true, data: projects });
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ success: true, data: defaultProjects });
  }
}

export async function POST(request: Request) {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        { success: false, error: 'Database belum terhubung. Konfigurasikan MONGODB_URI.' },
        { status: 503 }
      );
    }

    const body = await request.json();
    const { title, slug, category, description, longDescription, challenge, solution, impact, image, liveLink, codeLink, tags } = body;

    if (!title || !slug || !description) {
      return NextResponse.json(
        { success: false, error: 'Judul, slug, dan deskripsi wajib diisi' },
        { status: 400 }
      );
    }

    const existing = await ProjectModel.findOne({ slug: slug.trim() });
    if (existing) {
      return NextResponse.json(
        { success: false, error: 'Slug proyek sudah digunakan. Silakan gunakan slug lain.' },
        { status: 400 }
      );
    }

    const newProject = await ProjectModel.create({
      title: title.trim(),
      slug: slug.trim().toLowerCase().replace(/\s+/g, '-'),
      category: category?.trim() || 'General',
      description: description.trim(),
      longDescription: longDescription?.trim() || description.trim(),
      challenge: challenge?.trim() || '',
      solution: solution?.trim() || '',
      impact: impact?.trim() || '',
      image: image?.trim() || '/project1.png',
      liveLink: liveLink?.trim() || '',
      codeLink: codeLink?.trim() || '',
      tags: Array.isArray(tags) ? tags : tags ? tags.split(',').map((t: string) => t.trim()) : [],
      order: 0,
    });

    return NextResponse.json({ success: true, data: newProject }, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error);
    return NextResponse.json(
      { success: false, error: 'Gagal membuat proyek baru' },
      { status: 500 }
    );
  }
}
