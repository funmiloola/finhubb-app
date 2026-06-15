"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const menu = [
    {
      name: "Market News",
      path: "/dashboard/market-news",
    },
    {
      name: "Recommendation Charts",
      path: "/dashboard/recommendation",
    },
    {
      name: "Visa Application",
      path: "/dashboard/visa",
    },
    {
      name: "USA Spending",
      path: "/dashboard/usa",
    },
  ];

  return (
    <>
      <div className="lg:hidden flex items-center justify-between bg-[#0F172A] text-white p-4 font-roboto">
        <h1 className="font-bold text-lg">Finhubb</h1>

        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={`
          fixed top-0 left-0 z-50
          h-screen w-2/3 md:w-full  bg-[#0F172A] 
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          lg:static
        `}
      >
        <div className="text-white text-2xl font-bold p-4 border-b border-slate-700">
          FINHUBB
        </div>
        <div className="flex flex-col gap-3 px-2 pt-4">
          {menu.map((m, index) => (
            <Link
              key={index}
              href={m.path}
              className={`text-white font-medium px-4 py-3 hover:bg-gray-600 rounded-md ${pathname.includes(m.path) ? "bg-gray-700":""}`}
              onClick={() => setOpen(false)}
            >
              {m.name}
            </Link>
          ))}
        </div>
      </div>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </>
  );
}
