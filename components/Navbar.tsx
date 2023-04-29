import { FunctionComponent } from "react";
import {HiBars3BottomLeft} from "react-icons/hi2"

const NavBar : FunctionComponent = () =>{
    return <nav className="w-full px-2 h-14 flex justify-between items-center border">
        <div className="w-fit flex font-semibold text-gray-800 text-xl">
          <HiBars3BottomLeft className="h-8 w-8"/>  <span className="ml-3">muzik</span>
        </div>
    </nav>
}

export default NavBar