import "./Itemdetail.css";

const ItemDetail = ({ product }) => {
  return (
    <div className="detail-item-container">
      <div className="detail-item-card">
        <img src={product.image} alt={product.name} width={600} />
        <div className="detail-text-container">
          <h2 className="detail-title">{product.name}</h2>
          <p className="detail-text">{product.description}</p>
          <p className="detail-text">Precio: ${product.price}</p>
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
