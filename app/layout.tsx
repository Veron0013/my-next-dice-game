import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { CssBaseline } from '@mui/material';
import './globals.css';

const roboto = Roboto({
  //variable: '--font-roboto',
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  title: 'Super Dice Game',
  description: 'Just have fun',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${roboto.className} antialiased`}>
        <CssBaseline />
        {children}
      </body>
    </html>
  );
}
