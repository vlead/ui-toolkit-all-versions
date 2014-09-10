var http_request = false;

function makePOSTRequest(url, parameters) {
	http_request = false;
	if (window.XMLHttpRequest) { // Mozilla, Safari,...
		http_request = new XMLHttpRequest();
		if (http_request.overrideMimeType) {
			// set type accordingly to anticipated content type
			//http_request.overrideMimeType('text/xml');
			http_request.overrideMimeType('text/html');
		}
	} else if (window.ActiveXObject) { // IE
		try {
			http_request = new ActiveXObject("Msxml2.XMLHTTP");
		} catch (e) {
			try {
				http_request = new ActiveXObject("Microsoft.XMLHTTP");
			} catch (e) {}
		}
	}
	if (!http_request) {
		alert('Cannot create XMLHTTP instance');
		return false;
	}

	http_request.onreadystatechange = alertContents;
	http_request.open('POST', url, true);
	http_request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
//	http_request.setRequestHeader("Content-length", parameters.length);
//	http_request.setRequestHeader("Connection", "close");
	http_request.send(parameters);
}

function alertContents() {
	if (http_request.readyState == 4) {
		if (http_request.status == 200) {
			//alert(http_request.responseText);
			result = http_request.responseText;

			//alert(result);
			if(result=="Login successful!"){
			document.getElementById('instr').style.display="block";
			document.getElementById('terminal').style.display="block";

			document.getElementById('login').style.display="none";
			document.getElementById('logout').style.display="block";
			document.getElementById('password').value="";
		
			document.getElementById('prompt').innerHTML= document.getElementById("username").value+"@pascal:~/$";
			}
			else{
				alert("User login failed. Please try again.");
			}

		} else {
			alert('There was a problem with the request.');
		}
	}
}

function get(obj) {
	var poststr = "username=" + encodeURI( document.getElementById("username").value) +
		"&password=" + encodeURI( document.getElementById("password").value );
	makePOSTRequest('php/loginattempt.php', poststr);


}

function loginattempt(obj){

	document.getElementById("loginform").style.cursor="wait";
	document.getElementById("username").style.cursor="wait";
	document.getElementById("password").style.cursor="wait";
	get(obj);
	
	document.getElementById("loginform").style.cursor="default";
	document.getElementById("username").style.cursor="default";
	document.getElementById("password").style.cursor="default";


}
function guestlogin(){

	document.getElementById("username").value="guest";
	document.getElementById("password").value="guestpass";

	var poststr = "username=" + encodeURI( document.getElementById("username").value) +
		"&password=" + encodeURI( document.getElementById("password").value );

	makePOSTRequest('php/loginattempt.php', poststr);


}
function logout(){
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

			document.getElementById("terminal").style.display="none";

			document.getElementById("instr").style.display="none";
			document.getElementById("logout").style.display="none";
			document.getElementById("login").style.display="block";
		}
	}
	xmlhttp.open("POST","php/logout.php",true);
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send("logout=true");


}
