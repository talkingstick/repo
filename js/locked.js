var session = parseInt(localStorage.Session);
var numberOfUsers  = 2;

var sA = 0;
var mA = Math.round(session/numberOfUsers);
var hA = 0;

var sB = 0;
var mB = Math.round(session/numberOfUsers);
var hB = 0;

var pauseA = 1;
var pauseB = 1;

var intervalA = setInterval(decrementA, 100); //10 for testing use 1000 for real time
var intervalB = setInterval(decrementB, 1000); //10 for testing use 1000 for real time

function decrementA() {
    if (pauseA == 0) {
        sA = sA % 360 - 1;
        if (sA == -1) {
            sA = 59;
            mA--;
        }
        if (mA == -1) {
            mA = 59;
            hA--;
        }
        counterValueA();
    }
}

function decrementB() {
    if (pauseB == 0) {
        sB = sB % 360 - 1;
        if (sB == -1) {
            sB = 59;
            mB--;
        }
        if (mB == -1) {
            mB = 59;
            hB--;
        }
        counterValueB();
    }
}

function startA() {
    if (mA==0&&sA==0) {
        pauseA = 1;
    } else {
        pauseA = 0;
        pauseB = 1;
    }
}

function startB() {
    if (mB<=0&&sB<=0) {
        pauseB = 1;
    } else {
        pauseA = 1;
        pauseB = 0;
    }
}

function pause() {
    pauseA = 1;
    pauseB = 1;
 
    document.getElementById('nameA').innerHTML = localStorage.nameA;
    document.getElementById('nameB').innerHTML = localStorage.nameB;

    counterValueA();
    counterValueB();
}

function end() {
    pauseA = 1;
    pauseB = 1;
    
    localStorage.uA=0;
    localStorage.uB=0;
    localStorage.mode="locked";
    localStorage.mA=mA;
    localStorage.mB=mB;
    localStorage.sA=sA;
    localStorage.sB=mB;
    
    window.location.replace("analytics.html");
}

function counterValueA() {
    document.getElementById("timeBoxA").innerHTML = (mA + ": " + sA + "<p id='minRemaining'>minutes remaining</p>");
    localStorage.timeUpA=0;

    if (mA<=0&&sA<=0) {
        pauseA=1;
        document.getElementById("timeBoxA").innerHTML = ("Time's Up!");
        localStorage.timeUpA=1;
    }
}

function counterValueB() {
    document.getElementById("timeBoxB").innerHTML = (mB + ": " + sB +"<p id='minRemaining'>minutes remaining</p>");
    localStorage.timeUpB=0;

    if (mB<=0&&sB<=0) {
        pauseB=1;
        document.getElementById("timeBoxB").innerHTML = ("Time's Up!");
        localStorage.timeUpB=1;
    }
}