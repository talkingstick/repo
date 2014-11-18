var session = parseInt(localStorage.Session);
var sB = parseInt(localStorage.sB);
var session = parseInt(localStorage.Session);


var mode = localStorage.mode;
var sessionEach = (session/2)*60;

if (mode =="locked")  {

  var minutesA = Math.round(parseInt(localStorage.Session)/60) - (parseInt(localStorage.mA));
  var minutesB = Math.round(parseInt(localStorage.Session)/60) - (parseInt(localStorage.mB));
  
  var secondsA = 60 - parseInt(localStorage.sA);
  var secondsB = 60 - parseInt(localStorage.sB);

  var counterA = (parseInt(localStorage.mA)*60) + parseInt(localStorage.sA);
  var counterB = (parseInt(localStorage.mB)*60) + parseInt(localStorage.sB);

  var Aspoken = sessionEach - counterA;
  var Bspoken = sessionEach - counterB;

  var percentA = Math.round(Aspoken/(Aspoken+Bspoken))*100;
  var percentB = Math.round(Bspoken/(Aspoken+Bspoken))*100;

} else if (mode == "unlocked") {
    var mAspoken = parseInt(localStorage.uA);
    var mBspoken = parseInt(localStorage.uB);
    console.log(mAspoken,mBspoken);
    var mA = Math.round(mAspoken/(mAspoken+mBspoken)*100);
    var mB = Math.round(mBspoken/(mAspoken+mBspoken)*100);
} 

 function result () {
    document.getElementById("result").innerHTML = (localStorage.nameA + " spoke for: " +   minutesA + ":"+  secondsA + "mins <br>& " 
      + localStorage.nameB + " spoke for: " +   minutesB + ":"+  secondsB + "mins");
}


function morris () {
	Morris.Donut({
        element: 'graph',
        data: [
          {value: percentA, label: localStorage.nameA},
          {value: percentB, label: localStorage.nameB},
             ],
        formatter: function (x) { return x + "%"}
      }).on('click', function(i, row){
        console.log(i, row);
      });
      result();
}
