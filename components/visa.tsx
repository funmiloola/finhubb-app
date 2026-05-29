import { finhubb } from "@/lib/finhubb";

export default async function VisaList() {
        const res = await finhubb('/stock/visa-application?symbol=AAPL&from=2025-01-01&to=2025-12-31')
        const data = res.data?.slice(0,4)
  
  return (
    <section className="bg-white border border-gray-200 rounded-xl p-6 shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 pb-4">Visa Applications</h2>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {data.map((item:any) => (
        <div
          key={item.caseNumber}
          className="rounded-xl border border-gray-300 p-4 "
        >
          <div className="flex justify-between items-start">
            <div>
              <h2 className="font-semibold text-lg">
                {item.jobTitle}
              </h2>
              <p className=" text-gray-500">
                {item.employerName}
              </p>
            </div>

            <span
              className={` px-2 py-1 rounded-full ${
                item.caseStatus === "Certified"
                  ? "bg-green-100 text-green-700"
                  : "bg-yellow-100 text-yellow-700"
              }`}
            >
              {item.caseStatus}
            </span>
          </div>
          <div className="pt-2 flex flex-col gap-1.5 text-gray-400">
            <p>
              Wage: 
              {" "}$
              {item.wageRangeFrom.toLocaleString()}
              {" - "}
              $ {item.wageRangeTo.toLocaleString()}
            </p>

            <p>
            Work State: {item.worksiteCity},{" "}
              {item.worksiteState}
            </p>

            <p>
            Visa Class: {item.visaClass}
            </p>

            <p>
              Case: {item.caseNumber}
            </p>
          </div>
          <div className=" text-gray-400">
            Received: {item.receivedDate} | Year:{" "}
            {item.year} Q{item.quarter}
          </div>
        </div>
      ))}
      </div>
      </section>
  );
}