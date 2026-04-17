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
