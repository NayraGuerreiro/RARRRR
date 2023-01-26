const btnStar = document.getElementById("bnt-start");
const header = document.getElementById("header");
const areaJogo = document.getElementById("area-do-jogo");
const personagem = document.getElementById("personagem");
const obstaculo = document.getElementById("obstaculo");
const gameOver = document.getElementById("game-over");
const restartButton = document.getElementById("reiniciar");
const score = document.getElementById("score");
span = document.getElementById("style-score"); //onde ta armazenado o span com a frase: seu score foi:
let count = 0;

btnStar.addEventListener("click", () => {
  header.classList.add("hidden");
  obstaculo.classList.add("animation");
});

const jump = () => {
  personagem.classList.add("jump");

  setTimeout(() => {
    personagem.classList.remove("jump");
  }, 1400);
};

const loop = setInterval(() => {
  const positionObstaculo = obstaculo.offsetLeft;
  const positionPersonagem = +window
    .getComputedStyle(personagem)
    .bottom.replace("px", "");

  const gameOverScreen = () => {
    gameOver.classList.add("modal");
  };

  window.getComputedStyle(obstaculo);

  if (
    positionObstaculo <= 140 &&
    positionObstaculo > 0 && //onde acontece o impacto
    positionPersonagem < 80
  ) {
    gameOverScreen();

    span.innerText = count;
    obstaculo.style.animation = "none";
    obstaculo.style.left = `${positionObstaculo}px`;

    personagem.style.animation = "none";
    personagem.style.bottom = `${positionPersonagem}px`;

    personagem.src = "./imagens/impactoatt.png";
    obstaculo.src = "./imagens/leaum morrido.png";

    clearInterval(loop);
  }
  count++;
  score.innerHTML = `SCORE: ${count}`;
}, 10);

restartButton.addEventListener(
  "click",
  function (e) {
    e.preventDefault;
    location.reload();
  },
  false
);

document.addEventListener("keydown", jump);
