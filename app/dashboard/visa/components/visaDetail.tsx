'use client'

export default function VisaDetail({ visa }: any) {
    
    return (
        <section className="font-roboto w-full px-4 py-6  lg:pt-10 lg:pb-4">
      <div className="">
        <div className="flex items-start justify-between">
          <div>
            <p className="text-sm text-blue-600 font-medium">
              {visa?.visaClass} Visa
            </p>

            <h1 className="text-lg lg:text-4xl font-bold text-gray-900 pt-2">
              {visa?.jobTitle}
            </h1>

            <p className="pt-2 text-base lg:text-lg text-gray-500">
              {visa?.employerName}
            </p>

            <p className="text-gray-400">
              {visa?.worksiteCity}, {visa?.worksiteState}
            </p>
          </div>

          <span
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              visa?.caseStatus === "Certified"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {visa?.caseStatus}
          </span>
        </div>
        <div className=" flex lg:gap-0.5 items-center">
          <h2 className="text-base text-gray-400 font-medium">
            Salary Information:
          </h2>

          <div className="flex lg:gap-1 items-center">
            <p className="text-xs lg:text-base text-gray-400 font-medium">
              ${visa?.wageRangeFrom}
              {" - "}${visa?.wageRangeTo}
            </p>

            <p className="text-gray-400 text-xs lg:text-base">
              per {visa?.wageUnitOfPay.toLowerCase()}
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-10">
          <div className="rounded-xl border border-gray-200 p-2">
            <h3 className="font-semibold text-lg pb-4">Case Information</h3>

            <div className="space-y-3 text-gray-600">
              <p>
                <span className="font-medium">Case Number:</span>{" "}
                {visa?.caseNumber}
              </p>

              <p>
                <span className="font-medium">SOC Code:</span> {visa?.socCode}
              </p>

              <p>
                <span className="font-medium">Wage Level:</span>{" "}
                {visa?.wageLevel || "N/A"}
              </p>

              <p>
                <span className="font-medium">Full Time:</span>{" "}
                {visa?.fullTimePosition}
              </p>

              <p>
                <span className="font-medium">H1B Dependent:</span>{" "}
                {visa?.h1bDependent}
              </p>
            </div>
          </div>

          <div className="rounded-xl border border-gray-200 p-2">
            <h3 className="font-semibold text-lg pb-4">Timeline</h3>

            <div className="space-y-3 text-gray-600">
              <p>
                <span className="font-medium">Received:</span>{" "}
                {visa?.receivedDate}
              </p>

              <p>
                <span className="font-medium">Begin Date:</span>{" "}
                {visa?.beginDate}
              </p>

              <p>
                <span className="font-medium">End Date:</span> {visa?.endDate}
              </p>

              <p>
                <span className="font-medium">Quarter:</span> Q{visa?.quarter}
              </p>

              <p>
                <span className="font-medium">Year:</span> {visa?.year}
              </p>
            </div>
          </div>
        </div>
        <div className="pt-5">
          <div className="rounded-xl border border-gray-200 p-2">
            <h3 className="font-semibold text-lg pb-4">Worksite Information</h3>

            <div className="space-y-3 text-gray-600">
              <p>{visa?.worksiteAddress}</p>

              <p>
                {visa?.worksiteCity}, {visa?.worksiteState}{" "}
                {visa?.worksitePostalCode}
              </p>

              <p>{visa?.worksiteCounty}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}