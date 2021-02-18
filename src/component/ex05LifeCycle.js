import React, { Component } from 'react';

class Ex05LifeCycle extends Component {
  // constructor는 생명주기 함수 중 가장 먼저 실행되며 처음 한 번만 호출된다. = Vue.js Create와 같은건가?
  constructor(props) {
    // this.state = { => super 호출 전에는 this가 정의되지 않는다.
    //   test: 'a'
    // };
    // super(); => props 사용 시 undefined
    super(props);
    this.state = {
      test: 'a'
    };
    // console.log('Constructor Call', this.state.test);
    console.log(this.props);
  }

  render() {
    const txt = 'test';
    console.log('Render Call');
    return (
      <h2>lifecycleEx {txt}</h2>
    )
  }
}

export default Ex05LifeCycle;