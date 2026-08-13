import { type ComponentType, useEffect } from "react"
import { getCookie } from "../config/cookies"

import { useNavigate } from "react-router-dom"

export default function authWrapper<P extends object>(Component: ComponentType<P>) {
    return function HOC(props:P){
        const navigate =  useNavigate()
        const token =  getCookie("token")

        useEffect(()=>{
            if(!token){
                navigate("/login", {replace:true})
            }
        }, [token, navigate])

        if(!token){
            return null
        }

        return <Component {...props}/>
    }
  
}
