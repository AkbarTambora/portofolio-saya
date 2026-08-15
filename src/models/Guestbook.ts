// src/models/Guestbook.ts
import mongoose, { Schema, Document, Model } from 'mongoose';

export interface IGuestbook extends Document {
  name: string;
  role?: string;
  message: string;
  createdAt: Date;
}

const GuestbookSchema: Schema = new Schema({
  name: {
    type: String,
    required: [true, 'Nama wajib diisi'],
    trim: true,
    maxlength: [100, 'Nama maksimal 100 karakter'],
  },
  role: {
    type: String,
    trim: true,
    maxlength: [100, 'Role maksimal 100 karakter'],
    default: 'Pengunjung',
  },
  message: {
    type: String,
    required: [true, 'Pesan wajib diisi'],
    trim: true,
    maxlength: [1000, 'Pesan maksimal 1000 karakter'],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Guestbook: Model<IGuestbook> =
  mongoose.models.Guestbook || mongoose.model<IGuestbook>('Guestbook', GuestbookSchema);

export default Guestbook;
