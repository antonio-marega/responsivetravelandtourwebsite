import "../routes/SignUpStyles.css";
import React, { useState } from "react";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/contact.jpg";
import Footer from "../components/Footer";
import { Login } from "../Login";
import { Register } from "../Register";

function SignUp() {
  const [currentForm, setCurrentForm] = useState("login");

  const toggleForm = (formName) => {
    setCurrentForm(formName);
  };
  return (
    <>
      <div className="Signup">
        {currentForm === "login" ? (
          <Login onFormSwitch={toggleForm} />
        ) : (
          <Register onFormSwitch={toggleForm} />
        )}
      </div>

      <Navbar />
      <Footer />
    </>
  );
}

export default SignUp;
