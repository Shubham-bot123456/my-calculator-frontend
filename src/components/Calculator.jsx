import React, { Component } from "react";
import CalculatorService from "../service/CalculatorService";
class Calculator extends Component {
  componentDidMount() {
    this.setState({ inputstring: "" });
  }
  state = { inputstring: "" };
  setButtonvalue1 = () => {
    this.setState({ inputstring: this.state.inputstring + 1 });
  };
  setButtonvalue2 = () => {
    this.setState({ inputstring: this.state.inputstring + 2 });
  };
  setButtonvalue3 = () => {
    this.setState({ inputstring: this.state.inputstring + 3 });
  };

  setButtonvalue = (button) => {
    if (button === "") this.setState({ inputstring: "" });
    else
      this.setState({
        inputstring: this.state.inputstring + button.toString(),
      });
  };
  getAnswer = () => {
    CalculatorService.getAnswer(this.state.inputstring)
      .then((result) => {
        this.setState({ inputstring: result.data });
      })
      .catch((err) => {
        this.setState({ inputstring: "error" });
      });
  };
  render() {
    return (
      <div>
        <input
          onChange={(e) => {
            this.setState({ inputstring: e.target.value });
          }}
          value={this.state.inputstring}
        ></input>
        <div>
          <button onClick={() => this.setButtonvalue(1)}>1</button>
          <button onClick={() => this.setButtonvalue(2)}>2</button>
          <button onClick={() => this.setButtonvalue(3)}>3</button>
        </div>
        <div>
          <button onClick={() => this.setButtonvalue(4)}>4</button>
          <button onClick={() => this.setButtonvalue(5)}>5</button>
          <button onClick={() => this.setButtonvalue(6)}>6</button>
        </div>
        <div>
          <button onClick={() => this.setButtonvalue(7)}>7</button>
          <button onClick={() => this.setButtonvalue(8)}>8</button>
          <button onClick={() => this.setButtonvalue(9)}>9</button>
        </div>
        <div>
          <button onClick={() => this.setButtonvalue(0)}>0</button>
          <button onClick={() => this.setButtonvalue("+")}>+</button>
          <button onClick={() => this.getAnswer()}>=</button>
        </div>
        <div>
          <button onClick={() => this.setButtonvalue("*")}>x</button>
          <button onClick={() => this.setButtonvalue("/")}>/`</button>
          <button onClick={() => this.setButtonvalue("-")}>-</button>
        </div>
        <div>
          <button onClick={() => this.setButtonvalue("(")}>(</button>
          <button onClick={() => this.setButtonvalue(")")}>)</button>
        </div>
        <div>
          <button onClick={() => this.setButtonvalue("")}>Clear</button>
        </div>
      </div>
    );
  }
}

export default Calculator;
