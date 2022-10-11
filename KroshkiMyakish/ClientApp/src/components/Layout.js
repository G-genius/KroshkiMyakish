import React, { Component } from 'react';
import { Container } from 'reactstrap';
import Home from "./Home";

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <Container>
          {this.props.children}
        </Container>
          <Home/>
      </div>
    );
  }
}
