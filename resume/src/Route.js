import React, { useEffect, useState } from 'react';
import Login from './pages/Login';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    useNavigate
}from 'react-router-dom'
import Form from './pages/Form';
import Register from './pages/Register';
import View from './pages/View';
import axios from 'axios';
export default function Main_Route(){
    const[login,islog]=useState(false)
    const[userinfo,userinfor]=useState([])
    const[reg,regis]=useState([])
    const[resume,setresume]=useState({
        skills:[""],
        education:[""],
        Certification:[""],
        experiance:[""]
    })
    
useEffect(()=>{
    userinfor(JSON.parse(localStorage.getItem("login_data")))
    console.log(resume);
},[resume])
    return(
        <>
         <Router>
            {/* <h1>jhg{JSON.stringify(resume)}</h1> */}
            <Routes>
                
                <Route path="/" element={<Login login={login} islog={islog} userinfo={userinfo} userinfor={userinfor}/>} />
                <Route path="/register"  element={<Register reg={reg} regis={regis} login={login} islog={islog}/>}/>
                <Route path="/form"  element={<Form resume={resume} setresume={setresume} login={login} islog={islog} userinfo={userinfo} userinfor={userinfor} />}/>
                <Route path="/view/:id" element={<View/>}/>
         </Routes>
        </Router>      
        </>

    )

} 