"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import { theme } from "@/theme";
import { Footer } from "@/components/footer";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>
            <Stack minHeight="100vh" width="100%">
              <Stack flex={1}>{children}</Stack>
              <Footer />
            </Stack>
          </ThemeProvider>
          <CssBaseline />
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
