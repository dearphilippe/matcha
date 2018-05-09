import React, { Component } from "react";
import "./App.css";
import { Button, Layout, Col, Row } from "antd";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Row>
            <div class="inner">
              <Col span={8}>
                <h3 class="masthead-brand">Matcha</h3>
              </Col>
              <Col span={8} offset={8}>
                <nav class="nav nav-masthead justify-content-center">
                  <Button type="primary">Sign in</Button>
                </nav>
              </Col>
            </div>
          </Row>
          <footer style={{ textAlign: "center" }}>Copyright 2018</footer>
        </Layout>
      </div>
    );
  }
}

export default App;
