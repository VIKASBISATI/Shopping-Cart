import React, { Component } from "react";
import Button from "antd/es/button";
import { getAllProducts } from "../services/shopServices";
class ShoppingDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      productDetails: []
    };
  }
  componentDidMount() {
    this.getDetails()
  }
  getDetails=()=>{
    getAllProducts()
    .then(res => {
      console.log("res in get all products", res.data);
      this.setState({
          productDetails:res.data
      })
    })
    .catch(err => {
      console.log("err in get all products");
    });
  }
  render() {
    const mapMobiles = this.state.productDetails.map((data,index) => {
        console.log("data after mapping",data);
        
      return (
        <div className="flip-card-container" key={index}>
          <div
            className="front"
            style={{ backgroundImage: `url(${require("../assets/img1.jpg")})` }}
          ></div>
          <div className="back">
            {data.productName}
            {data.price}
          </div>
        </div>
      );
    });
    return (<div>
        {mapMobiles}
    </div>)
  }
}
export default ShoppingDetails;
