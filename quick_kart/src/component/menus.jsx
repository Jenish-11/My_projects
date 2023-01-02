import { Link } from "react-router-dom";

export default function Menu(){
    return(
        <>
            <div className="row text-center">
                <div className="col-1 ml-auto  w-50">
                        <img className="w-75" src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="" />
                        <h6>Grocery</h6>
                </div>
                <div className="col-1 ml-auto w-50">
                    <img className="w-75" src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="" />
                    <h6>Mobiles</h6>
                </div>
                <div className="col-1 ml-auto">
                      <Link to="/category/Fashion" className="text-dark  text-decoration-none">  <img className="w-75" src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="" />
                        <h6>Fashion</h6></Link>
                </div>
                <div className="col-1 ml-auto">
                   <Link className="text-dark  text-decoration-none" to="/category/Electronics"> <img className="w-75" src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="" />
                    <h6>Electronics</h6></Link>
                </div>
                <div className="col-1 ml-auto">
                    <img className="w-75" src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="" />
                    <h6>Home</h6>
                </div>
                <div className="col-1 ml-auto">
                    <img className="w-75" src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="" />
                    <h6>Appliances</h6>
                </div>
                <div className="col-1 ml-auto">
                    <img className="w-75" src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="" />
                    <h6>Travel</h6>
                </div>
                <div className="col-1 ml-auto">
                    <img className="w-75" src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="" />    
                    <h6>Top Offers</h6>
                </div>
                <div className="col-1 ml-auto">
                    <img className="w-75" src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="" />
                    <h6>Toys and More...</h6>
                </div>
                <div className="col-1 ml-auto">
                    <img className="w-75" src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" alt="" />
                    <h6>2-Wheelers</h6>
                </div>
            </div>
        </>
    )
}