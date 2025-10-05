// src/app/layout.tsx
import type { Metadata } from 'next'; 
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Akbar Khaerullah | Full-Stack Developer',
  description: 'Portofolio pribadi Akbar Khaerullah, seorang Full-Stack Developer dan UI/UX Enthusiast. Menampilkan proyek, pengalaman, dan keahlian dalam pengembangan web dan mobile.',
  keywords: ['Akbar Khaerullah', 'Full-Stack Developer', 'Web Developer', 'Portfolio', 'Next.js', 'React', 'TypeScript'],
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