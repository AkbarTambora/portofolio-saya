// src/app/layout.tsx
import type { Metadata } from 'next'; 
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akbar Khaerullah | IT Support Helpdesk & Database Specialist',
  description: 'Portofolio pribadi Akbar Khaerullah, lulusan Sistem Informasi, IT Support Helpdesk, dan Database Specialist. Menampilkan pengalaman analisis akar masalah (RCA), mitigasi basis data, dan keahlian operasional sistem Koperasi & BPR.',
  keywords: ['Akbar Khaerullah', 'IT Support Helpdesk', 'Database Specialist', 'MySQL', 'MongoDB', 'Stored Procedure', 'Root Cause Analysis', 'Sistem Informasi', 'BPR & Koperasi', 'Portfolio'],
  verification: {
    google: 'wnSCHYmZGkPkUaZuhMIYQqmDw6onSeJh7IErKZuUCEU',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="!scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  );
}