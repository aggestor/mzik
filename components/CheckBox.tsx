import {FunctionComponent} from "react"
declare type Props = {
    name?:string
    value?:string,
    onChange?:(e:any) => void
    label?:string
}
export const CheckBox : FunctionComponent<Props>  = ({value,name, onChange, label = "Hello world !"}) =>{
    return <div className="flex items-center my-4">
            <input onChange={onChange}  type="checkbox" value={value} name={name}  className="w-5 h-5 rounded-2xl  caret-red-600" />
            <label  className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">{label}</label>
        </div>
}