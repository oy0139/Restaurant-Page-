export function aboutPageCreation() {

    const restaurantContent = document.querySelector("#content");

    const aboutTitle = document.createElement("div");
    aboutTitle.classList.add("about-title");
    aboutTitle.textContent = "About Us";

    const aboutSectionContent = document.createElement("div");
    
    const aboutSectionHeading = document.createElement("div");
    aboutSectionHeading.classList.add("about-section-heading");
    aboutSectionHeading.textContent = "Who we are";

    const aboutSectionText = document.createElement("div");
    aboutSectionText.textContent = "This is who we are";

    aboutSectionContent.appendChild(aboutSectionHeading);
    aboutSectionContent.appendChild(aboutSectionText);

    restaurantContent.appendChild(aboutTitle);
    restaurantContent.appendChild(aboutSectionContent);
}