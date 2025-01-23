"use client";

import { useEffect, useState } from "react";

import { LoanForm } from "@/components/hooks/loan-form"
import {Results} from "@/components/hooks/results"
import NoResults from "@/components/hooks/no-result"

export default function Home() {

  const [result, setResult] = useState(false);
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [totalRepayment, setTotalRepayment] = useState("");
  return (

<div >

  <main className="flex items-center justify-center min-h-screen">
  <div className="w-md p-6 border border-gray-200 rounded-sm shadow  dark:border-gray-700">
        <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">RESILIENT LOAN CALCULATOR</h3>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
        <LoanForm />


          {result ? (
            <Results
              monthlyPayment={'1000'}
              totalRepayment={'2000'}
            />
          ) : (
           <NoResults />
          )}
        

        </div>

           


    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Disclaimer: This is application is not mean't for production usage!</p>
    
</div>

  </main>


</div>


  );
}
