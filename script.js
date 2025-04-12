document.addEventListener('DOMContentLoaded',function() {
document.getElementById('myform').addEventListener('submit',function(event){
//your JS code here. If required.
event.preventDefault();
const firstName=document.qurySelector('firstName').value;
const lastName=document.querySelector('lastName').value;
const phoneNumber=document.querySelector('phoneNumber').value;
const emailID=document.querySelector('emailID').value;
	
const formlogin=`First Name:${firstName}\n Last Name:${lastName}\nPhone Number:${phonenumber}\n EmailID${emailID}`;
		alert(formlogin);
});		
});