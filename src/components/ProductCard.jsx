
import './ProductCard.css';

export function ProductCard({image}) {
  return (
    <div class="product-card">
		<div class="badge">OFERTA</div>
		<div class="product-tumb">
			<img src={`/images/${image}`} alt="" />
		</div>
		<div class="product-details">
			<h4><a href="">Women leather bag</a></h4>
			<div class="product-bottom-details">
				<div class="product-price"><small>$96.00</small>$230.99</div>
				<div class="product-links">
					<a href=""><i class="fa fa-heart"></i></a>
					<a href=""><i class="fa fa-shopping-cart"></i></a>
				</div>
			</div>
		</div>
	</div>
  )
}
