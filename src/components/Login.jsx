import {
    signIn,signUp,useSession
  } from 'next-auth/react'
  ;
import google from "./icons/google.png"
import apple from "./icons/apple.png"
import Image from 'next/image'
import Head from 'next/head'
import Homepage from "../components/Homepage"
export default function Login ({session}){
if(!session){
return<div>
  
     <div className="App">
      <div className="container">
        <div className="title">
        <div className="logo">
            <h1>Board.</h1>
        </div>
    </div>
<div className="signin">
    <p className="signin-heading">Sign In</p>
    <p className="signinto">Sign Into to your account</p>
    <div className="btn">
    <button className="google-button"  onClick={(e)=>{
        signIn("google")
    }
        }><Image src={google} alt="google"/><span className="google">Sign In With Google</span></button>
<button className="apple-button"><Image src={apple} alt="apple"  /><span className="apple">Sign In With Apple</span></button>
</div>

<div className="signin-content">
   <p className="weight400"> Email Address</p>
    <input type="email" className="email" value="johndoe@gmail.com"/><br/>
   <p className="weight400"> Password</p>
    <input type="password"className="password" value="abcdefgh"/><br/><br/>
    <span href="/" className="forgot">Forgot password?</span><br/><br/>
    <button className="sign-in-button">Sign In</button>
   
    </div>
            <p className="register-content">Don't have an account?<span className="register">Register here</span></p>
 



</div>
    </div>
    </div>
    </div>
   }

}