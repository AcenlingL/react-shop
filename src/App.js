import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route } from "react-router-dom";

//add routes
import Home from './routes/Home';
import Product from './routes/Product';
import About from './routes/About';
import Shoppingcart from './routes/Shoppingcart'
//add components
import Header from './components/Header';
import Footer from './components/Footer';

//add service
import ProductService from './services/Product';

class App extends Component {
  constructor() {
    super();
    this.state = {
      products: [],
    }
    this.getProducts();
  }
  async getProducts() {
    const products = await ProductService.get();
    // console.log(products);
    this.setState({ products });
  }
  renderRoute(props, Component) {
    return <Component {...props} products={this.state.products} />
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route path="/" exact render={(props) => this.renderRoute(props, Home)} />
          <Route path="/about/" component={About} />
          <Route path="/product/" render={(props) => this.renderRoute(props, Product)} />
          <Route path="/shoppingcart" render={(props) => this.renderRoute(props, Shoppingcart)} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
