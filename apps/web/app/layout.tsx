import './global.css';

import { Inter as FontSans } from 'next/font/google';

import { cn } from '@plata/utils';

import { ThemeProvider } from './_components/theme-provider/theme-provider';

export const metadata = {
  title: 'Plata on GitHub',
  description:
    'Plata is a high-tech financial platform that is changing the way Mexicans interact with money.',
  metadataBase: new URL('https://platacard.github.io'),
};

const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn('min-h-screen bg-background font-sans antialiased', fontSans.variable)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
