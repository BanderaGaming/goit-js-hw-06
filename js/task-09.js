function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const currentColor = document.querySelector(".color");
const changeButton = document.querySelector(".change-color");
const bodyOfPage = document.querySelector("body");
const changeColor = () => {
  bodyOfPage.style.backgroundColor = getRandomHexColor();
  currentColor.innerHTML = bodyOfPage.style.backgroundColor
};
changeButton.addEventListener("click", changeColor);
