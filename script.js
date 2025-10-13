function showWelcomeMessage() {
  alert(`Welcome to ${storeName}! Enjoy ${discount}% off all products today!`);
}

// Making the button interactive
const shopNowBtn = document.querySelector("button");
shopNowBtn.addEventListener("click", showWelcomeMessage);


// Array of objects
const products = [
  { image: "../images/jewery-1.jpg", name: "Gold Necklace" },
  { image: "../images/jewery-2.jpg", name: "Diamond Earrings" },
  { image: "../images/jewery-3.jpg", name: "Silver Leg Chain" },
  { image: "../images/jewery-1.jpg", name: "Pearl Necklace" },
  { image: "../images/jewery-2.jpg", name: "Luxury Earrings" },
  { image: "../images/jewery-3.jpg", name: "Fashion Ring" },
  { image: "../images/jewery-1.jpg", name: "Classic Necklace" },
  { image: "../images/jewery-2.jpg", name: "Elegant Earrings" },
];

const productContainer = document.getElementById("product-container");

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
    <img src="${product.image}" alt="${product.name}" />
    <p>${product.name}</p>
  `;

  productContainer.appendChild(card);
});


