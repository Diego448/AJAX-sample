function req() {
	var httpReq;
	var response;
	if(window.XMLHttpRequest) {
		httpReq = new XMLHttpRequest();
	}else {
		httpReq = new ActiveXObject("Microsoft.XMLHTTP");
	}
	//var age = document.getElementById("age").value();
	httpReq.open("GET", "phpTest2.php", true);
	httpReq.send();
	httpReq.onreadystatechange = function () {
		if(httpReq.readyState === 4 && httpReq.status === 200) {
			//console.log(httpReq);
			var response = JSON.parse(httpReq.responseText);
			//console.log(response);
			fillSelect(response);
		}
		//httpReq.readyState==4 && httpReq.status==200;
		//var response = JSON.parse(httpReq.responseText);
		//console.log(response.<attribute>);
	}
}
function fillSelect(res) {
	var selection = document.getElementById("selection");
	selection.innerHTML = "<option>Pick one</option>";
	for(i = 0; i < res.length; i++) {
		selection.innerHTML += "<option>" + res[i].nickName + "</option>";
	}
}
function selectByAge() {
	var age = document.getElementById("age").value;
	var selection = document.getElementById("selection");
	selection.innerHTML = "<option>Pick one</option>";
	var httpReq;
	var response;
	if(window.XMLHttpRequest) {
		httpReq = new XMLHttpRequest();
	}else {
		httpReq = new ActiveXObject("Microsoft.XMLHTTP");
	}
	httpReq.open("GET", "phpTest2.php?age=" + age, true);
	httpReq.send();
	httpReq.onreadystatechange = function () {
		if(httpReq.readyState === 4 && httpReq.status === 200) {
			//console.log(httpReq);
			var response = JSON.parse(httpReq.responseText);
			//console.log(response);
			fillSelect(response);
		}
	}
}
function showInfo() {
	var name = document.getElementById("name");
	var lastName = document.getElementById("lastName");
	var gender = document.getElementById("gender");
	var bornDate = document.getElementById("bornDate");
	var age = document.getElementById("age2");
	name.innerHTML = "Name:";
	lastName.innerHTML = "Last name:";
	gender.innerHTML = "Gender:";
	bornDate.innerHTML = "Born date:";
	age.innerHTML = "Age:";
	var selection2 = document.getElementById("selection").value;
	var httpReq;
	var response;
	if(window.XMLHttpRequest) {
		httpReq = new XMLHttpRequest();
	}else {
		httpReq = new ActiveXObject("Microsoft.XMLHTTP");
	}
	httpReq.open("GET", "phpTest2.php?nickName=" + selection2 , true);
	httpReq.send();
	httpReq.onreadystatechange = function () {
		if(httpReq.readyState === 4 && httpReq.status === 200) {
			//console.log(httpReq);
			var response = JSON.parse(httpReq.responseText);
			//console.log(response);
			date = new Date(response.bornDate);
			//console.log(date.toDateString());
			name.innerHTML +=  " " + response.firstName;
			lastName.innerHTML +=  " " + response.lastName;
			gender.innerHTML +=  " " + response.gender;
			bornDate.innerHTML +=  " " + date.toDateString();
			age2.innerHTML +=  " " + response.age;
		}
	}

}