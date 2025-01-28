type ResultsProps = {
  outstandingLoanAmount: number;
  totalInterest: number;
  totalInstallements: number;
  loanDueDate: string;
  totalMonthlyPaymentAmount: number
};

export function Results({ outstandingLoanAmount, totalInterest, totalInstallements, loanDueDate, totalMonthlyPaymentAmount }: ResultsProps) {
  return (


    <div className="w-full p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:p-8 dark:bg-gray-800 dark:border-gray-700">
      <div className="flex items-center justify-between mb-4">
        <h6 className="leading-none text-gray-900 dark:text-white">Loan Details</h6>
      </div>
      <div className="flow-root">
        <ul role="list" className="divide-y divide-gray-200 dark:divide-gray-700">

        <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-xs font-medium text-gray-900 truncate dark:text-white">
                  Total Loan Amount
                </p>
              </div>
              <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white  text-blue-900">
              KES. {outstandingLoanAmount.toLocaleString()}
              </div>
            </div>
          </li>

          <li className="py-3 sm:py-4">
            <div className="flex items-center">

              <div className="flex-1 min-w-0 ms-4">
                <p className="text-xs font-medium text-gray-900 truncate dark:text-white">
                  Total Interest Paid                        </p>

              </div>
              <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white  text-blue-900">
                KES. {totalInterest.toLocaleString()}
              </div>
            </div>
          </li>
          <li className="py-3 sm:py-4">
            <div className="flex items-center">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-xs font-medium text-gray-900 truncate dark:text-white">
                  Monthly Installment
                </p>
              </div>
              <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white  text-blue-900">
                KES. {totalMonthlyPaymentAmount.toLocaleString()}
              </div>
            </div>
          </li>
         
          <li className="py-3 sm:py-4">
            <div className="flex items-center ">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-xs font-medium text-gray-900 truncate dark:text-white">
                  No. of Installments
                </p>
              </div>
              <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white  text-blue-900">
                {totalInstallements}
              </div>
            </div>
          </li>
          <li className="pt-3 pb-0 sm:pt-4">
            <div className="flex items-center ">
              <div className="flex-1 min-w-0 ms-4">
                <p className="text-xs font-medium text-gray-900 truncate dark:text-white">
                  Loan Due Date
                </p>
              </div>
              <div className="inline-flex items-center text-sm font-semibold text-gray-900 dark:text-white  text-blue-900">
                {loanDueDate}
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

  );
}
export default Results;