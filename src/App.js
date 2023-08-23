import "./styles.css";
import { Route, Routes, Switch } from "react-router-dom";
import Home from "./routes/Home";
import About from "./routes/About";
import Service from "./routes/Service";
import Contact from "./routes/Contact";
import { Login } from "./Login";
import { Register } from "./Register";
import SignUp from "./routes/SignUp";
import React, { useState } from "react";

export default function App() {
  const [currentForm, setCurrentForm] = useState("login");
  const toggleForm = (forName) => {
    setCurrentForm(forName);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </div>
  );
}
