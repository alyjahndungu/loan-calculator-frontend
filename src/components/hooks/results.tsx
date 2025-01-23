type ResultsProps = {
    monthlyPayment: string;
    totalRepayment: string;
  };
  
  export function Results({ monthlyPayment, totalRepayment }: ResultsProps) {
    return (
      <div className="flex flex-col lg:h-full lg:justify-center">
        <h2 className="text-preset-2 font-bold text-white mb-200">
          Your results
        </h2>
        <p className="text-preset-4 text-secondary-300 mb-300">
          Your results are shown below based on the information you provided. To
          adjust the results, edit the form and click “calculate repayments”
          again.
        </p>
        <div className="p-300 bg-black/25 text-left border-t-4 border-primary rounded-lg">
          <p className="text-preset-4 text-secondary-300">
            Your monthly repayments
          </p>
          <p className="text-preset-1 text-primary font-bold">{monthlyPayment}</p>
          <hr className="h-px bg-divider border-0 my-200" />
          <p className="text-preset-4 text-secondary-300">
            Total you&apos;ll repay over the term
          </p>
          <p className="text-preset-2 text-white font-bold mt-2">
            {totalRepayment}
          </p>
        </div>
      </div>
    );
  }
  export default Results;