const currentValue = document.querySelector("#value");
const decrementBtn = document.querySelector(`button[data-action="decrement"]`);
const incrementBtn = document.querySelector(`button[data-action="increment"]`);

const add = () => currentValue.innerHTML = Number(currentValue.innerHTML) + 1;
const addClick = incrementBtn.addEventListener("click", add);
const minus = () => currentValue.innerHTML = Number(currentValue.innerHTML) - 1;
const minusClick = decrementBtn.addEventListener("click", minus);

