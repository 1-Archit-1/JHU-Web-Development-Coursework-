function sayHello(){

	
	x=document.getElementById("text").value;
	//document.getElementById("output").textContent="Hello  "+x;
	
	if(x!="student")
		document.getElementById("output").innerHTML="<h2>Hello "+x+"</h2>"
	else

	{
		document.getElementById("output").innerHTML="<h2>Hello "+x+"</h2>"
		x=document.getElementById("title").textContent;
		document.querySelector("#title").textContent=x+ " happy Studying"
	}	

}