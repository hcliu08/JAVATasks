function initAJAX() {
	var xmlHttpRequest;
	
	if (window.XMLHttpRequest) {
	    // code for modern browsers
		xmlHttpRequest = new XMLHttpRequest();
	 } else {
	    // code for old IE browsers
		 xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	} 
	return xmlHttpRequest;
}

function getWeather(){
	var zipcode=document.getElementById("zipcode").value;
	var AJAX = initAJAX();
	AJAX.open("GET", "https://api.openweathermap.org/data/2.5/weather?zip="+zipcode+",us&appid=98dc7b80659f471bd31bf5e5a3eba071", true);
	AJAX.send();
	AJAX.onreadystatechange = processResponse;
	
	function processResponse() {
		if(AJAX.readyState == 4 && AJAX.status == 200) {
			console.log(AJAX.responseText);
		}
	}
}