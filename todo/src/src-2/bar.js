import logo from './logo.svg';
import './App.css';
import Welcome from './welcom';
import Header from './header'
import React, {useState} from 'react';
import Container from './container';
import SideBar from './sidebar';
function Bar() {
  const[login,islog]=useState(false)
  const[email,setemail]=useState(null)
  const[pass,setpass]=useState(null)
  const[click,clickk]=useState(null)
  const[shown,isshown]=useState(false)

  return (
    <>
    {/* <SideBar/> */}
        <Header islog={islog} login={login} shown={shown} isshown={isshown}/>
        <Container islog={islog} login={login} setemail={setemail} email={email} pass={pass} setpass={setpass} shown={shown} isshown={isshown}/>
        <Container islog={islog} login={login}/>

        {/* <Side islog={islog} login={login}/> */}
</>
  );
}
export default Bar;
