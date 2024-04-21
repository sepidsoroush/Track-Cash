import FilterProvider from "@/context/FilterProvider";

import { Sidebar } from "@/components/layout/sidebar";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <FilterProvider>
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <div className="flex flex-1">
          <aside className=" md:w-[220px] flex-col flex border-r bg-background/60 backdrop-blur-xl transition-all py-2 px-0 md:px-2">
            <Sidebar />
          </aside>
          <main className="flex w-full flex-1 flex-col overflow-hidden">
            {children}
          </main>
        </div>
        <Footer />
      </div>
    </FilterProvider>
  );
}
