const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
const checkForSymbol = () => {
  if (inputName.value === "") {
      outputName.innerHTML = "Anonymous";
  } else {
      outputName.innerHTML = inputName.value;
  }
};
inputName.addEventListener("input", checkForSymbol);