const btnStar = document.getElementById("bnt-start");
const header = document.getElementById("header");
const areaJogo = document.getElementById("area-do-jogo");
const personagem = document.getElementById("personagem");
const obstaculo = document.getElementById("obstaculo");
const gameOver = document.getElementById("game-over");
const restartButton = document.getElementById("reiniciar");

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
    positionObstaculo > 0 &&
    positionPersonagem < 80
  ) {
    gameOverScreen();

    obstaculo.style.animation = "none";
    obstaculo.style.left = `${positionObstaculo}px`;

    personagem.style.animation = "none";
    personagem.style.bottom = `${positionPersonagem}px`;

    personagem.src = "./imagens/impactoatt.png";
    obstaculo.src = "./imagens/leaum morrido.png";

    clearInterval(loop);
  }
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
