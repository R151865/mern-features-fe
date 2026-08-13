import {useState} from "react"
import axios from "../config/axios";
import { FcGoogle } from "react-icons/fc"; 
import { ImSpinner2 } from "react-icons/im";
import { useNavigate } from "react-router-dom";
import guestWrapper from "../wrappers/guestWrapper"
import {setCookie} from "../config/cookies"

import {useGoogleLogin} from "@react-oauth/google"


interface IForm {
  email: string;
  password: string;
  error:string;
  loading:boolean;
  loginType: "google" | "manual"
}

const initialForm:IForm=  {
    email:import.meta.env.VITE_EMAIL,
    password:import.meta.env.VITE_PASSWORD,
    error:"",
    loading:false,
    loginType:"manual",
}

function Login() {
  const navigate = useNavigate()
  const [form, setForm] =  useState<IForm>(initialForm)


  const handleUpdate =  (name:string, value:string)=>{
    setForm({...form, 
        error:"",
        [name]:value})
  }

  const handleSubmit = (e:React.SubmitEvent<HTMLFormElement>)=>{
    e.preventDefault()

    if(!form.email || !form.password){
        handleUpdate("error", "*Fileds required")
        return 
    }


    if(form.loginType ==="manual"){
        handleLogin()
    }else{
         googleLogin()
    }

    
  }

  const handleLogin  =async()=>{

    setForm({...form, loading:true, loginType:"manual"})

    axios.post("/users/login", {
        email:form.email,
        password:form.password
     })
     .then((res)=>res)
     .then((data)=>{
        console.log(data?.data)
        setForm({...form, loading:false,
            error:""
        })

        setCookie("token", data?.data?.token)
        navigate("/", {replace:true})


     })
     .catch(e=>{
        const errMsg =  e?.response?.data?.error || "Something went wrong!"
        console.log("Error", e)
        setForm({...form, loading:false,
            error:errMsg
        })
     })

  }


  const googleLogin  = useGoogleLogin({
    flow:"auth-code",
    onSuccess:async(codeResponse)=>{
        setForm({
            ...form, error:"", loading:true
        })

        console.log(codeResponse, "this is code resposne")

        axios.post("/users/auth/google/login", {
            token: codeResponse.code
        })
        .then(res=>res)
        .then(data=>{

          console.log(data, "this is final data")
           setForm({
            ...form, error:"", loading:false
        })

        setCookie("token", data?.data?.token)

        // Set Users details
        navigate("/", {replace:true})

        })
        .catch(e=>{
          console.log(e)

          const errMsg =  e?.response.data.error || "Something went wrong!"
           setForm({
            ...form, error:errMsg, loading:false
        })
        })


    },
    onError:(errorResponse)=>{
        console.log(errorResponse)
         setForm({
            ...form, error:"Error", loading:false
        })

    }


  })


  

  return (
    <div className="flex min-h-screen bg-gray-200">
      <form
      onSubmit={handleSubmit}
      
      className="p-6 min-w-xs max-w-md m-auto bg-white rounded shadow-lg flex flex-col gap-2 ">
        
                <p className="text-center text-sm text-blue-500 font-medium">Welcome to <span className="text-lg">INCUSION</span></p>
        <label className="text-sm text-gray-800">Email</label>
        <input
          placeholder="Email"
          type="text"
          className="text-sm p-2 focus:outline rounded border shadow-lg"
          value={form.email}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleUpdate("email", e.target.value)}
        />

        <label className="text-sm text-gray-800">Password</label>
        <input
          placeholder="Password"
          type="password"
          className="p-2 text-sm focus:outline rounded border shadow-lg"
          value={form.password}
          onChange={(e:React.ChangeEvent<HTMLInputElement>)=>handleUpdate("password", e.target.value)}
        />

        <button
        type="submit"
        onClick={()=>{
            setForm({...form, loginType:"manual"})
        }}

        className="flex justify-center items-center gap-2 cursor-pointer  my-1 text-white bg-blue-500 p-2 rounded shadow-lg text-sm">
          Login
          {
           form.loginType==="manual" && form.loading &&   <ImSpinner2 className="animate-spin" size={15} />
          }
          
         
        </button>

        {
            form.error && <p className="text-xs text-red-500 text-center">{form.error }</p>
        }
        

        <p className="flex items-center text-center text-xs text-gray-400">
          <hr className="text-gray-400 w-[50%]" />
          <span className="px-2">OR</span>
          <hr className="text-gray-400 w-[50%]" />
        </p>



        <button onClick={()=>{
            setForm({...form, loginType:"google"})
            googleLogin()
            }} className="cursor-pointer flex items-center justify-center gap-2 text-center text-xs bg-blue-200 p-1 rounded shadow-xl text-black-800">Login with google <FcGoogle size={15}/>
        
         {
           form.loginType==="google" && form.loading &&   <ImSpinner2 className="animate-spin" size={15} />
          }
        
        </button>
      </form>
    </div>
  );
}


export default guestWrapper(Login)