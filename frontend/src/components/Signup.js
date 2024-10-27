import React from 'react'
// components/Signup.js
import { useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import './Form.css';




function Signup() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/auth/signup", formData);
            alert("Signup successful");
        } catch (error) {
            alert("Signup failed");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Username" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Sign Up</button>
            <p>Allready a member?</p>
            <Link to="/Login">
                <button type="button">Login</button>
            </Link>
        </form>

    );
}

export default Signup;


