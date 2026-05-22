import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";

const f1Font = localFont({
  src: "./fonts/F1-Regular.ttf",
  display: "swap",
});

export const metadata: Metadata = {
  title: "F1 Hub – Your Ultimate Formula 1 Companion",
  description:
    "Stay updated with the latest Formula 1 races, schedules, standings, and news. F1 Hub delivers everything a true F1 fan needs in one place.",
  icons: {
    icon: [{ url: "/logo.png", sizes: "32x32", type: "image/png" }],
  },
  keywords: [
    "Formula 1",
    "F1",
    "F1 news",
    "F1 races",
    "F1 schedules",
    "F1 standings",
    "F1 Hub",
    "F1 app",
  ],
  authors: [{ name: "Mejid Kedir", url: "https://github.com/netcrawlerr" }],
  creator: "Mejid (netcrawler)",
  themeColor: "#FF1800",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={f1Font.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}
