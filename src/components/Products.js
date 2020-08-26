import React, { Component } from "react";
import StarRatings from "react-star-ratings";

export default class Products extends Component {
  render() {
    return (
      <div className="products-container">
        <ul className="products">
          {this.props.products.map((product) => (
            <li key={product.id}>
              <div>
                <a href={"#" + product.id}>
                  <img src={product.image} alt={product.name}></img>
                  <p>
                    <b>{product.brand}</b>
                  </p>
                  <p>
                    <b>{product.name}</b>
                  </p>
                  <p className="product-type">{product.type}</p>
                  <div>
                    <StarRatings
	                  rating={product.rating / 20}
	                  starRatedColor="black"
	                  numberOfStars={5}
                      starDimension="10px"	     
                      starSpacing="1px"
	                />                  
                  </div>
                  <div>
                    <div>
                      from € {product.price / 100} / {product.size}{" "}
                    </div>
                  </div>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}