import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
    "F1 App",
  ],
  authors: [{ name: "Mejid Kedir", url: "https://github.com/netcrawlerr" }],
  creator: "Mejid (netcrawler)",
  themeColor: "#FF1800",
  openGraph: {
    type: "website",
    url: "https://f1hub.netcrawler.dev",
    title: "F1 Hub – Your Ultimate Formula 1 Companion",
    description:
      "Stay updated with the latest Formula 1 races, schedules, standings, and news. F1 Hub delivers everything a true F1 fan needs in one place.",
    // images: [
    //   {
    //     url: "https://f1hub.net/og-image.png",
    //     width: 1200,
    //     height: 630,
    //     alt: "F1 Hub App Preview",
    //   },
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
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
