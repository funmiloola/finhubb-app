import { finhubb } from "@/lib/finhubb";
import MarketDetails from "./components/marketDetails";

export default async function MarketNews() {
  const news = await finhubb("/news?category=general");
  return (
    <MarketDetails news={news}/>
  );
}
