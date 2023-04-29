import { FunctionComponent } from "react"

declare type Props = {
    text:string,
    variant?:'blue'|'neutral'|'red'|'green',
    size?:"full"|"fit"
    icon?:JSX.Element
}
export const Button :FunctionComponent<Props> = ({text,variant = 'base', size = "fit"}) =>{
    if(variant === "neutral")
    return <button className={` ${size != "fit" ? 'w-full' : ''}  bg-gray-200 text-gray-700 rounded-xl hover:shadow-lg hover:bg-gray-300 transition-colors duration-500 p-1.5 hover:shadow-gray-300 `}>{text}</button>
    if(variant === "red")
    return <button className={` ${size != "fit" ? 'w-full' : ''}  bg-red-600 text-white rounded-xl hover:shadow-lg hover:bg-red-700 transition-colors duration-500 p-1.5 hover:shadow-red-300 `}>{text}</button>
    if(variant === "green")
    return <button className={` ${size != "fit" ? 'w-full' : ''}  bg-green-500 text-white rounded-xl hover:shadow-lg hover:bg-green-600 transition-colors duration-500 p-1.5 hover:shadow-green-300 `}>{text}</button>
    return <button className={` ${size != "fit" ? 'w-full' : ''}  bg-blue-700 text-white rounded-xl hover:shadow-lg hover:bg-blue-600 transition-colors duration-500 p-1.5 hover:shadow-blue-300 `}>{text}</button>
}