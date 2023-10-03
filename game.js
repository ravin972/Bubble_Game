var timer = 60;
var newScore = 0;
var hitNum;
var gameStarted = false;

document.querySelector("#startButton").addEventListener("click", () => {
  if (!gameStarted) {
    // Check if the game has not already started
    gameStarted = true;
    newHitVal();
    runTimer();
    makeBubble();
  }
});

function newHitVal() {
  hitNum = Math.floor(Math.random() * 10);
  document.querySelector("#hitVal").textContent = hitNum;
}

function runTimer() {
  var intervalStopper = setInterval(() => {
    if (timer > 0) {
      timer--;
      document.querySelector("#timeVal").textContent = timer;
    } else {
      clearInterval(intervalStopper);
      document.querySelector(
        "#panel-btm"
      ).innerHTML = `<h1>Game Over. <br><br> Your Score is ${newScore}!</h1>`;
    }
  }, 1000);
}

function incScoreVal() {
  newScore += 10;
  document.querySelector("#scoreVal").textContent = newScore;
}

function makeBubble() {
  var bubbles = "";

  for (let index = 1; index <= 174; index++) {
    var randomNumber = Math.floor(Math.random() * 10);
    bubbles += `<div class="bubble">${randomNumber}</div>`;
  }
  document.querySelector("#panel-btm").innerHTML = bubbles;
}

document.querySelector("#panel-btm").addEventListener("click", (event) => {
  var clickedEvent = Number(event.target.textContent);
  if (hitNum === clickedEvent) {
    incScoreVal();
    newHitVal();
    makeBubble();
  }
});

// newHitVal();
// runTimer();
// makeBubble();
