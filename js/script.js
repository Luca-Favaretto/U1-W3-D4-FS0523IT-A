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

const rndNumBtn = document.getElementById("start-tombola");

const rndNumArray = [];

rndNumBtn.onclick = function () {
  const cellDiv = document.querySelectorAll(".cell");
  const rndNum = Math.ceil(Math.random() * 76);
  rndNumArray.push(rndNum);
  rndNumArray.forEach(num=>)
  if(rndNum=== )
  cellDiv[rndNum].classList.add("border-pink");

  alert("Numero " + (rndNum + 1));
};

window.addEventListener("DOMContentLoaded", () => {
  createCell(76);
});
