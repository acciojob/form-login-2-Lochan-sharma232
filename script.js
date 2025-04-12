document.addEventListener('DOMContentLoaded',function() {
document.getElementById('myform').addEventListener('submit',function(event){
//your JS code here. If required.
event.preventDefault();
const firstName=document.getElementById('firstName').value;
const lastName=document.getElementById('lastName').value;
const phoneNumber=document.getElementById('phoneNumber').value;
const emailID=document.getElementById('emailID').value;
	
const alertmg=`First Name:${firstName}\n Last Name:${lastName}\nPhone Number:${phonenumber}\n emailID${EmailID}`;
		alert(alertmg);
});		
});