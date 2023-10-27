import './SignIn.css';
import { FaFacebookF } from "react-icons/fa";
import { AiOutlineTwitter } from "react-icons/ai";
import { BsGoogle } from "react-icons/bs";
import song from "./cartoon1.jpg"
import { Link } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';



function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const history = useNavigate();
    useEffect(()=>{
            if(localStorage.getItem('user-info'))
            {
                history("/home")
            }
        },[]);


    async function FormInLogin(){
        console.warn(email,password);
        let item = {email,password};
        let result = await fetch("http://localhost:8000/api/signin",{
            method: "POST",
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
    <div className='SignIn'>
      <div className='Signin-left'>
        <img src={song}/>
      </div>
      <div className='Signin-right'>
        <div className='Signin-container'>
          <h1 style={{ fontSize: "30px", fontWeight: "600", color:"#fff" }}>SignIn</h1>

          <p style={{ color: "#999" }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <div className='Sign-form'>
            <input type='email' name='email'  placeholder='Email/SDT' onChange={(e)=>setEmail(e.target.value)}/>
            <input type='password' name='password'  placeholder='PassWord' onChange={(e)=>setPassword(e.target.value)}/>
          </div>
          <label className='radio-form'>
            <input type='checkbox' /><span style={{marginLeft:"10px"}}>Remember me</span>
          </label>
          <button className='button-sign' type='submit' onClick={FormInLogin} >LogIn</button>
          <Link to="/signup" className='button-signup' >SignUp</Link>
          <div className='or-sign'>
            <span>-</span><p>or</p><span>-</span>
          </div>
          <button className='Signin-Facebook'><span><FaFacebookF/></span>Login with Facebook</button>
          <button className='Signin-Twitter'><span><AiOutlineTwitter/></span>Login with Twitter</button>
          <button className='Signin-Google'><span><BsGoogle/></span>Login with Google</button>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
