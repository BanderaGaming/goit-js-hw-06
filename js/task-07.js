const input = document.querySelector("#font-size-control");
const mainText = document.querySelector("#text");
const changeText = () => {
    mainText.style.fontSize = `${input.value}px`;
};
input.addEventListener("input", changeText);