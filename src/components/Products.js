import React, { Component } from 'react';
import { FaStar } from 'react-icons/fa';

export default class Products extends Component {
	render() {
		return (
			<div className="products-container">
					<ul className="products">
						{this.props.products.map(product => (
							<li key={product.id}>
									<div className="product">
										<a href={'#' + product.id}>
											<img src={product.image} alt={product.name}></img>
											<p><b>{product.brand}</b></p>
											<p><b>{product.name}</b></p>
											<p className="product-type">{product.type}</p>
											<FaStar size={15} />
											<FaStar size={15} />
											<FaStar size={15} />
											<div className="product-price">
												<div>from € {product.price / 100} / {product.size} </div>
											</div>
										</a>
									</div>
							</li>
						))}
					</ul>
			</div>
		)
	}
}
