import { FunctionComponent } from "react"

declare type Props = {
    type?:string
    error?:string
    value:string
    onChange?:(e:any)=>void
    label:string
    name:string
}
export const Textbox : FunctionComponent<Props>  = ({label, type = "text", value,onChange,name}) =>{

    return <div className="transition-all my-2 duration-500 text-gray-600  focus-within:text-indigo-600">
        <label htmlFor={name} className="  bg-white left-3 group-focus:font-semibold px-1">{label}</label>
        <div className="h-9 py-1 px-2 border focus-within:ring-2 focus-within:ring-indigo-600 group  rounded-md">
            <input onChange={onChange} type={type} value={value} className="bg-transparent w-full h-full focus:outline-0" name={name} id={name} />
        </div>
    </div>
    
}