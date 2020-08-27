import "./Filter.css";
import React, { Component } from "react";

export default class filter extends Component {
  render() {
    const brands = [
      ...new Set(this.props.products.map((product) => product.brand)),
    ];
    const categories = [
      ...new Set(this.props.products.map((product) => product.type)),
    ];

    return (
      <div className="filter">
        <div className="filter-sort">
          <div className="filter-result">
            {this.props.count} available products
          </div>
          <p>
            Sort by{" "}
            <select value={this.props.sort} onChange={this.props.sortProducts}>
              <option value=""></option>
              <option value="lowest">Lowest price</option>
              <option value="highest">Highest price</option>
              <option value="AZ">Name AZ</option>
              <option value="ZA">Name ZA</option>
            </select>
          </p>
        </div>
        <div className="filter-type">
          <b>Category </b>
          <ul value={this.props.type} onClick={this.props.filterProductsByType}>
            <button value="All" 
            	className={`${this.props.type === '' || this.props.type === 'All'? 'active':''}` } 
            	>All</button>
            {categories.map((type, index) => (
              <button value={type} key={(index+type)} 
                className={`${this.props.type === type? 'active':''}` }>
                {type}
              </button>
            ))}
          </ul>
        </div>
        <div className="filter-brand">
          <b>Brand </b>
          <ul value={this.props.brand} onClick={this.props.filterProductsByBrand}>
            <button value="All" 
            	className={`${this.props.brand === '' || this.props.brand === 'All'? 'active':''}` }
            	>All</button>
            {brands.map((brand, index) => (
              <button value={brand} key={(index+brand)} 
          	    className={`${this.props.brand === brand? 'active':''}` }>
                {brand}
              </button>
            ))}
          </ul>
        </div>
        <div className="filter-dropdown">
          <p>
            Category {"  "}
            <select
              value={this.props.type}
              onChange={this.props.filterProductsByType}
            >
              <option value="All">All</option>
              {categories.map((type, index) => (
                <option value={type} key={index}>
                  {type}
                </option>
              ))}
            </select>
          </p>
          <p>
            Brand {"  "}
            <select
              value={this.props.brand}
              onChange={this.props.filterProductsByBrand}
            >
              <option value="All">All</option>
              {brands.map((brand, index) => (
                <option value={brand} key={index}>
                  {brand}
                </option>
              ))}
            </select>
          </p>
        </div>
      </div>
    );
  }
}