import "./globals.css";

import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";

import { cn } from "@/lib/utils";
import { ApiClientProvider } from "@/providers/api-client-provider";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "FX Checker",
  description: "A simple and fast currency converter with live exchange rates.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", jetBrainsMono.variable)}
    >
      <body>
        <ApiClientProvider>{children}</ApiClientProvider>
      </body>
    </html>
  );
}
