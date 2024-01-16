import React, {useState} from 'react';
import {AuthActionKind, useAuthDispatch} from "../../context/Auth";
import {Button} from "../../components/ui/button";
import {Input} from "../../components/ui/input";
import {Loader2} from "lucide-react";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage
} from "../../components/ui/form";
import {useForm} from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod";
import * as z from "zod"
import  signup from "../../assets/signup-background.svg"

interface Props {
}

const FormSchema = z.object({
    email: z.string().min(2, {
        message: "Email must be at least 2 characters.",
    }),
    password: z.string().min(2, {
        message: "Password must be at least 2 characters.",
    }),
})

const LoginPage = (props: Props) => {
    const dispatch = useAuthDispatch();

    const [load, setLoad] = useState(false)

    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    })

    async function onSubmit(data: z.infer<typeof FormSchema>) {
        console.log(data, 'qqq1')
        setLoad(true)
        await new Promise((resolve) => setTimeout(resolve, 1000));
        dispatch({
            type: AuthActionKind.ADD,
            payload: {
                id: "1",
                username: "alex",
                token: "token"
            }
        })
        setLoad(false)
    }

    return (
        <>
            <div
                className="bg-gradient-to-r from-[#F28383] from-10% via-[#9D6CD2] via-30% to-[#481EDC] to-90% flex items-center justify-center h-screen">
                <div className="max-w-[960px] bg-black-dark grid grid-cols-2 items-center gap-20 p-5 rounded-2xl">
                    <div className="">
                        <img src={signup} alt=""/>
                    </div>

                    <div className="max-w-80 grid gap-5">
                        <h1 className="text-5xl font-bold text-white">Sign in</h1>
                        <p className="text-dull-white">Admin app</p>

                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 text-white">
                                <FormField
                                    control={form.control}
                                    name="email"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className="relative">
                                                    <div
                                                        className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                                                        <i className="fa-solid fa-envelope-open"></i>
                                                    </div>
                                                    <Input placeholder="Email Address" {...field}
                                                           className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"/>
                                                </div>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({field}) => (
                                        <FormItem>
                                            <FormControl>
                                                <div className="relative">
                                                    <div
                                                        className="absolute top-1 left-1 bg-white-medium rounded-full p-2 flex items-center justify-center text-blue-300">
                                                        <i className="fa-solid fa-lock"></i>
                                                    </div>
                                                    <Input type="password" placeholder="Password" {...field}
                                                           className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-1 focus:ring-neon-blue focus:drop-shadow-lg"/>
                                                </div>
                                            </FormControl>
                                            <FormMessage/>
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    type="submit"
                                    className="bg-gradient-to-r from-blue-400 to-cyan-200 w-80 font-semibold rounded-full py-2"
                                    disabled={load}>
                                    {load && <Loader2 className="mr-2 h-4 w-4 animate-spin"/>}
                                    Sign in
                                </Button>
                            </form>
                        </Form>


                        <div className="text-dull-white border-t border-white-light pt-4 space-y-4 text-sm">
                            {/*<p>Don't have an account? <a className="text-neon-blue font-semibold cursor-pointer">Sign*/}
                            {/*    up</a></p>*/}
                            <p>Forgot password? <a className="text-neon-blue font-semibold cursor-pointer">Reset
                                password</a></p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}

export default LoginPage;
