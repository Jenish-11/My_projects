import axios from "axios";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router";
 let userinfo={
        request:"create_candidate",

    }
    
export default function Register(props){
    
    const Navigate=useNavigate()
    // useEffect(()=>{
    //     if(!props.login){
    //         Navigate('/')
    //     }
        
    // },[props.islog])
   
const info=(key,value)=>{
userinfo[key]=value;
    props.regis(userinfo)
    console.log(userinfo);
}
    const info_1=async()=>{
        console.log(userinfo);
        const response=await axios.post("https://karka.academy/api/action.php",JSON.stringify(userinfo))
        console.log(response);
        if(response.data.status='success'){
        // props.regis(response)
        Navigate('/')
    //     console.log("gg",response);
       }
       else{
        alert("not registered")
       }
    }
    const getMembers=async()=>{
        const response=await axios.get("https://karka.academy/api/action.php?request=getAllMembers")
      console.log(response)
    }
    return(
        
         <div class="text-center col-6">
            <h1>This is Register</h1>
            <input type="text" onKeyUp={(e)=>info("name",e.target.value)} placeholder="Name" class="text-center form-control"/>
            <input type="number" placeholder="PhoneNumber" onKeyUp={(e)=>info("phone",e.target.value)} class="text-center form-control"/>
            <input type="email" placeholder="Email" onKeyUp={(e)=>info("email",e.target.value)} class="text-center form-control"/>
            <input type="password" placeholder="Password" onKeyUp={(e)=>info("password",e.target.value)} class="text-center form-control"/>
            <input type="text" placeholder="City" onKeyUp={(e)=>info("city",e.target.value)} class="text-center form-control"/>
            <input type="text" placeholder="Area" onKeyUp={(e)=>info("area",e.target.value)} class="text-center form-control"/>
            <input type="number" placeholder="Pin" onKeyUp={(e)=>info("pin",e.target.value)} class="text-center form-control"/>
            <input type="text" placeholder="Address" onKeyUp={(e)=>info("address",e.target.value)} class="text-center form-control"/>
            <input type="number" placeholder="Aadhar" onKeyUp={(e)=>info("aadhar",e.target.value)}class="text-center form-control"/>
            <button className="d-block mx-auto" onClick={info_1}>Register</button>
            <button className="d-block mx-auto" onClick={getMembers}>GetAllAccounts</button>
        </div>
    )
}