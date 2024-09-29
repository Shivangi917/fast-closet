import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar"; 
import Homepage from "./Components/Homepage/Homepage";

// Dummy component for the category pages
const Home = () => <div className="text-center mt-10"><h1>Welcome to Fast Closet</h1></div>;
const Men = () => <div className="text-center mt-10"><h1>Men's Collection</h1></div>;
const Women = () => <div className="text-center mt-10"><h1>Women's Collection</h1></div>;
const Kids = () => <div className="text-center mt-10"><h1>Kids' Collection</h1></div>;
const Bags = () => <div className="text-center mt-10"><h1>Bags Collection</h1></div>;
const Footwear = () => <div className="text-center mt-10"><h1>Footwear Collection</h1></div>;
const Casuals = () => <div className="text-center mt-10"><h1>Casuals Collection</h1></div>;
const Account = () => <div className="text-center mt-10"><h1>Your Account</h1></div>; // New Account page component
const Favorites = () => <div className="text-center mt-10"><h1>Your Favorites</h1></div>; // New Favorites page component
const Cart = () => <div className="text-center mt-10"><h1>Your Shopping Cart</h1></div>; // New Shopping Cart page component

const App = () => {
    return (
        <Router>
            {/* Navbar will show on all pages */}
            <Navbar />  
            
            {/* Routes for different pages */}
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/men" element={<Men />} />
                <Route path="/women" element={<Women />} />
                <Route path="/kids" element={<Kids />} />
                <Route path="/bags" element={<Bags />} />
                <Route path="/footwear" element={<Footwear />} />
                <Route path="/casuals" element={<Casuals />} />
                <Route path="/account" element={<Account />} />       {/* Route for Account */}
                <Route path="/favorites" element={<Favorites />} />   {/* Route for Favorites */}
                <Route path="/cart" element={<Cart />} />             {/* Route for Shopping Cart */}
            </Routes>
        </Router>
    );
};

export default App;
