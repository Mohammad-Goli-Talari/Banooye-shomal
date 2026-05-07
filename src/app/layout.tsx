// src/app/layout.tsx

'use client';

import type { Metadata } from "next";
import { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { ThemeProvider, CssBaseline } from '@mui/material';
import theme from '@/theme/mui-theme';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';
import "./globals.css";

/* export const metadata: Metadata = {
  title: "Banooye Shomal",
  description: "Developer : Mohammad Goli Talari",
}; */

export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl">
      <body>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Header />
            <main className="min-h-screen container mx-auto px-4 py-8">
              {children}
            </main>
            <Footer />
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  );
}
