let cart = [];
let total = 0;

function addItem(name, price) {
    cart.push({name, price});
    total += price;
    displayCart();
}

function displayCart() {
    let list = document.getElementById("cartList");
    list.innerHTML = "";

    cart.forEach(item => {
        let li = document.createElement("li");
        li.textContent = item.name + " - RM" + item.price;
        list.appendChild(li);
    });

    document.getElementById("total").textContent = total;
}

function checkout() {
    fetch('http://localhost:3000/orders', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ items: cart, total: total })
    })
    .then(res => res.json())
    .then(data => {
        alert("Order placed!");
        cart = [];
        total = 0;
        displayCart();
    })
    .catch(err => alert("Error placing order"));
}
