import { useState } from "react";
import './todo.css'
// import 'bootstrap/dist/css/bootstrap.min.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import{faPen,faTrashCan,faCircleCheck} from '@fortawesome/free-solid-svg-icons'

 
export function Todo(props) {
    const[todo,list]=useState([])
    const[change,cha]=useState("")
   
const kl=()=>{
    let todos={}
    var a;
    a=document.getElementById("jk").value;
    todos["task"]=a
    todos["status"]=false
    list([...todo,todos])
    document.getElementById("jk").value="";
}
const delet=(id)=>{
    let v= todo.splice(id,1)
    let b=todo.filter((to)=>to!==v)
    list(b)
   
}
const edi=(id)=>{
const newedi=todo.map((to,index)=>{
    
if(id===index){

    return {...to, status:true};

    }console.log(todo)
    return to
    })
    list(newedi)
}
const update=(ind)=>{
     var updat=document.getElementById(ind).value  
     const neww=todo.map((to,index)=>{
        if(ind==index){
            return {...to,task:change,status:false  };
        }
        return to
    })
    
    list(neww)
}
    const listItems =  todo.map((task,index) =>{
        if(task.status){
            return <div className="row bg-dark text-white py-3 my-2"><div className="col-10"><input type="text" defaultValue={task.task} onChange={(e)=>cha(e.target.value)} id={index} className="bg-dark text-white w-100"  placeholder={task.task}/></div><div className=""><button onClick={()=>delet(index)}><FontAwesomeIcon icon={faTrashCan}/></button></div><div><button onClick={()=>update(index)} className="bg-success border-0 ml-4">Update</button></div></div>}
            else{
                return <div className="row py-3 bg-dark text-white my-2"><div className="col-9" id={index}>{task.task}</div><div className="col-3"><button onClick={()=>{document.getElementById(index).style.textDecoration ="line-through"; document.getElementById(index).style.filter =" blur(1px)"}} onDoubleClick={()=>{document.getElementById(index).style.textDecoration ="none";document.getElementById(index).style.filter =" blur(0px)"}} id={index+"b"}><FontAwesomeIcon icon={faCircleCheck}/></button><button onClick={()=>edi(index)} className="ml-5"><FontAwesomeIcon icon={faPen}/></button><button onClick={()=>delet(index)} className="float-right"><FontAwesomeIcon icon={faTrashCan}/></button></div></div>}
  
  })
var ab=0
    return (
        <div className="container cont">
            <h2 className="text-center text-white">TodoList</h2>
        
        <div className="row">
            <div className="col-12">
                <input type="text" id="jk" placeholder="todo" className="input form-control d-inline py-2"/>
                <button onClick={kl} className="float-right p-2 bg-success border-0 ">Add</button>
            </div>
        </div>
        <div className=" mx-auto">
            <div className="">
            {listItems}
            </div>
        </div>
        
    </div>
     
    );
  }