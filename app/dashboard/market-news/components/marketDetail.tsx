"use client"

import Image from "next/image"
import { ArrowLeft } from "lucide-react"

export default function MarketDetail({ article }: any) {

    return (
        <section className=" py-6 px-4 lg:px-0 font-roboto">
      <div className="">
        <div className="relative w-full h-[320px]">
          <Image
            src={article.image}
            alt={article.headline}
            fill
            className="object-cover rounded-2xl"
          />
        </div>

        <div className="px-8 pt-4 pb-8">
          <div className="flex items-center gap-3 pb-4">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
              Market News
            </span>

            <span className="text-gray-400 text-sm">
              {new Date(article.datetime * 1000).toISOString().split('T')[0]}
            </span>
          </div>

          <h1 className="text-2xl font-bold text-gray-900">
            {article.headline}
          </h1>

          <p className="pt-6 text-gray-600  text-lg">{article.summary}</p>

          <div className="pt-8 flex flex-col gap-2 md:gap-0 md:flex-row items-start md:items-center justify-between">
            <div>
              <p className="text-sm text-gray-400">Source</p>

              <h3 className="font-medium">{article.source}</h3>
            </div>

            <a
              href={article.url}
              target="_blank"
              className="bg-blue-600 text-white px-5 py-3 rounded-xl"
            >
              Read Full Article
            </a>
          </div>
        </div>
      </div>
    </section>
    )
}