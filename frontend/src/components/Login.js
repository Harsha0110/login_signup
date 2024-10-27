import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import './Form.css';

function Login() {
    const [formData, setFormData] = useState({ username: "", email: "", password: "" });
    const navigate = useNavigate(); // Hook for programmatic navigation

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Perform login request
            const response = await axios.post("http://localhost:5000/api/auth/login", {
                email: formData.email,  // Send email and password for authentication
                password: formData.password
            });

            // Assuming your API sends back a user object or token
            if (response.data.token) {
                alert("Login successful");
                // Navigate to the home page after successful login
              
                navigate("/home", { state: { username: formData.username } }); // Pass the username
            alert("login sucess");
            } else {
                alert("Login failed");
            }
        } catch (error) {
            console.error("Login error:", error);
            alert("Login failed: " + (error.response?.data?.message || "Something went wrong"));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="username" placeholder="Username" onChange={handleChange} />
            <input name="email" placeholder="Email" onChange={handleChange} />
            <input name="password" type="password" placeholder="Password" onChange={handleChange} />
            <button type="submit">Login</button> {/* Change to submit button */}
            <p>Not a member?</p>
            <Link to="/signup">
                <button type="button">Signup</button>
            </Link>
        </form>
    );
}

export default Login;
