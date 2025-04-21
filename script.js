document.addEventListener("DOMContentLoaded", () => {
    const cartCountElement = document.getElementById("cart-count");
    const cartSection = document.getElementById("cart-section");
    const cartItemsContainer = document.getElementById("cart-items");
    const totalPriceElement = document.getElementById("total-price");
    const viewCartToggle = document.getElementById("view-cart-toggle");

    // Load cart from localStorage or initialize it
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // CART LOGIC
    function updateCartUI() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = `${item.name} - $${item.price}`;
            cartItemsContainer.appendChild(li);
            total += item.price;
        });

        cartCountElement.textContent = cart.length;
        totalPriceElement.textContent = total.toFixed(2);
    }

    function addToCart(productElement) {
        const id = productElement.getAttribute("data-id");
        const name = productElement.getAttribute("data-name");
        const price = parseFloat(productElement.getAttribute("data-price"));

        const exists = cart.find(item => item.id === id);
        if (!exists) {
            cart.push({ id, name, price });
            localStorage.setItem("cart", JSON.stringify(cart));
            updateCartUI();
        }
    }

    document.querySelectorAll(".add-to-cart").forEach(button => {
        button.addEventListener("click", () => {
            const product = button.closest(".product");
            addToCart(product);
        });
    });

    viewCartToggle.addEventListener("click", () => {
        cartSection.classList.toggle("hidden");
    });

    updateCartUI();

    //  SEARCH LOGIC
    document.getElementById('search-bar').addEventListener('input', function () {
        let filter = this.value.toLowerCase();
        let products = document.querySelectorAll('.product');

        products.forEach(product => {
            let name = product.dataset.name.toLowerCase();
            product.style.display = name.includes(filter) ? "block" : "none";
        });
    });

    // FEEDBACK LOGIC
    document.getElementById('feedback-form').addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('feedback-name').value;
        const message = document.getElementById('feedback-message').value;

        if (name && message) {
            const feedbackItem = document.createElement('li');
            feedbackItem.innerHTML = `<strong>${name}</strong>: <p>${message}</p>`;

            document.getElementById('feedback-items').appendChild(feedbackItem);

            document.getElementById('feedback-name').value = '';
            document.getElementById('feedback-message').value = '';

            alert('Thank you for your feedback!');
        } else {
            alert('Please provide both a name and a message.');
        }
    });
});
