import { FunctionComponent } from "react"

declare type Props = {
    type?:string
    error?:string
    value:string
    onChange?:(e:any)=>void
    label:string
    name:string
}
export const Textbox : FunctionComponent<Props>  = ({label}) =>{

    return <div className="h-8 py-1 px-2 border focus-within:ring-2 group transition-all duration-500 text-gray-600 focus-within:ring-indigo-600 focus-within:text-indigo-600 rounded-md relative">
        <label htmlFor="" className="absolute  text-sm -top-[12px]  bg-white left-3 group-focus:font-semibold px-1">{label}</label>
        <input type="text" className="bg-transparent w-full h-[90%] focus:outline-0 mt-1" />
    </div>
}