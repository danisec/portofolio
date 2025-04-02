import type { Metadata } from 'next';
import type { Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import './globals.css';

const inter = Inter({
  variable: '--font-inter',
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Portofolio - Dani Aprilyanto',
  description: 'Portofolio - Dani Aprilyanto',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning={true}>
      <body className={`${inter.variable} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
