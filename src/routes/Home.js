import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Shoppingcarforhome from '../components/Shoppingcar';
class Home extends Component {

  renderProduct(p) {

    return (
      <div key={p.id} className="col-lg-4 col-md-6 mb-4">
        <div className="card h-100">
          <Link to={{
            pathname: `/Product/${p.id}`,
            state: { product: p }
          }}><img className="card-img-top" width="400px" height="300px" src={p.picture} alt="" /></Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link to={{
                pathname: `/Product/${p.id}`,
                state: { product: p }
              }}>{p.name}</Link>
            </h4>
            <h5>${p.price}</h5>
            <Shoppingcarforhome product={p} />
            <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet numquam aspernatur!</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">&#9733; &#9733; &#9733; &#9733; &#9734;</small>
          </div>
        </div>
      </div>
    )
  }
  render() {
    return (
      <div className="container">

        <div className="row">

          <div className="col-lg-3">

            <h1 className="my-4">AcenlingShop</h1>
            <div className="list-group">
              <Link className="list-group-item" to='/About'>關於我們</Link>
              <Link className="list-group-item" to='/Shoppingcart'>購物車</Link>
              <Link className="list-group-item" to='/productmenu'>產品型錄</Link>
            </div>

          </div>
          <div className="col-lg-9">

            <div id="carouselExampleIndicators" className="carousel slide my-4" data-ride="carousel">
              <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
              </ol>
              <div className="carousel-inner" role="listbox">
                <center>
                  <div className="carousel-item active">
                    <img className="d-block img-fluid" src={"https://i.imgur.com/TopDBQD.png"} width="400px" height="300px" alt="First slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src="https://i.imgur.com/uUVA7Tp.jpg" width="400px" height="300px" alt="Second slide" />
                  </div>
                  <div className="carousel-item">
                    <img className="d-block img-fluid" src="https://i.imgur.com/DHxXogL.png" width="400px" height="300px" alt="Third slide" />
                  </div>
                </center>
              </div>
              <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>

            <div className="row">
              {this.props.products.map(p => this.renderProduct(p))}
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Home;
