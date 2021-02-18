import React, { Component } from 'react';

class Ex06LifeCycle extends Component {
  state = {
    count: 0
  }
  constructor() {
    super()
    console.log('constructor');
  }

  static getDerivedStateFromProps(props, state) {
    console.log('getDerivedStateFromProps');
    return {};
  }

  // componentWillMount() { => 사용되지 않는다.
  //   console.log('componentWillMount (deprecated)');
  // }

  componentDidMount() {
    console.log('componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    // 5의 배수시 리렌더링 하지 않도록함
    console.log('shouldComponentUpdate');
    if (nextState.count % 5 === 0) return false;
    return true;
  }

  // componentWillUpdate(nextProps, nextState) { => 사용되지 않는다.
  //   console.log('componentWillUpdate');
  // }
  
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
  }

  handleIncrease = () => {
    const { count } = this.state;
    this.setState({
      count: count + 1
    });
  }

  handleDecrease = () => {
    this.setState(
      ({ count }) => ({
        count: count - 1
      })
    );
  }

  render() {
    console.log('render');
    return (
      <div>
        LifeCycle
        <div>값: {this.state.count}</div>
        <button onClick={this.handleIncrease}>+</button>
        <button onClick={this.handleDecrease}>-</button>
      </div>
    )
  }
}

export default Ex06LifeCycle;