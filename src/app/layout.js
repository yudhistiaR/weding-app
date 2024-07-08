"use client";
import { Rubik } from "next/font/google";
import "./globals.css";
import { useState, useEffect } from "react";
import Loader from "@/components/ui/loading";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

const inter = Rubik({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setInterval(() => setLoading(false), 2000);
  }, []);

  return (
    <html lang="en">
      <body suppressHydrationWarning={true} className={inter.className}>
        <QueryClientProvider client={queryClient}>
          {loading ? <Loader /> : children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
