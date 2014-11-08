function checkVisit () {
	console.log(localStorage.visit);
	if (localStorage.visit == "undefined") {
		document.getElementById("instructions").style.visibility="visible";
		console.log(localStorage.visit);
	} else if (localStorage.visit == "old") {
		document.getElementById("instructions").style.visibility="hidden";
	}
}
function start () {
    localStorage.numberOfUsers = document.getElementById("NumberofUsers").value;
    localStorage.Session = document.getElementById("Session").value;
    console.log(localStorage);

    if (document.getElementById("locked").checked == true) {
    	window.location.replace("locked.html");
    }
    if (document.getElementById("unlocked").checked == true) {
    	window.location.replace("unlocked.html");
    }
}