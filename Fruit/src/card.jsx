

function Card({ id, name, price, image, onAdd }) {
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p className="price">${price}</p>
      <button className="add" data-testid={`product-${id}`} onClick={onAdd}>
        Add to Cart
      </button>
    </div>
  )
}

export default Card;