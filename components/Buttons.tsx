import { FunctionComponent } from "react"

declare type Props = {
    text:string,
    variant?:'blue'|'neutral'|'red'|'green',
    size?:"full"|"fit"
    icon?:JSX.Element
}
export const Button :FunctionComponent<Props> = ({text,variant = 'base', size = "fit"}) =>{
    if(variant === "neutral")
    return <button className={` ${size != "fit" ? 'w-full' : ''}  bg-gray-200 text-gray-700 rounded-md h-8 flex items-center justify-around hover:shadow-lg hover:bg-gray-300 transition-all duration-700 p-1.5 hover:shadow-gray-300 `}>{text}</button>
    if(variant === "red")
    return <button className={` ${size != "fit" ? 'w-full' : ''}  bg-red-600 text-white rounded-md h-8 flex items-center justify-around hover:shadow-lg hover:bg-red-700 transition-all duration-700 p-1.5 hover:shadow-red-300 `}>{text}</button>
    if(variant === "green")
    return <button className={` ${size != "fit" ? 'w-full' : ''}  bg-green-500 text-white rounded-md h-8 flex items-center justify-around hover:shadow-lg hover:bg-green-600 transition-all duration-700 p-1.5 hover:shadow-green-300 `}>{text}</button>
    return <button className={` ${size != "fit" ? 'w-full' : ''}  bg-indigo-600 text-white rounded-md h-8 flex items-center justify-around hover:shadow-lg hover:bg-indigo-700 transition-all duration-700 p-1.5 hover:shadow-indigo-300 `}>{text}</button>
}