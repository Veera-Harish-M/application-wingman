import React, { Component } from "react";
import { Row, Col } from "react-bootstrap";
import "./ResetPassword.css";

export default class ResetPassword extends Component {
  constructor() {
    super();
    this.resetPassword = this.resetPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      password: "",
      Confirmpassword: "",
      message: "",
    };
  }

  handleChange(e) {
    //assigning onchange form value to state
    this.setState({ [e.target.name]: e.target.value });
  }

  resetPassword(e) {
    e.preventDefault();
    console.log("hello");
    if (this.state.password === this.state.Confirmpassword) {
      console.log(this.props.match.params.slug);
      const url = "https://application-wingman.herokuapp.com/api/reset-password";
      var bearer = "Bearer " + this.props.match.params.slug;

      //body of api
      var data = {
        newPassword: this.state.password,
      };

      fetch(url, {
        method: "PUT",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .catch((error) => {
          this.setState({
            message: <h4>Something Went Wrong!</h4>,
          });
          console.error("Error", error);
        })
        .then((response) => {
          if (response) {
            if (response.status === "Error") {
              this.setState({
                message: <h4>{response.message}</h4>,
              });
            } else {
              this.setState({
                message: (
                  <div>
                    <h4>Your Password has been Changed Successfully.</h4>
                    <h5>SignIn for exciting deals! </h5>
                  </div>
                ),
              });
              console.log("Success:", response);
            }
          }
        });
    } else {
      this.setState({
        message: <h4>Password Should Match</h4>,
      });
    }
  }
  render() {
    return (
      <div className="resetPassword">
        <Row>
          <Col md={6}>
            <img
              className="resetPassword-img"
              src={require("./signupbg.jpg")}
              alt="act_bg"
            />
          </Col>
          <Col md={6} className="resetPassword-content">
            <h1>Reset Your Password!</h1>
            {this.state.message}

            <form onSubmit={this.resetPassword}>
              {/*------------ password--------------- */}
              <div className="form-group">
                <label for="password">Password</label>
                <input
                  type="password"
                  name="password"
                  value={this.state.password}
                  required
                  onChange={this.handleChange}
                  placeholder="Password"
                  className="form-control"
                  id="password"
                />
              </div>

              {/*------------ confirm password--------------- */}
              <div className="form-group">
                <label for="Confirmpassword">Confirm Password</label>
                <input
                  type="password"
                  name="Confirmpassword"
                  value={this.state.Confirmpassword}
                  required
                  onChange={this.handleChange}
                  placeholder="Password"
                  className="form-control"
                  id="Confirmpassword"
                />
              </div>
              {/*-------------- form submit button ---------------*/}
              <br />

              <button
                type="submit"
                className="btn  btn-sm btn-block"
                style={{ backgroundColor: "#F37200 !important" }}
              >
                <span style={{ color: "white" }}>LOGIN</span>
              </button>
            </form>
          </Col>
        </Row>
      </div>
    );
  }
}
