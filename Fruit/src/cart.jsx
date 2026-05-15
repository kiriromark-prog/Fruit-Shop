

function Cart({ cartItems = [] }) {
  const total = cartItems.reduce((total, item) => total + item.price, 0)

  return (
    <div className="cart">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <ul>
            {cartItems.map((item, index) => (
              <li key={`${item.name}-${index}`}>
                {item.name} - ${item.price}
              </li>
            ))}
          </ul>
          <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  )
}

export default Cart;
