import "./styles.css";

export function homePageCreation() {
    const restaurantContent = document.querySelector("#content");

    const headerSection = document.createElement("div");
    headerSection.classList.add("headerSection");
    headerSection.textContent  = "Welcome to Pleasures, New York City's Best Restaurant!"

    const descriptionSection = document.createElement("div");
    descriptionSection.classList.add("descriptionSection");
    descriptionSection.textContent = "We are a family-owned restaurant, who primarily serves\n classic American dishes, included chicken tenders, loaded \n fries, and our world-renowned burger."

    const hoursSection = document.createElement("div");
    hoursSection.classList.add("hoursSection");
    hoursSection.textContent = "We are open daily from 8 a.m. to 9 p.m."

    const locationSection = document.createElement("div");
    locationSection.classList.add("locationSection");
    locationSection.textContent = "We are located at 55th Street 3rd avenue, New York, NY 20831. Come check us out!"

    restaurantContent.appendChild(headerSection);
    restaurantContent.appendChild(descriptionSection);
    restaurantContent.appendChild(hoursSection);
    restaurantContent.appendChild(locationSection);
}