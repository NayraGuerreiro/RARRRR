const btnStar = document.getElementById("bnt-start");
const header = document.getElementById("header");
const areaJogo = document.getElementById("area-do-jogo");
const personagem = document.getElementById("personagem");
const obstaculo = document.getElementById("obstaculo");
const gameOver = document.getElementById("game-over");
const gameOverH1 = document.getElementById("game-over-h1");
const restartButton = document.getElementById("reiniciar");
const score = document.getElementById("score");
const span = document.getElementById("style-score");
let count = 0;

btnStar.addEventListener("click", () => {
  header.classList.add("hidden"); //evento esconde pag inicial
  obstaculo.classList.add("animation");
});

const jump = () => {
  personagem.classList.add("jump");
  //adiciona e remove o jum do personagem
  setTimeout(() => {
    personagem.classList.remove("jump");
  }, 1400);
};

const gameWinScreen = () => {
  gameOverH1.innerHTML = "Congratz, you arrive!";
  gameOver.classList.add("modal"); //tela "voce venceu"
  gameOver.classList.add("gameWinBg");
};

const scoreLoop = setInterval(() => {
  const positionObstaculo = obstaculo.offsetLeft; //posição do personagem
  const positionPersonagem = +window
    .getComputedStyle(personagem)
    .bottom.replace("px", "");

  count++;
  score.innerHTML = `SCORE: ${count}`; //contagem score
  if (
    positionObstaculo <= 140 &&
    positionObstaculo > 0 && //condição para acontecer o impacto
    positionPersonagem < 80
  ) {
    clearInterval(scoreLoop);
  }
}, 100);

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

    span.innerText = `Seu Score foi: ${count + 1}`;

    obstaculo.style.animation = "none";
    obstaculo.style.left = `${positionObstaculo}px`; //concatenação do score

    personagem.style.animation = "none";
    personagem.style.bottom = `${positionPersonagem}px`;

    personagem.src = "./imagens/impactoatt.png";
    obstaculo.src = "./imagens/leaum morrido.png";

    clearInterval(loop);
  }

  if (count > 200) {
    //condição ganhou o jogo
    gameWinScreen();
    obstaculo.style.animation = "none";
    obstaculo.style.left = `${positionObstaculo}px`;

    personagem.style.animation = "none";
    personagem.style.bottom = `${positionPersonagem}px`;

    span.innerText = `Seu Score foi: ${count}`;

    clearInterval(scoreLoop);
  }
}, 10);

restartButton.addEventListener(
  "click",
  function (e) {
    //restart / att da pagina
    e.preventDefault;
    location.reload();
  },
  false
);

document.addEventListener("keydown", jump); //evento de pulo
