'use client';
import { EdgeStoreProvider } from '@/lib/edgestore';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
        </body>
      </html>
    </>
  );
}
