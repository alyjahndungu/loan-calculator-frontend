"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "@/components/ui/form";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from 'zod';
import axios from "axios";
import { Results } from "@/components/hooks/results"
import NoResults from "@/components/hooks/no-result"

interface LoanResponse {
    loan: {
        originatedAmount: number;
        interestRate: number;
        loanTermMonths: number;
        totalInterest: number;
        outstandingLoanAmount: number;
        startDate: string;
        endDate: string;
        installments: Installment[];
    };
}

interface Installment {
    installmentNumber: number;
    principalAmount: number;
    totalInstallmentInterest: number;
    outstandingAmount: number;
    dueDate: string;
}



interface LoanFormProps extends React.HTMLAttributes<HTMLDivElement> { }

const formSchema = z.object({
    originatedAmount: z.preprocess((val: any) => parseFloat(val), z.number().positive('Amount must be positive')),
    interestRate: z.coerce.number()
        .min(1, { message: 'Please enter an interest of at least 1%.' })
        .max(20, { message: 'Please enter an interest of no more than 20%.' }), loanTermMonths: z.coerce.number().gt(0, { message: 'Please enter a value above 0.' }),
});


type LoanFormValue = z.infer<typeof formSchema>;


const postToApi = async (url: string, data: object) => {
    try {
        const response = await axios.post(url, data);
        return response.data;
    } catch (error) {
        console.error('Error posting data to API:', error);
        throw error;
    }
};


export function LoanForm({ className, ...props }: LoanFormProps) {
    const [result, setResult] = useState<LoanResponse | null>(null);

    const form = useForm<LoanFormValue>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            originatedAmount: 200000,
            interestRate: 7.5,
            loanTermMonths: 6,
        }
    });



    const onSubmit = async (data: LoanFormValue) => {
        const url = `${process.env.NEXT_PUBLIC_BASE_API_URL}/loan/calculator`;
        
        try {
            const response = await postToApi(url, data);
            setResult(response);
        } catch (error) {
            console.error('API call failed:', error);
        }
    };

    return (

        <div className="flex flex-col lg:flex-row gap-4">
            <div className={cn("flex flex-col gap-5 w-full", className)} {...props}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4">
                        <FormField
                            control={form.control}
                            name="originatedAmount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Please specify the amount of loan you require?</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="interestRate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Please specify annual interest rate (%)</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="loanTermMonths"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Please specify the loan tenure in months?</FormLabel>
                                    <FormControl>
                                        <Input type="number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className="ml-auto w-full"  size="lg" type="submit">
                            <span className="font-semibold"> Estimate Loan </span>
                        </Button>
                    </form>
                </Form>

                <div className="flex flex-col gap-5 w-full" {...props}>
                    <div className="w-full">
                        {result ? (
                            <Results
                                outstandingLoanAmount={result.loan.outstandingLoanAmount}
                                totalInterest={result.loan.totalInterest}
                                totalInstallements={result.loan.installments.length}
                                loanDueDate={result.loan.endDate}
                                totalMonthlyPaymentAmount={result.loan.installments[0].outstandingAmount}
                            />
                        ) : (
                            <NoResults />
                        )}
                    </div>
                </div>

                <div className="relative">
                    <div className="absolute inset-0 flex items-center">
                        <span className="w-full border-t" />
                    </div>
                </div>
            </div>




        </div>

    )
}