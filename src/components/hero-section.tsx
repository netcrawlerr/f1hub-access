"use client";
import { Button } from "@/components/ui/button";
import { Menu, X, DownloadIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaGithub, FaTelegram } from "react-icons/fa";

export default function HeroSection() {
  const [menuState, setMenuState] = useState(false);

  type GitHubAsset = {
    name: string;
    browser_download_url: string;
  };

  type GitHubRelease = {
    assets: GitHubAsset[];
    tag_name: string;
  };

  const downloadApk = async () => {
    try {
      const res = await fetch(
        "https://api.github.com/repos/netcrawlerr/F1-Hub/releases/latest"
      );
      if (!res.ok) throw new Error("Failed to fetch latest release");

      const release: GitHubRelease = await res.json();

      console.log("Latest release:", release);

      const apkAsset = release.assets.find((a) => a.name.startsWith("F1"));

      if (!apkAsset) {
        alert("APK not found in latest release");
        return;
      }

      const link = document.createElement("a");
      link.href = apkAsset.browser_download_url;
      link.download = apkAsset.name;
      document.body.appendChild(link);
      link.click();
      link.remove();
    } catch (error) {
      console.error(error);
      alert("Failed to download APK");
    }
  };

  return (
    <>
      <header className="">
        <nav
          data-state={menuState && "active"}
          className="fixed z-20 w-full border-b border-dashed bg-white backdrop-blur dark:bg-zinc-950/50 lg:dark:bg-transparent"
        >
          <div className="m-auto max-w-5xl px-4">
            <div className="flex flex-wrap items-center justify-between gap-4 py-2 lg:gap-0 lg:py-3">
              {/* lgo */}
              <div className="flex w-full justify-between lg:w-auto">
                <Link
                  href="/"
                  aria-label="home"
                  className="flex items-center space-x-2 text-xl font-bold"
                >
                  <Image
                    className="rounded-lg shadow-md"
                    src="/logo.png"
                    alt="F1 Hub App Preview"
                    width={80}
                    height={40}
                  />
                </Link>

                {/* btn */}
                <button
                  onClick={() => setMenuState(!menuState)}
                  aria-label={menuState ? "Close Menu" : "Open Menu"}
                  className="relative z-20 block cursor-pointer p-2 lg:hidden"
                >
                  <Menu className="size-6 duration-200 data-[state=active]:hidden" />
                  <X className="absolute inset-0 m-auto hidden size-6 duration-200 data-[state=active]:block" />
                </button>
              </div>

              {/* mnu */}
              <div
                className={`${
                  menuState ? "block" : "hidden"
                } lg:flex w-full lg:w-fit flex-wrap items-center justify-center gap-4 rounded-xl border p-4 shadow-md lg:shadow-none lg:border-transparent lg:bg-transparent dark:lg:bg-transparent`}
              >
                <ul className="flex flex-col lg:flex-row items-center gap-4 text-sm">
                  <li>
                    <Link
                      href="https://github.com/netcrawlerr/F1-Hub"
                      target="_blank"
                      className="flex items-center gap-1 text-muted-foreground hover:text-accent-foreground"
                    >
                      <FaGithub className="size-5" /> Github
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="https://t.me/mkdenn"
                      target="_blank"
                      className="flex items-center gap-1 text-muted-foreground hover:text-accent-foreground"
                    >
                      <FaTelegram className="size-5" /> Telegram
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main className="py-10">
        <section className="overflow-hidden">
          <div className="relative mx-auto max-w-5xl px-4 py-20 flex flex-col items-center text-center">
            <h1 className="text-5xl md:text-6xl xl:text-7xl font-bold">
              Your F1 Companion
            </h1>
            <p className="mt-4 text-xl md:text-2xl text-muted-foreground">
              Every Race. Every Update. Every Moment.
            </p>
            <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-xl">
              Stay updated with the latest races, schedules, standings, and F1
              news. F1 Hub keeps fans in the fast lane — nothing less, nothing
              more.
            </p>

            <Button
              onClick={downloadApk}
              aria-label="download"
              className="mt-8 rounded-md px-6 py-3 text-lg flex items-center gap-2 hover:cursor-pointer"
            >
              Download For Android
              <DownloadIcon className="size-5" strokeWidth={2} />
            </Button>

            <div className="flex gap-5">
              <div className="mt-12 w-full flex justify-center">
                <Image
                  className="rounded-lg shadow-md"
                  src="/1.png"
                  alt="F1 Hub App Preview"
                  width={400}
                  height={100}
                />
              </div>
              <div className="mt-12 w-full flex justify-center">
                <Image
                  className="rounded-lg shadow-md"
                  src="/4.png"
                  alt="F1 Hub App Preview"
                  width={400}
                  height={100}
                />
              </div>
              <div className="mt-12 w-full flex justify-center">
                <Image
                  className="rounded-lg shadow-md"
                  src="/5.png"
                  alt="F1 Hub App Preview"
                  width={400}
                  height={100}
                />
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
