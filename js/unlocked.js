var s = 0;
var m = 0;
var h = 0;


var sA = 0;
var mA = 0;
var hA = 0;

var sB = 0;
var mB = 0;
var hB = 0;




var session = parseInt(localStorage.Session);
tR = session;
var numberOfUsers  = parseInt(localStorage.numberOfUsers); // don't need this now

var paused = 1;
var interval = setInterval(increment, 10);

// Display session time limit
function sessionTimeLimit(){
    document.getElementById("sessionTime").innerHTML = session;
}

// Display session time remaining at start
function timeRemaining(){
    document.getElementById("timeRemaining").innerHTML = session;
}

function startA() {
    pause = 0;
    // enable pause button
    // disable A start button
    // pause counter B
}

function startB() {
    pause = 0;
    // enable pause button
    // disable B start button
    // pause counter B
}

function uPause() {
    pause = 1;
}

function end() {
    pause = 1;
}

function increment() { //every 60 seconds, reset seconds and increment minutes
    if (pause == 0) {
        s = s % 360 + 1;
        if (s == 60) {
            s = 0;
            m++;
        }

    	document.getElementById("timeBox").innerHTML = (h + ": " + m + ": " + s);

        // update timeRemaining
        tR = session - m;
        document.getElementById("timeRemaining").innerHTML = (tR + " minutes");
    }
}


$(document).ready(function () {

    sessionTimeLimit();
    timeRemaining();

    $("#startA").click(function () {
        startA();
    });
    $("#startB").click(function () {
        startB();
    });
    $("#pause").click(function () {
        uPause();
    });
    $("#end").click(function () {
        end();
    });
});



