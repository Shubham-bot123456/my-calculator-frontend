import React, { Component } from "react";
import CalculatorService from "../service/CalculatorService";
class Calculator extends Component {
  componentDidMount() {
    this.setState({ inputstring: "" });
  }
  state = {
    inputstring: "",
    inputstringcolor: "black",
    mystyle: {},
    note: "",
    history: "",
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
  saveButton = () => {
    console.log(this.state.inputstring);
    var string = this.state.inputstringcolor === "green" ? " = " : " ";
    this.setState({
      note: this.state.note + string + this.state.inputstring,
    });
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
    var history = this.state.inputstring;
    CalculatorService.getAnswer(this.state.inputstring)
      .then((result) => {
        history = this.state.history + history + "=" + result.data + "\n";
        this.setState({
          inputstring: result.data,
          inputstringcolor: result.data === "syntax error" ? "red" : "green",
          history: history,
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
          display: "grid",
          gridTemplateColumns: "500px 500px",
          gridColumnGap: "50px",
          marginLeft: "100px",
        }}
      >
        <div
          style={{
            order: "2",
            display: "grid",
          }}
        >
          <div class="form-group">
            <label for="exampleFormControlTextarea3">Note Area</label>
            <textarea
              value={this.state.note}
              onChange={(e) => {
                this.setState({ note: e.target.value });
              }}
              class="form-control"
              id="exampleFormControlTextarea3"
              rows="7"
            ></textarea>
          </div>
          <div class="form-group">
            <label for="exampleFormControlTextarea3">History</label>
            <textarea
              value={this.state.history}
              class="form-control"
              id="exampleFormControlTextarea3"
              rows="7"
            ></textarea>
          </div>
        </div>
        <div
          style={{
            display: "grid",
            gridRowGap: "10px",
            marginTop: "20px",
          }}
        >
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "490px",
              gridTemplateRows: "60px",
              gridColumnGap: "5px",
            }}
          >
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "162px 162px 162px",
              gridTemplateRows: "70px",
              gridColumnGap: "5px",
            }}
          >
            <button
              type="button"
              class="btn btn-danger btn-lg btn-block"
              onClick={() => this.setButtonvalue("")}
            >
              Clear
            </button>
            <button
              type="button"
              class="btn btn-danger btn-lg btn-block"
              onClick={this.saveButton}
            >
              Note
            </button>
            <button
              type="button"
              class="btn btn-danger btn-lg btn-block"
              onClick={this.backSpace}
            >
              BackSpace
            </button>
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 120px  120px 120px",
              gridTemplateRows: "60px",
              gridColumnGap: "5px",
            }}
          >
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 120px  120px 120px",
              gridTemplateRows: "60px",
              gridColumnGap: "5px",
            }}
          >
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 120px  120px 120px",
              gridTemplateRows: "60px",
              gridColumnGap: "5px",
            }}
          >
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
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "120px 120px  120px 120px",
              gridTemplateRows: "60px",
              gridColumnGap: "5px",
            }}
          >
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
          </div>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "495px",
              gridTemplateRows: "70px",
            }}
          >
            <button
              type="button"
              class="btn btn-success"
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
