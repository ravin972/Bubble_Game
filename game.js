function makeBubble() {
  var bubbles = "";

  for (let index = 1; index <= 174; index++) {
    var randomNumber = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${randomNumber}</div>`;
  }
  document.querySelector("#panel-btm").innerHTML = bubbles;
}
makeBubble();

var timer = 60;
function runTimer(){
    
}