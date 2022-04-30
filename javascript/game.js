let pickaxe = document.querySelector("#pickaxe");
let shovel = document.querySelector("#shovel");
let axe = document.querySelector("#axe");
let grid = document.querySelector("#grid");
let inventory = document.querySelector("#inventory");
let currentElementBox = document.querySelector("#currentElementBox");
let intro = document.querySelector("#intro");
let startBtn = document.querySelector("#startBtn");
let resetBtn = document.querySelector("#reset");
let currentTool = "none";
let currentElement = "empty";

pickaxe.addEventListener("click", () => {
  currentTool = "pickaxe";
});
shovel.addEventListener("click", () => {
  currentTool = "shovel";
});
axe.addEventListener("click", () => {
  currentTool = "axe";
});
currentElementBox.addEventListener("click", () => {
  currentTool = "box";
});
grid.addEventListener("click", () => {
  currentTool = "none";
  currentElementBox.style.borderColor = "black";
  shovel.style.backgroundColor = "rgb(174, 171, 168)";
  pickaxe.style.backgroundColor = "rgb(174, 171, 168)";
  axe.style.backgroundColor = "rgb(174, 171, 168)";
});

inventory.addEventListener("click", () => {
  switch (currentTool) {
    case "pickaxe":
      pickaxe.style.backgroundColor = "rgb(171, 158, 144)";
      shovel.style.backgroundColor = "rgb(174, 171, 168)";
      axe.style.backgroundColor = "rgb(174, 171, 168)";
      currentElementBox.style.borderColor = "black";
      break;
    case "shovel":
      shovel.style.backgroundColor = "rgb(171, 158, 144)";
      pickaxe.style.backgroundColor = "rgb(174, 171, 168)";
      axe.style.backgroundColor = "rgb(174, 171, 168)";
      currentElementBox.style.borderColor = "black";
      break;
    case "axe":
      axe.style.backgroundColor = "rgb(171, 158, 144)";
      pickaxe.style.backgroundColor = "rgb(174, 171, 168)";
      shovel.style.backgroundColor = "rgb(174, 171, 168)";
      currentElementBox.style.borderColor = "black";
      break;
    case "box":
      axe.style.backgroundColor = "rgb(174, 171, 168)";
      pickaxe.style.backgroundColor = "rgb(174, 171, 168)";
      shovel.style.backgroundColor = "rgb(174, 171, 168)";
      currentElementBox.style.borderColor = "white";
      break;
  }
});

// grid
// grid
// grid
// grid
// grid
// grid

const d = "dirt";
const s = "stone";
const w = "wood";
const l = "leave";
const c = "clowd empty";
const e = "empty";
let rows = 22;
let columns = 22;
let board = [
  [e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e],
  [e, e, e, e, c, c, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e],
  [e, e, e, c, c, c, c, e, e, e, e, e, e, e, e, e, e, e, e, e, e],
  [e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, e],
  [e, e, e, e, e, e, e, e, e, e, e, e, e, l, l, l, l, l, l, e, e],
  [e, e, e, e, e, e, e, e, e, e, e, e, e, l, l, l, l, l, l, e, e],
  [e, e, e, e, e, e, e, e, e, e, e, e, e, l, l, l, l, l, l, e, e],
  [e, e, e, e, e, e, e, e, e, e, e, e, e, l, l, l, l, l, l, e, e],
  [e, e, e, e, e, e, e, e, e, e, e, e, e, l, l, l, l, l, l, e, e],
  [e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, w, w, e, e, e, e],
  [e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, w, w, e, e, e, e],
  [e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, w, w, e, e, e, e],
  [e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, w, w, e, e, e, e],
  [e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, w, w, e, e, e, e],
  [e, e, e, e, e, e, e, e, e, e, e, e, e, e, e, w, w, e, e, e, e],
  [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
  [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
  [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
  [d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d, d],
  [s, s, s, s, s, s, s, s, s, s, s, s, s, s, s, s, s, s, s, s, s],
  [s, s, s, s, s, s, s, s, s, s, s, s, s, s, s, s, s, s, s, s, s],
];

function paintBoard() {
  for (let r = 1; r < rows; r++) {
    for (let c = 1; c < columns; c++) {
      let block = document.createElement("div");
      block.style.gridRowStart = r;
      block.style.gridColumnStart = c;
      block.classList = board[r - 1][c - 1];
      grid.append(block);
    }
  }
  grass();
}

paintBoard();
function grass() {
  let dirtp = document.querySelectorAll(".dirt");
  for (let i = 0; i < dirtp.length; i++) {
    const b = dirtp[i];
    if (b.style.gridRowStart === "16") {
      b.classList.add("dirtp");
    }
  }
}
// switch
// switch
// switch
// switch
// switch

function del(element, tool) {
  let block = document.querySelectorAll("." + element);
  for (let i = 0; i < block.length; i++) {
    let b = block[i];
    b.addEventListener("click", () => {
      if (
        currentTool === tool &&
        currentElement === "empty" &&
        b.classList.value !== "empty"
      ) {
        let r = b.style.gridRowStart;
        let c = b.style.gridColumnStart;
        board[r - 1][c - 1] = e;
        b.classList = board[r - 1][c - 1];
        currentTool = "none";
        currentElement = element;
        currentElementBox.classList = currentElement;
      }
    });
  }
}
function add() {
  if (currentElement !== "empty") {
    let block = document.querySelectorAll(".empty");
    for (let i = 0; i < block.length; i++) {
      const b = block[i];
      b.addEventListener("click", (e) => {
        if (
          currentTool === "box" &&
          currentElement !== "empty" &&
          b.classList.value === "empty"
        ) {
          let r = b.style.gridRowStart;
          let c = b.style.gridColumnStart;
          board[r - 1][c - 1] = currentElement;
          b.classList = board[r - 1][c - 1];
          currentTool = "none";
          currentElement = "empty";
          currentElementBox.classList = currentElement;
          grass();
        }
      });
    }
  }
}
inventory.addEventListener("click", () => {
  switch (currentTool) {
    case "pickaxe":
      del("stone", "pickaxe");
      break;
    case "shovel":
      del("dirt", "shovel");
      break;
    case "axe":
      del("wood", "axe");
      del("leave", "axe");
      break;
    case "box":
      add();
  }
});
// intro
// intro
// intro
// intro
startBtn.addEventListener("click", () => {
  intro.style.animation = "bye 1.5s forwards";
  setTimeout(() => {
    intro.style.display = "none";
  }, 1500);
});
resetBtn.addEventListener("click", () => {
  location.reload();
});