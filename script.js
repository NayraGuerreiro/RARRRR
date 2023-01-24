const btnStar = document.getElementById("bnt-start");
const header = document.getElementById("header");
const areaJogo = document.getElementById("area-do-jogo");
const personagem = document.getElementById("personagem");
const obstaculo = document.getElementById("obstaculo");

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

  if (
    positionObstaculo <= 180 &&
    positionObstaculo > 0 &&
    positionPersonagem < 80
  ) {
    obstaculo.style.animation = "none";
    obstaculo.style.left = `${positionObstaculo}px`;

    personagem.style.animation = "none";
    personagem.style.bottom = `${positionPersonagem}px`;
  }
}, 10);

document.addEventListener("keydown", jump);
