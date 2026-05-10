

function Card({ name, price, image, onAdd }) {
    return (
        <div className="card">
            <img src={image} alt={name} />
            <h2>{name}</h2>
            <p className="price">${price}</p>
            <button className="add" onClick={() => onAdd({ name, price, image })}>Add to Cart</button>
        </div>
    );
}

export default Card;