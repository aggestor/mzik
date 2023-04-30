"use client"
import { FunctionComponent } from "react";
import Image from "next/image"
import { Textbox } from "@/components/Textbox";
import useForm from "@/hooks/useForm";
import { Button } from "@/components/Buttons";
import Link from "next/link";

const RegisterPage : FunctionComponent = () =>{
    const [{name, username, phone, email, password}, onChange] = useForm({name:"", username:"", phone:"", email:"", password:""})
    return <section className=" h-full w-full">
        <div className="w-9/12 mx-auto h-auto p-5 flex justify-between shadow-md bg-white rounded-md shadow-gray-300">
            <div className="w-1/2">
                <h1 className="text-2xl font-semibold text-indigo-600">
                    Create a new account.
                </h1>
                <p className="text-gray-600">Fill all the fields of the form bellow then register to create an new account.</p>
                <form className="w-10/12 mt-3">
                    <Textbox value={name as string} name={'name'} onChange={onChange} label="Names"/>
                    <Textbox value={username as string} name={'username'} onChange={onChange} label="Username"/>
                    <Textbox value={phone as string} name={'phone'} onChange={onChange} label="Phone number"/>
                    <Textbox value={email as string} name={'email'} onChange={onChange} label="Email address"/>
                    <Textbox value={password as string} name={'password'} onChange={onChange} label="Your password"/>
                    <small>By clicking &apos;Register&apos; you accept our <span className="text-indigo-600 underline">terms and conditions</span> of using our platforms with your account.</small>
                    <div className="flex justify-between mt-2">
                        <Button text="Create this account"/>
                        or
                        <Link href={"/login"} className="font-semibold text-indigo-600">Log in &rarr;</Link>
                    </div>
                </form>
            </div>
            <div className="w-1/2">
                <div>
                    <Image alt="Music illustration" src={'/register.jpg'} width={0} height={0} className="w-full  object-contain" sizes="100%"/>
                </div>
            </div>
        </div>
    </section>
}

export default RegisterPage