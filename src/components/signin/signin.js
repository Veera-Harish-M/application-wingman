import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./signin.css";
import {FaFacebook} from 'react-icons/fa'
import {FcGoogle} from 'react-icons/fc'
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';
import {GoogleLogin} from 'react-google-login'


function Login() {
	const history = useHistory();

	const [login, setLogin] = useState({ username: "", password: "" });
	const [PositiveSnackBarOpen, setPositiveSnackBarOpen] = useState(false);
	const [NegativeSnackBarOpen, setNegativeSnackBarOpen] = useState(false);
	const [message, setMessage] = useState("");
      

	const handleNegativeSnackbarClose = () =>{
		setNegativeSnackBarOpen(false);
		setMessage("");
	}

 	const handlePositiveSnackbarClose = () =>
    {
		setNegativeSnackBarOpen(false);
		setMessage("");
	}


	// responseFacebook(responseFacebook) {
	// 	//if received positive response from facebook
	// 	if (responseFacebook.accessToken) {
	// 	  //access data from facebook response and sending to our server
	// 	  const url = 'https://ezpalateserver.herokuapp.com/api/socialsignin';
	
	// 	  //body of api
	// 	  var data = {
	// 		email: responseFacebook.email,
	// 		expiry: responseFacebook.expiresIn,
	// 	  };
	
	// 	  //send fb access token as bearer token
	// 	  var bearer = 'Bearer ' + responseFacebook.accessToken;
	
	// 	  //post request with bearer token in header and json body details
	// 	  fetch(url, {
	// 		method: 'POST',
	// 		headers: {
	// 		  Authorization: bearer,
	// 		  'Content-Type': 'application/json',
	// 		},
	// 		body: JSON.stringify(data),
	// 	  })
	// 		//receive response as json
	// 		.then((res) => res.json())
	
	// 		//catch fetch errors => could'nt reach api
	// 		.catch((error) => {
	// 		  this.setState({
	// 			message: 'Something Went Wrong!',
	// 			NegativeSnackBarOpen: true,
	// 		  });
	// 		  console.error('Error', error);
	// 		})
	
	// 		//accessing received response
	// 		.then((response) => {
	// 		  if (response) {
	// 			if (response.status === 'Error') {
	// 			  //set error message to state error
	// 			  this.setState({
	// 				message: response.message,
	// 				NegativeSnackBarOpen: true,
	// 			  });
	// 			} else {
	// 			  //sending response to function =>authentication() in Navbar.js
	// 			  this.setState({
	// 				message: response.message,
	// 				PositiveSnackBarOpen: true,
	// 			  });
	// 			  this.props.onAuth(response);
	// 			}
	// 		  }
	// 		});
	// 	} else {
	// 	  //received negative message from facebook auth api
	// 	  console.log(responseFacebook);
	// 	}
	//   }
	
	  const NegativeResponseGoogle=(responseGoogle) =>{
		console.log('neagtive:', responseGoogle);
	  }
	
	  const PositiveResponseGoogle=(responseGoogle)=> {
		//if received positive response from google Oauth api
		if (responseGoogle.googleId) {
		  //access data from google response and sending to our server
		  const url = '/api/socialsignin';
	
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
			  setMessage( 'Something Went Wrong!');
			  setNegativeSnackBarOpen(true);
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
				  setMessage(response.message);
				  setNegativeSnackBarOpen()

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


	const onSignin = (e) => {

		e.preventDefault();
		//clearing previous error state
		setMessage("");
	
		//send received data from user to our server
		const url = 'https://application-wingman.herokuapp.com/api/signin';
	
		//body of api
		var data = {
		  email: login.username,
		  password: login.password,
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
			setMessage('Something Went Wrong!');
			setNegativeSnackBarOpen(true);
	
			console.error('Error', error);
		  })
	
		  //accessing received response
		  .then((response) => {
			if (response) {
			  if (response.status === 'Error') {
				//set error message to state error
				setMessage(response.message);
				setNegativeSnackBarOpen(true);
			  } else {
				//sending response to function =>authentication() in Navbar.js
				setMessage(response.message);
				setPositiveSnackBarOpen(true);
				console.log('Success:', response);
				history.push("/");  
			}
			}
		  });
		console.log(login);
	};
	
	return (
		<div className="signin" >
			<form class="box">
				<h1>Login</h1>
				<div>
					<input
						type="text"
						placeholder="Enter Username or Email id"
						value={login.username}
						onChange={(e) =>
							setLogin({ ...login, username: e.target.value })
						}
					/>
				</div>
				<div>
					<input
						type="password"
						placeholder="Password"
						value={login.password}
						onChange={(e) =>
							setLogin({ ...login, password: e.target.value })
						}
					/>
				</div>
				<div></div>
				<input type="button" value="submit" onClick={onSignin} />
				<div >
					<hr />
					<div style={{alignItems: "center",flexDirection: "column",display: "flex"}}>
					<span>
					<FaFacebook size={25} style={{marginRight:"16px"}} color="#18009a" />
					<GoogleLogin
                	clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                	render={(renderProps) => (
                  		<FcGoogle
                    	size={25}
                    	onClick={renderProps.onClick}
                    	disabled={renderProps.disabled}/>
                	)}
                	buttonText="Login"
                	onSuccess={PositiveResponseGoogle}
                	onFailure={NegativeResponseGoogle}
             		/>
            </span>
					<span
						class="forgot"
						style={{
							marginTop:"10px",
							cursor: "pointer",
							color: "#FFFFFF",
						}}
					>
						Forgot password ?
					</span>
					</div>
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
