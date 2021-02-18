import React, { Component } from 'react';

class Ex09Class extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    //ES5
    var ExamCountFunc = (function() {
      function ExamCount(num) {
        this.number = num;
      }
      ExamCount.prototype.showNum = function() {
        console.log('ES5:', this.number);
      };
      return ExamCount;
    }());

    var cnt = new ExamCountFunc('200');
    cnt.showNum();

    //ES6
    class ExamCountClass {
      constructor(num2) {
        this.number2 = num2;
      }
      showNum() {
        console.log(`ES6: ${this.number2}`);
      }
    }

    const cnt2 = new ExamCountClass('2hundred');
    cnt2.showNum();
  }

  render() {
    return (
      <h2>Class &amp; Function</h2>
    )
  }
}

export default Ex09Class;