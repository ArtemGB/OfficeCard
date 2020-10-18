import React, { Component } from 'react';
import { Container } from 'reactstrap';
import './Layout.css';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
        <div class="mainLayout">
        <Container>
          {this.props.children}
        </Container>
      </div>
    );
  }
}
