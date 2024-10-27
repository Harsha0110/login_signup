import React from 'react'
// Home.js

import { useLocation } from "react-router-dom";
import "./Home.css"

function Home() {
    // Access the state passed via navigate
    const location = useLocation();
    const { username } = location.state || { username: "Guest" };

    return (
        <div className="container">
            <h2>Welcome, {username}!</h2>
            <p>We are glad to have you here.</p>
        </div>
    );
}

export default Home;
