const startButtonElement = document.getElementById("start-btn");
const startGameDiv = document.getElementById("start-game");
const timerSpanElement = document.getElementById("timer");
const bodyElement = document.body;

const gameWord = "hello";
let timerValue = 3;

const constructLetterBoxes = () => {
  // spread operator
  const wordsArray = [...gameWord];

  const constructLetterBox = (letter) => {
    const letterDivElement = document.createElement("div");
    letterDivElement.setAttribute("class", "word-item");
    return letterDivElement;
  };

  return wordsArray.map(constructLetterBox);
};

const constructGameContainer = () => {
  const gameContainerDiv = document.createElement("div");
  gameContainerDiv.setAttribute("class", "game-container");
  gameContainerDiv.setAttribute("id", "game-container");

  const wordsContainerDiv = document.createElement("div");
  wordsContainerDiv.setAttribute("class", "words-container");

  // TODO: replace this with the acutal word blanks
  const wordDivs = constructLetterBoxes();

  wordsContainerDiv.append(...wordDivs);

  gameContainerDiv.appendChild(wordsContainerDiv);

  return gameContainerDiv;
};

const constructGameOverContainer = () => {
  const gameContainerDiv = document.createElement("div");
  gameContainerDiv.setAttribute("class", "game-container");

  const wordsContainerDiv = document.createElement("div");
  wordsContainerDiv.setAttribute("class", "words-container");

  wordsContainerDiv.textContent = "GAME OVER";

  gameContainerDiv.appendChild(wordsContainerDiv);

  return gameContainerDiv;
};

const startTimer = () => {
  const timerTick = () => {
    timerSpanElement.textContent = timerValue;
    timerValue -= 1;

    if (timerValue < 0) {
      clearInterval(timer);
      // construct game over container
      const gameOverContainer = constructGameOverContainer();

      // remove game container
      const gamesContainerDiv = document.getElementById("game-container");
      bodyElement.removeChild(gamesContainerDiv);

      // append game over container to body
      bodyElement.appendChild(gameOverContainer);
    }
  };

  const timer = setInterval(timerTick, 1000);
};

const startGame = () => {
  // replace the start-game div with the game-container div
  // construct the game-container div in JS
  const gameDivElement = constructGameContainer();

  // remove start-game
  bodyElement.removeChild(startGameDiv);

  // insert the game-container
  bodyElement.appendChild(gameDivElement);

  // start timer here
  startTimer();
};

startButtonElement.addEventListener("click", startGame);
