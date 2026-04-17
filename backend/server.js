const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

const FILE = 'orders.json';

// READ all orders
app.get('/orders', (req, res) => {
    const data = JSON.parse(fs.readFileSync(FILE));
    res.json(data);
});

// CREATE order
app.post('/orders', (req, res) => {
    const orders = JSON.parse(fs.readFileSync(FILE));

    const newOrder = {
        id: Date.now(),
        items: req.body.items,
        total: req.body.total,
        status: "Preparing"
    };

    orders.push(newOrder);

    fs.writeFileSync(FILE, JSON.stringify(orders));

    res.status(201).json(newOrder);
});

// UPDATE order status
app.put('/orders/:id', (req, res) => {
    let orders = JSON.parse(fs.readFileSync(FILE));

    orders = orders.map(order => {
        if (order.id == req.params.id) {
            order.status = req.body.status;
        }
        return order;
    });

    fs.writeFileSync(FILE, JSON.stringify(orders));

    res.json({ message: "Updated" });
});

// DELETE order
app.delete('/orders/:id', (req, res) => {
    let orders = JSON.parse(fs.readFileSync(FILE));

    orders = orders.filter(o => o.id != req.params.id);

    fs.writeFileSync(FILE, JSON.stringify(orders));

    res.json({ message: "Deleted" });
});

app.listen(3000, () => console.log("Server running on port 3000"));
