import React, { Component } from 'react'

export default class filter extends Component {
	render() {
		return (
			<div className="filter">
				<div className="filter-result">{this.props.count} Products</div>
				<div className="filter-sort">
					Sort by {" "}
					<select value={this.props.type} onChange={this.props.sortProducts}>
						<option value="">- - - - - - - - </option>	
						<option value="lowest">Lowest price</option>
						<option value="highest">Highest price</option>
						<option value="AZ">Name AZ</option>
						<option value="ZA">Name ZA</option>
					</select>
				</div>
				<div className="filter-size">
					Category{" "}
					<select value={this.props.type} onChange={this.props.filterProducts}>
						<option value="All">All</option>
						<option value="Eau de Parfum">Eau de Parfum</option>
						<option value="Eau de Toilette">Eau de Toilette</option>
					</select>
				</div>
			</div>
		)
	}
}
