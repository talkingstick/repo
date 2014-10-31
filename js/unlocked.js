var s = 60;
var m = 14;
var h = 0;

var pause = 1;
var pauseA = 1;
var pauseB = 1;

//start timer
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
//pause
function pause(){
	pause = 1;
	//enable start buttons
	//disable pause button
}
//pauseA
function pauseA(){
	pauseA = 1;
}
//pauseB
function pauseB(){
	pauseB = 1;
}
//end
function end(){
	pause = 1;
	// disable pause and start buttons
	// link to start
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

function increment() { //every 60 seconds, reset seconds and increment minutes
    if (pause == 0) {
        s = s % 360 + 1;
        if (s == 60) {
            s = 0;
            m++;
        }
        counterValue();
    }
}

//update timer
function counterValue() {
    document.getElementById("timeBox").innerHTML = (h + ": " + m + ": " + s);
}