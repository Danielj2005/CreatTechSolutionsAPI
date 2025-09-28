const express = require('express');

const router = express.Router();

// Define routes for products
router.get('/products', (req, res) => {
    res.send('Get all products');
});

router.get('/products/:id', (req, res) => {
    res.send('Get product by ID');
});

router.post('/products', (req, res) => {
    res.send('Create a new product');
});

router.put('/products/:id', (req, res) => {
    res.send('Update product');
});

router.delete('/products/:id', (req, res) => {
    res.send('Delete product');
});

// Define routes for orders
router.get('/orders', (req, res) => {
    res.send('Get all orders');
});

router.get('/orders/:id', (req, res) => {
    res.send('Get order by ID');
});

router.post('/orders', (req, res) => {
    res.send('Create a new order');
});

router.put('/orders/:id', (req, res) => {
    res.send('Update order');
});

router.delete('/orders/:id', (req, res) => {
    res.send('Delete order');
});

// Define routes for customers
router.get('/customers', (req, res) => {
    res.send('Get all customers');
});

router.get('/customers/:id', (req, res) => {
    res.send('Get customer by ID');
});

router.post('/customers', (req, res) => {
    res.send('Create a new customer');
});

router.put('/customers/:id', (req, res) => {
    res.send('Update customer');
});

router.delete('/customers/:id', (req, res) => {
    res.send('Delete customer');
});

// Define routes for suppliers
router.get('/suppliers', (req, res) => {
    res.send('Get all suppliers');
});

router.get('/suppliers/:id', (req, res) => {
    res.send('Get supplier by ID');
});

router.post('/suppliers', (req, res) => {
    res.send('Create a new supplier');
});

router.put('/suppliers/:id', (req, res) => {
    res.send('Update supplier');
});

router.delete('/suppliers/:id', (req, res) => {
    res.send('Delete supplier');
});

// Define routes for payments
router.get('/payments', (req, res) => {
    res.send('Get all payments');
});

router.get('/payments/:id', (req, res) => {
    res.send('Get payment by ID');
});

router.post('/payments', (req, res) => {
    res.send('Create a new payment');
});

router.put('/payments/:id', (req, res) => {
    res.send('Update payment');
});

router.delete('/payments/:id', (req, res) => {
    res.send('Delete payment');
});

// Define routes for payment status (abonado, deuda, pendiente)
router.get('/payments/status/:status', (req, res) => {
    res.send(`Get payments by status: ${req.params.status}`);
});

module.exports = router;