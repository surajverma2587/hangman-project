const startButtonElement = document.getElementById("start-btn");
const startGameDiv = document.getElementById("start-game");
const bodyElement = document.body;

const gameWord = "hello";

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

  const wordsContainerDiv = document.createElement("div");
  wordsContainerDiv.setAttribute("class", "words-container");

  // TODO: replace this with the acutal word blanks
  const wordDivs = constructLetterBoxes();

  wordsContainerDiv.append(...wordDivs);

  gameContainerDiv.appendChild(wordsContainerDiv);

  return gameContainerDiv;
};

const startGame = () => {
  // replace the start-game div with the game-container div

  // construct the game-container div in JS
  const gameDivElement = constructGameContainer();

  // remove start-game
  bodyElement.removeChild(startGameDiv);

  // insert the game-container
  bodyElement.appendChild(gameDivElement);
};

startButtonElement.addEventListener("click", startGame);
