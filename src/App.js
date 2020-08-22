/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import './App.css';
import data from "./data.json";
import Products from './components/Products';
import Filter from './components/Filter';
import Pagination from './components/Pagination';


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      products: data,
      type: "",
      sort: "",
      currentPage: 1,
      previousPage: "",
      nextPage: "",
      setCurrentPage: "",
      productsPerPage: 10,
    };
  }

  sortProducts= (event)=> {
    const sort = event.target.value;
    console.log(event.target.value)
    this.setState((state) => ({
      sort: sort,
      products: this.state.products.slice().sort((a,b) => {
        switch (sort) {
          case 'lowest':
            return a.price - b.price
          case 'highest':
              return b.price - a.price
          case 'AZ':
            return a.name.localeCompare(b.name)
          case 'ZA':
              return b.name.localeCompare(a.name)
          default:
            return a.id - b.id
        }
      })
    }))
  }

  filterProducts = (event) => {
    if (event.target.value === "") {
      this.setState({ type: event.target.value, product: data});
    } else if ((event.target.value === "All")) {
      this.setState({
        type: event.target.value,
        products: data.map((product) => product),
      });
    } else {
      this.setState({
        type: event.target.value,
        products: data.filter(
          (product) => product.type.indexOf(event.target.value) >= 0
        ),
      });
    }
  }

  render(){

    // Get current products
    const indexOfLastProduct = this.state.currentPage * this.state.productsPerPage;
		const indexOfFirstProduct = indexOfLastProduct - this.state.productsPerPage 
    const currentProducts = this.state.products.slice(indexOfFirstProduct, indexOfLastProduct);
    
    // Change page
    const paginate = pageNumber => this.setState({currentPage: pageNumber});
    const nextPage = () => this.setState({currentPage: this.state.currentPage + 1});
    const prevPage = () => this.setState({currentPage: this.state.currentPage - 1});



      return (
      <div className="grid-container">
        <header>
          <a href="/">Flaconi ecommerce</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter count={this.state.products.length}
              type={this.state.type}
              sort={this.state.sort}
              filterProducts={this.filterProducts}
              sortProducts={this.sortProducts}  
              ></Filter>
              <Products products={currentProducts}></Products>
            </div>
          </div>
            <Pagination 
              productsPerPage={this.state.productsPerPage}
              totalProducts={this.state.products.length}
              paginate={paginate}
              nextPage={nextPage}
              previousPage={prevPage}
              
              />
        </main>
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
