// JavaScript for handling Add to Cart functionality
let cart = [];

function updateCartDisplay() {
    const cartCount = document.querySelector('#cart-count');
    cartCount.textContent = cart.length;
}

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    updateCartDisplay();
}

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (e) => {
        const productCard = e.target.closest('.product-card');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = productCard.querySelector('p').textContent;
        addToCart(productName, productPrice);
    });
});
