import React, { Component } from "react";
import CalculatorService from "../service/CalculatorService";
class Calculator extends Component {
  componentDidMount() {
    this.setState({ inputstring: "" });
  }
  state = {
    inputstring: "",
    mystyle: {
      margin: "2px",
      paddingTop: "20px",
      paddingBottom: "20px",
      paddingLeft: "26px",
      paddingRight: "26px",
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
      <div
        style={{
          marginLeft: "50px",
          marginTop: "50px",
          paddingRight: "100px",
          paddingLeft: "100px",
        }}
      >
        <div style={{ marginRight: "750px" }}>
          <input
            onChange={(e) => {
              this.setState({ inputstring: e.target.value });
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
              marginRight: "200px",
            }}
          ></input>
        </div>
        <div>
          <button
            type="button"
            class="btn btn-danger"
            style={{
              marginTop: "10px",
              marginBottom: "5px",
              paddingLeft: "120px",
              paddingRight: "120px",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
            onClick={() => this.setButtonvalue("")}
          >
            Clear
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
                paddingLeft: "120px",
                paddingRight: "120px",
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
