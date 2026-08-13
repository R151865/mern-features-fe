import Cookies from "js-cookie"

export const setCookie = (name:string, value:any, options?:any)=>Cookies.set(name, value, 
    {
        expires:1,
        ...options
    }
)
export const getCookie = (name:string)=>{
    const val =  Cookies.get(name || '')
    return val
}
