import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL!),
  title: 'Funny Dice Game — Try Your Luck 🎲',
  description:
    'A simple and fun dice game. Choose higher or lower, roll the dice, and see if luck is on your side.',
  openGraph: {
    title: 'Funny Dice Game 🎲',
    description:
      'Pick higher or lower, roll the dice, and test your luck in this quick game.',
    images: [
      {
        url: '/dicePic.webp',
        width: 1200,
        height: 630,
        alt: 'Funny Dice Game — roll the dice',
      },
    ],
    type: 'website',
  },
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <body className={`${roboto.className} antialiased`}>{children}</body>
    </html>
  );
}
