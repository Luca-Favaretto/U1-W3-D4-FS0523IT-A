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

//Premendo il pulsante vai tombola seleziona tutti i numeri prcedentemente creati

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

// const howMany = e => {
//   e.preventDefault();
//   const numTabelline = document.getElementById("num-tabelline").value;
//   const
// };

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
