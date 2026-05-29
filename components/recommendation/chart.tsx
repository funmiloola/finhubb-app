"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function RecommendationChart({
  data,
}: {
  data: any[];
}) {
  const chartData = data.map((item) => ({
    month: new Date(item.period).toLocaleString(
    "default",
    {
      month: "short",
    }),
    strongBuy: item.strongBuy,
    buy: item.buy,
    hold: item.hold,
    sell: item.sell,
    strongSell: item.strongSell,
  }));

  return (
    <div className="rounded-xl bg-white border border-gray-200 p-6 w-full h-full shadow-md">
      <h2 className="pb-4 text-xl text-gray-800 font-semibold">
        Recommendation Trends
      </h2>

      <div className="h-125 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} barSize={20}>
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip />
            <Legend />

            <Bar dataKey="strongBuy" stackId="a" fill="#16a34a" />
            <Bar dataKey="buy"   stackId="a" fill="#22c55e" />
            <Bar dataKey="hold"  stackId="a" fill="#eab308" />
            <Bar dataKey="sell"  stackId="a" fill="#ef4444" />
            <Bar dataKey="strongSell"  stackId="a" fill="#991b1b" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}