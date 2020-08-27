import React from "react";
import "./App.css";
import data from "./data.json";
import Products from "./components/Products";
import Filter from "./components/Filter";
import Header from "./components/Header";
import Footer from "./components/Footer";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data,
      brand: "",
      type: "",
      sort: "",
    };
  }
  sortProducts = (event) => {
    const sort = event.target.value;
    this.setState((state) => ({
      products: this.state.products.slice().sort((a, b) => {
        switch (sort) {
          case "lowest":
            return a.price - b.price;
          case "highest":
            return b.price - a.price;
          case "AZ":
            return a.name.localeCompare(b.name);
          case "ZA":
            return b.name.localeCompare(a.name);
          default:
            return a.id - b.id;
        }
      }),
    }));
  };

  filterProductsByBrand = (event) => {
    if (event.target.value === "All") {
      this.setState({
        brand: event.target.value,
        products: data.filter(
          (product) =>{
	    	if (this.state.type && (this.state.type !=="" && this.state.type !=="All")){
	    	  return product.type === this.state.type
	        }
	        return true;
   	      })
      });
    } else {
      this.setState({
        brand: event.target.value,
        products: data.filter(
  	      (product) => {
  		    if (this.state.type && (this.state.type !=="" && this.state.type !=="All")){
  		      return product.type === this.state.type && product.brand === event.target.value;   
  		    }
  		    return product.brand === event.target.value;
  	      }),
      });
    }
  };
  
  filterProductsByType = (event) => {
	    if (event.target.value === "All") {
	      this.setState({ type: event.target.value, 
	    	  products: data.filter(
    	          (product) =>{
	    	          if (this.state.brand && (this.state.brand !=="" && this.state.brand !=="All")){
	    	        	  return product.brand === this.state.brand
	    	          }
	    	          return true;
    	          }
	  	      ) 
	      });
	    } else {
	      this.setState({
	        type: event.target.value,
	        products: data.filter(
	          (product) => {
		          if (this.state.brand && (this.state.brand !=="" && this.state.brand !=="All")){
		        	  return product.brand === this.state.brand && product.type === event.target.value;   
		          }
		          return product.type === event.target.value;
	          }
	        ),
	      });
	    }
	    
	    event.target.className = "active"
	  };


  render() {
    return (
      <div className="grid-container">
        <Header></Header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.state.products.length}
                products={data}
                brand={this.state.brand}
                type={this.state.type}
                sort={this.state.sort}
                filterProductsByBrand={this.filterProductsByBrand}
                filterProductsByType={this.filterProductsByType}
                sortProducts={this.sortProducts}
              ></Filter>
              <Products products={this.state.products}></Products>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;