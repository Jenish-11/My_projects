import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom"
import Header from "../component/header";

export default function Category(){
    const items = useSelector((state) => state.productSlice.product)
    const p=useParams();
    return(
        <>
        <Header/>
        {
            items.map((c,i)=>{
                if(c.categery==p.categery){
                    return(
                        <>
                        <Link className="text-decoration-none text-dark " to={`/${c.categery}/${c.name}/${c.id}`}>
            <div className="container mt-5 pt-4">
            <div class='col-12 mt-2'>
                
                <div class='row'><div class='col-3 card'>
                    <img src={c.pic} alt='image' class='w-75 ml-auto'/>
                        </div>
                        <div class='col-6'>
                            <ul>
                                <li class='name fs-5 font-weight-bold'>{c.name}</li>
                                <li class='rating bg-success text-white d-inline px-2'>{c.rating}★</li>
                                <li class='spec'>{c.spec1}</li>
                                <li class='spec'>{c.spec2}</li>
                                <li class='spec'>{c.spec3}</li>
                                <li class='spec'>{c.spec4}</li>
                                <li class='spec'>{c.spec5}</li>
                                </ul>
                                </div>
                                <div class='col-3'>
                                    <h4 class='rate'>₹ {c.rate}</h4>
                                    <h4 class='disc text-success fs-6'>{c.discounts} % off</h4>
                                </div>
                                </div>
                                </div>
                                </div>
                                
       </Link> 
                        </>
                    )
                }
            })
        }
        </>
    )
}