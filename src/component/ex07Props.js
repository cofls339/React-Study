import React, { Component } from 'react';

class Ex07Props extends Component {
  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps', props.prop);
    return {};
  }

  constructor(props) {
    super(props);
    this.state = {};
    console.log('constructor', this.props.prop);
  }

  render() {
    console.log('render');
    return (
      <h2>LifeStyle</h2>
    )
  }
}

export default Ex07Props;