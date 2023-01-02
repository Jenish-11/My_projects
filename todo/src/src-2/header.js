import React, {useState} from 'react';
// export function Form(){
//   const[email,setemail]=useState(null)
//   const[pass,setpass]=useState(null)
  
//   return(
//     <> <input type="text" onKeyUp={(e)=>setemail(e.target.value)}/>
//     <input type="text" onKeyUp={(e)=>setpass(e.target.value)}/></>
  
//   )
// }
function Header(props){
  const[shown,isshown]=useState(false)
    return(
      
      <> <header class="bg-dark"> {props.login?
        <div class="text-left"><button onClick={()=>props.islog(false)} >logout</button></div>:

<div class="text-right"><button onClick={()=>props.isshown(true)}>Login</button></div>}
        
        </header>
        
        </>
    )
}
export default Header;