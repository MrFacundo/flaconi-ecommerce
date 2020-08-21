import React, { useState } from 'react';
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
      setCurrentPage: "",
      postsPerPage: 5,
      setPostsPerPage: 10
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
    const indexOfLastPost = this.state.currentPage * 10;
		const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage 
    const currentPosts = this.state.products.slice(indexOfFirstPost, indexOfLastPost);
    
    // Change page
    const paginate = pageNumber => this.state.setCurrentPage({currentPage: pageNumber});


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
              <Products products={currentPosts}></Products>
            </div>
            <Pagination 
              postsPerPage={this.state.postsPerPage}
              totalPosts={this.state.products.length}
              paginate={paginate}/>
          </div>
        </main>
        <footer>
          Footer
        </footer>
      </div>
    );
  }
}

export default App;
