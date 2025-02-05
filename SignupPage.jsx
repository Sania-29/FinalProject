import React from "react";
import api from "../axiosintance"; // Adjust path based on where axiosinstance.js is located
 // Import your axios instance
import SignupForm from "../components/SignupForm";

function SignupPage() {
  const handleSignup = async (name, email, password) => {
    try {
      // Use the imported api instance to make the POST request
      const response = await api.post("/signup", {
        name,
        email,
        password,
      });  
      console.log("User registered successfully:", response.data);
      alert("Signup successful!");
    } catch (error) {
      console.error("Signup error:", error.response?.data || error.message);
      alert("Signup failed! Please try again.");
    }
  };

  return (
    <div>
      <h1>Signup</h1>
      <SignupForm onSignup={handleSignup} /> {/* Pass the function as prop */}
      <p>Already have an account? <a href="/login">Log in</a></p>
    </div>
  );
}

export default SignupPage;