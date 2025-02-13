import React from "react";
import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h2>Halaman Home</h2>
            <hr/>
            List of post
            <ul>
                <li><Link to="/post/1">Post 1</Link></li>
                <li><Link to="/post/2">Post 2</Link></li>
                <li><Link to="/post/3">Post 3</Link></li>
            </ul>
        </div>
    )
}


// <h2>Halaman Home</h2>;
export default Home;