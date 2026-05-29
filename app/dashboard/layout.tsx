import Sidebar from "@/components/sidebar";

export default function boardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="flex flex-col lg:flex-row lg:gap-4 w-full h-screen bg-[#f5fbfd]">
          <div className="w-full lg:w-[10%]">
      <Sidebar />
          </div>
        <div className="w-full lg:w-[90%]">
      <main className="h-full lg:overflow-y-auto">
        {children}
              </main>
              </div>
    </div>
  );
}