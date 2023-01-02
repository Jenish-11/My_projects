import React from "react";
import { States } from "../Route";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    useNavigate,
    Link
}from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

export default function Product_list(){
    // var {products,setproducts} = React.useContext(States);
    const items = useSelector((state) => state.productSlice.product)
    const dispatch = useDispatch()
    console.log(items);
 
    return(
        <>
        <div>
            <div className="row">
                {
                    items.map((p,i)=>{
                        return (
                            <React.StrictMode key={i}>

                        <div class='col-3 p-4 maxw '>
                            <div class='card w-100 imbox'>
                            <Link className="text-dark text-decoration-none" to={`/${p.categery}/${p.name}/${p.id}`}> 
                                    <img src={p.pic} alt='image' class='img w-100 item_box'/>
                             </Link>
                                </div>
                                <h5 class='name'>{p.name}</h5>
                                <h5 class='rating'>{p.ratings}★</h5>
                                <h5 class='rate'>{p.rate}₹<span class='discount ml-4'>{p.discounts} % off</span></h5><h5 class='offers'>Bank offers</h5>
                        </div>
                            </React.StrictMode>
                        )
                    })
                }

            </div>
        </div>
        </>
    )
}