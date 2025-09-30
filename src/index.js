import { aboutPageCreation } from "./about.js";
import {homePageCreation} from "./homepage.js"
import { menuPageCreation } from "./menu.js";


homePageCreation();

const restaurantContent = document.querySelector("#content");
const homeButton = document.querySelector(".home");
const menuButton = document.querySelector(".menu");
const aboutButton = document.querySelector(".about")

homeButton.addEventListener('click', function() {
    restaurantContent.replaceChildren();
    homePageCreation();
})

menuButton.addEventListener('click', function() {
    restaurantContent.replaceChildren();
    menuPageCreation();
})

aboutButton.addEventListener('click', function() {
    restaurantContent.replaceChildren();
    aboutPageCreation();
})



