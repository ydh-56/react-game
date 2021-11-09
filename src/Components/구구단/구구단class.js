import React from "react";

// function App() {

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: '',
      };
    }

    onSubmit = (e) => {
      e.preventDefault();
            if(parseInt(this.state.value) === this.state.first * this.state.second) {
              this.setState((prevState) => {
                return {
                  result:'정답: ' + prevState.value,
                  first: Math.ceil(Math.random() * 9),
                  second: Math.ceil(Math.random() * 9),
                  value: '',
                }
              });
            } else {
              this.setState({
                result:'땡',
                value:'',
              });
            }
    }

    onChange = (e) => {
      this.setState({ value: e.target.value });
    }

    input;

    onRefInput = (c) => { this.input = c; }

    render() {
      return (
        <>
          <div>{this.state.first}곱하기{this.state.second}는?</div>
          <form onSubmit={this.onSubmit}>
            <input ref={this.onRefInput} type='number' value={this.state.value} onChange={this.onChange} />
              <button>입력!</button>
          </form>
          <div>{this.state.result}</div>
        </>
      );
    }
  }

// }

export default App;
