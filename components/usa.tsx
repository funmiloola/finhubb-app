import { finhubb } from "@/lib/finhubb"

export default async function UsaSPending() {

    const spending = await finhubb('/stock/usa-spending?symbol=LMT')
    return (
        <div className="rounded-xl border border-gray-200 p-4 bg-white lg:min-h-[549px] shadow-md">
      <h2 className="pb-6 text-xl font-semibold text-gray-800">
        USA Spending
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        {spending.data
          ?.slice(0, 4)
          .map((item: any, index: number) => (
            <div
              key={index}
              className="rounded-lg border border-gray-200 p-6 "
            >
              <h3 className="font-semibold flex gap-3 items-center">
              {item.recipientName.startsWith('Z') ? <span className="border border-blue-600 px-4 py-2  text-base  bg-blue-600 text-white rounded-md">Z</span> : <span className="border  text-base  border-green-600 px-4 py-2 bg-green-600 text-white rounded-md">L</span>}  
               <span className="text-sm">{item.recipientName}</span> 
              </h3>

              <p className="text-gray-400 text-base pt-2">
                Start Date:
                {item.performanceStartDate}
              </p>
                  <p  className="text-gray-400 text-base pt-2">
                      End Date:
                    {item.performanceEndDate}
               </p>
              <p  className="text-gray-400 text-base pt-2">
                Agency:
                {item.awardingAgencyName}
              </p>
            </div>
          ))}
      </div>
    </div>
   ) 
}