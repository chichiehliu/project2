function allowDrop(ev) {
  ev.preventDefault();
}
function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
  ev.preventDefault();
  var data = ev.dataTransfer.getData("text");
  ev.target.appendChild(document.getElementById(data));
}
function dfun1(){
  document.getElementById("drop1").innerHTML="";
  document.getElementById("drop2").innerHTML="";
  document.getElementById("drop3").innerHTML="";
  document.getElementById("dr1").innerHTML="<img src='images/ch1.png'>";
  document.getElementById("dr2").innerHTML="<img src='images/ch2.png'>";
  document.getElementById("dr3").innerHTML="<img src='images/ch3.png'>";
  document.getElementById("dr4").innerHTML="<img src='images/ch4.png'>";
  document.getElementById("dr5").innerHTML="<img src='images/ch5.png'>";
  document.getElementById("dr6").innerHTML="<img src='images/ch6.png'>";
  document.getElementById("dr7").innerHTML="<img src='images/ch7.png'>";
  document.getElementById("dr8").innerHTML="<img src='images/ch8.png'>";
  document.getElementById("dr9").innerHTML="<img src='images/ch9.png'>";
  location.reload("main-drag");
}


// function dfun2(){
//   var i="";
//   for(i=0;i<=9;i++)
//   {
//     // document.getElementById("dr'"+i+"'").innerHTML="";
//     document.getElementById("dr'"+i+"'").innerHTML="<img src='images/ch'"+i+"'.png'>";
//   }}

