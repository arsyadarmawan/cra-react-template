import React from 'react'

import { Routes, Route, Link, useParams } from "react-router-dom";

const CategoryDetail = () => {
    const { type } = useParams();
    switch (type){
        case "foods":
            return  <p>List of foods: bakso, sate, soto, dll</p>;
        case "drinks":
            return <p>List of drinks: air mineral, es teh, kopi, dll</p>;
        default:
            return <p>No category</p>;
    }
}


const Category = () => {
    return (
        <div>
            <h2>Halaman Category</h2>
            <ul>
                <li><Link to="/category/foods">Foods</Link></li>
                <li><Link to="/category/drinks">Drinks</Link></li>
            </ul>
            <hr />

            <Routes>
                <Route path="/" element={<p>Please select a category</p>} />
                <Route path=":type" element={<CategoryDetail />} />
            </Routes>
        </div>
    );
}

export default Category;
