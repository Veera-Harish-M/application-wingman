import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./signin.css";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";

function Login() {
  const history = useHistory();

  const [login, setLogin] = useState({ username: "", password: "" });
  const [PositiveSnackBarOpen, setPositiveSnackBarOpen] = useState(false);
  const [NegativeSnackBarOpen, setNegativeSnackBarOpen] = useState(false);
  const [message, setMessage] = useState("");

  const handleNegativeSnackbarClose = () => {
    setNegativeSnackBarOpen(false);
    setMessage("");
  };

  const handlePositiveSnackbarClose = () => {
    setPositiveSnackBarOpen(false);
    setMessage("");
  };

  const responseFacebook = (responseFacebook) => {
    setMessage("");
    console.log(responseFacebook);
    //if received positive response from facebook
    if (responseFacebook.accessToken) {
      //access data from facebook response and sending to our server
      const url = "https://application-wingman.onrender.com/api/socialsignin";

      //body of api
      var data = {
        email: responseFacebook.email,
        expiry: responseFacebook.expiresIn,
      };

      //send fb access token as bearer token
      var bearer = "Bearer " + responseFacebook.accessToken;

      //post request with bearer token in header and json body details
      fetch(url, {
        method: "POST",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        //receive response as json
        .then((res) => res.json())

        //catch fetch errors => could'nt reach api
        .catch((error) => {
          setMessage("Something Went Wrong!");
          setNegativeSnackBarOpen(true);
          console.error("Error", error);
        })

        //accessing received response
        .then((response) => {
          if (response) {
            if (response.status === "Error") {
              //set error message to state error
              setMessage(response.message);
              setNegativeSnackBarOpen(true);
            } else {
              setMessage(response.message);
              console.log(response);
              setPositiveSnackBarOpen(true);
              localStorage.setItem(
                "AuthDataProfilePic",
                response.userData.profilepic
              );

              localStorage.setItem("AuthDataName", response.userData.name);
              localStorage.setItem("AuthDataToken", response.token);
              localStorage.setItem("AuthDataEmail", response.userData.email);
              localStorage.setItem("AuthDataId", response.userData._id);

              history.push("/");
            }
          }
        });
    } else {
      //received negative message from facebook auth api
      setMessage("Something Went Wrong");
      setNegativeSnackBarOpen(true);
      console.log(responseFacebook);
    }
  };

  const NegativeResponseGoogle = (responseGoogle) => {
    console.log("neagtive:", responseGoogle);
    setMessage(responseGoogle.error);
    setNegativeSnackBarOpen(true);
  };

  const PositiveResponseGoogle = (responseGoogle) => {
    //clearing previous error state
    setMessage("");

    //if received positive response from google Oauth api
    if (responseGoogle.googleId) {
      //access data from google response and sending to our server
      const url = "https://application-wingman.onrender.com/api/socialsignin";

      console.log(responseGoogle);
      //body of api
      var data = {
        email: responseGoogle.profileObj.email,
        expiry: responseGoogle.tokenObj.expires_in,
      };

      //send google access token as bearer token
      var bearer = "Bearer " + responseGoogle.tokenObj.access_token;

      //post request with bearer token in header and json body details
      fetch(url, {
        method: "POST",
        headers: {
          Authorization: bearer,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        //receive response as json
        .then((res) => res.json())

        //catch fetch errors => could'nt reach api
        .catch((error) => {
          //set error message to state error
          setMessage("Something Went Wrong!");
          setNegativeSnackBarOpen(true);
          console.error("Error", error);
        })

        //accessing received response
        .then((response) => {
          if (response) {
            if (response.status === "Error") {
              //set error message to state error
              setMessage(response.message);
              setNegativeSnackBarOpen(true);
            } else {
              setMessage(response.message);
              setPositiveSnackBarOpen(true);
              localStorage.setItem(
                "AuthDataProfilePic",
                response.userData.profilepic
              );

              localStorage.setItem("AuthDataName", response.userData.name);
              localStorage.setItem("AuthDataToken", response.token);
              localStorage.setItem("AuthDataEmail", response.userData.email);
              localStorage.setItem("AuthDataId", response.userData._id);
              history.push("/");
              console.log("Success:", response);
            }
          }
        });
    }
  };

  const onSignin = (e) => {
    e.preventDefault();
    //clearing previous error state
    setMessage("");

    //send received data from user to our server
    const url = "https://application-wingman.onrender.com/api/signin";

    //body of api
    var data = {
      email: login.username,
      password: login.password,
    };
    console.log(data);

    //post request with json body details
    fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      //receive response as json
      .then((res) => res.json())

      //catch fetch errors => could'nt reach api
      .catch((error) => {
        //set error message to state error
        setMessage("Something Went Wrong!");
        setNegativeSnackBarOpen(true);

        console.error("Error", error);
      })

      //accessing received response
      .then((response) => {
        if (response) {
          if (response.status === "Error") {
            //set error message to state error
            setMessage(response.message);
            setNegativeSnackBarOpen(true);
          } else {
            //sending response to function =>authentication() in Navbar.js
            console.log("Success:", response);
            localStorage.setItem(
              "AuthDataProfilePic",
              response.userData.profilepic
            );

            localStorage.setItem("AuthDataName", response.userData.name);
            localStorage.setItem("AuthDataToken", response.token);
            localStorage.setItem("AuthDataEmail", response.userData.email);
            localStorage.setItem("AuthDataId", response.userData._id);
            history.push("/");
            setMessage(response.message);
            setPositiveSnackBarOpen(true);
          }
        }
      });
    console.log(login);
  };

  return (
    <div className="signin">
      <form className="box">
        <h1>Login</h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter Username or Email id"
            value={login.username}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
          />
        </div>
        <div>
          <input
            type="password"
            required
            placeholder="Password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}
          />
        </div>
        <div></div>
        <input type="button" value="submit" onClick={(e) => onSignin(e)} />
        <div>
          <hr />
          <div
            style={{
              // alignItems: "center",
              //flexDirection: "column",
              justifyContent: "space-evenly",
              marginBottom: "10px",
              display: "flex",
              cursor: "pointer",
            }}
          >
            <GoogleLogin
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
              render={(renderProps) => (
                <FcGoogle
                  size={25}
                  onClick={renderProps.onClick}
                  disabled={renderProps.disabled}
                />
              )}
              buttonText="Login"
              onSuccess={PositiveResponseGoogle}
              onFailure={NegativeResponseGoogle}
            />
            <FacebookLogin
              appId={process.env.REACT_APP_FACEBOOK_APP_ID}
              callback={responseFacebook}
              fields="name,email,picture"
              render={(renderProps) => (
                <FaFacebook
                  size={25}
                  onClick={renderProps.onClick}
                  style={{ marginRight: "16px" }}
                  color="#18009a"
                />
              )}
            />
          </div>
          <span
            className="forgot"
            style={{
              marginTop: "40px",
              cursor: "pointer",
              color: "#FFFFFF",
            }}
            onClick={() => history.push("/session/forget-password")}
          >
            <u>Forgot password ?</u>
          </span>
        </div>
      </form>

      <Snackbar
        open={NegativeSnackBarOpen}
        autoHideDuration={6000}
        onClose={handleNegativeSnackbarClose}
      >
        <Alert severity="error">{message}</Alert>
      </Snackbar>

      <Snackbar
        open={PositiveSnackBarOpen}
        autoHideDuration={6000}
        onClose={handlePositiveSnackbarClose}
      >
        <Alert severity="success">{message}</Alert>
      </Snackbar>
    </div>
  );
}

export default Login;
