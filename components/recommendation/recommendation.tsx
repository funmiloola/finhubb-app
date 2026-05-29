import { finhubb } from "@/lib/finhubb"
import RecommendationChart from "./chart";

export default async function Recommendation() {
    const data = await finhubb('/stock/recommendation?symbol=AAPL')
    return (
        <div className="h-full">
            <RecommendationChart data={data}/>
        </div>
    )
}