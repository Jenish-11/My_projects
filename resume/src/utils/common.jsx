

function logg(islog,login){
    if(localStorage.getItem("resume_logins")==="true"){
            
        islog(true)
        // console.log(login);
    }
        else if(localStorage.getItem("resume_logins")==="false"){
            islog(false)
            // console.log(login);
        }

}
export default logg