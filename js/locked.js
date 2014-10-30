var sA = 60;
var mA = 14;
var hA = 0;

var sB = 60;
var mB = 14;
var hB = 0;

var pauseA = 1;
var pauseB = 1;

var intervalA = setInterval(decrementA, 1000);
var intervalB = setInterval(decrementB, 1000);



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
    pauseA = 0;
    pauseB = 1;
}

function startB() {
    pauseA = 1;
    pauseB = 0;
}

function pause() {
    pauseA = 1;
    pauseB = 1;
 

    counterValueA();
    counterValueB();
}

function end() {
    pauseA = 1;
    pauseB = 1;

    sA = 0;
    sB = 0;
    mA=0;
    mB=0;
    hA=0;
    hB=0;


    counterValueA();
    counterValueB();
}

function counterValueA() {
    document.getElementById("timeBoxA").innerHTML = (hA + ": " + mA + ": " + sA);
}

function counterValueB() {
    document.getElementById("timeBoxB").innerHTML = (hB + ": " + mB + ": " + sB);
}