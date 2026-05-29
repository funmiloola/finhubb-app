import { finhubb } from "@/lib/finhubb"

export default async function MarketNews() {
   const news = await finhubb("/news?category=general")
    return (
        <div className="border border-gray-200 bg-white shadow-md p-4 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-800">
        Market News
      </h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 pt-4 gap-4">
        {news.slice(0,4).map((item: any) => (
            <div
              key={item.id}
              className="rounded-lg border border-gray-200 p-4 bg-white"
            >
              <img
                src={item.image}
                alt={item.headline}
                className="pb-3 h-12 rounded-xl object-cover"
              />

              <h3 className="font-semibold">
                {item.headline}
              </h3>

              <p className="py-2 text-sm text-gray-400">
                {item.summary}
            </p>
            <p className="border border-blue-100 bg-blue-100 rounded-xl px-1 py-0.5 text-blue-400 font-medium w-fit">
              { item.category.charAt(0).toUpperCase() + item.category.slice(1)}
            </p>
            </div>
          ))}
      </div>   
        </div>
    )
}