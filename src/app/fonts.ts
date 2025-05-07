// src/app/fonts.ts
import { Inter, Fira_Code, Roboto } from 'next/font/google';

export const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-mono',
});

export const calSans = Roboto({
  weight: ['700'],
  subsets: ['latin'],
  variable: '--font-heading',
});
