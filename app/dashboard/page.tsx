import MarketNews from "@/components/market";
import Recommendation from "@/components/recommendation/recommendation";
import UsaSPending from "@/components/usa";
import VisaList from "@/components/visa";

export default function Dashboard() {
  return (
    <div className="font-roboto p-4 md:p-6 lg:p-6 bg-[#F8FAFC] min-h-screen">
      <div className="pb-6">
        <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
          Welcome back!
        </h2>

        <p className="text-gray-500 mt-1">
          Here's what is happening today.
        </p>
      </div>
      <div className="flex flex-col lg:flex-row gap-6 w-full">
        <div className="w-full lg:w-3/5">
          <MarketNews />
        </div>
        <div className="w-full lg:w-2/5">
          <UsaSPending />
        </div>

      </div>
      <div className="flex flex-col lg:flex-row gap-6 pt-6 w-full">
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