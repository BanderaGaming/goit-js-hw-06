const imputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");
const a = () => {
  if (imputName.value === "") {
      outputName.innerHTML = "Anonymous";
  } else {
      outputName.innerHTML = imputName.value;
  }
};
imputName.addEventListener("input", a);