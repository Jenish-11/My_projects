import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import logo from '../images/logo2.png'
import facebook from '../images/facebook.svg'
export default function Footer(){

    return(

        <>
        <footer className=' text-white p-4' style={{backgroundColor:"rgb(19, 28, 78)"}}>
            <div className="row">
                <div className="col-4 m-auto ">
                    <img  className='ml-5' src={logo} alt="" />
                </div>
                <div className="col-2">
                    <h4>About</h4>
                    
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Contact Us</li>
                        <li>Products</li>
                
                </div>
                <div className="col-2">
                    <h4>Help</h4>
                    
                        <li>Payments</li>
                        <li>Shipping</li>
                        <li>Cancellation & return</li>
                        <li>FAQ</li>
                
                </div>
                <div className="col-4">
                    <h4>Social</h4>
                    <li><FontAwesomeIcon className='mr-2' icon={faCoffee} />coffee</li>
                    <li><i class="fa fa-youtube-play mr-2"></i>youtube</li>
                    {/* <li><i class="fa fa-cog fa-spin"></i></li> */}
                    <li><i class="fa fa-facebook-official mr-2"></i>facebook</li>
                    <li><i class="fa fa-linkedin-square mr-2"></i>LinkedIn</li>
                </div>
            </div>
        </footer>
        </>
    )
}