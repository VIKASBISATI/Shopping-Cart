import React, { Component } from "react";
import { getAllProducts } from "../services/shopServices";
import { Layout, Button } from "antd";
class ShoppingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: []
    };
  }
  componentDidMount() {
    this.getDetails();
  }
  getDetails = () => {
    getAllProducts()
      .then(res => {
        console.log("res in get all products", res.data);
        this.setState({
          productDetails: res.data
        });
      })
      .catch(err => {
        console.log("err in get all products");
      });
  };
  render() {
    const { Header } = Layout;
    const mapMobiles = this.state.productDetails.map((data, index) => {
      return (
        <div key={index}>
          <div className="flip-card-container">
            <div
              className="front"
              style={{
                backgroundImage: `url(${require("../assets/img1.jpg")})`
              }}
            ></div>
            <div className="back">
              <div className="back-card-contents">
                <h1> {data.productName}</h1>
                <h1> {data.type}</h1>
                <h1> {data.color}</h1>
                <h1> {data.brand}</h1>
                <Button onClick={this.handleAddToCart}>AddToCart</Button>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      <div className="main-container">
        <Layout>
          <Header style={{ backgroundColor: "#00ffff" }}>
            <h1 className="header">Vikkart</h1>
          </Header>
          <div className="product-header-style">
            <h1 className="products-header">All Products</h1>
            <div className="line"></div>
          </div>
        </Layout>
        <div className="map-mobile-container">{mapMobiles}</div>
      </div>
    );
  }
}
export default ShoppingDetails;
