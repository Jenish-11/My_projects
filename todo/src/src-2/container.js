import React, {useState} from 'react';
import Header from './header';

function Container(props){

    var emailid="jenish"
    var password="123"
    
    if(props.shown&&!props.login){return(<div class="text-center"> <input type="text" onKeyUp={(e)=>props.setemail(e.target.value)}/><br/>
    <input type="text" onKeyUp={(e)=>props.setpass(e.target.value)}/><br/>
    <button onClick={()=>{return(emailid===props.email&&props.pass===password)?props.islog(true):null}}>Login</button>
   <h1>{props.login?1:2}</h1>
   </div>)}
}
export default Container;