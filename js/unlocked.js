var s = 0;
var m = 0;
var h = 0;

var paused = 1;

var interval = setInterval(increment, 10);

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

function pause() {
    pause = 1;
    x = 0;
    counterValue();
    //enable start buttons
    //disable pause button
}

function end() {
    pause = 1;
    // disable pause and start buttons
    // link to start
}

function increment() { //every 60 seconds, reset seconds and increment minutes
    if (pause == 0) {
        s = s % 360 + 1;
        if (s == 60) {
            s = 0;
            m++;
        }
	document.getElementById("timeBox").innerHTML = (h + ": " + m + ": " + s);
    console.log(document.getElementById("timeBox").innerHTML);
    console.log(h + ": " + m + ": " + s);
    }
}

$(document).ready(function () {
    $("#startA").click(function () {
        startA();
        console.log('startedA');
    });

    $("#startB").click(function () {
        startB();
        console.log('startedB');
    });
    $("#pause").click(function () {
        pause();
        console.log('paused');
    });
    $("#end").click(function () {
        end();

        console.log('ended');
    });
});


//update timer
function counterValue() {
    
}