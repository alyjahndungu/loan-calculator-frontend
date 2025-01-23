type ResultsProps = {
    monthlyPayment: string;
    totalRepayment: string;
  };
  
  export function Results({ monthlyPayment, totalRepayment }: ResultsProps) {
    return (

<div className="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <p className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Monthly Payments</p>  
        <p className="mb-2 text-sm font-bold tracking-tight text-blue-900 dark:text-white">KES. {monthlyPayment}</p>

        <h5 className="mb-2 text-md font-bold tracking-tight text-gray-900 dark:text-white">Total Repayments</h5>  
        <p className="mb-2 text-sm font-bold tracking-tight text-blue-900 dark:text-white">KES. {totalRepayment}</p>
</div>

    
    );
  }
  export default Results;