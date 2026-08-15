// src/models/Project.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IProjectModel extends Document {
  slug: string;
  title: string;
  category?: string;
  description: string;
  longDescription: string;
  challenge?: string;
  solution?: string;
  impact?: string;
  image: string;
  liveLink?: string;
  codeLink?: string;
  tags: string[];
  order?: number;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema: Schema = new Schema(
  {
    slug: {
      type: String,
      required: [true, 'Slug wajib diisi'],
      unique: true,
      trim: true,
    },
    title: {
      type: String,
      required: [true, 'Judul wajib diisi'],
      trim: true,
    },
    category: {
      type: String,
      trim: true,
    },
    description: {
      type: String,
      required: [true, 'Deskripsi wajib diisi'],
      trim: true,
    },
    longDescription: {
      type: String,
      required: [true, 'Deskripsi lengkap wajib diisi'],
    },
    challenge: {
      type: String,
      trim: true,
    },
    solution: {
      type: String,
      trim: true,
    },
    impact: {
      type: String,
      trim: true,
    },
    image: {
      type: String,
      required: [true, 'Image path/URL wajib diisi'],
      default: '/project1.png',
    },
    liveLink: {
      type: String,
      trim: true,
    },
    codeLink: {
      type: String,
      trim: true,
    },
    tags: {
      type: [String],
      default: [],
    },
    order: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const ProjectModel: Model<IProjectModel> =
  mongoose.models.Project || mongoose.model<IProjectModel>('Project', ProjectSchema);

export default ProjectModel;
