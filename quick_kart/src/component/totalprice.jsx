import { useDispatch, useSelector } from "react-redux"
import { setTotalPrice } from "../redux/slices/productSlice";

export default function Price(){
    let a=0
    let b=0
    let c=0
    const karts = useSelector((state) => state.productSlice.carts)
    const rate = useSelector((state) => state.productSlice.totalprice)
    const dispatch = useDispatch()
   karts.map((it) => {
        a+=it.rate
        b+=((it.rate)/100)*(it.discounts-(100))
        c+=((it.rate)/100)*(it.discounts)
        
    });
    dispatch(setTotalPrice(a))
    console.log(rate);
    console.log("discounts",b);
    return(

        <>
            <div className="col">
                <div>
                    <div className="m-3">
                    <h5 className="d-inline total_price">Total Products</h5>
                        <span className="float-right ">({karts.length})</span><br/>
                    </div>
                    <div className="m-3">
                        <h5 className="d-inline">Actual Prize</h5>
                        <span className="float-right">{rate}₹</span><br/>
                    </div>
                    <div className="m-3">
                        <h5 className="d-inline">Discounts</h5>
                        <span className="float-right text-success">-{c}₹</span><br/>
                    </div>
                    <div className="m-3">
                       <h5 className="d-inline">Total Prize</h5>
                    <span className="float-right fs-3">{Math.abs(b)}₹</span><br/> 
                    </div>
                </div>
            </div>
        </>
    )
}