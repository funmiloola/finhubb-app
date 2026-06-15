'use client'

import { Dialog,DialogTrigger,DialogContent,DialogTitle } from "@/components/ui/dialog";
import { useState } from "react";
import USADetails from "./usaDetails";

export default function UsaSpending({ data }: any) {
    const [selectItem, setSelectItem] = useState < any| null>(null)

    return (
        <div className=" px-4 py-8 h-full font-roboto">
      <h2 className="pb-6 text-xl font-semibold text-gray-800">USA Spending</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8 ">
        {data.map((item: any, index: number) => {
          return (
              <Dialog key={index}>
                  <DialogTrigger asChild onClick={()=>setSelectItem(item)}>
              <div
                className="rounded-lg border border-gray-200 p-6 cursor-pointer"
                
              >
                <h3 className="font-semibold flex gap-3 items-center">
                  {item.recipientName.startsWith("Z") ? (
                    <span className="border border-blue-600 px-4 py-2  text-base  bg-blue-600 text-white rounded-md">
                      Z
                    </span>
                  ) : (
                    <span className="border  text-base  border-green-600 px-4 py-2 bg-green-600 text-white rounded-md">
                      L
                    </span>
                  )}
                  <span className="text-sm">{item.recipientName}</span>
                </h3>

                <p className="text-gray-400 text-base pt-2 text-left">
                  Start Date:
                  {item.performanceStartDate}
                </p>
                <p className="text-gray-400 text-base pt-2 text-left">
                  End Date:
                  {item.performanceEndDate}
                </p>
                <p className="text-gray-400 text-base pt-2 text-left">
                  Agency:
                  {item.awardingAgencyName}
                </p>
                      </div>
                  </DialogTrigger>
                  {selectItem && (
                       <DialogContent className="md:max-w-xl! overflow-y-auto">
                      <DialogTitle />
                    <USADetails item={selectItem} />
                  </DialogContent>
                  )}
                 
            </Dialog>
          );
        })}
      </div>
    </div>
    )
}