const gamesBoardContainer = document.querySelector("#gamesboard-container");
const optionContainer = document.querySelector(".option-container");
const flipButton = document.querySelector("#flip-button");

//option choosing
let angle = 0;
function flip() {
  const optionShips = Array.from(optionContainer.children);
  angle = angle == 0 ? 90 : 0;
  optionShips.forEach(
    (optionShip) => (optionShip.style.transform = `rotate(${angle}deg)`),
  );
}
flipButton.addEventListener("click", flip);

//creating boards
const width = 10;
function createBoard(color, user) {
  const gameBoardContainer = document.createElement("div");
  gameBoardContainer.classList.add("game-board");
  gameBoardContainer.style.backgroundColor = color;
  gameBoardContainer.id = user;
  gamesBoardContainer.append(gameBoardContainer);

  for (let i = 0; i < 100; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.id = i;
    gameBoardContainer.append(block);
  }
}
createBoard("yellow", "player");
createBoard("pink", "PC");

//creating ships{
class Ship {
  constructor(name, length) {
    this.name = name;
    this.length = length;
  }
}
const destroyer = new Ship("destroyer", 2);
const submarine = new Ship("destroyer", 3);
const cruiser = new Ship("destroyer", 3);
const battleship = new Ship("destroyer", 4);
const carrier = new Ship("destroyer", 5);

const ships = [destroyer, submarine, cruiser, battleship, carrier];
