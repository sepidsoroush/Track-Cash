import type { Metadata } from "next";

import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export const metadata: Metadata = {
  title: "Track Cash",
  description: "Track Cash home page",
};

export default async function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-between text-6xl">
        Home page
      </main>
      <Footer />
    </div>
  );
}
