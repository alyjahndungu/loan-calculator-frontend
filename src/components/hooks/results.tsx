type ResultsProps = {
  outstandingLoanAmount: number;
  totalInterest: number;
  totalInstallements: number;
  loanDueDate: string;
  totalMonthlyPaymentAmount: number
};

export function Results({ outstandingLoanAmount, totalInterest, totalInstallements, loanDueDate, totalMonthlyPaymentAmount }: ResultsProps) {
  return (
    <div className="h-full w-full flex items-center justify-center">
    <div className="w-[480px] p-6 bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 dark:border-gray-700 transition-all duration-300">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Loan Summary</h2>
      </div>
      
      <ul className="space-y-5">
        <li className="p-4 bg-gray-50 rounded-lg dark:bg-gray-700/50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Total Loan Amount
            </p>
            <p className="text-lg font-bold text-primary dark:text-primary-foreground">
              KES {outstandingLoanAmount.toLocaleString()}
            </p>
          </div>
        </li>

        <li className="p-4 bg-gray-50 rounded-lg dark:bg-gray-700/50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Monthly Payment
            </p>
            <p className="text-lg font-bold text-primary dark:text-primary-foreground">
              KES {totalMonthlyPaymentAmount.toLocaleString()}
            </p>
          </div>
        </li>

        <li className="p-4 bg-gray-50 rounded-lg dark:bg-gray-700/50">
          <div className="flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Total Interest
            </p>
            <p className="text-lg font-bold text-primary dark:text-primary-foreground">
              KES {totalInterest.toLocaleString()}
            </p>
          </div>
        </li>

        <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>

        <li className="flex justify-between items-center px-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Number of Installments
          </p>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            {totalInstallements} months
          </p>
        </li>

        <li className="flex justify-between items-center px-4">
          <p className="text-sm text-gray-600 dark:text-gray-300">
            Loan Due Date
          </p>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            {loanDueDate}
          </p>
        </li>
      </ul>
    </div>
    </div>  
  );
}
export default Results;