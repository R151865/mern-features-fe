import { getCookie } from "../config/cookies"
import { useNavigate } from "react-router-dom"

export default function authWrapper<P extends object>(Component: ComponentType<P>) {
    return function HOC(props:P){
        const navigate =  useNavigate()

        const token =  getCookie("token")

        if(!token){
            navigate("/login", {replace:true})
            return 
        }

        return <Component {...props}/>
    }
  
}
