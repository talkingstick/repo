var session = parseInt(localStorage.Session);
var mode = localStorage.mode;

console.log(session);
if (mode =="locked")  {
    var mAspoken = (session/2) - parseInt(localStorage.lA);
    var mBspoken = (session/2) - parseInt(localStorage.lB);
    console.log(mAspoken,mBspoken);
    var mA = Math.round(mAspoken/(mAspoken+mBspoken)*100);
    var mB = Math.round(mBspoken/(mAspoken+mBspoken)*100);
    console.log(mA,mB);
} else if (mode == "unlocked") {
    var mAspoken = parseInt(localStorage.uA);
    var mBspoken = parseInt(localStorage.uB);
    console.log(mAspoken,mBspoken);
    var mA = Math.round(mAspoken/(mAspoken+mBspoken)*100);
    var mB = Math.round(mBspoken/(mAspoken+mBspoken)*100);
} 

 function result () {
    document.getElementById("result").innerHTML = (localStorage.nameA + " spoke for: " +   mAspoken + "mins <br>& " + localStorage.nameB + " spoke for: " +   mBspoken + "mins");
}


function morris () {
	Morris.Donut({
        element: 'graph',
        data: [
          {value: mA, label: localStorage.nameA},
          {value: mB, label: localStorage.nameB},
             ],
        formatter: function (x) { return x + "%"}
      }).on('click', function(i, row){
        console.log(i, row);
      });
      result();
}
