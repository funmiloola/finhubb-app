import { finhubb } from "@/lib/finhubb"
import RecommendationChart from "./components/index";

export default async function Recommendation() {
    const data = await finhubb('/stock/recommendation?symbol=AAPL')
    return (
        <div className="h-full font-roboto">
            <RecommendationChart data={data}/>
        </div>
    )
}