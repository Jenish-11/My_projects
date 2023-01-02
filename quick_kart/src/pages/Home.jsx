import React, { useEffect } from "react";
import Body from "../component/body";
import Header from "../component/header";
import { States } from "../Route";
import { useContext } from "react";
import StaticExample from "../component/Modal";
import { Button } from "bootstrap";
import MyVerticallyCenteredModal from "../component/Modal";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { commonLogin } from "../utils/commonLogin";
import Footer from "../component/footer";
export default function Home(){
    const p=useParams()
    const N=useNavigate()
    const loged= useSelector((state) => state.userSlice.login)
    const dispatch = useDispatch()
    var {products,setProducts} = React.useContext(States);
    const [modalShow, setModalShow] = React.useState(true);

    return( <>
      <MyVerticallyCenteredModal
        show={modalShow&&!loged&&localStorage.getItem("flip_kart_login")=="false"}
        onHide={() => setModalShow(false)}
      />
        <Header/>
        <div className="container-fluid pt-5 mt-5">
            <Body/>      
        </div>
        <Footer/>
        </>
    )
}