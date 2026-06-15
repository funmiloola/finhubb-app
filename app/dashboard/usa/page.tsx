import { finhubb } from "@/lib/finhubb";
import UsaSpending from "./component/usaSpending";

export default async function UsaSPending() {
  const spending = await finhubb("/stock/usa-spending?symbol=LMT");
  const data = spending?.data?.slice(0, 16) || [];
  return (
    <UsaSpending data={data}/>
  );
}
