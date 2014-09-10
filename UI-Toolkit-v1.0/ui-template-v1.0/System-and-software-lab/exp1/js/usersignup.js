
function makePOSTRequestsignup(url, parameters) {
	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{
//		alert(xmlhttp.responseText);
		if(xmlhttp.responseText==" "){
			var poststr = "username=" + encodeURI( document.getElementById("preferredusername").value ) + "&password=" + encodeURI( document.getElementById("preferredpassword").value );
		        makePOSTRequest('php/loginattempt.php', poststr);
			

			document.getElementById('signup').style.display="none";
			document.getElementById('username').value=document.getElementById("preferredusername").value;
			document.getElementById('password').value=document.getElementById("preferredpassword").value
			}
		else{
			alert(xmlhttp.responseText);		
		}
		}
	}

	xmlhttp.open('POST', url, true);
	xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//	http_request.setRequestHeader("Content-length", parameters.length);
//	http_request.setRequestHeader("Connection", "close");
	xmlhttp.send(parameters);

}
function getandpostsignup(obj) {
	var poststr = "yourname=" + encodeURI( document.getElementById("yourname").value ) + "&preferredpassword=" + encodeURI( document.getElementById("preferredpassword").value) + "&preferredusername=" + encodeURI( document.getElementById("preferredusername").value )+ "&email=" + encodeURI( document.getElementById("email").value );
	makePOSTRequestsignup('php/signupattempt.php', poststr);

}

function clicksignup(){
	document.getElementById('login').style.display="none";
	document.getElementById('signup').style.display="block";
}
var captchaStatus="";
function signupattempt(obj){

/*	if(!verifyAllEntered()){
		document.getElementById("signup-warning").innerHTML="All the below fields are mandatory!";
		return ;
	}
	if(!verifyUsernameAvailability()){

		document.getElementById("signup-warning").innerHTML="Username not available. Choose a different one!";	
		return ;

	}	
	if(!verifyEmail()){
		document.getElementById("signup-warning").innerHTML="Not a valid email ID!";
		return;
	}
	if(!verifyReEmail()){
		document.getElementById("signup-warning").innerHTML="Email IDs didn't match!";
		return;
	}

	if(!verifyRePassword()){
		document.getElementById("signup-warning").innerHTML="Passwords didn't match!";	
		return;
	}
*/
	if(!captchaStatus){
		document.getElementById("signup-warning").innerHTML="Incorrect Captcha text!";

	}
	getandpostsignup(obj);

}

function verifyAllEntered(){
	if(document.getElementById('yourname').value==""||document.getElementById('preferredpassword').value==""||document.getElementById('repreferredpassword').value==""||document.getElementById('email').value==""||document.getElementById('reemail').value=="")
		return false;
	else
		return true;
}
function verifyUsernameAvailability(){
	return true;
	
}
function verifyEmail(){
	return true;
}
function verifyReEmail(){
	if(document.getElementById('reemail').value.toString()!=document.getElementById('email').value.toString())
		return false;
	return true;

}
function verifyRePassword(){

	//alert(document.getElementById('repreferredpassword').value+ " "+document.getElementById('preferredpassword').value);
	if(document.getElementById('repreferredpassword').value.toString()!=document.getElementById('preferredpassword').value.toString())
		return false;
	return true;
}

function verifyCaptcha(){

	if (window.XMLHttpRequest)
	{// code for IE7+, Firefox, Chrome, Opera, Safari
		xmlhttp=new XMLHttpRequest();
	}
	else
	{// code for IE6, IE5
		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
	}
	captchaStatus=false;
	xmlhttp.onreadystatechange=function()
	{
		if (xmlhttp.readyState==4 && xmlhttp.status==200)
		{

			if(xmlhttp.responseText=="true"){
				captchaStatus=true;
			}
		}
	}
	xmlhttp.open("POST","php/evalcaptcha.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("captcha="+document.getElementById("captcha").value.toString());

}
