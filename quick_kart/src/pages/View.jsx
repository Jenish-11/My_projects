import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams,Link } from "react-router-dom";
import Header from "../component/header";
import { add_kart, set_carts } from "../redux/slices/productSlice";
import { setCandidateInfo } from "../redux/slices/userSlice";
import { States } from "../Route";
import of from '../images/of.webp'
import Footer from "../component/footer";

export default function View(){
    const items = useSelector((state) => state.productSlice.product)
    const loged= useSelector((state) => state.userSlice.login)
    const karts = useSelector((state) => state.productSlice.carts)
    const userkart = useSelector((state) => state.userSlice.candidate_data)
    const dispatch = useDispatch()
   const p= useParams()
    return(<>
        <Header/>
        <div className="container-fluid pt-5 mt-4">
        {items.map((item,i)=>{
            if(p.id==item.id){
        return (
        <div className="row ">
            <div className="col-6">
                <div className="">
                    
                   <img className="card w-75 mt-1" src={item.pic} alt="" />
                   {!loged&&<><Link to="/login"><button className="w-50 py-3 border-0 bg-warning ">ADD to Kart</button></Link>
                  <Link to="/login"><button className="w-50 border-0 py-3 bg-success">BuyNow</button></Link>
                    </>}
                    {loged&&<><Link to="/carts"><button className="w-50 py-3 border-0 bg-warning " onClick={()=>
                            {dispatch(add_kart([...karts,item],userkart.email))}
                        }
                            >ADD to Kart</button></Link>
                  <Link to={`/buynow/${item.id}`}><button className="w-50 border-0 py-3 bg-success">BuyNow</button></Link>
                    </> }</div>
            </div>
            <div className="col-6">
                    <div className="">
                         <h3>{item.name}</h3>
                         <h6>{item.categery}</h6>
                         <h3>{item.rate}₹</h3>
                    </div>
                    <div>
                        <ul style={{listStyle:`url(https://rukminim1.flixcart.com/www/36/36/promos/06/09/2016/c22c9fc4-0555-4460-8401-bf5c28d7ba29.png?q=90)`}}>
                            <li className="my-2">{item.offer1}</li>
                            <li className="my-2">{item.offer2}</li>
                            <li className="my-2">{item.offer3}</li>
                            <li className="my-2">{item.offer4}</li>
                            <li className="my-2">{item.offer5}</li>
                        </ul>
                    </div>
                    <div>
                        <h5>Details</h5>
                        <div className="d-inline" >
                            <p className="d-inline">{item.details}</p>
                        </div>
                        
                    </div>
                    <div className="mt-3">
                       {item.spec1&&<>
                       <ul>
                        <h4>Specification</h4>
                            <li className="my-2">{item.spec1}</li>
                            <li className="my-2">{item.spec2}</li>
                            <li className="my-2">{item.spec3}</li>
                            <li className="my-2">{item.spec4}</li>
                            <li className="my-2">{item.spec5}</li>
                       </ul>
                    </>} 
                    </div>
                    
            </div>
         </div>)}})}
         <div className="row">
            <h4 className="mt-5">Similar Products</h4>
            {items.map((it,i)=>{
                if(it.categery==p.categery){
                    return (
                    <>
                        
                        <React.StrictMode key={i}>
                              <div className="col-3 card"><Link className="text-dark" to={`/${it.categery}/${it.name}/${it.id}`}> 
                                    <img className="w-75" src={`${it.pic}`} alt="" />
                                    <h6>{it.name}</h6>
                                    <h6 className="d-inline">{it.rate}$</h6><span className="">{it.discounts}% Discounts</span>
                                
                            </Link> </div>
                            </React.StrictMode>
                        
                    </>
                )}
            })
            }
         </div></div>
         <Footer/>
        </>
    )
}