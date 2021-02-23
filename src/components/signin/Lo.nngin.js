import React from 'react';
import './Login.css';
import FacebookLogin from 'react-facebook-login/dist/facebook-login-render-props';
import GoogleLogin from 'react-google-login';

import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

import {FaFacebook} from 'react-icons/fa';
import {FcGoogle} from 'react-icons/fc';
class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      message: '',
      email: '',
      password: '',
      PositiveSnackBarOpen: false,
      NegativeSnackBarOpen: false,
      passtimer: false,
    };

    this.handlePositiveSnackbarClose = this.handlePositiveSnackbarClose.bind(
      this
    );
    this.handleNegativeSnackbarClose = this.handleNegativeSnackbarClose.bind(
      this
    );
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleForget = this.handleForget.bind(this);
    this.PositiveResponseGoogle = this.PositiveResponseGoogle.bind(this);
    this.NegativeResponseGoogle = this.NegativeResponseGoogle.bind(this);
    this.responseFacebook = this.responseFacebook.bind(this);
  }

  handleNegativeSnackbarClose = () =>
    this.setState({NegativeSnackBarOpen: false, message: ''});
  handlePositiveSnackbarClose = () =>
    this.setState({PositiveSnackBarOpen: false, message: ''});

  responseFacebook(responseFacebook) {
    //if received positive response from facebook
    if (responseFacebook.accessToken) {
      //access data from facebook response and sending to our server
      const url = 'https://ezpalateserver.herokuapp.com/api/socialsignin';

      //body of api
      var data = {
        email: responseFacebook.email,
        expiry: responseFacebook.expiresIn,
      };

      //send fb access token as bearer token
      var bearer = 'Bearer ' + responseFacebook.accessToken;

      //post request with bearer token in header and json body details
      fetch(url, {
        method: 'POST',
        headers: {
          Authorization: bearer,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        //receive response as json
        .then((res) => res.json())

        //catch fetch errors => could'nt reach api
        .catch((error) => {
          this.setState({
            message: 'Something Went Wrong!',
            NegativeSnackBarOpen: true,
          });
          console.error('Error', error);
        })

        //accessing received response
        .then((response) => {
          if (response) {
            if (response.status === 'Error') {
              //set error message to state error
              this.setState({
                message: response.message,
                NegativeSnackBarOpen: true,
              });
            } else {
              //sending response to function =>authentication() in Navbar.js
              this.setState({
                message: response.message,
                PositiveSnackBarOpen: true,
              });
              this.props.onAuth(response);
            }
          }
        });
    } else {
      //received negative message from facebook auth api
      console.log(responseFacebook);
    }
  }

  NegativeResponseGoogle(responseGoogle) {
    console.log('neagtive:', responseGoogle);
  }

  PositiveResponseGoogle(responseGoogle) {
    //if received positive response from google Oauth api
    if (responseGoogle.googleId) {
      //access data from google response and sending to our server
      const url = 'https://ezpalateserver.herokuapp.com/api/socialsignin';

      console.log(responseGoogle);
      //body of api
      var data = {
        email: responseGoogle.profileObj.email,
        expiry: responseGoogle.tokenObj.expires_in,
      };

      //send google access token as bearer token
      var bearer = 'Bearer ' + responseGoogle.tokenObj.access_token;

      //post request with bearer token in header and json body details
      fetch(url, {
        method: 'POST',
        headers: {
          Authorization: bearer,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        //receive response as json
        .then((res) => res.json())

        //catch fetch errors => could'nt reach api
        .catch((error) => {
          //set error message to state error

          this.setState({
            message: 'Something Went Wrong!',
            NegativeSnackBarOpen: true,
          });
          console.error('Error', error);
        })

        //accessing received response
        .then((response) => {
          if (response) {
            if (response.status === 'Error') {
              //set error message to state error
              this.setState({
                message: response.message,
                NegativeSnackBarOpen: true,
              });
            } else {
              //sending response to function =>authentication() in Navbar.js
              this.setState({
                message: response.message,
                PositiveSnackBarOpen: true,
              });
              this.props.onAuth(response);
              console.log('Success:', response);
            }
          }
        });
    }
  }

  handleChange(e) {
    //assigning onchange form value to state
    this.setState({[e.target.name]: e.target.value});
  }

  handleForget() {
    this.props.forgetpassword();
  }

  handleSubmit(e) {
    //prevent from to submit and reload the page
    e.preventDefault();

    //clearing previous error state
    this.setState({error: ''});

    //send received data from user to our server
    const url = 'https://ezpalateserver.herokuapp.com/api/signin';

    //body of api
    var data = {
      email: this.state.email,
      password: this.state.password,
    };

    //post request with json body details
    fetch(url, {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {'Content-Type': 'application/json'},
    })
      //receive response as json
      .then((res) => res.json())

      //catch fetch errors => could'nt reach api
      .catch((error) => {
        //set error message to state error
        this.setState({
          message: 'Something Went Wrong!',
          NegativeSnackBarOpen: true,
        });

        console.error('Error', error);
      })

      //accessing received response
      .then((response) => {
        if (response) {
          if (response.status === 'Error') {
            //set error message to state error
            this.setState({
              message: response.message,
              NegativeSnackBarOpen: true,
            });
          } else {
            //sending response to function =>authentication() in Navbar.js
            this.setState({
              message: response.message,
              PositiveSnackBarOpen: true,
            });

            this.props.onAuth(response);
            console.log('Success:', response);
          }
        }
      });
  }

  render() {
    return (
      <div className="login">
        {/* -----------login header--------------- */}
        <header>
          <h1>SignIn</h1>
          <h5>
            <span className="new-here">New here?</span>{' '}
            <span
              onClick={this.props.toggle}
              style={{cursor: 'pointer', color: '#691840'}}
            >
              <u>SignUp</u>
            </span>
          </h5>
        </header>
        <br />
        <br />

        {/* ----------login form -----------------*/}
        <form onSubmit={this.handleSubmit} className="form mr-auto">
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

          {/*-------------- form submit button ---------------*/}
          <button
            type="submit"
            className="btn  btn-sm btn-block"
            style={{backgroundColor: '#F37200 !important'}}
          >
            <span style={{color: 'white'}}>LOGIN</span>
          </button>
        </form>

        {/*------------------- forget password ------------------- */}

        <p onClick={this.handleForget} className="forget-pass">
          <u>forget password</u>
        </p>

        {/* -------------------social login-------------------- */}
        <div className="social-login">
          <div>
            <span> or </span> <br />
            <span className="jam-color"> sign-in using</span>
          </div>

          <div style={{paddingTop: '5px'}}>
            {/*----------- Facebook Oauth API------------------ */}
            <span style={{cursor: 'pointer'}}>
              <FacebookLogin
                appId={process.env.REACT_APP_FACEBOOK_APP_ID}
                callback={this.responseFacebook}
                fields="name,email,picture"
                render={(renderProps) => (
                  <FaFacebook
                    style={{color: '#385898'}}
                    onClick={renderProps.onClick}
                    size="30"
                  />
                )}
              />
            </span>

            {/*---------------- Google Oauth API---------------------- */}
            <span style={{paddingLeft: '10px', cursor: 'pointer'}}>
              <GoogleLogin
                clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                render={(renderProps) => (
                  <FcGoogle
                    size="30"
                    onClick={renderProps.onClick}
                    disabled={renderProps.disabled}
                  />
                )}
                buttonText="Login"
                onSuccess={this.PositiveResponseGoogle}
                onFailure={this.NegativeResponseGoogle}
              />
            </span>
          </div>
        </div>

        <Snackbar
          open={this.state.NegativeSnackBarOpen}
          autoHideDuration={6000}
          onClose={this.handleNegativeSnackbarClose}
        >
          <Alert severity="error">{this.state.message}</Alert>
        </Snackbar>

        <Snackbar
          open={this.state.PositiveSnackBarOpen}
          autoHideDuration={6000}
          onClose={this.handlePositiveSnackbarClose}
        >
          <Alert severity="success">{this.state.message}</Alert>
        </Snackbar>
      </div>
    );
  }
}

export default Login;
