'use client';
import { EdgeStoreProvider } from '@/lib/edgestore';
import './globals.css';
import { Toaster } from 'react-hot-toast';

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <body>
          <EdgeStoreProvider>{children}</EdgeStoreProvider>
          <Toaster position="bottom-center" />
        </body>
      </html>
    </>
  );
}
