import { FunctionComponent } from "react";
import Image from "next/image"
import { Textbox } from "@/components/Textbox";

const RegisterPage : FunctionComponent = () =>{
    return <section className=" h-full w-full">
        <div className="w-10/12 mx-auto h-auto p-5 flex justify-between shadow-md bg-white rounded-md shadow-gray-300">
            <div className="w-1/2">
                <h1 className="text-2xl font-semibold text-indigo-600">
                    Create a new account.
                </h1>
                <p className="text-gray-600">Fill all the fields of the form bellow then register to create an new account.</p>
                <form className="w-10/12">
                    <Textbox value="test" name="" label="Names"/>
                </form>
            </div>
            <div className="w-1/2">
                <div>
                    <Image alt="Music illustration" src={'/register.jpg'} width={0} height={0} className="w-full h-full" sizes="100%"/>
                </div>
            </div>
        </div>
    </section>
}

export default RegisterPage