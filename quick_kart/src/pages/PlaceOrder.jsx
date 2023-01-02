import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import Karts from "../component/carts";
import Header from "../component/header";
import { place_orders } from "../redux/slices/userSlice";

export default function PlaceOrder(){
    const p=useParams();
    const user= useSelector((state) => state.userSlice.candidate_data)
    const karts= useSelector((state) => state.productSlice.carts)
    const items = useSelector((state) => state.productSlice.product)
    const order=()=>{
        if(window.location.pathname==`/buynow/${p.id}`){
            return(items.filter((it)=>it.id==p.id))
        }
        else if(window.location.pathname!==`/buynow/${p.id}`){
            return karts
        }
    }
   const[address,setaddress]=useState({
    AddressLine1:"",
    AddressLine2:"",

})

   const place_order=async()=>{

        const response = await axios.post(`http://localhost:5000/order`,JSON.stringify({karts:order(),email:user.email,number:1234567,address:address}))
        console.log(response);
    }    
    return(
        <>
            <Header/>
            <div className="row container-fluid pt-5 mt-4">
            <div className="col-5  position-relative">
                <div className="ml-5 position-fixed"> 
                <h1>Hi...</h1><h5>{user.name}</h5>
                <h5>Enter Your Phone Number</h5>
                <input type="text" className="form-control w-100" placeholder="Ph-Number" onChange={(e)=>setaddress({...address,Number:e.target.value})}/>
                <h5>Enter Your Address</h5>
                <input type="text" className="form-control" placeholder="addressline1" onChange={(e)=>setaddress({...address,AddressLine1:e.target.value})}/>

                <input type="text" className="form-control mt-2" placeholder="addressline2" onChange={(e)=>setaddress({...address,AddressLine2:e.target.value})}/>
                <h5 className="mt-5">PayMent Type</h5>
                <input type="radio"name="pay" /><span>Cash on Delivery</span><br />
                <input type="radio"name="pay" /><span>UPI</span><br />
               <Link to="/"> <button className="mt-3 bg-success border-0 px-3" onClick={()=>{place_order()
                //     if(!localStorage.getItem("orders")){
                //         localStorage.setItem("orders",[])
                //     }
                // localStorage.setItem("orders",JSON.stringify(address))
                // alert("Purchase Successfull! ")
    
    }}>Finish</button></Link>
                </div>
                
            </div>
            <div className="w-auto float-right col">
                {
                
                window.location.pathname==`/buynow/${p.id}`&&
                items.map((pr,i)=>{
                    if(p.id==pr.id){
                    return (
                        <React.StrictMode key={i}>

                    <div class='col-6 p-4 maxw '>
                        <div class='card w-100 imbox'>
                        <Link className="text-dark text-decoration-none" to={`/${pr.categery}/${pr.name}/${pr.id}`}> 
                                <img src={pr.pic} alt='image' class='img w-100 item_box'/>
                         </Link>
                            </div>
                            <h5 class='name'>{pr.name}</h5>
                            <h5 class='rating'>{pr.ratings}★</h5>
                            <h5 class='rate'>{pr.rate}₹<span class='discount ml-4'>{pr.discounts} % off</span></h5><h5 class='offers'>Bank offers</h5>
                    </div>
                        </React.StrictMode>
                    )}
                })

                }
               {window.location.pathname!==`/buynow/${p.id}`&&  <Karts/>
               }
            </div>
               
            </div>
        </>
    )
}