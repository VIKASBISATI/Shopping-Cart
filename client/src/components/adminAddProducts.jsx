import React, { Component } from "react";
import { addProducts } from "../services/shopServices";
import {
  Layout,
  Menu,
  Breadcrumb,
  Icon,
  Input,
  Button,
  notification
} from "antd";
import { SubMenu } from "rc-menu";
class AdminAddProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      info: "",
      pname: "",
      brand: "",
      type: "",
      color: "",
      price: ""
    };
  }
  handlePname = e => {
    this.setState({
      pname: e.target.value
    });
  };
  handleType = e => {
    this.setState({
      type: e.target.value
    });
  };
  handlePrice = e => {
    this.setState({
      price: e.target.value
    });
  };
  handleColor = e => {
    this.setState({
      color: e.target.value
    });
  };
  handleBrand = e => {
    this.setState({
      description: e.target.value
    });
  };
  handleDescription = e => {
    this.setState({
      brand: e.target.value
    });
  };
  handleChange = e => {
    console.log("on Change in admin products", e.target.files[0]);
    this.setState({
      info: e.target.files[0]
    });
  };
  handleSubmit = e => {
    console.log("file submit", this.state.info);
    let formData = new FormData();
    this.setState({
      pname: "",
      brand: "",
      type: "",
      color: "",
      price: "",
      description: ""
    });
    // formData.append("image", e.target.files[0]);
    formData.append("image", this.state.info);
    formData.append("productName", this.state.pname);
    formData.append("price", this.state.price);
    formData.append("type", this.state.type);
    formData.append("color", this.state.color);
    formData.append("brand", this.state.brand);
    formData.append("description", this.state.description);
    addProducts(formData)
      .then(res => {
        console.log("res in add products", res);
        notification["success"]({
          message: "Add products response details",
          description: "Added product successfully"
        });
      })
      .catch(err => {
        console.log("err in add products", err);
        notification["failure"]({
          message: "Add products response details",
          description: "Error in adding the products"
        });
      });
    console.log("data after submit");
  };
  render() {
    const { Header, Sider, Content } = Layout;
    return (
      <Layout id="layout-container">
        <Header style={{ backgroundColor: "#00ffff" }}>
          <h1>Admin Panel</h1>
        </Header>
        <Content style={{ margin: "0 50px" }}>
          <Breadcrumb style={{ margin: "10px 0" }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>Panel</Breadcrumb.Item>
          </Breadcrumb>
          <Layout
            style={{ padding: "24px 0", background: "#fff", height: "90%" }}
          >
            <Sider width={200} style={{ background: "#fff" }}>
              <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}
              >
                <SubMenu
                  key="sub1"
                  title={
                    <span>
                      <Icon type="user" />
                      Admin Actions
                    </span>
                  }
                >
                  <Menu.Item key="1">Add Products</Menu.Item>
                  {/* <Menu.Item key="2">Orders</Menu.Item> */}
                  <Menu.Item key="3">Manage Products</Menu.Item>
                </SubMenu>
              </Menu>
            </Sider>
            <Content style={{ padding: "0 24px" }}>
              <div>
                <div>
                  <span id="fields" style={{ fontSize: "15px" }}>
                    *Product Name:
                  </span>
                  <Input
                    onChange={this.handlePname}
                    id="fields"
                    className="pname"
                    placeholder="Enter product name"
                    value={this.state.pname}
                  />
                </div>
                <div>
                  <span id="fields" style={{ fontSize: "15px" }}>
                    *Price:
                  </span>
                  <Input
                    onChange={this.handlePrice}
                    id="fields"
                    className="price"
                    placeholder="Enter price"
                    value={this.state.price}
                  />
                </div>
                <div>
                  <span id="fields" style={{ fontSize: "15px" }}>
                    *Product Type:
                  </span>
                  <Input
                    onChange={this.handleType}
                    id="fields"
                    className="type"
                    placeholder="Enter type"
                    value={this.state.type}
                  />
                </div>
                <div>
                  <span id="fields" style={{ fontSize: "15px" }}>
                    *Color :
                  </span>
                  <Input
                    onChange={this.handleColor}
                    id="fields"
                    className="color"
                    placeholder="Enter color"
                    value={this.state.color}
                  />
                </div>
                <div>
                  <span id="fields" style={{ fontSize: "15px" }}>
                    *Brand :
                  </span>
                  <Input
                    onChange={this.handleBrand}
                    id="fields"
                    className="brand"
                    placeholder="Enter brand"
                    value={this.state.brand}
                  />
                </div>
                <div>
                  <span id="fields" style={{ fontSize: "15px" }}>
                    *Description :
                  </span>
                  <Input
                    onChange={this.handleDescription}
                    id="fields"
                    className="description"
                    placeholder="Enter description"
                    value={this.state.description}
                  />
                </div>
                <div>
                  <span id="fields" style={{ fontSize: "15px" }}>
                    *Upload Image :
                  </span>
                  {/* <Upload onChange={this.handleChange}>
                    <Button>
                      <Icon type="upload" />
                      Click to upload image
                    </Button>
                  </Upload> */}
                  <input type="file" id="fields" onChange={this.handleChange} />
                </div>
                <Button id="fields" type="primary" onClick={this.handleSubmit}>
                  Submit
                </Button>
              </div>
            </Content>
          </Layout>
        </Content>
      </Layout>
    );
  }
}

export default AdminAddProducts;
