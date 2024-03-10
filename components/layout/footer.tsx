import * as React from "react";

import { cn } from "@/lib/utils";
import { ModeToggle } from "@/components/layout/mode-toggle";
import { Icons } from "../icons";

export function Footer({ className }: React.HTMLAttributes<HTMLElement>) {
  return (
    <footer className={cn(className, "border-t")}>
      <div className="container flex h-12 flex-row items-center justify-between gap-4">
        <div className="flex flex-row items-center gap-4 md:gap-2 md:px-0">
          <Icons.logo />
          <p className="text-center text-sm leading-loose md:text-left">
            Built by{" "}
            <a
              href="https://github.com/sepidsoroush"
              target="_blank"
              rel="noreferrer"
              className="font-medium"
            >
              Sepideh Soroush
            </a>
            . The source code is available on{" "}
            <a
              href="https://github.com/sepidsoroush/Track-That-Cash"
              target="_blank"
              rel="noreferrer"
              className="font-medium underline underline-offset-4"
            >
              GitHub
            </a>
            .
          </p>
        </div>
        <ModeToggle />
      </div>
    </footer>
  );
}
