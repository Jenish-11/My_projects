import React from 'react';
import { useState } from 'react';
import ReactDOM from 'react-dom/client';
import axios from "axios";
import Temp from './Temp';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logg from '../utils/common';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';


export default function Form({resume,setresume,login,islog,userinfo,userinfor}){
   const[getD,getData]=useState([])
   const N=  useNavigate()
   const logout=()=>{
    islog(false)
    localStorage.removeItem("login_data")
    localStorage.setItem("resume_logins",false)
    N('/')
  
     }
   

    const delet=(i,key)=>{
         console.log(resume[key].splice(i,1));
         setresume({...resume})

    }
    const addDetails=(key,value,index=null,indexkey=null)=>{
    
        if(!resume[key]&&index!=null&&indexkey==null){
           resume[key]=[]
            setresume({...resume})
        }
       else if(indexkey==null&& index!=null){
        resume[key][index]=value
        setresume({...resume})
       }
     
       else if(key!=null&&indexkey!=null&&index!=null){
            if(!resume[key]){
                resume[key]=[]
                setresume({...resume})
            }
            if(!resume[key][index]){
                resume[key][index]={}
                setresume({...resume})
            }
                resume[key][index][indexkey]=value;
                setresume({...resume})
         }
        console.log(resume);
    }
    const education=resume.education.map((to,i)=>{
        return(
            <>
            <tr>
              <td>{i+1}</td>
              <td><input type="text" value={to.study} className="tab form-control" onChange={(e)=>addDetails('education',e.target.value,i,'study')} placeholder="CourseName"/></td>
              <td><input type="text" value={to.Year} className="tab form-control"onChange={(e)=>addDetails('education',e.target.value,i,'Year')}placeholder="Year"/></td>
              <td><input type="text" value={to.institute} className="tab form-control"onChange={(e)=>addDetails('education',e.target.value,i,'institute')}placeholder="InstitueName"/></td>
              <td><input type="text" value={to.percentage} className="tab form-control"onChange={(e)=>addDetails('education',e.target.value,i,'percentage')}placeholder="Percentage"/></td> 
            
            <td className="table_inputs">
              {resume.education.length !== 1 && <button
                className="remove "
                onClick={() => delet(i,"education")} ><FontAwesomeIcon icon={faXmark} /></button>}</td></tr>
              {resume.education.length - 1 === i && <span onClick={()=>setresume({...resume,education:[...resume.education,{study:"",Year:"",institute:"",percentage:""}]})}><FontAwesomeIcon icon={faPlus}/></span>}
            
          </>
        )
    })
    const experience=resume.experiance.map((to,i)=>{
        return(
            <>
            <tr>
            <td>{i+1}</td>
            <td><input type="text" className="tab form-control" value={to.CompanyName} onChange={(e)=>addDetails('experiance',e.target.value,i,'CompanyName')}placeholder="CompanyName"/></td>
            <td><input type="text" className="tab form-control" value={to.JobRole} onChange={(e)=>addDetails('experiance',e.target.value,i,'JobRole')}placeholder="JobRole"/></td>
            <td><input type="text" className="tab form-control" value={to.JobDetails} onChange={(e)=>addDetails('experiance',e.target.value,i,'JobDetails')}placeholder="JobDetails"/></td>
            <td><input type="text" className="tab form-control" value={to.Duration} onChange={(e)=>addDetails('experiance',e.target.value,i,'Duration')}placeholder="Duration"/></td>
            
            <td className="table_inputs">
              {resume.experiance.length !== 1 && <button
                className="mr10 remove border-0"
                onClick={() => delet(i,"experiance")}><FontAwesomeIcon icon={faXmark} /></button>}</td></tr>
             <tr>{resume.experiance.length - 1 === i &&<button onClick={()=>setresume({...resume,experiance:[...resume.experiance,{CompanyName:"",JobRole:"",JobDetails:"",Duration:""}]})} className="border-0"><FontAwesomeIcon icon={faPlus}/></button>}</tr>
            </>
        )
    })
    const certification=resume.Certification.map((to,i)=>{
        return(
            <>
            <tr>
            <td>{i+1}</td>
            <td><input type="text" id={i} className="tab form-control" value={to.CourseName} onChange={(e)=>addDetails('Certification',e.target.value,i,'CourseName')}placeholder="CourseName"/></td>
            <td><input type="text" id={i} className="tab form-control" value={to.Duration} onChange={(e)=>addDetails('Certification',e.target.value,i,'Duration')}placeholder="Duration"/></td>
            <td><input type="text" id={i} className="tab form-control" value={to.Institute} onChange={(e)=>addDetails('Certification',e.target.value,i,'Institute')}placeholder="Institute Name"/></td>
            <td><input type="text" id={i} className="tab form-control" value={to.Place} onChange={(e)=>addDetails('Certification',e.target.value,i,'Place')}placeholder="Place"/></td>
       
        <td className="table_inputs">
              {resume.Certification.length !== 1 && <button
                className="mr10 remove border-0"
                onClick={() => delet(i,"Certification")} ><FontAwesomeIcon icon={faXmark} /></button>}</td> </tr>
              {resume.Certification.length - 1 === i && <span onClick={()=>setresume({...resume,Certification:[...resume.Certification,{CourseName:"",Duration:"",Institute:"",Place:""}]})}><FontAwesomeIcon icon={faPlus}/></span>}
            </>
        )
    })
    const skill=resume.skills.map((to,i)=>{
        return(
            <>  
            <div className='col-4'>
             <input type="text" className='w-75 d-inline form-control' name="firstName" value={to} id={i} onChange={(e)=>addDetails('skills',e.target.value,i)} placeholder={`skill${i}`}/>
                {/* <div className="table_inputs d-inline"> */}
              {resume.skills.length !== 1 && <span
                className="ml-1 remove border-0"
                onClick={() => delet(i,"skills")}><FontAwesomeIcon icon={faXmark} /></span>}
              {resume.skills.length - 1 === i && <span onClick={()=>setresume({...resume,skills:[...resume.skills,""]})} className="border-0 d-block">...<FontAwesomeIcon icon={faPlus}/></span>}
            </div>
            
            </>
        )
    })
   const summit=async()=>{
    if(resume.name&&resume.email&&resume.number){
    let datas={
        request:"create_react_resume",
        user:userinfo.name,
        resume:resume
    }
    const {data}=await axios.post("http://karka.academy/api/action.php?",JSON.stringify(datas))        
    setresume({
        skills:[""],
        education:[""],
        Certification:[""],
        experiance:[""]
    })
}

}
const get=async()=>{
    const {data}= await axios.get(`http://karka.academy/api/action.php?request=get_user_react_resume&user=${userinfo.name}`)
    let dat=data.data
    getData(dat)
}
const n=useNavigate()
useEffect(()=>{
    logg(islog,login)
    if(login==true||localStorage.getItem("resume_logins")=="true"){
        n('/form')
        
    }

    else if(login==false){
        n('/')
    }
  get()
},[getD])
    return( 
    <>
        <div>
    <header className="p-3">
            {/* <h1>{JSON.stringify(props.login)}</h1> */}
        <img src="" alt=""/>
            <h1 className="text-center">Welcome To Resume {userinfo.name}</h1><span onClick={logout}>Logout</span>
        </header>
    <div className="parent container b1 mt-3 pb-5">
    <h4>upload Photo</h4>
    <form action="upload.php" method="post">
        <input type="file"  id="fileInput" onChange={(e) => {
             const file = document.getElementById("fileInput").files[0];
             const reader =new FileReader();
             reader.addEventListener("load", () =>{
                 setresume({...resume,pic:reader.result})
             });
             reader.readAsDataURL(file);
             console.log(e)
        }} />
    </form>
    <div className="row">
        
        <div className="col-6 card border-0 ">
        <h2>who you are?</h2>
        <input type="text" onChange={(e)=>setresume({...resume,name:e.target.value})}placeholder="Name"/>
        <input type="text" onChange={(e)=>setresume({...resume,role:e.target.value})} placeholder="Role"/>
        <textarea className="mt-2" type="text" onChange={(e)=>setresume({...resume,objective:e.target.value})}placeholder="Objective"></textarea>
        <input type="number"onChange={(e)=>setresume({...resume,number:e.target.value})} placeholder="PhoneNumber"/>
        <input type="email"  onChange={(e)=>setresume({...resume,email:e.target.value})} placeholder="EnterEmail"/>
        <input type="text" onChange={(e)=>setresume({...resume,link:e.target.value})}placeholder="link"/>
        <span className="mt-2">Acknowledgment</span>
        <textarea name="" id="akn" cols="30" rows="10" onChange={(e)=>setresume({...resume,akn:e.target.value})}
         className="mt-2"></textarea>
    </div>
    <div className="col-6 ">
        
        <div className="px-5 ">
            <h2>Personal Details</h2>
             <input type="text" className="w-100" onChange={(e)=>addDetails('personalDetails',e.target.value,0,'FullName',)}placeholder="EnterYourFullName"/>
            <span className="d-block pt-2">Date Of Birth</span>
             <input type="date"className="d-block mb-2" onChange={(e)=>addDetails('personalDetails',e.target.value,0,'DOB')}placeholder="DOB"/>
            <input type="text" onChange={(e)=>addDetails('personalDetails',e.target.value,0,'Gender')}placeholder="Gender"/>
            <input type="text" onChange={(e)=>addDetails('personalDetails',e.target.value,0,'Martial')}placeholder="MartialStatus"/>
            <span className="d-block pt-3">Languages Known</span>
            <input type="text" onChange={(e)=>addDetails('personalDetails',e.target.value,0,'language1')}placeholder="Language1"/>
            <input type="text" onChange={(e)=>addDetails('personalDetails',e.target.value,0,'language2')}placeholder="Language2"/>
            <span className="d-block pt-3">Hobbies</span>
            <input type="text" onChange={(e)=>addDetails('personalDetails',e.target.value,0,'hobbie1')}placeholder="Hobbie1"/>
            <input type="text" onChange={(e)=>addDetails('personalDetails',e.target.value,0,'hobbie2')}placeholder="Hobbie2"/>
            <input type="text" onChange={(e)=>addDetails('personalDetails',e.target.value,0,'hobbie3')}placeholder="Hobbie3"/>
        
            <span className="d-block pt-3">Address</span>
        <input type="text"onChange={(e)=>addDetails('loca1',e.target.value)} placeholder="AddressLine1"/>
        <input type="text"onChange={(e)=>addDetails('loca2',e.target.value)} placeholder="AddressLine2"/>
        <input type="text"onChange={(e)=>addDetails('loca3',e.target.value)} placeholder="AddressLine2"/>
        <input type="number"onChange={(e)=>addDetails('loca4',e.target.value)} placeholder="PinCode"/>

        </div>
           
    </div>
    </div>
    <h2>Your Skills</h2>
    <div className='row'>
        {skill} 
    </div>
   <h2 className="mt-4">Educational Qualification</h2>
       <table  width="100%" className='table'>
        <thead>
            <th>#</th>
            <th>CourseName</th>
            <th>Year</th>
            <th>Institute</th>
            <th>Percentage</th>
        </thead>
        <tbody id="edu_add">
        {education}
        </tbody>
    </table>
    <h2 className="mt-4">Experiance</h2>
    <table border="1" width="100%" className=''>
        <thead>
            <th>#</th>
            <th>CompanyName</th>
            <th>JobRole</th>
            <th>Details</th>
            <th>Duration</th>
        </thead>
        <tbody>
        {experience}
        </tbody>
    </table>
    <h2 className="mt-4">certifications</h2>
    <table border="1" width="100%" className=''>
        <thead>
            <th>#</th>
            <th>CourseName</th>
            <th>Duration</th>
            <th>Institue</th>
            <th>Place</th>
        </thead>
        <tbody>
           {certification}  
        </tbody>
    </table>
    <h2 className="mt-4">Project Details</h2>
    <table border="1" width="100%" className=''>
        <tr>
            <td><input type="text" className="tab form-control" onChange={(e)=>addDetails('project',e.target.value,0,'projectName')}placeholder="Project Name"/></td>
            <td><input type="text" className="tab form-control" onChange={(e)=>addDetails('project',e.target.value,0,'Duration')}placeholder="Duration"/></td>
            <td><input type="text" className="tab form-control" onChange={(e)=>addDetails('project',e.target.value,0,'role')}placeholder="Role"/></td>
            <td><input type="text" className="tab form-control" onChange={(e)=>addDetails('project',e.target.value,0,'technology')}placeholder="Technology Used"/></td>
            <td><input type="text" className="tab form-control" onChange={(e)=>addDetails('project',e.target.value,0,'abstract')}placeholder="Abstract"/></td>
        </tr>
    </table>
<button className=" p-2 px-1 my-2 border-0 bg-success rounded float-right" id="submit" onClick={summit}>Summit</button>
    <table className="table">
        <thead>
            <tr>
                <th>Id</th>
                <th>USER</th>
                <th>Name</th>
                <th>Email</th>
                <th>Number</th>
                <th>DElete</th>
                <th>View</th>
            </tr>
            {getD.map((to,index)=>{
              let b= JSON.parse(to.data)
                    return(
                        <>
                            <tr>
                                <td>{to.id}</td>
                                <td>{to.user}</td> 
                                <td>{b.name}</td>
                                <td>{b.email}</td>
                                <td>{b.number}</td>
                                <td><button type='button' onClick={async ()=>{const response=await axios.get(`http://karka.academy/api/action.php?request=delete_react_user_resume&user=${userinfo.name}&id=${to.id}`);getData(response.data.data)}}>Delete</button></td>
                                <td><button type='button'><Link to={`/view/${to.id}`}>view</Link> </button></td>
                            </tr>
                        </>
                    )
                })}
        </thead>
    </table>
</div>
        </div></>
    )
}