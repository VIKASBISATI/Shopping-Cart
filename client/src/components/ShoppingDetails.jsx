import React, { Component } from "react";
import { getAllProducts, addToCart } from "../services/shopServices";
import { Button, notification } from "antd";
import CartHeader from "./header";
import { withRouter } from "react-router";
class ShoppingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: [],
      count: 0
    };
  }
  componentDidMount() {
    this.getDetails();
  }
  getDetails = () => {
    getAllProducts()
      .then(res => {
        this.setState({
          productDetails: res.data
        });
        console.log("product details", this.state.productDetails);
        var count = this.state.productDetails.filter(data => {
          return data.addToCart === "true";
        });
        this.setState({
          count: count.length
        });
        console.log("final count is ", this.state.count);
      })
      .catch(err => {
        console.log("err in get all products");
      });
  };
  handleAddToCart = id => {
    console.log("id in handler add to cart", id);
    var data = {
      id: id,
      addToCart: true
    };
    this.getDetails();
    addToCart(data)
      .then(res => {
        var placement = "bottomRight";
        notification["success"]({
          message: "Add to cart response details",
          description: "Added product to the cart successfully",
          placement
        });
      })
      .catch(err => {
        notification["error"]({
          message: "Add to cart response details",
          description: "failed to add product to the cart"
        });
      });
  };
  render() {
    console.log("undefined pro", this.state.productDetails);
    const mapMobiles = this.state.productDetails.map((data, index) => {
      return (
        <div key={index}>
          <div className="flip-card-container">
            <div
              className="front"
              style={{
                backgroundImage: `url(${data.imageUrl})`
              }}
            ></div>
            <div className="back">
              <div className="back-card-contents">
                <h1> {data.productName}</h1>
                <h1> {data.type}</h1>
                <h1> {data.color}</h1>
                <h1> {data.brand}</h1>
                <Button onClick={() => this.handleAddToCart(data._id)}>
                  AddToCart
                </Button>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="main-container" style={{ background: "#f0f2f5" }}>
        <CartHeader cnt={this.state.count} />
        <div className="product-header-style">
          <h1 className="products-header">All Products</h1>
          <div className="line"></div>
        </div>
        <div className="map-mobile-container" style={{ background: "#f0f2f5" }}>
          {mapMobiles}
        </div>
      </div>
    );
  }
}
export default withRouter(ShoppingDetails);
