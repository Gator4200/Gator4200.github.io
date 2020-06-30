function startTime() {
    var today=new Date();
    var h=today.getHours();
    var m=today.getMinutes();
    var s=today.getSeconds();
    if (h >= 12) {
      var ampm = "PM";
    } else {
      var ampm = "AM";
    }
    h = correctTime(h);
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('clock').innerHTML = h+":"+m+" "+ampm;
    var t = setTimeout(function(){startTime()},500);
}

function checkTime(i) {
    if (i<10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
}

function correctTime(h) {
  if (h > 12) {
  h = h - 12;
  return h;
} else if (h = 0) {
  h = 12;
  return h;
} else if (h = 12) {
  h = 12;
  return h;
} else {
  return h;
};
}
// function startTime() {
//   var today = new Date();
//   var h = today.getHours();
//   var m = today.getMinutes();
//   m = checkTime(m);
//   h = Timecheck(h);
//
//     if (h >= 12)
//     return
//   document.getElementById('clock').innerHTML =
//   h + ":" + m + " PM";
//   var t = setTimeout(startTime, 500);
//
//     if (h < 12)
//     return
//   document.getElementById('clock').innerHTML =
//   h + ":" +m+ " AM";
//   var t = setTimeout(startTime, 500);
//
// }
//
// function checkTime(i) {
//   if (i<10) {i = "0"+i};
//   return i;
//
// }
//
// function Timecheck(h) {
//   if (h>12)
//     return h-12 ;
//   else
//     return h;
//   }
