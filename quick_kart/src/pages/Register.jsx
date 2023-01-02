import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
import Header from "../component/header"
import { register } from "../redux/slices/userSlice"

export default function Register(){
   const N = useNavigate()
    const dispatch=useDispatch()
    const[pass,setpass]=useState(0)
    const[reg,setreg]=useState({
        name:"",
        email:'',
        password:'',
        number:0,
        country:"",
        state:"",
        district:"",
        city:"",
        pincode:0,


    })
console.log(reg);
    return(

        <>
        <Header/>
        <div className="container mt-5 pt-5 col-6">
            <h5>Name</h5>
            <input type="text" className="form-control" placeholder="name" onChange={(e)=>setreg({...reg,name:e.target.value})}/>
            <h5 className="mt-3">Email Address</h5>
            <input type="email" className="form-control" placeholder="Email" onChange={(e)=>setreg({...reg,email:e.target.value})} />
            <h5 className="mt-3">Password</h5>
            <input type="password" className="form-control" placeholder="Password" id="pass" onChange={(e)=>setpass(e.target.value)}/>
           <h6 className="mt-2">ReEnter Password</h6> 
            <input type="password" className="form-control" placeholder="Password" id="pass2" onChange={(e)=>setreg({...reg,password:e.target.value})}/>
            {pass!==reg.password&& <><span className="text-danger">Wrong Password</span></>}
            <br />
            <h5>Phone Number</h5>
            <input type="number" className="form-control" placeholder="name" onChange={(e)=>setreg({...reg,number:e.target.value})}/>
            <h5>Country</h5>
            <input type="text" className="form-control" placeholder="name" onChange={(e)=>setreg({...reg,country:e.target.value})}/>
            <h5>State</h5>
            <input type="text" className="form-control" placeholder="name" onChange={(e)=>setreg({...reg,state:e.target.value})}/>
            <h5>District</h5>
            <input type="text" className="form-control" placeholder="name" onChange={(e)=>setreg({...reg,district:e.target.value})}/>
            <h5>City</h5>
            <input type="text" className="form-control" placeholder="name" onChange={(e)=>setreg({...reg,city:e.target.value})}/>
            <h5>Pin Code</h5>
            <input type="number" className="form-control" placeholder="name" onChange={(e)=>setreg({...reg,pincode:e.target.value})}/>
         
            <br /><button className="btn bg-success  mt-3" onClick={()=>{if(pass==reg.password){
                dispatch(register(reg));
                alert("Registration Success!");
                N('/login')}
                else{
                    alert("Registration Not Success")
                }
                }}>Sign-Up</button ><Link className="btn bg-primary float-right mt-3" to="/login">Login</Link>
        </div>
        </>
    )
}