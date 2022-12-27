import React, { Component } from "react";
class Header extends Component {
  state = {
    counter: 0,
    aboutMe: "",
  };
  closeAboutMe = () => {
    this.setState({
      counter: this.state.counter + 1,
      aboutMe: "",
    });
  };

  tellMe = () => {
    if (this.state.counter % 2 === 0) {
      this.setState({
        aboutMe: (
          <div class="card">
            <div class="card-header">About Me</div>
            <div class="card-body">
              <h5 class="card-title">This is project made by me!</h5>
              <p class="card-text">
                "I am Shubham Gajanan Jadhav , First of all thank you for using
                my application this application was made by me for learning
                purpose, I wish you will like it!"
              </p>
              <button onClick={this.closeAboutMe} class="btn btn-primary">
                Thank you close
              </button>
            </div>
          </div>
        ),
      });
    } else this.setState({ aboutMe: "" });
    this.state.counter++;
  };
  render() {
    return (
      <div className="container">
        <nav class="navbar navbar-expand-lg navbar-active bg-light">
          <h1 class="navbar-brand">Calculator - Shubham Jadhav</h1>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <button
                  class="nav-link"
                  onClick={this.tellMe}
                  style={{ border: "none", backgroundColor: "none" }}
                >
                  About<span class="sr-only">(Developer)</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
        <div>{this.state.aboutMe}</div>
      </div>
    );
  }
}

export default Header;
