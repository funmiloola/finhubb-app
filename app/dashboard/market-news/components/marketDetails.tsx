"use client";
import Image from "next/image";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import MarketDetail from "./marketDetail";
import { useState } from "react";

type Article = {
  id: number;
  image: string;
  headline: string;
  summary: string;
  category: string;
  source: string;
  url: string;
  datetime: number;
};

export default function MarketDetails({ news }: { news: Article[] }) {
  const [selectItem, setSelectItem] = useState<Article | null>(null);
  return (
    <div className=" p-4 font-roboto">
      <h2 className="text-xl font-semibold text-gray-800 pt-4">Market News</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 pt-4 gap-4">
        {news?.slice(0, 16).map((item: any) => (
          <Dialog key={item.id}>
            <DialogTrigger asChild onClick={() => setSelectItem(item)}>
              <div className="rounded-lg border border-gray-200 py-4 px-6 bg-white min-h-50 cursor-pointer">
                <div className="h-[270px] w-full relative">
                  <Image
                    src={item.image}
                    alt={item.headline}
                    fill
                    className="rounded-xl object-cover"
                  />
                </div>
                        <div className="pt-4">
                             <p className="text-sm border border-blue-100 bg-blue-100 rounded-xl px-1 py-0.5 text-blue-400 font-medium w-fit">
                    {item.category.charAt(0).toUpperCase() +
                      item.category.slice(1)}
                  </p>
                  <h3 className="font-semibold pt-1.5">{item.headline}</h3>

                  <p className="py-2 text-sm text-gray-400">{item.summary}</p>
                 
                </div>
              </div>
            </DialogTrigger>
            {selectItem && (
              <DialogContent className="max-w-3xl!">
                <DialogTitle />
                <MarketDetail article={selectItem} />
              </DialogContent>
            )}
          </Dialog>
        ))}
      </div>
    </div>
  );
}
