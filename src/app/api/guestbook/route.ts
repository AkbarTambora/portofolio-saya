// src/app/api/guestbook/route.ts
import { NextResponse } from 'next/server';
import { connectToDatabase } from '@/lib/db';
import Guestbook from '@/models/Guestbook';

export async function GET() {
  try {
    const conn = await connectToDatabase();
    if (!conn) {
      // Fallback if MONGODB_URI is not yet provided
      return NextResponse.json({
        success: true,
        data: [],
        isFallback: true,
        message: 'MongoDB URI belum dikonfigurasi di Environment Variable.',
      });
    }

    const entries = await Guestbook.find({}).sort({ createdAt: -1 }).limit(100).lean();
    return NextResponse.json({ success: true, data: entries });
  } catch (error) {
    console.error('Error fetching guestbook:', error);
    return NextResponse.json(
      { success: false, error: 'Gagal mengambil data buku tamu' },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, role, message } = body;

    if (!name || !message) {
      return NextResponse.json(
        { success: false, error: 'Nama dan pesan wajib diisi' },
        { status: 400 }
      );
    }

    const conn = await connectToDatabase();
    if (!conn) {
      return NextResponse.json(
        {
          success: false,
          error: 'Database belum terhubung. Silakan set MONGODB_URI di Vercel / .env.local.',
        },
        { status: 503 }
      );
    }

    const newEntry = await Guestbook.create({
      name: name.trim(),
      role: role?.trim() || 'Pengunjung',
      message: message.trim(),
      createdAt: new Date(),
    });

    return NextResponse.json({ success: true, data: newEntry }, { status: 201 });
  } catch (error) {
    console.error('Error creating guestbook entry:', error);
    return NextResponse.json(
      { success: false, error: 'Gagal menyimpan pesan buku tamu' },
      { status: 500 }
    );
  }
}
