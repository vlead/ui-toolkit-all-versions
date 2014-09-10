var cmdhistory = new Array();
var current=0;
var currenthistorybeingviewed = 0;
function trim(s)
{
	var l=0; var r=s.length -1;
	while(l < s.length && s[l] == ' ')
	{	l++; }
	while(r > l && s[r] == ' ')
	{	r-=1;	}
	return s.substring(l, r+1);
}

function showHint(event,str)
{

	if (event.keyCode == 13 /* enter */ && !event.altKey && !event.shiftKey) {

		str = trim(str);
		var strarray = str.split(" ");
		var maincmd = "";
		if(strarray.length>0)
			maincmd = strarray[0];
		//      alert("hey");
		if (window.XMLHttpRequest)
		{// code for IE7+, Firefox, Chrome, Opera, Safari
			xmlhttp=new XMLHttpRequest();
		}
		else
		{// code for IE6, IE5
			xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
		if(str=="")
		{
			var d= new Date();
			var t = d.getTime();

			var ele= document.getElementById('input').cloneNode(true);

			document.getElementById("prompt").id="prompt"+t;
			document.getElementById('input').id="input"+t;
			document.getElementById("output").style.display="";
			document.getElementById("output").id = "output"+t;
			document.getElementById("inputfield").id="heheid"+t;
			document.getElementById("heheid"+t).readOnly=true;
			document.getElementById('input'+t).parentNode.appendChild(ele);
			document.getElementById('inputfield').focus();
			document.getElementById('inputfield').value="";
			return document.getElementById('input');

		}
                else if(str=="clear")
		{
			var v = createNewPrompt_execcmd_php(event,str);	
			document.getElementById('terminal').innerHTML="";
			document.getElementById('terminal').appendChild(v);
			document.getElementById('inputfield').focus();
		}
		else if(str=="logout"){
			logout();
		}
		else if(str=="start"||str=="next"||str=="prev")
		{
			var inst = document.getElementById('instruction');

			if(str == "start")
				inst.title = "1";
			if(str == "next" && parseInt(inst.title)<4)
				inst.title = parseInt(inst.title)+1;
			if(str == "prev" && parseInt(inst.title)>0)
				inst.title = parseInt(inst.title)-1;
			var tid = inst.title;
			//		alert(tid);
			xmlhttp.onreadystatechange=function()
			{
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					document.getElementById("instruction").innerHTML=xmlhttp.responseText;

					createNewPrompt_tasksfetch_php(event,str);
				}
			}
			xmlhttp.open("POST","php/taskfetch.php",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("cmd="+str+"&tid="+tid);
		}
		else if(maincmd == "cd")
		{
			var userprompt = document.getElementById("prompt").innerHTML;
			userprompt = trim(userprompt);
			var userpromptsplit = userprompt.split("@");
			var userid = userpromptsplit[0];
			var otherthanuseridsplit = userpromptsplit[1].split(":");
			var machinename = otherthanuseridsplit[0];
			var userpath = otherthanuseridsplit[1];
			userpath = userpath.substring(0,userpath.length-1);		
			//		alert(userid);
			xmlhttp.onreadystatechange=function()
			{
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					createNewPrompt_cdsupport_php(event,str);
				}
			}

			xmlhttp.open("POST","php/cdsupport.php",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("q="+str+"&path="+userpath+"&userid="+userid);

		}
		else if(str=="done"){

			var inst = document.getElementById('instruction');
			var tid = parseInt(inst.title);

			/*		xmlhttp.onreadystatechange=function()
					{
					if (xmlhttp.readyState==4 && xmlhttp.status==200)
					{
					document.getElementById("instruction").innerHTML=xmlhttp.responseText;
					createNewPrompt_tasksfetch_php(event,str);
					}
					}
					xmlhttp.open("POST","taskevaluator.php",true);
					xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
					xmlhttp.send("tid="+tid);*/
		}
		else {
			var userprompt = document.getElementById("prompt").innerHTML;
			var userpromptsplit = userprompt.split("@");
			var userid = userpromptsplit[0];
			var otherthanuseridsplit = userpromptsplit[1].split(":");
			var machinename = otherthanuseridsplit[0];
			var userpath = otherthanuseridsplit[1];
			userpath = userpath.substring(0,userpath.length-1);		
			xmlhttp.onreadystatechange=function()
			{
				if (xmlhttp.readyState==4 && xmlhttp.status==200)
				{
					createNewPrompt_execcmd_php(event,str);
				}
			}

			xmlhttp.open("POST","php/execcmd.php",true);
			xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
			xmlhttp.send("q="+str+"&path="+userpath+"&userid="+userid);

		}

		cmdhistory[current] = str;
		current = current+1;
		currenthistorybeingviewed = cmdhistory.length;

	}
	else if(event.keyCode == 38 /* enter */ && !event.altKey && !event.shiftKey){

		if(currenthistorybeingviewed > 0){
		currenthistorybeingviewed = currenthistorybeingviewed - 1;
		document.getElementById('inputfield').value=cmdhistory[currenthistorybeingviewed];
		document.getElementById('inputfield').focus();
		}

	}

	else if(event.keyCode == 40/* enter */ && !event.altKey && !event.shiftKey){

		if(currenthistorybeingviewed < cmdhistory.length-1){
		currenthistorybeingviewed = currenthistorybeingviewed + 1;
		document.getElementById('inputfield').value=cmdhistory[currenthistorybeingviewed];
		document.getElementById('inputfield').focus();
		}
		else{

		document.getElementById('inputfield').value="";
		document.getElementById('inputfield').focus();
		}

	}
}
function createNewPrompt_tasksfetch_php(event,str){

	var d= new Date();
	var t = d.getTime();

	var ele= document.getElementById('input').cloneNode(true);
	document.getElementById('input').id="input"+t;
	document.getElementById("output").style.display="";

	document.getElementById("prompt").id="prompt"+t;
	document.getElementById("instruction").innerHTML=xmlhttp.responseText;
	document.getElementById("output").id = "output"+t;
	document.getElementById("inputfield").id="heheid"+t;
	document.getElementById("heheid"+t).readOnly=true;
	document.getElementById('input'+t).parentNode.appendChild(ele);
	document.getElementById('inputfield').focus();
	document.getElementById('inputfield').value="";
	return document.getElementById('input');
}

function createNewPrompt_execcmd_php(event,str){

	var d= new Date();
	var t = d.getTime();

	var ele= document.getElementById('input').cloneNode(true);

	document.getElementById("prompt").id="prompt"+t;
	document.getElementById('input').id="input"+t;
	document.getElementById("output").style.display="";
	document.getElementById("output").innerHTML=xmlhttp.responseText;
	document.getElementById("output").id = "output"+t;
	document.getElementById("inputfield").id="heheid"+t;
	document.getElementById("heheid"+t).readOnly=true;
	document.getElementById('input'+t).parentNode.appendChild(ele);
	document.getElementById('inputfield').focus();
	document.getElementById('inputfield').value="";
	return document.getElementById('input');
}


function createNewPrompt_cdsupport_php(event,str){

	var d= new Date();
	var t = d.getTime();

	var ele= document.getElementById('input').cloneNode(true);

	document.getElementById('input').id="input"+t;
	document.getElementById("output").style.display="";

	//        document.getElementById("output").innerHTML=xmlhttp.responseText;
	var response = xmlhttp.responseText;
	//	response = trim(response);
	var respsplit = response.split(":::");
	var promptpath= "";
	if(respsplit.length==5)
	{
		var locationofvlabaccounts = respsplit[0];
		var userid = respsplit[1];
		var pwd = respsplit[2];
		var errmsg = respsplit[3];
		var currpath  = respsplit[4];
		if(errmsg=="-"){

			promptpath = pwd.replace(locationofvlabaccounts+userid,"~");
			if(promptpath=="~"||promptpath=="")
			{
				promptpath="~/";
			}
		}
		else
		{
			document.getElementById("output").innerHTML=errmsg;
		}


		document.getElementById("prompt").id="prompt"+t;

		document.getElementById("output").id = "output"+t;
		document.getElementById("inputfield").id="heheid"+t;
		document.getElementById("heheid"+t).readOnly=true;
		document.getElementById('input'+t).parentNode.appendChild(ele);
		document.getElementById('inputfield').focus();
		document.getElementById('inputfield').value="";
		if(errmsg=="-")
		{

			document.getElementById("prompt").innerHTML = userid+"@pascal:"+promptpath+"$";
		}
		return document.getElementById('input');
	}
}

