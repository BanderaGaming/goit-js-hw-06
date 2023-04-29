const loginForm = document.querySelector(".login-form");
const emailInput = loginForm.querySelector(`[type="email"]`);
const passwordInput = loginForm.querySelector(`[type="password"]`);
const submit = loginForm.querySelector(`[type="submit"]`);

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (passwordInput.value === "" || emailInput.value === "") {
        return alert("alert з попередженням про те, що всі поля повинні бути заповнені. ;)");
    } else {
        const userData = {
            email: emailInput.value,
            password: passwordInput.value,
        }
        return loginForm.reset(), console.log(userData);
        
    }
}
);
