function init(){
//add your javascript between these two lines of code
 
function myEventFunction() {
  alert("pizza");
}

var d4 = document.getElementById('container');
d4.addEventListener('click', myEventFunction);

}
window.addEventListener('load', init);