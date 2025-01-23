"use client"

import * as React from "react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
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

interface LoanFormProps extends React.HTMLAttributes<HTMLDivElement> { }
const formSchema = z.object({
    amount: z.number({ message: 'Enter a valid loan' }),
    interestRate: z.number({ message: 'Interest Rate is required' }),
    loanTenure: z.number({ message: 'Loan duration is required' }),

});



type UserFormValue = z.infer<typeof formSchema>;

export function LoanForm({ className, ...props }: LoanFormProps) {
    const [isLoading, setIsLoading] = React.useState<boolean>(false)

    const [loading, setLoading] = useState(false);

    const form = useForm<UserFormValue>({
        resolver: zodResolver(formSchema)
    });

    const onSubmit = async (data: UserFormValue) => {
        console.log(data)
    };

    return (
        <div className={cn("grid gap-6", className)} {...props}>
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="w-full space-y-2"
                >
                    <FormField
                        control={form.control}
                        name="amount"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Loan Amount</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        disabled={loading}
                                        {...field}
                                    />
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
                                <FormLabel>Rate of Interest</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        disabled={loading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />

                    <FormField
                        control={form.control}
                        name="loanTenure"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Loan Tenure</FormLabel>
                                <FormControl>
                                    <Input
                                        type="number"
                                        disabled={loading}
                                        {...field}
                                    />
                                </FormControl>
                                <FormMessage />
                            </FormItem>
                        )}
                    />


                    <Button disabled={loading} className="ml-auto w-full" type="submit">
                        Estimate Loan
                    </Button>
                </form>
            </Form>
            <div className="relative">
                <div className="absolute inset-0 flex items-center">
                    <span className="w-full border-t" />
                </div>
            </div>
        </div>
    )
}