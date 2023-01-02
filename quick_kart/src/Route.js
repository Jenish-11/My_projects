import React, { useContext, useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    useNavigate
}from 'react-router-dom'
import Product_list from './component/List_products';
import Cart from './pages/Cart';
import Category from './pages/Category';

import Home from './pages/Home'
import Login from './pages/Login';
import PlaceOrder from './pages/PlaceOrder';
import Register from './pages/Register';
import View from './pages/View';
import { setCandidateInfo } from './redux/slices/userSlice';
export var States = React.createContext(null);
export default function Routs(){
    const[carts,setcart]=useState([])

    const dispatch = useDispatch()
    console.log(carts);
   const p= useParams()
   useEffect(()=>{
    if(!localStorage.getItem("flip_kart_login")){
        localStorage.setItem("flip_kart_login",false)
    }
    dispatch(setCandidateInfo(JSON.parse(localStorage.getItem("flipUser"))))
   })
    return(
        <>
        <States.Provider value={{carts,setcart}}>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/:categery/:name/:id" element={<View/>}/>
                {/* <Route path="/product/:id" element={<View/>}/> */}
                <Route path="/carts" element={<Cart/>}/>
                <Route path="/placeorder" element={<PlaceOrder/>}/>
                <Route path={`/buynow/:id`} element={<PlaceOrder/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/category/:categery" element={<Category/>}/>
                <Route path="/register" element={<Register/>}/>

                {/* <Route path="/list_products" element={<Product_list/>}/> */}
            </Routes>
        </Router>   
        </States.Provider> 
        </>
    )
}