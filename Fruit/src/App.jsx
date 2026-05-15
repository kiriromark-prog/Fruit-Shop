import { useState } from 'react'
import './App.css'
import Card from './card'
import About from './about'
import Cart from './cart'

function App() {
  const [darkMode, setDarkMode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [cart, setCart] = useState([])

  const toggleDarkMode = () => {
    const nextDarkMode = !darkMode
    setDarkMode(nextDarkMode)
    document.documentElement.setAttribute('data-theme', nextDarkMode ? 'dark' : 'light')
  }

  const products = [
    { id: 1, name: 'Apple', price: 1.99, image: './apple.jpg', category: 'Fruit' },
    { id: 2, name: 'Banana', price: 0.99, image: './banana.jpg', category: 'Fruit' },
    { id: 3, name: 'Carrots', price: 1.49, image: './carrot.jpg', category: 'Vegetable' },
    { id: 4, name: 'Watermelon', price: 2.99, image: './melon.jpg', category: 'Fruit' },
    { id: 5, name: 'Rosemary', price: 2.99, image: './rosemary.jpg', category: 'Herb' },
    { id: 6, name: 'Tomato', price: 2.99, image: './tomato.jpg', category: 'Vegetable' },
    { id: 7, name: 'Pineapple', price: 2.99, image: './pineapple.jpg', category: 'Fruit' },
    { id: 8, name: 'Garlic', price: 2.99, image: './garlic.jpg', category: 'Vegetable' }
  ]

  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory)

  const addToCart = (product) => {
    setCart([...cart, product])
  }

  return (
    <>
      <div className={darkMode ? 'app dark-mode' : 'app'}>
        <button onClick={toggleDarkMode} className="dark-mode-toggle">
          {darkMode ? 'Toggle Light Mode' : 'Toggle Dark Mode'}
        </button>
      </div>

      <h1>Fruit Store</h1>
      <hr />

      <label htmlFor="product-filter">Filter products:</label>
      <select
        id="product-filter"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        aria-label="Filter products"
      >
        <option value="All">All Products</option>
        <option value="Fruit">Fruit</option>
        <option value="Vegetable">Vegetable</option>
        <option value="Herb">Herb</option>
      </select>

      <div className="card-container">
        {filteredProducts.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            onAdd={() => addToCart(product)}
          />
        ))}
      </div>

      <div className="cart-section">
        <Cart cartItems={cart} />
      </div>
      <hr />
      <About />
    </>
  )
}

export default App
