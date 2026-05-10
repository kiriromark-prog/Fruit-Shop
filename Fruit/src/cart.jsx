

function Cart({ cartItems = [] }) { 
    //cartItems is an array of products added to the cart, passed as a prop from App.jsx
    //calculate total price
    const total = cartItems.reduce((total, item) => total + item.price, 0);    

  return (
    <div className="cart">
      <h1>Your Cart:</h1>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>{item.name} - ${item.price}</li>
          ))}
        </ul>
        <h3>Total: ${total.toFixed(2)}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;
