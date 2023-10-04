const admin = require('firebase-admin');
const path = require('path');
const fs = require('fs');





let db = admin.firestore();
exports.getAllProducts = async (req, res) => {
    try {

        let products = [];
        const productsSnapshot = await db.collection('products').get();
        productsSnapshot.forEach((doc) => {
            products.push({ id: doc.id, ...doc.data() });
        });


        res.status(200).send(updatedProductData);
    } catch (error) {
        res.status(400).send(error.message);
    }
};



exports.createProduct = async (req, res) => {
    try {
        // Extracting product data from request body
        const { key, title, price, description, category, image, rating } = req.body;

        // Constructing the product object
        const newProduct = {
            key: key,
            title: title,
            price: price,
            description: description,
            category: category,
            image: image,
            rating: rating
        };

         // Adding the product to Firestore
         const productRef = await db.collection('products').add(newProduct);
         const product = await productRef.get();
 
         if (!product.exists) {
             throw new Error('Failed to add product');
         }
        if (!product.exists) {
            throw new Error('Failed to add product');
        }
         res.status(201).send({ id: product.id, ...product.data() });

    } catch (error) {
        res.status(400).send(error.message);
    }
};
