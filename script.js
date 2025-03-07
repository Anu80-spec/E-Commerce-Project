document.addEventListener("DOMContentLoaded", () => {
    const cartCount = document.getElementById("cart-count");
    let cartItems = 0;

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            cartItems++;
            cartCount.textContent = cartItems;
        });
    });
});


document.getElementById('search-bar').addEventListener('input', function() {
    let filter = this.value.toLowerCase();
    let products = document.querySelectorAll('.product');
    
    products.forEach(product => {
        let name = product.dataset.name.toLowerCase();
        if (name.includes(filter)) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
});