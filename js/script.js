function init(){
//add your javascript between these two lines of code
 
var button = document.getElementById('entrybutton');

function showMeText(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Haley Brittman: " + textbox.value);
}

  button.addEventListener('click', showMeText);
  }
  

window.addEventListener('load', init);