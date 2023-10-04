const express = require('express');
const admin = require('firebase-admin');
const dotenv = require("dotenv");
const cors = require("cors");
const serviceAccount = require('./firebase-admin-key.json');

// Initialize Firebase Admin SDK first
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
});

// Now define and initialize the Firestore database
const db = admin.firestore();

// Now require your routes
const ProductRoutes = require("./routes/ProductRoutes");

const app = express();
const PORT = 5500;



app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended:false}));


app.use("/api", ProductRoutes);

dotenv.config();

app.listen(PORT, (req, res) => {
    try {
        console.log("Backend is running on port:", PORT);
    } catch (err) {
        console.error(err);
    }
});
