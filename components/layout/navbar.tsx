"use client";

import * as React from "react";
import Link from "next/link";
import { useSelectedLayoutSegment } from "next/navigation";

import { NavItem } from "@/types";
import { cn } from "@/lib/utils";
import { Icons } from "../icons";
import { ProfileMenu } from "./profile-menu";

const items: NavItem[] = [
  {
    title: "About",
    href: "/about",
    disabled: true,
  },
  {
    title: "Documentations",
    href: "/docs",
    disabled: true,
  },
];

export function Navbar() {
  const segment = useSelectedLayoutSegment();

  return (
    <header className="sticky top-0 z-40 flex w-full justify-center bg-background/60 backdrop-blur-xl transition-all border-b">
      <div className="flex h-16 w-full items-center justify-between p-4">
        <div className="flex gap-6 md:gap-10">
          <Link href="/" className="hidden items-center space-x-2 md:flex">
            <Icons.logo />
            <span className="hidden font-urban text-xl font-bold sm:inline-block">
              Track That Cash
            </span>
          </Link>
          {items?.length ? (
            <nav className="hidden gap-6 md:flex">
              {items?.map((item, index) => (
                <Link
                  key={index}
                  href={item.disabled ? "#" : item.href}
                  className={cn(
                    "flex items-center text-lg font-medium transition-colors hover:text-foreground/80 sm:text-sm",
                    item.href.startsWith(`/${segment}`)
                      ? "text-foreground"
                      : "text-foreground/60",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              ))}
            </nav>
          ) : null}
        </div>

        <div className="flex items-center space-x-3">
          <ProfileMenu />
        </div>
      </div>
    </header>
  );
}
