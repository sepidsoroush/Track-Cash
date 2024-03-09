import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Track That Cash",
  description: "Track That Cash home page",
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between text-6xl">
      Home page
    </main>
  );
}
