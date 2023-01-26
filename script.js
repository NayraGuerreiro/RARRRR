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
  }, 500);
};

const loop = setInterval(() => {
  const positionObstaculo = obstaculo.offsetLeft;
  const positionPersonagem = +window
    .getComputedStyle(personagem)
    .bottom.replace("px", "");

  const gameOverScreen = () => {
    gameOver.classList.add("modal");

    // obstaculo.style.animation = "none";
    // obstaculo.style.left = `${positionObstaculo}px`;

    // personagem.style.animation = "none";
    // personagem.style.bottom = `${positionPersonagem}px`;
  };

  window.getComputedStyle(obstaculo);

  if (
    positionObstaculo <= 180 &&
    positionObstaculo > 0 &&
    positionPersonagem < 80
  ) {
    console.log("alo", positionObstaculo);
    gameOverScreen();

    obstaculo.style.animation = "none";
    obstaculo.style.left = `${positionObstaculo}px`;

    personagem.style.animation = "none";
    personagem.style.bottom = `${positionPersonagem}px`;

    clearInterval(loop);
  }
}, 10);

restartButton.addEventListener(
  "click",
  function (e) {
    e.preventDefault;
    restartAnimation();
    gameOver.classList.remove("modal");
    obstaculo.classList.remove("animation");
    obstaculo.style = "animation";
    obstaculo.offsetWidth = obstaculo.offsetWidth;
    obstaculo.classList.add("animation");
    personagem.classList.remove("jump");
    personagem.style = "jump";
    obstaculo.style.left = "";
    personagem.style.bottom = "";
  },
  false
);

function restartAnimation(event) {
  obstaculo.style.animationName = "none";
  personagem.style.animationName = "none";
  obstaculo.style.left = "none";
  personagem.style.animation = "none";

  requestAnimationFrame(() => {
    obstaculo.style.animationName = "";
    personagem.style.animationName = "";
  });
}

document.addEventListener("keydown", jump);
