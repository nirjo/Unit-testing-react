import React from 'react'
import { useState } from 'react'

const Login = () => {
const [email , setEmail] = useState("")
const [password , setPassword] = useState("")
const [message , setMessage] = useState("")

function signInHandler() {
   if(email ==='nirmalraj@gmail.com'&& password === 'test@123'){
   setMessage("Loading !!!")
    setTimeout(()=>{
        setMessage('Successfully Loggedin !')

    },3000)
   } else{
    setTimeout(()=>{
        setMessage('Invalid credentials !')

    },3000)
   }
}

  return (
    <div>
      <h1>Login</h1>
      <input type="text" placeholder='Email' onChange={(e)=>setEmail(e.target.value)} /><br/>
      <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)} /><br/>
      <button className="App" onClick={signInHandler}>SignIn</button>
     {message &&  <p>{message}</p>}
    </div>
  )
}

export default Login
