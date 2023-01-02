import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { BrowserRouter as Router,useHistory } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useEffect } from "react";
import logg from "../utils/common";

export default function Login(props){
    const N=useNavigate()
    const[datas,setdata]=useState({
        request:"candidate_login",
     
    })
    // const[pass,setpass]=useState("")
    const log=async ()=>{
        // axios({
        //     method:"get",
        //     // allRoutes: true,
        //     // origin: '*',
        //     // credentials: true,
        //     url:"https://karka.academy/api/action.php?",
        //     // headers: 'Origin',
        //     data:JSON.stringify(data)
        // })
        // .then((response)=>{
        //     console.log(response);
        //     // if(response.data.status==true){
        //     N('/home')
           
        // }).catch(()=>console.log("Error"))
        const {data}=await axios.post("https://karka.academy/api/action.php?",JSON.stringify(datas))
        console.log(data);
        if(data.status=='success'){
            props.islog(true)
            logg(props.islog,props.login)
            props.userinfor(data.data)
            localStorage.setItem("resume_logins",true)
            localStorage.setItem("login_data",JSON.stringify(data.data))
            console.log(props.userinfo);
            N('/form')
        }
        else{
            props.islog(false) 
        }
        
    }
    useEffect(()=>{
      // logg(props.islog,props.login)
      if(props.login==true||localStorage.getItem("resume_logins")=="true"){
        N('/form')
      }
      else if(!props.Login==false){
        N('/')
      }
    },[props.login])
    // console.log(props.login);
    return(
       
        <>
        <h1>{JSON.stringify(props.login)}</h1>
        <div className="col-5 m-auto mt-5">
        <form>
  {/* <!-- Email input --> */}
  <div className="form-outline mb-4">
    <input type="email" id="form2Example1" className="form-control" onChange={(e)=>setdata({...datas,email:e.target.value})}/>
    <label className="form-label" >Email address</label>
  </div>

  {/* <!-- Password input --> */}
  <div className="form-outline mb-4">
    <input type="password" id="form2Example2" className="form-control" onChange={(e)=>setdata({...datas,password:e.target.value})}/>
    <label className="form-label" >Password</label>
  </div>


  {/* <!-- Submit button --> */}
  <button type="button" className="btn btn-primary btn-block mb-4 w-100" onClick={()=>log()}>Sign in</button>

  {/* <!-- Register buttons --> */}
  <div className="text-center">     
        <p>Not a member? <span><Link to="/register">register</Link></span></p>
  </div>
</form>
</div>
     
       </>
    )
}