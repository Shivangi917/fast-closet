import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar.jsx"; 

const Home = () => <div><h1></h1></div>;
const Codes = () => <div><h1>Codes Page</h1></div>;
const Discussion = () => <div><h1>Discussion Page</h1></div>;
const About = () => <div><h1>About Page</h1></div>;

const App = () => {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/codes" element={<Codes />} />
                <Route path="/discussion" element={<Discussion />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    );
};

export default App;
