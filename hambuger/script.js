const btn = document.getElementById("btn");
const nav = document.getElementById("nav");

btn.addEventListener('click', () => {
    nav.classList.toggle("action");
    btn.classList.toggle("action");
})