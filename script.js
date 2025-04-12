document.addEventListener('DOMContentLoaded',function() {
    document.getElementById('myform').addEventListener('submit',function(event){
    //your JS code here. If required.
    event.preventDefault();
    const firstName=document.getElementById('firstName').value;
    const lastName=document.getElementById('lastName').value;
    const phoneNumber=document.getElementById('phonenumber').value;
    const emailID=document.getElementById('emailID').value;
        
    const formlogin=`First Name:${firstName}\n Last Name:${lastName}\n Phone Number:${phoneNumber}\n EmailID: ${emailID}`;
            alert(formlogin);
    });		
    });