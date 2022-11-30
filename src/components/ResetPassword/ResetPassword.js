import React, { Component } from "react";
import "./ResetPassword.css";

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import ResetImage from '../../asserts/reset.gif'
export default class ResetPassword extends Component {
  constructor() {
    super();
    this.resetPassword = this.resetPassword.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      password: "",
      Confirmpassword: "",
      PositiveSnackBarOpen:false,
      NegativeSnackBarOpen:false,
      message:""
    };
  }

  handleChange(e) {
    //assigning onchange form value to state
    this.setState({ [e.target.name]: e.target.value });
  }


  handleNegativeSnackbarClose = () => {
    this.setState({
     NegativeSnackBarOpen:false,
     message:""
    })
 };

  handlePositiveSnackbarClose = () => {
   this.setState({
     PositiveSnackBarOpen:false,
     message:""
   })
 };

  resetPassword(e) {
    e.preventDefault();
    console.log("hello");
    if (this.state.password === this.state.Confirmpassword) {
      console.log(this.props.match.params.slug);
      const url = "https://application-wingman.onrender.com/api/reset-password";
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
            message: "Something Went Wrong!",
            NegativeSnackBarOpen:true
          });
          console.error("Error", error);
        })
        .then((response) => {
          if (response) {
            if (response.status === "Error") {
              this.setState({
                message: response.message,
                NegativeSnackBarOpen:true
              });
            } else {
              this.setState({
                message: "Your Password has been Changed Successfully.",
                PositiveSnackBarOpen:true
              });
              console.log("Success:", response);
            }
          }
        });
    } else {
      this.setState({
        message: "Password Should Match",
        NegativeSnackBarOpen:true
      });
    }
  }
  render() {
    return (
      <div className="resetPassword">
        
        <img src={ResetImage} style={{width:"25%"}} alt="forget" />
            <h1>Reset Your Password!</h1>

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
          
        <Snackbar
        open={this.state.NegativeSnackBarOpen}
        autoHideDuration={6000}
        onClose={this.handleNegativeSnackbarClose}>
        <Alert severity='error'>{this.state.message}</Alert>
      </Snackbar>

      <Snackbar
        open={this.state.PositiveSnackBarOpen}
        autoHideDuration={6000}
        onClose={this.handlePositiveSnackbarClose}>
        <Alert severity='success'>{this.state.message}</Alert>
      </Snackbar>

      </div>
    );
  }
}
