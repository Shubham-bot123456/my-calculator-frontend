import React, { Component } from "react";
import CalculatorService from "../service/CalculatorService";
class Calculator extends Component {
  componentDidMount() {
    this.setState({ inputstring: "" });
  }
  state = {
    inputstring: "",
    inputstringcolor: "black",
    mystyle: {
      margin: "2px",
      paddingTop: "20px",
      paddingBottom: "20px",
      paddingLeft: "10.5%",
      paddingRight: "10.5%",
      fontFamily: "Arial",
      fontSize: "18px",
    },
  };
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
        inputstringcolor: "black",
      });
  };
  getAnswer = () => {
    CalculatorService.getAnswer(this.state.inputstring)
      .then((result) => {
        this.setState({
          inputstring: result.data,
          inputstringcolor: result.data === "syntax error" ? "red" : "green",
        });
      })
      .catch((err) => {
        this.setState({ inputstring: "error", inputstringcolor: "red" });
      });
  };

  backSpace = () => {
    this.setState({
      inputstring: this.state.inputstring
        .toString()
        .substring(0, this.state.inputstring.toString().length - 1),
      inputstringcolor: "black",
    });
  };
  render() {
    return (
      <div
        style={{
          marginLeft: "25%",
          marginRight: "25%",
          marginTop: "50px",
          paddingRight: "100px",
          paddingLeft: "100px",
        }}
      >
        <div>
          <input
            onChange={(e) => {
              this.setState({
                inputstring: e.target.value,
                inputstringcolor: "black",
              });
            }}
            value={this.state.inputstring}
            type="text"
            class="form-control"
            aria-label="Large"
            aria-describedby="inputGroup-sizing-sm"
            style={{
              paddingTop: "15px",
              paddingBottom: "15px",
              fontSize: "20px",
              color: this.state.inputstringcolor,
              marginRight: "100px",
              fontStyle: "Bold",
            }}
          ></input>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-danger btn-lg btn-block"
            style={{
              marginTop: "10px",
              marginBottom: "5px",
              paddingLeft: "19%",
              paddingRight: "19%",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
            onClick={() => this.setButtonvalue("")}
          >
            Clear
          </button>
          <button
            type="button"
            class="btn btn-danger btn-lg btn-block"
            style={{
              marginTop: "10px",
              marginBottom: "5px",
              paddingLeft: "13%",
              paddingRight: "13%",
              paddingTop: "20px",
              paddingBottom: "20px",
              marginLeft: "5px",
            }}
            onClick={this.backSpace}
          >
            BackSpace
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue(1)}
          >
            1
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue(2)}
          >
            2
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue(3)}
          >
            3
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue("+")}
          >
            +
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue(4)}
          >
            4
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue(5)}
          >
            5
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue(6)}
          >
            6
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue("-")}
          >
            -
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue(7)}
          >
            7
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue(8)}
          >
            8
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue(9)}
          >
            9
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue("*")}
          >
            x
          </button>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue(0)}
          >
            0
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue("(")}
          >
            (
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue(")")}
          >
            )
          </button>
          <button
            type="button"
            class="btn btn-primary"
            style={this.state.mystyle}
            onClick={() => this.setButtonvalue("/")}
          >
            /
          </button>
          <div>
            <button
              type="button"
              class="btn btn-success"
              style={{
                marginTop: "10px",
                marginBottom: "5px",
                paddingLeft: "46%",
                paddingRight: "46%",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
              onClick={() => this.getAnswer()}
            >
              =
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
