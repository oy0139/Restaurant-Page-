export function menuPageCreation() {
    
    const restaurantContent = document.querySelector("#content");

    const menuTitle = document.createElement("div");
    menuTitle.classList.add("menu-title");
    menuTitle.textContent = "Menu"

    const beverageTitle = document.createElement("div");
    beverageTitle.classList.add("food-header");
    beverageTitle.textContent = "Beverages:";

    const beverageItemContainer = document.createElement("div");

    const firstBeverageItem = document.createElement("div");
    firstBeverageItem.classList.add("menu-item");
    firstBeverageItem.textContent  = "Iced-Tea                 19.99";

    const secondBeverageItem = document.createElement("div");
    secondBeverageItem.classList.add("menu-item");
    secondBeverageItem.textContent  = "Lemonade                19.99";

    const thirdBeverageItem = document.createElement("div");
    thirdBeverageItem.classList.add("menu-item");
    thirdBeverageItem.textContent  = "3 oz Bottled Water                34.99";

    beverageItemContainer.appendChild(firstBeverageItem);
    beverageItemContainer.appendChild(secondBeverageItem);
    beverageItemContainer.appendChild(thirdBeverageItem);

    const mealTitle = document.createElement("div");
    mealTitle.classList.add("food-header");
    mealTitle.textContent = "Meal Options:"

    const mealItemContainer = document.createElement("div");

    const firstMealItem = document.createElement("div");
    firstMealItem.classList.add("menu-item");
    firstMealItem.textContent = "3 Fries with 5 Hamburgers                9,009";

    const secondMealItem = document.createElement("div");
    secondMealItem.classList.add("menu-item");
    secondMealItem.textContent = "12 Milkshakes with 10 Chicken Tenders        2,990";

    mealItemContainer.appendChild(mealTitle)
    mealItemContainer.appendChild(firstMealItem);
    mealItemContainer.appendChild(secondMealItem);

    restaurantContent.appendChild(menuTitle);
    restaurantContent.appendChild(beverageTitle);
    restaurantContent.appendChild(beverageItemContainer);
    restaurantContent.appendChild(mealTitle);
    restaurantContent.appendChild(mealItemContainer);
}