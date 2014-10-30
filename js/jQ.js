$(document).ready(function () {
    $("#startA").click(function () {
        startA();
        $('.sideA').css("background-color","green");
        $('#startA').css("visibility","hidden");
        $('.sideB').css("background-color","#EEE");
        $('#startB').css("visibility","visible");
        $('#pause').css("background-color","#EEE");
    });

    $("#startB").click(function () {
        startB();
        $('.sideB').css("background-color","green");
        $('#startB').css("visibility","hidden");
        $('.sideA').css("background-color","#EEE");
        $('#startA').css("visibility","visible");
        $('#pause').css("background-color","#EEE");
    });

    $("#pause").click(function () {
        pause();
        $('.sideB').css("background-color","#FCC");
        $('#startB').css("visibility","visible");
        $('.sideA').css("background-color","#FCC");
        $('#pause').css("background-color","red");
        $('#startA').css("visibility","visible");
    });

    $("#end").click(function () {
        end();
        $('.sideB').css("background-color","#EEE");
        $('#startB').css("visibility","visible");
        $('.sideA').css("background-color","#EEE");
        $('#startA').css("visibility","visible");
        $('#pause').css("background-color","#EEE");
    });
});