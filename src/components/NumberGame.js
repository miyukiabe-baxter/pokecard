import React, { Component } from "react";

class NumberGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      curNum: 1,
      isSeven: false
    };
  }

  changeNum = e => {
    //without adding 1, this random return 0 - 9 (maxNum = 10)
    let rand = Math.floor(Math.random() * this.props.maxNum) + 1;

    if (rand === 7) this.setState({ isSeven: true });
    this.setState({ curNum: rand });
  };

  render() {
    if (this.state.isSeven) {
    }
    return (
      <div>
        <h2>This is the Number: {this.state.curNum}</h2>
        {/* {this.state.isSeven ? null : (
          <button onClick={this.changeNum}>Click Me!!</button>
        )} */}
        {this.state.isSeven && <h2>You Win!</h2>}
        <button disabled={this.state.isSeven} onClick={this.changeNum}>
          Click Me!!
        </button>
      </div>
    );
  }
}

export default NumberGame;
