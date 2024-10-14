import "./ProductCard.css";

export function ProductCard({ image }) {
  return (
    <div className="product-card">
      <div className="badge">OFERTA</div>
      <div className="product-tumb">
        <img src={`/images/${image}`} alt="" />
      </div>
      <div className="product-details">
        <h4>
          <a href="">Women leather bag</a>
        </h4>
        <div className="product-bottom-details">
          <div className="product-price">
            <small>$96.00</small>$230.99
          </div>
          <div className="product-links">
            <a href="">
              <i className="fa fa-heart"></i>
            </a>
            <a href="">
              <i className="fa fa-shopping-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
