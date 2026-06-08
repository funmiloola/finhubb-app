import { finhubb } from "@/lib/finhubb";
import MarketDetail from "../components";

export default async function MarketDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const news = await finhubb("/news?category=general");
  const article = news?.find((item: any) => Number(item.id) === Number(id));

  if (!article) {
    return <div className="p-10">News article not found</div>;
  }

  return (
    <MarketDetail article={article}/>
  );
}
