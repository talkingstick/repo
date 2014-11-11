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
var tR = session; //at start, time Remaining = session time

var pause = 1;
var pauseA = 1;
var pauseB = 1; 
var interval = setInterval(increment, 10);
var intA = setInterval(intervalA, 10);
var intB = setInterval(intervalB, 10);

// Display session time limit
function sessionTimeLimit() {
    document.getElementById("sessionTime").innerHTML = session;
}

// Display session time remaining at start
function timeRemaining() {
    document.getElementById("timeRemaining").innerHTML = session;
}

function uPause() {
    pauseA = 1;
    pauseB = 1;
    pause = 1;
}

function end() {
    pause = 1;
    pauseA = 1;
    pauseB = 1;
    localStorage.lA = 0;
    localStorage.lB = 0;
    localStorage.mode = "unlocked";
    localStorage.uA = mA; //pass this to analytics
    localStorage.uB = mB; //pass this to analytics
    document.getElementById("end").innerHTML = ("<a href='analytics.html' rel='external'>Time is up. View analytics.</a>");

    var e;
    e = document.getElementById("end");
    e.className = e.className + " endActive" ; // adding new class name

}

function increment() { //every 60 seconds, reset seconds and increment minutes
    if (pause === 0) {
        s = s % 360 + 1;
        if (s == 60) {
            s = 0;
            m++;
        }
        //update session timer
        document.getElementById("timeBox").innerHTML = (h + ": " + m + ": " + s);

        // update session timeRemaining
        tR = session - m;
        console.log("tR within the increment function", tR);
        document.getElementById("timeRemaining").innerHTML = (tR + " minutes");

        if (tR === 0) {
            end();
        }
    }
}

///function stopAtTimelimit
function stopAtTimeLimit() {
    console.log('timeRemaining: ', tR);
    if (tR === 0) {
        end();
    }
    
}

function intervalA(){
    if (pauseA === 0) {
        sA = sA % 360 + 1;
            if (sA == 60) {
                sA = 0;
                mA++;
            }
        timeUsedA();
    }

}
function intervalB(){
    if (pauseB == 0) {
        sB = sB % 360 + 1;
            if (sB == 60) {
                sB = 0;
                mB++;
            }
    timeUsedB();
    }
}

function timeUsedA() {
    document.getElementById("timeUsedA").innerHTML = mA;
}

function timeUsedB() {
    document.getElementById("timeUsedB").innerHTML = mB;
}

function startA() { // A0 B1 u0
    pause = 0;
    pauseA = 0;
    pauseB = 1;
}

function startB() {
    pause = 0;
    pauseA = 1;
    pauseB = 0;
}


$(document).ready(function () {

    sessionTimeLimit();
    timeRemaining();
    stopAtTimeLimit();

    if (tR === 0) {
        end();
    }
    timeUsedA();
    timeUsedB();

    $("#startA").click(function () {
        startA();
        timeUsedA();
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