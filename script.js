const btnStar = document.getElementById("bnt-start");
const header = document.getElementById("header");
const areaJogo = document.getElementById("area-do-jogo");
const personagem = document.getElementsByClassName("personagem");

btnStar.addEventListener("click", () => {
  header.classList.add("hidden");
});

personagem.addEventListener("keydown", () => {
  personagem.classList.add("jump");

  setTimeout(() => {
    personagem.classList.remove("jump");
  }, 500);
});

// const jump = () => {
//   personagem.classList.add("jump");

//   setTimeout(() => {
//     personagem.classList.remove("jump");
//   }, 500);
// };
