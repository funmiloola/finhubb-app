"use client"


export default function USADetails({ item }:any) {
    return (
        <section className="py-6 font-roboto px-4 lg:px-0 w-full ">
      <div className="px-4">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-blue-600 font-medium">
              USA Federal Spending
            </p>

            <h1 className="text-lg md:text-4xl font-bold text-gray-900 pt-2">
              {item.recipientName}
            </h1>

            <p className="pt-2 text-base md:text-lg text-gray-500">
              {item.awardingAgencyName}
            </p>
          </div>

          <div
            className={`h-16 w-16 rounded-xl text-white flex items-center justify-center text-2xl font-bold ${
              item.recipientName.includes("L") ? "bg-green-500" : "bg-blue-600"
            }`}
          >
            {item.recipientName.charAt(0)}
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <div>
            <p className="text-sm text-gray-400">Start Date</p>

            <h3 className="text-base md:text-xl font-semibold pt-2">
              {item.performanceStartDate}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-400">End Date</p>

            <h3 className="text-base md:text-xl font-semibold pt-2">
              {item.performanceEndDate}
            </h3>
          </div>

          <div>
            <p className="text-sm text-gray-400">Agency</p>

            <h3 className="text-base md:text-xl font-semibold pt-2">
              {item.awardingAgencyName}
            </h3>
          </div>
        </div>

        <div className="pt-8">
          <div className="rounded-xl border border-gray-200 p-5">
            <h2 className="text-base md:text-xl font-semibold pb-2">
              Recipient Information
            </h2>

            <div className="text-gray-600">
              <p>
                <span className="font-medium">Recipient:</span>{" "}
                {item.recipientName}
              </p>

              <p>
                <span className="font-medium">Agency:</span>{" "}
                {item.awardingAgencyName}
              </p>

              <p>
                <span className="font-medium">Start Date:</span>{" "}
                {item.performanceStartDate}
              </p>

              <p>
                <span className="font-medium">End Date:</span>{" "}
                {item.performanceEndDate}
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-8">
          <div className="rounded-xl border border-gray-200 p-3">
            <h3 className="font-semibold text-base md:text-lg pb-4">Contract Status</h3>

            <div className="flex items-center gap-3">
              <div className="h-3 w-3 rounded-full bg-green-500" />

              <p className="text-gray-600">
                Active Government Spending Contract
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-6">
            <h3 className="font-semibold text-base md:text-lg pb-4">Contract Timeline</h3>

            <p className="text-gray-600">
              Performance duration spans from {item.performanceStartDate} to{" "}
              {item.performanceEndDate}.
            </p>
          </div>
        </div>
      </div>
    </section>
    )
}