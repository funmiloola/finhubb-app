'use client'

import { Dialog,DialogTrigger,DialogContent,DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import VisaDetail from "./visaDetail";

export default function VisaApplication({ data }: any) {
     const [selectItem,setSelectedItem] = useState<any | null>(null)

    return (
        <section className=" px-4 py-8 h-full font-roboto">
      <h2 className="text-xl font-semibold text-gray-800 pb-4">Visa Applications</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {data.map((item: any) => (
            <Dialog key={item.caseNumber}>
                <DialogTrigger asChild onClick={()=>setSelectedItem(item)}>
        <div
          className="rounded-xl border border-gray-300 p-4 cursor-pointer"
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-semibold text-lg">
                {item.jobTitle}
              </h2>
              <p className=" text-gray-500">
                {item.employerName}
              </p>
            </div>

            <span
              className={` px-2 py-1 rounded-full ${
                item.caseStatus === "Certified"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {item.caseStatus}
            </span>
          </div>
          <div className="pt-2 flex flex-col gap-1.5 text-gray-400">
            <p>
              Wage: 
              {" "}$
              {item.wageRangeFrom.toLocaleString()}
              {" - "}
              $ {item.wageRangeTo.toLocaleString()}
            </p>

            <p>
            Work State: {item.worksiteCity},{" "}
              {item.worksiteState}
            </p>

            <p>
            Visa Class: {item.visaClass}
            </p>

            <p>
              Case: {item.caseNumber}
            </p>
          </div>
          <div className=" text-gray-400">
            Received: {item.receivedDate} | Year:{" "}
            {item.year} Q{item.quarter}
          </div>
                    </div>
                </DialogTrigger>
                {selectItem && (
                    <DialogContent  className="md:max-w-xl! overflow-y-auto">
                        <DialogTitle />
                        <VisaDetail visa={selectItem}/>
                    </DialogContent>
                )}
            </Dialog>
      ))}
      </div>
      </section>
    )
}