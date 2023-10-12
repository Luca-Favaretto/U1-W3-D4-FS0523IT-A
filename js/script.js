const createCell = function (e) {
  for (let i = 0; i < e; i++) {
    const tabellone = document.getElementById("tabellone");
    const cellTabellone = document.createElement("div");
    cellTabellone.className = "cell";
    const numCell = document.createElement("h3");
    numCell.innerText = i + 1;

    cellTabellone.appendChild(numCell);
    tabellone.appendChild(cellTabellone);
  }
};
//crea un numero di celle in base al parametro nel main

const rndNumBtn = document.getElementById("start-tombola");

const rndNumArray = [];

rndNumBtn.onclick = function () {
  const cellDiv = document.querySelectorAll(".cell");
  let rndNum = 0;
  do {
    rndNum = Math.ceil(Math.random() * 76);
  } while (rndNumArray.includes(rndNum));

  rndNumArray.push(rndNum);

  cellDiv[rndNum].classList.add("border-pink");
  console.log("Numero " + (rndNum + 1));
};

const base = function () {
  const smallCellTbl = document.querySelectorAll(".small-cell");

  console.log(smallCellTbl);
};

const trasfArray = function () {
  let divs = document.querySelectorAll(".small-cell");

  let numeriArray = [];

  divs.forEach(function (div) {
    let paragrafo = div.querySelector("p");
    if (paragrafo) {
      let numero = parseInt(paragrafo.textContent);
      numeriArray.push(numero);
    }
  });

  console.log(numeriArray);
};
//questa funzione quando lanciata trasforma le tabeliine in un array

const createSmallCell = function (n) {
  for (let i = 0; i < n; i++) {
    const areaCard = document.getElementById("area-card");
    const card = document.createElement("div");
    card.className = "card";
    areaCard.appendChild(card);
    for (let i = 0; i < 24; i++) {
      const smallCell = document.createElement("div");

      smallCell.className = "small-cell";
      const numSmallCell = document.createElement("p");

      const rndNumCard = [];
      let rndNum = 0;
      do {
        rndNum = Math.ceil(Math.random() * 76);
      } while (rndNumCard.includes(rndNum));

      numSmallCell.innerText = rndNum;

      smallCell.appendChild(numSmallCell);
      card.appendChild(smallCell);
    }
  }
};
//crea un numero di card in base al form

window.addEventListener("DOMContentLoaded", () => {
  createCell(76);

  const formTab = document.querySelector("form");
  formTab.onsubmit = function (e) {
    e.preventDefault();
    const numTabelline = document.getElementById("num-tabelline");
    const numTabellineNum = parseInt(numTabelline.value);
    createSmallCell(numTabellineNum);
  };
});
