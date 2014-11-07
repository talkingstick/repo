var session = parseInt(localStorage.Session);
console.log(session);
var mAspoken = (session/2) - parseInt(localStorage.A);
var mBspoken = (session/2) - parseInt(localStorage.B);
console.log(mAspoken,mBspoken);
var mA = mAspoken/(mAspoken+mBspoken)*100;
var mB = mBspoken/(mAspoken+mBspoken)*100;

console.log(mA,mB);
 

 function result () {
    document.getElementById("result").innerHTML = ("A Spoke for: " +   mAspoken + "mins &" + " B Spoke for: " +   mBspoken + "mins");
}


function morris () {
	Morris.Donut({
        element: 'graph',
        data: [
          {value: mA, label: 'A'},
          {value: mB, label: 'B'},
             ],
        formatter: function (x) { return x + "%"}
      }).on('click', function(i, row){
        console.log(i, row);
      });
      result();
}


$(function () {
  eval($('#code').text());
  prettyPrint();
});


