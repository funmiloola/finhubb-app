import MarketNews from "@/components/market";
import Recommendation from "@/components/recommendation/recommendation";
import UsaSPending from "@/components/usa";
import VisaList from "@/components/visa";

export default function Dashboard() {
  return (
    <div className="font-roboto p-4 md:p-6 bg-[#F8FAFC] w-full">
      <div className="">
        <h2 className="text-xl md:text-2xl font-bold text-slate-800">
          Welcome back!
        </h2>

        <p className="text-gray-500 pt-1 pb-3">
          Here's what is happening today.
        </p>
      </div>
      <div className="flex flex-col items-center lg:flex-row gap-6 w-full lg:items-stretch">
        <div className="w-full lg:w-3/5">
          <MarketNews />
        </div>
        <div className="w-full lg:w-2/5">
          <UsaSPending />
        </div>

      </div>
      <div className="flex flex-col items-center lg:flex-row gap-6 pt-6 w-full lg:items-stretch">
        <div className="w-full lg:w-2/5">
          <Recommendation />
        </div>
        <div className="w-full lg:w-3/5">
          <VisaList />
        </div>

      </div>
    </div>
  );
}