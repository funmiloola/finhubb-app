import Sidebar from "@/components/sidebar";

export default function boardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <div className="flex flex-col lg:flex-row gap-4 w-full h-screen bg-[#f5fbfd]">
          <div className="w-full lg:w-1/7">
      <Sidebar />
          </div>
        <div className="w-full lg:w-6/7 ">
      <main className="flex-1 h-full lg:overflow-y-auto">
        {children}
              </main>
              </div>
    </div>
  );
}