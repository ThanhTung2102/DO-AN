var urlParams=new URLSearchParams(location.search);
var id=urlParams.get("userID");
function toAboutUs(){
    if (id==null)
    { window.location.href="About_Us.html"}
    else 
    {
        window.location.href="About_Us.html?userID="+id
    }
}
function blog(){
    if(id==null){

    }
    else{
        location.href="blog.html?userID="+id
    }
}
function patientPortal(){
    
        location.href="Patient_Portal.html?userID="+id
}
function medicalRecord(){
    if (id==null)
    { location.href="Terms_Of_Service.html"}
    else 
    location.href="Patient_Record.html?userID="+id
}
function virtualSchedule(){
     
    if (id==null)
    { location.href="Terms_Of_Service.html"}
    else 
    {
       window.location.href="Schedule_Virtual.html?userID="+id
    }
}
function homecareSchedule(){
    if (id==null)
    {location.href="Terms_Of_Service.html"}
    else 
    {
        location.href="Schedule_Homecare.html?userID="+id
    }
    
}
function basicSchedule(){
    if (id==null)
    {location.href="Terms_Of_Service.html"}
    else 
    {
        location.href="Schedule_Basic.html?userID="+id
    }
    
}