
import React from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import {logout,setuserinfo,log} from '../redux/slices/userSlice';
import logo from '../images/logo2.png'
// import logg from "../utils/common";
import { useDispatch, useSelector } from "react-redux";
import Header from "../component/header";


export default function Login(){
  const loged= useSelector((state) => state.userSlice.login)
  const user= useSelector((state) => state.userSlice.userinfo)
 
  const dispatch = useDispatch()
  
    const N=useNavigate()
    useEffect(()=>{
      if(loged==true||localStorage.getItem("flip_kart_login"=="true")){
      N(-1)
    }
    })

    return(
       
        <>
        <Header/>
        <div className="mt-5 pt-4">
        <h1 className="text-center mt-5 pb-3">Quick Kart <img src={logo} alt="" /></h1>
        <div className="col-5 m-auto mt-5">
        <form>
  {/* <!-- Email input --> */}
  <div class="form-outline mb-4">
    <input type="email" id="form2Example1" class="form-control" onChange={(e)=>dispatch(setuserinfo({...user,email:e.target.value}))}/>
    <label class="form-label" for="form2Example1">Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div class="form-outline mb-4">
    <input type="password" id="form2Example2" class="form-control" onChange={(e)=>dispatch(setuserinfo({...user,password:e.target.value}))}/>
    <label class="form-label" for="form2Example2">Password</label>
  </div>


  {/* <!-- Submit button --> */}
  <button type="button" class="btn btn-primary btn-block mb-4 w-100" onClick={()=>dispatch(log(user))}>Sign in</button>

  {/* <!-- Register buttons --> */}
  <div class="text-center">     
        <p>Not a member? <span><Link to="/register">register</Link></span></p>
  </div>
</form>
</div>
     </div>
       </>
    )
}