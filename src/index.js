import Homepage from "./home/home.js";
import About from "./about/about";

const content = document.querySelector('#content')
content.append(...Homepage());

const homeButton = document.querySelector("#home");
const aboutButton = document.querySelector("#about");

homeButton.addEventListener('click', () => {
    content.textContent = "";
    content.append(...Homepage());
})

aboutButton.addEventListener('click', () => {
    content.textContent = "";
    content.append(...About());
})