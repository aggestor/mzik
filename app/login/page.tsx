"use client"
import { FunctionComponent } from "react";
import Image from "next/image"
import { Textbox } from "@/components/Textbox";
import useForm from "@/hooks/useForm";
import { Button } from "@/components/Buttons";
import Link from "next/link";

const LoginPage : FunctionComponent = () =>{
    const [{identifier,  password}, onChange] = useForm({identifier:"", password:""})
    return <section className=" h-full w-full">
        <div className="w-5/12 mx-auto h-auto p-5 flex justify-between shadow-md bg-white rounded-md shadow-gray-300">
            <div className="w-full">
                <h1 className="text-2xl font-semibold text-indigo-600">
                    Login to your  account.
                </h1>
                <p className="text-gray-600">Welcome to &apos;muzik&apos; Use your credentials to log in to your account.</p>
                <form className="w-full mt-3">
                    <Textbox value={identifier as string} name={'identifier'} onChange={onChange} label="Username, email or Phone"/>
                    <Textbox value={password as string} name={'password'} onChange={onChange} label="Your password"/>
                    <small>Forgot password ? <span className="text-indigo-600 underline">Reset your password</span>.</small>
                    <div className="flex justify-between mt-2">
                        <Button text="Log in"/>
                        or
                        <Link href={"/register"} className="font-semibold text-indigo-600">Create an account &rarr;</Link>
                    </div>
                </form>
            </div>
        </div>
    </section>
}

export default LoginPage