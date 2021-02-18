import React, { Component } from 'react';

class Ex08Template extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const str1 = '자바스크립트';
    const str2 = '입니다\n다음 줄입니다.';
    console.log(`${str1} 문자열${str2}~`);

    const str3 = 'Es6';
    const str4 = '입니다.';
    console.log(`${str3} 문자열${str4}
    다음줄입니다.`);
  }

  render() {
    return (
      <h2>Template</h2>
    )
  }
}

export default Ex08Template;