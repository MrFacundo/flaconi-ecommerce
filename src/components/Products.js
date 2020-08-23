import React, { Component } from "react";
import { FaStar } from "react-icons/fa";

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
                    {[...Array(5)].map((star, i) => {
                      const ratingValue = i + 1;
                      const productRating = Math.round(product.rating / 20);
                      return (
                        <FaStar
                          className="star"
                          size={10}
                          color={
                            ratingValue <= productRating
                              ? "##000000"
                              : "#e4e5e9"
                          }
                        />
                      );
                    })}
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
