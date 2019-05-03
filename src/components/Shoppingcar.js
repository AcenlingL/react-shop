import React, { Component } from 'react';
import Cookies from 'js-cookie'
class Shoppingcar extends Component {
  addItem() {
    const productinfo = this.props.product
    const productname = Cookies.get(productinfo.name)

    let productquantity = parseInt(Cookies.get(productinfo.name))

    if (productname === undefined) {
      Cookies.set(productinfo.name, 1)
    }

    /* if(productquantity===0){
       productquantity+=1
       Cookies.set(productinfo.name,productquantity)
     }*/

    else if (productquantity >= 1) {
      productquantity += 1
      Cookies.set(productinfo.name, productquantity)
    }
  }
  render() {
    const productinfo = this.props.product

    return (

      <div className="Shoppingcar">

        <button className="btn btn-dark" onClick={() => this.addItem()}> 加入購物車</button>

      </div>
    );
  }
}

export default Shoppingcar;
