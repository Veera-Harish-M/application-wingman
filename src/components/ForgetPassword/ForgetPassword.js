import React from "react";
import Timer from "react-compound-timer";
import "./ForgetPassword.css";

class ForgetPassword extends React.Component {
  constructor() {
    super();
    this.state = {
      error: "",
      email: "",
      passtimer: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    //assigning onchange form value to state
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    //prevent from to submit and reload the page
    e.preventDefault();

    //clearing previous error state
    this.setState({ error: "", passtimer: true });

    //send received data from user to our server
    const url = "https://application-wingman.herokuapp.com/forget-password";

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

      //catch fetch errors => could'nt reach api
      .catch((error) => {
        //set error message to state error
        this.setState({ error: "Something Went Wrong!" });
        console.error("Error", error);
      })

      //accessing received response
      .then((response) => {
        if (response) {
          if (response.status === "Error") {
            //set error message to state error
            this.setState({ error: response.message });
          } else {
            this.setState({ error: response.message });

            //sending response to function =>authentication() in Navbar.js
            console.log("Success:", response);
          }
        }
      });
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
              onClick={this.props.toggle}
              style={{ cursor: "pointer", color: "#691840" }}
            >
              <u>SignIn</u>
            </span>
          </h5>
        </header>
        <br />
        <br />

        {/* ----------ForgetPassword form -----------------*/}
        <form
          onSubmit={this.state.passtimer === false ? this.handleSubmit : ""}
          className="form mr-auto"
        >
          {/* -------------email--------------------- */}
          <div className="form-group">
            <label for="email">Email address</label>
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
            style={{ backgroundColor: "#F37200 !important" }}
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
      </div>
    );
  }
}

export default ForgetPassword;
