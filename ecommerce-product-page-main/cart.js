const countElement = document.querySelector(".count");
const plus = document.querySelector(".plus");
const minus = document.querySelector(".minus");
const cartIcon = document.querySelector(".cart-icon");
const cartContainer = document.querySelector(".cart-container");
const addToCartBtn = document.querySelector(".add-to-cart");
const cartItems = document.querySelector(".cart-items");
const checkout = document.querySelector(".checkout");


let count = 0;

const updateCount = (newCount) => {
    count = newCount;
    countElement.textContent = count;
};

minus.addEventListener("click", () => {
    if (count > 0) {
        updateeCount(count - 1);
    }
});

plus.addEventListener("click", () => {
    updateCount(count + 1);
});

cartIcon.addEventListener("click", () => {
    cartContainer.classList.toggle("active");
});

addToCartBtn.addEventListener("click", () => {
    if(count === 0) return;
})