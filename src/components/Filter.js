/* eslint-disbutton ble no-unused-vars */
import React, { Component } from 'react'

export default class filter extends Component {
	render() {
		
		const brands = [...new Set(this.props.products.map(product => product.brand))]
		const categories = [...new Set(this.props.products.map(product => product.type))]


		return (
			<div className="filter">

				<div className="filter-type">
					<b>Category {" "}</b>				
					<ul value={this.props.type} onClick={this.props.filterProducts}>
						<button value="All">All</button >
						{categories.map(brand =>
							<button value={brand}>{brand}</button >
							)}
					</ul>
					</div>
				<div className="filter-brand">
					<b>Brand {" "}</b>					
					<ul value={this.props.brand} onClick={this.props.filterProducts}>
						<button value="All">All</button >
						{brands.map(brand =>
							<button  value={brand}>{brand}</button >
							)}
					</ul>
				</div>
				<label htmlFor="toggle">Filter</label>
				<input type="checkbox" id="toggle"/>
				<div className="filter-toggle">
					<div className="filter-dropdown">
						Category {" "}
						<select value={this.props.type} onChange={this.props.filterProducts}>
							<option value="All">All</option>
								{categories.map(type =>
									<option value={type}>{type}</option >
								)}
						</select>
						Brand {" "}
						<select value={this.props.brand} onChange={this.props.filterProducts}>
							<option value="All">All</option>
								{brands.map(brand =>
									<option value={brand}>{brand}</option >
								)}
						</select>
					</div>
				</div>
				<div className="filter-sort">
					Sort by {" "}
					<select value={this.props.sort} onChange={this.props.sortProducts}>
						<option value=""></option>	
						<option value="lowest">Lowest price</option>
						<option value="highest">Highest price</option>
						<option value="AZ">Name AZ</option>
						<option value="ZA">Name ZA</option>
					</select>
					<div className="filter-result">{this.props.count} Products</div>
				</div>
			</div>

			
		)
	}
}
