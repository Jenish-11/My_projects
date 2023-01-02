import React, { useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Karts from "../component/carts";
import Empty_kart from "../component/empty_kart";
import Header from "../component/header";
import Price from "../component/totalprice";
import { remove_carts, set_carts } from "../redux/slices/productSlice";
import { States } from "../Route";

export default function Cart(){
    const karts = useSelector((state) => state.productSlice.carts)
    const dispatch = useDispatch()
    const toFindDuplicates = karts => karts.filter((item, index) => karts.indexOf(item) !== index)
    const duplicateElements = toFindDuplicates(karts);
    console.log(duplicateElements);
    var {products,setProducts, carts,setcart} = React.useContext(States);
    // var contain=carts.contains(carts[carts.length-1])
    //                     console.log(contain);
    return(
        <>
            <Header/>
           {karts.length!==0&&<> <div className="row container-fluid pt-5 mt-5">
                <Karts/>
            <Price/>
            </div> 
            
            
<button className="w-50  text-white fixed-bottom bg-primary"><Link className="text-white fs-3" to="/placeorder">PlaceOrder</Link></button>
        </>}
        {karts.length==0&&<><Empty_kart/></>}
        </>
    )
}