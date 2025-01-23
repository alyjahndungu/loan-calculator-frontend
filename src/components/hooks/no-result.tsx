import Image from "next/image";

function NoResults() {
  return (
    <div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg  dark:bg-gray-800 dark:border-gray-700">
      <Image
        src="/images/calculator.svg"
        alt="Abstract calculator"
        width={192}
        height={192}
        priority={true}
      />
      <h2 className="mb-2 mt-2 text-sm  tracking-tight text-gray-900 dark:text-white">Results shown here</h2>
      <p className="mb-2 text-sm  tracking-tight text-gray-900 dark:text-white">
        Complete the form and click “calculate repayments” to see what your
        monthly repayments would be.
      </p>
    </div>
  );
}
export default NoResults;