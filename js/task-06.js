const input = document.querySelector("#validation-input");
const lengthForPass = input.getAttribute('data-length'); 

const checkForSymbols = () => {
  if (input.value.length === Number(lengthForPass)) {
    input.classList.remove("invalid")
      input.classList.add("valid")
  } else {
    input.classList.remove("valid")
      input.classList.add("invalid")
  }
};
input.addEventListener("blur", checkForSymbols);
