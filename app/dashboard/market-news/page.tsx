import { finhubb } from "@/lib/finhubb";
import Image from "next/image";
import Link from "next/link";

export default async function MarketNews() {
  const news = await finhubb("/news?category=general");
  return (
    <div className=" p-4 font-roboto">
      <h2 className="text-xl font-semibold text-gray-800 pt-4">Market News</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 pt-4 gap-4">
        {news?.slice(0, 16).map((item: any) => (
          <Link href={`/dashboard/market-news/${item.id}`} key={item.id}>
            <div className="rounded-lg border border-gray-200 p-4 bg-white min-h-50 flex items-start gap-4">
              <div>
              <Image
                src={item.image}
                alt={item.headline}
                width={600}
                height={600}
                className="pb-3 rounded-xl object-cover max-h-full max-w-40"
              />
              </div>
              <div>
              <h3 className="font-semibold">{item.headline}</h3>

              <p className="py-2 text-sm text-gray-400">{item.summary}</p>
              <p className="border border-blue-100 bg-blue-100 rounded-xl px-1 py-0.5 text-blue-400 font-medium w-fit">
                {item.category.charAt(0).toUpperCase() + item.category.slice(1)}
                </p>
                </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
