import { Link, useNavigate, useParams } from "react-router-dom";
import logo from '../images/logo2.png'
import Cart from "../pages/Cart";
import cart_icon from '../images/cart.png'
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { faArrowCircleRight, faCartFlatbedSuitcase, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { log, logout, setCandidateInfo, setlogin } from "../redux/slices/userSlice";
import { commonLogin } from "../utils/commonLogin";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { setProducts, set_carts } from "../redux/slices/productSlice";
export default function Header(){
    const loged= useSelector((state) => state.userSlice.login)
    const user= useSelector((state) => state.userSlice.userinfo)
    const karts= useSelector((state) => state.productSlice.carts)
    const userData= useSelector((state) => state.userSlice.candidate_data)
    const dispatch = useDispatch()
    const N=useNavigate()
const p=useParams()

useEffect(()=>{
  const get_pro=async()=>{
    const {data}= await axios.get('http://localhost:5000/get_items')
    // console.log(data);
    // console.log(JSON.parse(data.items));
    dispatch(setProducts(JSON.parse(data.items)))

  }
  get_pro()
},[])

const commonLogin=()=>{

  if(localStorage.getItem("flip_kart_login")=="true"){
     dispatch(setlogin())
     dispatch(setCandidateInfo(JSON.parse(localStorage.getItem("flipUser"))))
  }
  else if(localStorage.getItem("flip_kart_login")=="false"){
     dispatch(logout())
  }

  }
  console.log(userData);
  useEffect(()=>{
    const get_addkart=async()=>{
      const {data}= await axios.post('http://localhost:5000/get_karts',JSON.stringify({email:userData.email}))
      console.log(data);
      dispatch(set_carts(JSON.parse(data.karts)))
      if(!loged){
        dispatch(set_carts([]))
      }
    }
    get_addkart()
  },[loged])
  useEffect(()=>{
    commonLogin()
    if(loged==true||localStorage.getItem("flip_kart_login")=="true"){
      N(`${window.location.pathname}`)
    }
  },[loged])
    return(
        <>   
            <header className="fixed-top bg-primary">
            <div className="text-center">
            <Link className="navbar-brand mr-5" to="/" ><img src={logo} className="w-100" alt="" /></Link>
           
           <div className="d-inline position-relative"><input className="form-control w-25 d-inline mt-2" type="search" placeholder="Search" aria-label="Search"/>
           <button className="border-0 bg-transparent "><FontAwesomeIcon className="w-100 text-white" icon={faSearch} /></button></div>
           <Link to="/" className="text-white fs-5 mt-2 ml-5">Home </Link>

           <div className="d-inline ml-5"><div className="position-fixed d-inline ml-3 mb-2"><h6 className="d-inline text-danger">{karts.length}</h6></div> 
                   <Link to="/carts" className="text-white "><img src={cart_icon} alt="" /></Link>
           </div>
               
                   <span className="d-inline ml-5">
                       {localStorage.getItem("flip_kart_login")=="false"&&loged==false&&
                       <Link className="text-white fs-5" to="/login">login</Link>}
                       {localStorage.getItem("flip_kart_login")=="true"&&<>
                       <div class="dropdown border-0 bg-primary d-inline">
                           <button class="border-0 fs-5 text-white bg-primary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                              {userData.name}
                           </button>
                           <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                              <Link className="text-dark"><h6 className="ml-2"><FontAwesomeIcon className="mr-3" icon={faUser} />Profile</h6></Link> 
                               <Link className="text-dark"><h6 className="ml-2"><FontAwesomeIcon  className="mr-2" icon={faCartFlatbedSuitcase} />Your Orders</h6></Link>
                               <button onClick={()=>{dispatch(logout())}} className="border-0  btn btn-outline-warning"><FontAwesomeIcon className="" icon={faArrowCircleRight} />Logout</button>
                           </div>
                           </div>
                       </>}
                   </span>
               
            </div>
            
                
            </header>
        </>
    )
} 