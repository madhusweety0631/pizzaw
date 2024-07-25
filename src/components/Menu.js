import React, { useState, useEffect } from "react";
import axios from "axios";

const Menu = () => {
    const [items, setItems] = useState([]);

    const fetchItems = () => {
        axios.get("http://localhost:5000/pizza")
            .then(response => {
                setItems(response.data);
            })
            .catch(error => {
                console.log('There was an error fetching the pizza data!', error);
            });
    };

    useEffect(() => {
        fetchItems();
    }, []);



    return (
        <div className="container mt-4">
            <h2>BBQ Nation</h2>
            <div className="row">
                {items.map(eachItem => (
                    <div className="col-md-4" key={eachItem.id}>
                        <div className="card mt-4" >
                            <img src={eachItem.imageUrl} className="card-img-top" height={250} alt={eachItem.imageUrl} />
                            <div className="card-body">
                                <h5 className="card-title">{eachItem.name}</h5>
                                <p className="card-text">Price : {eachItem.price}</p>
                                <p className="card-category">{eachItem.category}</p>
                                <p className="card-text"> {eachItem.description}</p>
                                <button className="btn btn-info">Update</button>
                                <button className="btn btn-danger">Delete</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

};

export default Menu;