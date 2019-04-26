import React, { Component } from 'react';
import Cookies from 'js-cookie'
// import { BrowserRouter as Router, Route, Link } from "react-router-dom"
class Shoppingcart extends Component {
    ShowItem(x) {
        const productquantity = Cookies.get(x.name)
        console.log(x)
        if (productquantity === undefined) {
            return null;
        } else {
            return (
                <tr key={x.id}>
                    <td><img className="shoppingcartimg" src={x.picture} width="250px" height="200px" alt="" /></td>
                    <td>商品名稱:{x.name}</td>
                    <td>數量:{productquantity}</td>
                    <td>價格{x.price * productquantity}</td>
                </tr>
            )
        }
    }




    render() {
        console.log(this.props.products)
        const productinfo = this.props.products
        return (

            <div className="Shoppingcart">
                <center>
                    <h1 >購物車列表:</h1>

                    <table border="1" width="600px" height="500px">
                        <tbody>
                            {productinfo.map(x => this.ShowItem(x))}
                        </tbody>
                    </table>
                </center>
            </div>
        );
    }
}

export default Shoppingcart;
