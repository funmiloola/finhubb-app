"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Sidebar() {
  const [open, setOpen] = useState(false)

  const menu = [
    {
      name: "Dashboard",
      path: "/dashboard",
    },
  ]

  return (
    <>
      <div className="lg:hidden flex items-center justify-between bg-[#0F172A] text-white p-4">
        <h1 className="font-bold text-lg">Dashboard</h1>

        <button onClick={() => setOpen(!open)}>
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      <div
        className={`
          fixed top-0 left-0 z-50
          h-screen  bg-[#0F172A]
          transform transition-transform duration-300
          ${open ? "translate-x-0" : "-translate-x-full"}
          lg:translate-x-0
          lg:static
        `}
      >
        <div className="text-white text-2xl font-bold p-4 border-b border-slate-700">
          FINHUBB
        </div>
        <div className="flex flex-col gap-3 px-2">
          {menu.map((m, index) => (
            <Link
              key={index}
              href={m.path}
              className="
                text-white font-medium
                px-4 py-3 rounded-xl
              "
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
  )
}