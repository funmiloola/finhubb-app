import { finhubb } from "@/lib/finhubb";
import VisaDetail from "../components";



export default async function VisaDetails({
  params,
}: {
  params: Promise<{
    caseNumber: string;
  }>;
}) {
  const { caseNumber } = await params;

  const res = await finhubb(
    "/stock/visa-application?symbol=AAPL&from=2025-01-01&to=2025-12-31",
  );

  const visa = res?.data?.find(
    (item:any) => item.caseNumber === (caseNumber),
  );

  return (
       <VisaDetail visa={visa}/>
  );
}
