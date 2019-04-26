/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';

// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import { Redirect, Link } from "react-router-dom"
import Shoppingcar from "../components/Shoppingcar"

class Product extends Component {
  render() {
    const p = this.props.location.state.product;
    if (!p) return <Redirect to="/" />
  
    return (
      <div className="Product">
        <div className="container">

          <div className="row">

            <div className="col-lg-3">
              <h1 className="my-4">Shop Name</h1>
              <div className="list-group">
                <a href="#" className="list-group-item active">Category 1</a>
                <a href="#" className="list-group-item">Category 2</a>
                <a href="#" className="list-group-item">Category 3</a>
              </div>
            </div>

            <div className="col-lg-9">

              <div className="card mt-4">
                <img className="card-img-top img-fluid" src={p.picture} alt="" />
                <div className="card-body">
                  <h3 className="card-title">{p.name}</h3>
                  <h4>${p.price}</h4>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente dicta fugit fugiat hic aliquam itaque facere, soluta. Totam id dolores, sint aperiam sequi pariatur praesentium animi perspiciatis molestias iure, ducimus!</p>
                  <span className="text-warning">&#9733; &#9733; &#9733; &#9733; &#9734;</span>
                  4.0 stars
            </div>
              </div>

              <div className="card card-outline-secondary my-4">
                <div className="card-header">
                  Product Reviews
            </div>
                <div className="card-body">
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                  <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                  <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                  <hr />
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Omnis et enim aperiam inventore, similique necessitatibus neque non! Doloribus, modi sapiente laboriosam aperiam fugiat laborum. Sequi mollitia, necessitatibus quae sint natus.</p>
                  <small className="text-muted">Posted by Anonymous on 3/1/17</small>
                  <hr />
                  <Shoppingcar product={p} className="btn btn-success"/>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default Product;
