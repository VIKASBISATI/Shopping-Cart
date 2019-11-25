import React, { Component } from "react";
import { Layout, Badge, Icon } from "antd";
import { withRouter } from "react-router";
class CartHeader extends Component {
  handleCart = () => {
    this.props.history.push("/viewCart");
  };
  render() {
    const { Header } = Layout;
    return (
      <Layout>
        <Header style={{ backgroundColor: "#00ffff" }}>
          <div className="shop-header-contents">
            <h1 className="header">Vikkart</h1>
            <Badge count={this.props.cnt}>
              <Icon
                type="shopping-cart"
                style={{ width: "2em", fontSize: "25px" }}
                onClick={this.handleCart}
              />
            </Badge>
          </div>
        </Header>
      </Layout>
    );
  }
}

export default withRouter(CartHeader);
