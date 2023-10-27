import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import "./SignUp.css";
import key from "./khoalanthu2baomat.webp";
import { useState, useEffect } from "react";

import { useNavigate } from "react-router-dom";
function SignUp() {
   useEffect(()=>{
    if(localStorage.getItem('user-info'))
    {
        history('/home')
    }
   },[])

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const history = useNavigate();

    async function Register(){

        let item={name,email,password};
        // console.warn(item);

        let result = await fetch("http://localhost:8000/api/signup",{
            method:'POST',
            body:JSON.stringify(item),
            headers:{
               "Content-Type":'application/json',
               "Accept":'application/json'
            },
        });
        result = await result.json();
        localStorage.setItem("user-info",JSON.stringify(result));
        history("/home");
    }


  return (
    <div className='Box_SignUp'>
      <div className='SignUp-Top'>
        <img src={key}/>
      </div>
      <div className='SignUp-Bottom' >
        <div className='SignUp-start' action="" >
          <h1 style={{fontSize:"35px",fontWeight:"600"}}>SignUp</h1>
          <div className='SignUp-Name'>
            <input type='text' name="name" placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)} />
          </div>

          <div className='SignUp-forms'>
            <input type='text' name="email" placeholder='Email address'  value={email} onChange={(e)=>setEmail(e.target.value)}/>

            <input type='password' name="password" placeholder='A new Password'  value={password} onChange={(e)=>setPassword(e.target.password)}/>

          </div>
          <label className='radio-sign'>
            <input type='radio' /><span style={{marginLeft:"10px"}}>I agree to all Tern, Privacy Policy and Fees</span>
          </label>
          <button className='btn-SignUP'  type="submit" onClick={Register}>Register</button>
          <div className='icon-signup'>
            <span><FaFacebookF/></span>
            <span><AiOutlineTwitter/></span>
            <span><BsGoogle/></span>
          </div>
        </div>

      </div>
    </div>
  );
}

export default SignUp;
