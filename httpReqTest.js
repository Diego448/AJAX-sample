function algo() {
	var httpReq;
	if(window.XMLHttpRequest) {
		httpReq = new XMLHttpRequest();
	}else {
		httpReq = new ActiveXObject("Microsoft.XMLHTTP");
	}
	httpReq.open("GET", "http://localhost/Test/phpTest2.php", true);
	httpReq.send();
	httpReq.onreadystatechange = function () {
		if(httpReq.readyState === 4 && httpReq.status === 200) {
			var response = JSON.parse(httpReq.responseText);
			console.log(response);
		}
		//httpReq.readyState==4 && httpReq.status==200;
		//var response = JSON.parse(httpReq.responseText);
		//console.log(response.<attribute>);
	}
}