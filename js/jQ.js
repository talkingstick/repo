$(document).ready(function () {

    $("#startA").click(function () {
        startA();
            $('.sideA').css("background-color","#399464");
            $('#startA').css("visibility","hidden");
            $('.sideB').css("background-color","#D7EAE0");
            $('#startB').css("visibility","visible");
            $('#pause').css("background-color","#EEE");
    });

    $("#startB").click(function () {
        startB();
            $('.sideB').css("background-color","#399464");
            $('#startB').css("visibility","hidden");
            $('.sideA').css("background-color","#D7EAE0");
            $('#startA').css("visibility","visible");
            $('#pause').css("background-color","#EEE");
    });

    $("#pause").click(function () {
        $('.sideB').css("background-color","#E8B2B2");
        $('#startB').css("visibility","visible");
        $('.sideA').css("background-color","#E8B2B2");
        $('#pause').css("background-color","#B20000");
        $('#startA').css("visibility","visible");
        pause();
    });

    $("#end").click(function () {
        end();
        $('.sideB').css("background-color","#EEE");
        $('#startB').css("visibility","visible");
        $('.sideA').css("background-color","#EEE");
        $('#startA').css("visibility","visible");
        $('#pause').css("background-color","#EEE");   
        $('#end').css("background-color","#f60");
    });

    $("#instructions").click(function () {
        $('#instructions').css("display","none");
        $('#instructionsContent').css("display","none");
        localStorage.visit = "old";
    });
    $("#instructionsContent").click(function () {
        $('#instructions').css("display","none");
        $('#instructionsContent').css("display","none");
        localStorage.visit = "old";
    });

    $( ".fa-refresh" ).click(function() {
         location.reload();
    });

    if (localStorage.timeUpA  == 1 ) {
        $('.sideA').css("background-color","#E8B2B2");
    }
    if (localStorage.timeUpB  == 1 ) {
        $('.sideB').css("background-color","#E8B2B2");
    }

});
