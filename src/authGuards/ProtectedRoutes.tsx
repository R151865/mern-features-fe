// import { getCookie } from "../config/cookies"
import { Outlet} from "react-router-dom"

export default function ProtectedRoutes(){

    // const token = getCookie("token")

    // if(!token){
    //     return <Navigate to="/login"/>
    // }


    return <Outlet/>
}