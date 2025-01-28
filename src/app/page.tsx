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
    }, []);


  return (

<div className="min-h-screen w-full flex items-center justify-center bg-gray-100 dark:bg-gray-900">
  <main className="flex items-center justify-center">
      <div className="p-2 border border-gray-200 rounded-lg shadow-md bg-white dark:bg-gray-800 dark:border-gray-700">
      <div className="flex justify-center">
      <h3 className="mb-4 text-md font-semibold tracking-tight text-gray-900 dark:text-white">RPS Loan Calculator</h3>
      </div>
          <LoanForm />
          <p className="mt-4 p-2 text-xs text-gray-500 dark:text-gray-400">Disclaimer: This application is not meant for production purposes! @alyjahndungu</p>
      </div>
  </main>
</div>


  );
}
