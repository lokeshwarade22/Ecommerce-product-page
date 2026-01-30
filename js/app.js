let count = 0;
const cartCount = document.getElementById("cart-count");
const button = document.getElementById("addToCart");

button.addEventListener("click", () => {
  count++;
  cartCount.textContent = count;
  alert("Added to cart!");
});

const reviews = [
  "Great quality!",
  "Worth the price",
  "Fast delivery"
];

const reviewList = document.getElementById("review-list");

reviews.forEach(r => {
  const li = document.createElement("li");
  li.textContent = r;
  reviewList.appendChild(li);
});
