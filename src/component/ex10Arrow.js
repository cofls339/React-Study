import React, { Component } from 'react';

class Ex10Arrow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      arrowFunc: 'React200'
    };
  }
  componentDidMount() {
    Function1(1);
    this.Function2();
    this.Function3();
    this.Function4();

    function Function1(num1) {
      return console.log('function1: ' + num1);
    }
  }

  Function2 = () => {
    console.log(`function2: ${this.state.arrowFunc}`);
  }

  Function3() {
    const bind = this;

    setTimeout(function() {
      // console.log(this); // window
      console.log(`function3: ${bind.state.arrowFunc}`);
      // console.log(`function3: ${this.state.arrowFunc}`); // error
    }, 100);
  }

  Function4() {
    setTimeout(function() {
      console.log(`function4: ${this.state.arrowFunc}`);
    }.bind(this), 100);
  }

  render() {
    return (
      <h2>Arrow Function</h2>
    )
  }
}

export default Ex10Arrow;