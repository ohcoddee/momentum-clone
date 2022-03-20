const inputNumbers = document.querySelector(".generate-number");
const randomNumbers = document.querySelector(".guess-number");
const playButton = document.querySelector("button");
const statusMessage = document.querySelector(".status-message");
const resultMessage = document.querySelector(".result-message");

let maximumNumber;
let randomNumbersValue;

function onInputNumbersBlur(event) {
  maximumNumber = Number(event.target.value);
}

function onRandomNumbersBlur(event) {
  randomNumbersValue = Number(event.target.value);
}

function playRandomGame() {
  const randomNumber = Math.floor(Math.random() * maximumNumber);

  let result;
  if (randomNumbersValue === randomNumber) {
    result = "won";
  } else {
    result = "lost";
  }
  statusMessage.innerText = `You chose: ${randomNumbersValue}, the machine chose: ${randomNumber}.`;
  resultMessage.innerText = `You ${result}.`;
}

inputNumbers.addEventListener("blur", onInputNumbersBlur);
randomNumbers.addEventListener("blur", onRandomNumbersBlur);
playButton.addEventListener("click", playRandomGame);
