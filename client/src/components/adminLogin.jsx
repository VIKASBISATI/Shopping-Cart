import React, { Component } from "react";
import { Card, Input, Button } from "antd";
class AdminLogin extends Component {
  render() {
    return (
      <div className="admin-login-container">
        <Card
          hoverable
          className="admin-cards"
          bodyStyle={{ width: "100%", height: "100%" }}
        >
          <div className="login-fields">
            <h1>Admin Login</h1>
          </div>
          <div className="login-fields">
            <span>Email:</span>
            <Input placeholder="Enter email" />
          </div>
          <div className="login-fields">
            <span>Password:</span>
            <Input.Password placeholder="Enter password..." />
          </div>
          <Button type="primary">Login</Button>
        </Card>
      </div>
    );
  }
}

export default AdminLogin;
