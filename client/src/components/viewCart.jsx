import React, { Component } from "react";
import { getAllProducts } from "../services/shopServices";
import CartHeader from "./header";
import { Card, Divider } from "antd";
class ViewCart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: [],
      count: []
    };
  }
  componentDidMount() {
    this.getDetails();
  }
  getDetails = () => {
    getAllProducts()
      .then(res => {
        var count = res.data.filter(data => {
          return data.addToCart === "true";
        });
        this.setState({
          count: count
        });
        console.log("final count is ", this.state.count);
      })
      .catch(err => {
        console.log("err in get all products");
      });
  };
  render() {
    console.log("state count", this.state.count);
    const detailsMap = this.state.count.map((data, index) => {
      return (
        <div key={index} className="view-details-container">
          <div
            className="view-image"
            style={{
              backgroundImage: `url(${data.imageUrl})`
            }}
          ></div>
          <div>
            <p>
              <b>{data.productName}</b>
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              {data.description}
            </p>
            <p>
              <b>Type:</b>
              {data.type}
              {"\u00A0"}
              {"\u00A0"}
              {"\u00A0"}
              <b>Brand:</b>
              {data.brand}
            </p>
          </div>
        </div>
      );
    });
    return (
      <div className="main-container" style={{ background: "#f0f2f5" }}>
        <CartHeader cnt={this.state.count.length} />
        <Card
          title={`My Cart(${this.state.count.length})`}
          bordered={false}
          style={{ width: "65%" }}
        >
          {detailsMap}
          <Divider />
        </Card>
      </div>
    );
  }
}
export default ViewCart;
