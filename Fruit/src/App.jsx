import { useState } from 'react'
import './App.css'
import Card from './card'
import About from './about'
import Cart from './cart'

function App() {
   const [cart, setCart] = useState([]);

   const addToCart = (product) => {
     setCart([...cart, product]);
   };


  return (
    <>
    <h1>Fruit Store</h1>
<hr />

    <div className="card-container">
      <Card name="Apple" price={1.99} onAdd ={addToCart} image= "./apple.jpg" />
      <Card name="Banana" price={0.99} onAdd ={addToCart} image= "./banana.jpg" />
      <Card name="Carrots" price={1.49} onAdd ={addToCart} image= "./carrot.jpg" />
      <Card name="Watermelon" price={2.99} onAdd ={addToCart} image= "./melon.jpg" />
      <Card name="rosemary" price={2.99} onAdd ={addToCart} image= "./rosemary.jpg" />
      <Card name="tomato" price={2.99} onAdd ={addToCart} image= "./tomato.jpg" />
      <Card name="pineapple" price={2.99} onAdd ={addToCart} image= "./pineapple.jpg" />
      <Card name="garlic" price={2.99} onAdd ={addToCart} image= "./garlic.jpg" />
    </div>
<hr />
    <Cart cartItems={cart}/>
<hr />
    <About/>
    </>
  )
}

export default App
