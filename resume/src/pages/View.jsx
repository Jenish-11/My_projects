import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router"
import logg from "../utils/common";
import '../view.css';

export default function View(){
    const[d,viewData]=useState([])
    const parm=useParams()
    const get_by_id=async ()=>{

        const {data}=await axios.get(`http://karka.academy/api/action.php?request=get_react_resume_by_id&user=jenish&id=${parm.id}`)
        if(data.status=="success"){
            var b=JSON.parse(data.data.data)
            viewData(b)
            // console.log(d);
            // console.log(d.skills);
        }
    }
useEffect(()=>{
    get_by_id()
},[d])
    return(
        
        <>
        
        <div className="container p-0 b2">
    <header className="py-3 headr ">
        <div className="row ">
            <div className="col-2 p-4">
                <img src={d.pic} alt="" id="img" className="w-100 profile"/>           
            </div>
            <div className="col-6 ">
                <h1 id="Nam" className="ml-5">{d.name}</h1>
                <h2 id="rol" className="ml-5">{d.role}</h2>
                <p id="objt" className="obj d-inline">{d.objective} </p>
            </div>
            <div className="col-4">
                <li id="ph" className="mt-3 ph mr-5">{d.number}</li>
                <li id="em" className="emi mr-5">{d.email}</li>
                <li id="lin" className="lin">{d.link}</li>
                <li id="" className="loc"><h6 id="loca1" className="d-inline">{d.loca1}</h6>,<h6 id="loca2" className="d-inline ml-2">{d.loca2}</h6>,
                <h6 id="loca3" className="pin ml-2 d-inline">{d.loca3}</h6>,<h6 id="pin" className="ml-4">{d.loca4}</h6></li>
            </div>
        </div>
    </header>
    <div className="section1">
        <div className="container">
            <div className="row pt-3">
                <div className="col-6 line p-0">
                    <div className="col-12">
                        <img src="images/skill.png" className="mb-2" alt="im"/><h3 className="d-inline px-4 ml-2">Technical Skills</h3>
                        <ul id="skil" className="mt-2 ml-3">
                            {d.skills&&d.skills.map((to)=>{
                               return <li>{to}</li>
                            })

                            }
                        </ul>

                    </div>
                    <div className="col-12">
                        <img src="images/details.png" className="mb-2" alt="im"/><h3 className="d-inline px-4 ml-2">Personal Details</h3>
                        <ul id="pd" className="mt-2 ml-3">
                            {d.personalDetails&&d.personalDetails.map((to)=>{
                           return(    <> <li>{to.FullName}</li>
                                <li>{to.DOB}</li>
                                <li>{to.Gender}</li>
                                <li>{to.Martial}</li>
                                <li>Hobbies:  {to.hobbie1},{to.hobbie2},{to.hobbie3}</li>
                               <li> KnownLanguages:  {to.language1},{to.language2}</li>
                                </>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="col-12 p-0">
                        <img src="images/certificate.png" className=" mb-2" alt="im"/><h3 className="d-inline px-4 ml-2">Certifications</h3>
                        <table border="1" width="100%" className="table">
                            <tr id="p">
                            <th>CourseName</th>
                            <th>Duration</th>
                            <th>Institute</th>
                            <th>place</th>
                        </tr>
                        {d.Certification&&d.Certification.map((to)=>{
                           return( <><tr>
                                <td className="view_td">{to.CourseName}</td>
                                <td className="view_td">{to.Duration}</td>
                                <td className="view_td">{to.Institute}</td>
                                <td className="view_td">{to.Place}</td>
                            </tr></>)
                        })
                        }
                        <tbody id="ggg"></tbody> 
                    </table>
                    </div>
                    <div className="col-12">
                        <h3 className="px-4 ml-2 mt-5">Aknowledgement</h3>
                        <p id="akn" className="px-4">{d.akn}</p>
                    </div>
                </div>
                <div className="col-6 p-0">
                    <div className="col-12 p-0">
                        <img src="images/education.png" className="mb-2" alt="im"/><h3 className="d-inline px-1 ml-1">EducationalQualifications</h3>
                        <table border="1" className="table" width="100%">
                            <tr id="p">
                                <th>Course Name</th>
                                <th>Year </th>
                                <th>Institute </th>
                                <th>percentage </th>
                            </tr>
                           {d.education&&d.education.map((to)=>{
                            return(
                                <>
                                <tr>
                                    <td className="view_td">{to.study}</td>
                                    <td className="view_td">{to.Year}</td>
                                    <td className="view_td">{to.institute}</td>
                                    <td className="view_td">{to.percentage}</td>
                                </tr>
                                </>

                                )
                           })

                           }
                            <tbody id="gg"></tbody> 
                        </table>
                    </div>
                    <div className="col-12 mt-5">
                         <img src="images/exper.png" className="mb-2" alt="im"/><h3 className="d-inline px-3 ml-2">Work Experience</h3> 
                         <table border="1" width="100%" className="table" >
                            <tr id="p">
                            <th>Company Name</th>
                            <th>Job Role</th>
                            <th>JobDetails</th>
                            <th>Duration</th>
                        </tr>
                        {d.experiance&&d.experiance.map((to)=>{
                            return(
                                <>
                                    <tr>
                                        <td className="view_td">{to.CompanyName}</td>
                                        <td className="view_td">{to.JobRole}</td>
                                        <td className="view_td">{to.JobDetails}</td>
                                        <td className="view_td">{to.Duration}</td>
                                    </tr>
                                </>
                            )
                        })}
                        <tbody id="gg"></tbody> 
                    </table>
                    </div>
                    <div className="col-12 mt-5">
                        <img src="images/projec.png" className="mb-2" alt="im"/><h3 className="d-inline px-3 ml-2">Project Details</h3>
                        <ul id="pro" className="mt-2 ml-4">
                            {d.project&&d.project.map((to)=>{

                                return(
                                    <>
                                        <li>{to.projectName}</li>
                                        <li>{to.Duration}</li>
                                        <li>{to.role}</li>
                                        <li>{to.technology}</li>
                                        <li>{to.abstract}</li>
                                    </>
                                )
                            })}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>
    <section className="section2">
        <div className="row">
            <div className="col-6">
            </div>
        </div>
    </section>
    <script src="js/disp2.js">
      
    </script>
</div>
        </>
    )
}