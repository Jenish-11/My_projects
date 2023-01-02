import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Karts from './carts';
import logo from '../images/logo2.png'
import { log, setuserinfo } from '../redux/slices/userSlice';
import { useDispatch, useSelector } from 'react-redux';

export default function MyVerticallyCenteredModal(props) {
  const user= useSelector((state) => state.userSlice.userinfo)
  const dispatch = useDispatch()

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
         Login
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img src={logo} alt=""  className='m-auto'/>
        <div className="col-6 m-auto">
        <h5>Email</h5>
        <input type="email" id="form2Example1" class="form-control" onChange={(e)=>dispatch(setuserinfo({...user,email:e.target.value}))}/>

        <h5>Password</h5>
        <input type="password" id="form2Example2" class="form-control" onChange={(e)=>dispatch(setuserinfo({...user,password:e.target.value}))}/>
        <button type="button" class="btn btn-primary w-100 mt-5 " onClick={()=>dispatch(log(user))}>Sign in</button>

        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
