import Image from "next/image";

export default function Home() {
  return (

<div >

  <main className="flex items-center justify-center min-h-screen">

  <div className="w-md p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <h3 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">RESILIENT LOAN CALCULATOR</h3>


        <label for="default-range" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Default range</label>
<input id="default-range" type="range" value="50" className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700" />



    <p className="mb-3 font-normal text-gray-500 dark:text-gray-400">Go to this step by step guideline process on how to certify for your weekly benefits:</p>
    <a href="#" className="inline-flex font-medium items-center text-blue-600 hover:underline">
        See our guideline
        <svg className="w-3 h-3 ms-2.5 rtl:rotate-[270deg]" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11v4.833A1.166 1.166 0 0 1 13.833 17H2.167A1.167 1.167 0 0 1 1 15.833V4.167A1.166 1.166 0 0 1 2.167 3h4.618m4.447-2H17v5.768M9.111 8.889l7.778-7.778"/>
        </svg>
    </a>
</div>

  </main>


</div>


  );
}
