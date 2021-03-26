import React from "react";
import Timer from "react-compound-timer";
import "./ForgetPassword.css";
import Forget from '../../asserts/forgotpassword.svg';
import Sent from '../../asserts/mailsent.gif'

import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

class ForgetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      email: "",
      passtimer: false,
      image:Forget,
      PositiveSnackBarOpen:false,
      NegativeSnackBarOpen:false,
      message:""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNegativeSnackbarClose=this.handleNegativeSnackbarClose.bind(this);
    this.handlePositiveSnackbarClose=this.handlePositiveSnackbarClose.bind(this);
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

  handleChange(e) {
    //assigning onchange form value to state
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    if (this.state.passtimer === false){ 
    //prevent from to submit and reload the page
    e.preventDefault();

    this.setState({ message: "", passtimer: true });

    //send received data from user to our server
    const url = "http://localhost:8000/api/forget-password";

    //body of api
    var data = {
      email: this.state.email,
    };

    console.log(this.state.email);
    //post request with json body details

    fetch(url, {
      method: "PUT",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      //receive response as json
      .then((res) => res.json())
      //accessing received response
      .then((response) => {
        console.log(response);
        if (response) {

          if (response.status === "Error") {
            //set error message to state error
            this.setState({ message: response.message,NegativeSnackBarOpen:true });
          } else {
            this.setState({ message: response.message, PositiveSnackBarOpen:true,image:Sent });

            //sending response to function =>authentication() in Navbar.js
            console.log("Success:", response);
          }
        }
      })
      .catch((error) => {
        //set error message to state error
        console.error("Error", error);
        this.setState({ message: "Sosfd!",NegativeSnackBarOpen:true });
        console.error("Error", error);
      })

    }
    else{
      this.setState({message:"Keep an eye on timer",NegativeSnackBarOpen:true})
    }
  }

  render() {
    return (
      <div className="ForgetPassword">
        {/* -----------ForgetPassword header--------------- */}
        <header>
          <h1>ForgetPassword</h1>
          <h5>
            <span className="new-here">Know Your Password?</span>{" "}
            <span
              onClick={()=>this.props.history.push("/session/SignIn")}
              style={{ cursor: "pointer", color: "#6c63ff" }}
            >
              <u>SignIn</u>
            </span>
          </h5>
        </header>
        <br />

        <img src={this.state.image} style={{width:"25%"}} alt="forget" />

        {/* ----------ForgetPassword form -----------------*/}
        <form
        
          onSubmit={ this.handleSubmit}
          className="form mr-auto form_password"
        >
          {/* -------------email--------------------- */}
          <div className="form-group"   style={{width:"30%"}}
          >
            <label>Email address</label>
            <input
              type="email"
              value={this.state.email}
              name="email"
              required
              onChange={this.handleChange}
              placeholder="Email"
              className="form-control"
              id="email"
            />
          </div>

          {/* --------display message in error state --------- */}
          <div
            style={{
              textAlign: "center",
              color: "red",
              textTransform: "capitalize",
            }}
          >
            {this.state.error}
          </div>
          <br />

          {/*-------------- form submit button ---------------*/}

          <button
            type="submit"
          
            disabled={this.state.passtimer === false ? "" : true}
            className="btn btn-sm btn-block"
            style={{ backgroundColor: "#F37200 !important",width:"20%" }}
          >
            <span style={{ color: "white" }}>Reset Password</span>
          </button>

          {this.state.passtimer === true ? (
            <Timer
              initialTime={5000}
              direction="backward"
              checkpoints={[
                {
                  time: 0,
                  callback: () => {
                    this.setState({ passtimer: false });
                  },
                },
              ]}
            >
              {() => (
                <React.Fragment>
                  <br />
                  <div style={{ textAlign: "center", color: "green" }}>
                    Resend in: <Timer.Seconds /> sec
                  </div>
                </React.Fragment>
              )}
            </Timer>
          ) : (
            ""
          )}
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

export default ForgetPassword;
