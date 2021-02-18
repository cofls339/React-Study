import React, { Component, Fragment } from 'react';

class Test extends Component {
  render() {
    // const value = 3;
    // const test = () => {
    //   if (value === 1) return <div>1</div>
    //   else if (value === 2) return <div>2</div>
    //   else if (value === 3) return <div>3</div>
    // }
    return (
      <Fragment> => 묶음 태그 없이 두 개 이상의 태그 사용 가능
        <div>
          {/* <br> // br, input 등은 닫기 태그가 있어야한다. */}
          {
            // 1+1===2 ? (<div>맞아용</div>) : (<div>틀려용</div>)
            // 1+1===2 && <div>맞아용</div>
            
            // (() => {
            //   if (value === 1) return <div>1</div>
            //   else if (value === 2) return <div>2</div>
            //   else if (value === 3) return <div>3</div>
            // })()
            // test()
          }
          <span className="class-test">A</span>
        </div>
        <div>Fragment Test</div>
        <div>Fragment Test2</div>
      </Fragment>
    )
  }
}

export default Test;