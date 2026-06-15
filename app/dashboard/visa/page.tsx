import { finhubb } from "@/lib/finhubb";
import VisaApplication from "./components/visaDetails";

export default async function VisaList() {
        const res = await finhubb('/stock/visa-application?symbol=AAPL&from=2025-01-01&to=2025-12-31')
        const data = res.data?.slice(0,16)  || []
  
  return (
  <VisaApplication data={data}/>
  );
}