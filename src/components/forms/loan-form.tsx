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
import { Slider } from "@/components/ui/slider"

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
    originatedAmount: z.preprocess((val: any ) => parseFloat(val), z.number().positive('Amount must be positive')),
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
            originatedAmount: 0,
            interestRate: 0,
            loanTermMonths: 0,
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 w-full">
            <div className={cn("flex flex-col gap-3 md:gap-5", className)} {...props}>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="w-full space-y-4 md:space-y-6">
                        <FormField
                            control={form.control}
                            name="originatedAmount"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Loan Amount Required</FormLabel>
                                    <div className="space-y-3">
                                        <FormControl>
                                            <Input
                                                type="number"
                                                {...field}
                                                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                                            />
                                        </FormControl>
                                        <Slider
                                            min={1000}
                                            max={1000000}
                                            step={1000}
                                            value={[field.value]}
                                            onValueChange={(vals) => field.onChange(vals[0])}
                                            className="py-4"
                                        />
                                        <div className="flex justify-between text-xs text-muted-foreground">
                                            <span>1,000</span>
                                            <span>1,000,000</span>
                                        </div>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="interestRate"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Annual Interest Rate (%)</FormLabel>
                                    <div className="space-y-3">
                                        <FormControl>
                                            <Input
                                                type="number"
                                                {...field}
                                                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                                            />
                                        </FormControl>
                                        <Slider
                                            min={1}
                                            max={20}
                                            step={0.1}
                                            value={[field.value]}
                                            onValueChange={(vals) => field.onChange(vals[0])}
                                            className="py-4"
                                        />
                                        <div className="flex justify-between text-xs text-muted-foreground">
                                            <span>1%</span>
                                            <span>20%</span>
                                        </div>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="loanTermMonths"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Loan Tenure (months)</FormLabel>
                                    <div className="space-y-3">
                                        <FormControl>
                                            <Input
                                                type="number"
                                                {...field}
                                                onChange={(e) => field.onChange(parseFloat(e.target.value))}
                                            />
                                        </FormControl>
                                        <Slider
                                            min={1}
                                            max={360}
                                            step={1}
                                            value={[field.value]}
                                            onValueChange={(vals) => field.onChange(vals[0])}
                                            className="py-4"
                                        />
                                        <div className="flex justify-between text-xs text-muted-foreground">
                                            <span>1 month</span>
                                            <span>360 months</span>
                                        </div>
                                    </div>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <Button className="w-full" size="lg" type="submit">
                            <span className="font-semibold">Calculate Loan</span>
                        </Button>
                    </form>
                </Form>
            </div>

            <div className="flex flex-col gap-3 md:gap-5 w-full">
                <div className="w-full h-full flex items-start">
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
        </div>
    )
}