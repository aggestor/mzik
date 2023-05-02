import { FunctionComponent } from "react";
import { HiCheckCircle, HiXCircle, HiXMark } from "react-icons/hi2";
declare type Props = {
    type?:'success'|'error'
    text?:string
    show?:boolean
}
export const Toast : FunctionComponent<Props>  = ({show = true, text = "Success lorem ipusm dolor amet orogano Lorem ipsum dolor sit amet consectetur adipisicing elit",type="error"}) =>{
    if(show) return  <div className="absolute cursor-pointer  left-2 bottom-4">
        <div  className={`relative flex  justify-between items-center ${type == "success" ? 'bg-green-200 text-green-600  ring-green-600': 'bg-red-200 text-red-600 ring-red-600 '}  ring-offset-2 ring-2 p-3 max-h-[90px] max-w-[500px] rounded`}>
            <HiXMark className="w-5 absolute cursor-pointer hover:font-semibold h-5 right-1 top-1"/>
        {type == "success" ? <HiCheckCircle className="h-10 w-10"/>: <HiXCircle className="h-10 w-10"/>} <span className=" w-[90%]"> {text}</span>
        </div>
    </div>
    else return <div></div>
}