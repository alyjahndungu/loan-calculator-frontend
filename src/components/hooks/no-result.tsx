import Image from "next/image";

function NoResults() {
  return (
    <div className="h-full w-full flex items-center justify-center">
      <div className="w-[480px] p-8 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-all duration-300 hover:shadow-xl">
        <div className="flex justify-center">
          <Image
            src="/images/projections.svg"
            alt="Abstract calculator"
            width={192}
            height={192}
            priority={true}
            className="mb-6 transform transition-transform duration-300 hover:scale-105"
          />
        </div>
        <h2 className="mb-4 text-2xl font-bold text-center text-gray-900 dark:text-white">
          Ready to Calculate
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 leading-relaxed">
          Complete the form and click <span className="font-semibold text-primary"> "Calculate Loan" </span> 
          to see your personalized monthly repayment breakdown.
        </p>
      </div>
    </div>
  );
}
export default NoResults;