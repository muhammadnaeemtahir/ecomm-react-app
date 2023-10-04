import React, { useState, useEffect } from "react";
import "./style.css";
import Preloader from "./components/Preloader/Preloader";
import Navbar from "./components/Navbar/Navbar";
import Allproducts from "./components/Products/Allproducts";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/Checking/Checkout";
import Info from './components/Checking/Info'
import Shipping from './components/Checking/Shipping'
import Payment from './components/Checking/Payment'
import Productlarge from "./components/Products/Productlarge";
import Carousel from "./components/Carousel/Carousel";
import { useNavigate } from "react-router-dom";
import { firestore } from '../src/firebase.js'
import { collection, getDocs } from 'firebase/firestore';

// Auth pages
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';

// Products pages
import AddProducts from './components/Products/AddProduct';

export default function App() {
  const navigate = useNavigate();

  const [email, setemail] = useState("");
  const [number, setnumber] = useState("");
  const [search, setsearch] = useState("");
  const [categoryvalue, setcategoryvalue] = useState("");
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // Fetch data from Firestore
    const fetchProducts = async () => {
      const productsCollection = collection(firestore, 'products');
      const productsSnapshot = await getDocs(productsCollection);
      const productList = productsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productList);
    };

    fetchProducts();
  }, []);

  function handleemailchange(event) {
    setemail(event.target.value);
  }

  function handlenumberchange(event) {
    setnumber(event.target.value);
  }

  function handlesetsearch(event) {
    navigate('/shop');
    setsearch(event.target.value);
  }

  function handlesetcategoryvalue(event) {
    navigate('/shop');
    setcategoryvalue(event.target.innerHTML);
  }

  function handleclearfilter() {
    updatefiltereddata(products);
  }

  const [filtereddata, updatefiltereddata] = useState(products);
  useEffect(() => {
    const NewData = products.filter(product => product.title.toLowerCase().includes(search.toLowerCase()));
    updatefiltereddata(NewData);
  }, [search]);

  useEffect(() => {
    if (categoryvalue !== "") {
      const NewData = products.filter(product => product.category === categoryvalue);
      updatefiltereddata(NewData);
    }
  }, [categoryvalue]);

  useEffect(() => {
    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false); // Set isLoading to false after the delay (e.g., 2000 milliseconds)
    }, 2000);
  }, []);

  return (
    <>
      <div className="bg">
        {isLoading ? (
          <Preloader /> // Render the Preloader component while loading
        ) : (
          <>
            <Navbar handlesetsearch={handlesetsearch} handlesetcategoryvalue={handlesetcategoryvalue} handleclearfilter={handleclearfilter} />
            <Routes>
              <Route path="/" element={<Carousel />} />
              <Route path="/shop" element={<Allproducts data={filtereddata} />} />
              <Route path="/productlarge" element={<Productlarge />} />
              <Route path="/add-product" element={<AddProducts />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/checkout" element={<Checkout />} >
                <Route index path="info" element={<Info emailchange={handleemailchange} numberchange={handlenumberchange} />} />
                <Route path="shipping" element={<Shipping email={email} number={number} />} />
                <Route path="payment" element={<Payment email={email} number={number} />} />
              </Route>
            </Routes>
          </>
        )}
      </div>
    </>
  );
}