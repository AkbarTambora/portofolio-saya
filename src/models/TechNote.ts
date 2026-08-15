// src/models/TechNote.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface ITechNote extends Document {
  title: string;
  category: string;
  summary: string;
  content: string;
  codeSnippet?: string;
  createdAt: Date;
  updatedAt: Date;
}

const TechNoteSchema: Schema = new Schema(
  {
    title: {
      type: String,
      required: [true, 'Judul wajib diisi'],
      trim: true,
    },
    category: {
      type: String,
      required: [true, 'Kategori wajib diisi'],
      trim: true,
    },
    summary: {
      type: String,
      required: [true, 'Ringkasan wajib diisi'],
      trim: true,
    },
    content: {
      type: String,
      required: [true, 'Konten wajib diisi'],
    },
    codeSnippet: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const TechNote: Model<ITechNote> =
  mongoose.models.TechNote || mongoose.model<ITechNote>('TechNote', TechNoteSchema);

export default TechNote;
