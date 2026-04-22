
# SEC-12-Assignment-3
SEC-Assignment-3
# Nas's Fried Chicken (NFC) Ordering Platform - Frontend

## Description

This is the frontend of the NFC Ordering Platform. It provides a user interface for customers to browse menu items, add them to a cart, and place orders. It communicates with the backend API to send and retrieve data.

## Features

* Display food menu
* Add items to cart
* Checkout and place order
* Fetch data from backend API
* Simple and user-friendly interface

## Tech Stack

* HTML
* CSS
* JavaScript

## How to Run

1. Open the project in Visual Studio Code
2. Right-click `index.html`
3. Select "Open with Live Server"

## API Connection

* Backend URL: http://localhost:3000

## Notes

* Ensure backend server is running before using the system

* 

# Nas's Fried Chicken (NFC) Ordering Platform - Backend

## Description

This is the backend API for the NFC Ordering Platform. It handles all data operations including creating, retrieving, updating, and deleting orders.

## Features

* RESTful API endpoints
* CRUD operations for orders
* Persistent data storage using JSON file
* Basic error handling

## Tech Stack

* Node.js
* Express.js

## API Endpoints

### GET /orders

Retrieve all orders

### POST /orders

Create a new order

### PUT /orders/:id

Update order status

### DELETE /orders/:id

Delete an order

## How to Run

1. Open terminal
2. Navigate to backend folder:
   cd backend
3. Install dependencies:
   npm install
4. Start server:
   node server.js

Server runs on:
http://localhost:3000

## Database

* orders.json is used as persistent storage

## Notes

* Ensure orders.json file exists before running server
