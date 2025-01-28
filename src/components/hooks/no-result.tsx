import Image from "next/image";

function NoResults() {
  return (
    <div className="max-w-md mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-md dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center">
        <Image
          src="/images/projections.svg"
          alt="Abstract calculator"
          width={192}
          height={192}
          priority={true}
          className="mb-4"
        />
      </div>
      <h2 className="mb-2 mt-2 text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
        Results shown here
      </h2>
      <p className="mb-2 text-md tracking-tight text-gray-900 dark:text-white">
        Complete the form and click <span className="font-semibold"> “Estimate Loan” </span> to see what your
        monthly repayments would be.
      </p>
</div>

  );
}
export default NoResults;