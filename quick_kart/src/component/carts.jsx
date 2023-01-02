import { useDispatch, useSelector } from "react-redux"
import { add_kart, remove_carts, set_carts } from "../redux/slices/productSlice";
import Price from "./totalprice";
// import '../trash.css'
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import axios from "axios";


export default function Karts(){
    const karts = useSelector((state) => state.productSlice.carts)
    const user = useSelector((state)=> state.userSlice.candidate_data)
    const dispatch = useDispatch()

    // useEffect(()=>{
    //     console.log(karts);
    //     dispatch(add_kart(karts,user.email))
    // })
    const remove_item=async (i)=>{
        
        try{
          
            const response=await axios.post('http://localhost:5000/delete',JSON.stringify({index:i,email:user.email}))
            console.log(response);
            const get_addkart=async()=>{
                const {data}= await axios.post('http://localhost:5000/get_karts',JSON.stringify({email:user.email}))
                dispatch(set_carts(JSON.parse(data.karts)))
              }
              get_addkart()
    }
        catch{
            
        }
    }
    return(
        <>
            <div className="col-7 mb-5">
                {
                    karts.map((it,i)=>{ 
                        return(
                            <>{
                                <div className="row mt-3">
                                    <div className="col-4"><img className="w-100" src={it.pic} alt="" /></div>
                                   <div className="col-8">
                                    <p className="mt-5 w-100 ">{it.name}</p>
                                    <h6 className="text-secondary">{it.title}</h6>
                                    <h5 className="d-inline">{it.rate}₹</h5><span className="ml-5 text-success">{it.discounts}% discounts</span>
                                    <button className="px-2 ml-5 border-0 btn btn-outline-danger w-auto" onClick={()=>remove_item(i)}>Remove <FontAwesomeIcon icon={faTrashCan} /></button>
                                   
                                   </div >
                                </div>
                    }
                            </>
                        )
                    })
                }
                
            </div>
           
        </>
    )
}