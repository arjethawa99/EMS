import React from 'react'
import { useState } from 'react';

const Login = ({handlerLogin}) => {

    var [email,setEmail] = useState("");
    var [password,setPassword] = useState("");

    const submitHandler = (e)=>{
        e.preventDefault();
        // console.log("email is",email);
        // console.log("password is",password);
        console.log(handlerLogin);
        handlerLogin(email,password);
        setEmail("");
        setPassword("");

    }

  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className='border-2 border-emerald-600 p-20 rounded-xl'>
            <form className='flex flex-col items-center justify-center'>
                <input 
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                required className='px-5 py-3 border-2 border-emerald-600 outline-none rounded-full placeholder:text-gray-400  bg-transparent' type="email" placeholder='Enter Your EmailId'/>
                <input 
                value={password}
                onChange={(e)=>setPassword(e.target.value)}
                required className='px-5 py-3 border-2 border-emerald-600 outline-none rounded-full placeholder:text-gray-400 mt-3 bg-transparent' type="password" placeholder='Enter Your Password'/>
                <button 
                onClick={(e)=>{submitHandler(e)}}
                className='px-8 py-2 hover:bg-emerald-200 border-2 border-emerald-600 outline-none rounded-full placeholder:text-gray-400 mt-7 w-full bg-emerald-600 font-semibold ' type="submit">Login</button>
            </form>
        </div>
    </div>
  )
}

export default Login