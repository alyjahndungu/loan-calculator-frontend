"use client";

import { useEffect } from "react";
import { LoanForm } from "@/components/forms/loan-form"
import axios from "axios";
export default function Home() {

  const apiUrl = `${process.env.NEXT_PUBLIC_BASE_API_URL}/auth/login`;

  const sendRequest = async () => {
      try {
        const response = await axios.post(apiUrl, {
          username: 'johndoe@example.com',
          password: 'password'
        }, {
          headers: {
            'Content-Type': 'application/json'
          }
        });
        console.log('Response:', response.data);
      } catch (error) {
        console.error('Error sending request:', error);
      }
    };

    useEffect(() => {
      // Send the request immediately
      sendRequest();
      // Set up interval to send the request every 5 minutes (300000 milliseconds)
      const intervalId = setInterval(sendRequest, 300000);
      // Clear interval on component unmount
      return () => clearInterval(intervalId);
    }, [sendRequest]);


  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="p-6 md:p-8 border border-gray-200 rounded-xl shadow-lg bg-white dark:bg-gray-800 dark:border-gray-700">
          <div className="text-center mb-6 bg-gray-50 rounded-lg dark:bg-gray-700/50">
            <h3 className="text-xl md:text-2xl font-bold uppercase text-gray-900 dark:text-white">
                Loan Calculator
            </h3>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Calculate your loan details instantly
            </p>
          </div>
          <LoanForm />
          <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
            <p className="text-xs text-center text-gray-500 dark:text-gray-400">
              Disclaimer: This application is not meant for production purposes! @alyjahndungu
            </p>
          </div>
        </div>
    </div>
  );
}
