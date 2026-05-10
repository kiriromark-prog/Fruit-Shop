import React from "react";
import Cart from "./cart";
import About from "./about";
import Card from "./card";
import "./App.css";

function App() {
    const [cart, setCart] = React.useState([]);

    const addToCart = (item) => {
        setCart([...cart, item]);
    };
     
    const removeFromCart = (index) => {
        const newCart = [...cart];
        newCart.splice(index, 1);
        setCart(newCart);
    };

    const products = [
        { name: "Apple", price: 1.99, image: "./apple.jpg" },
        { name: "Banana", price: 0.99, image: "./banana.jpg" },
        { name: "Carrots", price: 1.49, image: "./carrot.jpg" },
        { name: "Watermelon", price: 2.99, image: "./melon.jpg" },
        { name: "Rosemary", price: 2.99, image: "./rosemary.jpg" },
        { name: "Tomato", price: 2.99, image: "./tomato.jpg" },
        { name: "Pineapple", price: 2.99, image: "./pineapple.jpg" },
        { name: "Garlic", price: 2.99, image: "./garlic.jpg" }
    ];
    
    return (
        <div className="app">
            <h1>Fruit Store</h1>
            <hr />
            <div className="card-container">
                {products.map((product, index) => (
                    <Card   key={index} {...product} onAdd={() => addToCart(product)} />
                ))}
            </div>
            <hr />
            <Cart cartItems={cart} onRemove={removeFromCart} />
            <hr />
            <About />
        </div>
    );
}

export default App;