type UsaSpendingItem = {
  recipientName: string;
  awardingAgencyName: string;
  performanceStartDate: string;
  performanceEndDate: string;
  naicsCode: string;
};

type UsaSpendingResponse = {
  data: UsaSpendingItem[];
};

type UsaSpendingDetailsProps = {
  params: Promise<{
    naicsCode: string;
  }>;
};

import { finhubb } from "@/lib/finhubb";
import USADetails from "../component";

export default async function UsaSpendingDetails({
  params,
}: UsaSpendingDetailsProps) {
  const { naicsCode } = await params;

  const spending: UsaSpendingResponse = await finhubb(
    "/stock/usa-spending?symbol=LMT",
  );

  const item = spending.data.find(
    (s: UsaSpendingItem) => s.naicsCode === naicsCode,
  );

  if (!item) {
    return <div className="p-10">Spending data not found</div>;
  }

  return (
       <USADetails item={item}/>
  );
}
