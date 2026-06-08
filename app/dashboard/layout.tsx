import Sidebar from "@/components/sidebar";

export default function boardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col lg:flex-row lg:gap-4 w-full h-full lg:h-screen bg-[#f5fbfd]">
      <div className="w-full lg:w-1/7">
        <Sidebar />
      </div>
      <div className="w-full lg:w-6/7">
        <main className="h-full lg:overflow-y-auto">{children}</main>
      </div>
    </div>
  );
}
