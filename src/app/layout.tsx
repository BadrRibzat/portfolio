// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from 'next-themes';
import { inter, firaCode, calSans } from './fonts';

export const metadata: Metadata = {
  title: 'Badr Ribzat | Full-Stack Developer & AI Specialist',
  description: 'Professional software engineer offering remote development and AI integration services worldwide.',
  metadataBase: new URL('https://yourdomain.com'),
  keywords: ['freelance developer', 'AI specialist', 'remote engineer', 'full-stack developer'],
  icons: {
    icon: '/logo/favicon.ico',
    shortcut: '/logo/favicon-32x32.png',
    apple: '/logo/apple-touch-icon.png',
  },
  manifest: '/logo/site.webmanifest',
  openGraph: {
    title: 'Badr Ribzat | Full-Stack Developer & AI Specialist',
    description: 'Professional software engineer offering remote development and AI integration services worldwide.',
    url: 'https://yourdomain.com',
    siteName: 'Badr Ribzat Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Badr Ribzat | Full-Stack Developer & AI Specialist',
    description: 'Professional software engineer offering remote development and AI integration services worldwide.',
    images: ['/images/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${firaCode.variable} ${calSans.variable} min-h-screen flex flex-col`}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
