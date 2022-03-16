
// <![CDATA[
var speed=350; // speed of wobbling, lower is faster
var height=1; // height of wobbling in pixels
var alink=""; // page to link text to (set to ="" for no link)
/****************************
*    Wobbly Text Effect     *
*(c) 2003-6 mf2fm web-design*
*  http://www.mf2fm.com/rv  *
* DON'T EDIT BELOW THIS BOX *
****************************/
var wobtxt, wobble, wobcnt=0;
window.onload=function() { if (document.getElementsByClassName) {
  var i, wobli;
  wobble=document.getElementsByClassName("wobble");
  wobtxt=wobble.firstChild.nodeValue;
  while (wobble.childNodes.length) wobble.removeChild(wobble.childNodes[0]);
  for (i=0; i<wobtxt.length; i++) {
    wobli=document.createElement("span");
    wobli.setAttribute("id", "wobb"+i);
    wobli.style.position="relative";
    wobli.appendChild(document.createTextNode(wobtxt.charAt(i)));
    if (alink) {
      wobli.style.cursor="pointer";
      wobli.onclick=function() { top.location.href=alink; }
    }
    wobble.appendChild(wobli);
  }
  setInterval("wobbler()", speed);
}}
function wobbler() {
  for (var i=0; i<wobtxt.length; i++) document.getElementById("wobb"+i).style.top=Math.round(height*Math.sin(i+wobcnt))+"px"
  wobcnt++;
}
// ]]>
