import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import { GoogleLogin } from "react-google-login";
import FacebookLogin from "react-facebook-login/dist/facebook-login-render-props";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import "./signup.css";
import { useHistory } from "react-router-dom";

export default function Newreg() {
  const history = useHistory();
  const [Register, setRegister] = useState({
    email: "",
    password: "",
    repassword: "",
  });
  const [submit, setsubmit] = useState(false);
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
      const url = "https://application-wingman.herokuapp.com/api/socialsignup";

      //body of api
      var data = {
        name: responseFacebook.name,
        email: responseFacebook.email,
        expiry: responseFacebook.expiresIn,
        profilepic: responseFacebook.picture.data.url,
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
      const url = "https://application-wingman.herokuapp.com/api/socialsignup";

      console.log(responseGoogle);
      //body of api
      var data = {
        email: responseGoogle.profileObj.email,
        expiry: responseGoogle.tokenObj.expires_in,
        name: responseGoogle.profileObj.name,
        profilepic: responseGoogle.profileObj.imageUrl,
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

  onsubmit = (e) => {
    console.log("sdfsdS");
    e.preventDefault();
    //clearing previous error state
    setMessage("");

    if (Register.password === Register.repassword) {
      //send received data from user to our server
      const url = "https://application-wingman.herokuapp.com/api/signup";

      //body of api
      var data = {
        name: Register.email,
        email: Register.email,
        password: Register.password,
        profilepic:
          "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80",
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
              setMessage(response.message);
              // localStorage.setItem(
              //   "AuthDataProfilePic",
              //   response.userData.profilepic
              // );

              // localStorage.setItem("AuthDataName", response.userData.name);
              // localStorage.setItem("AuthDataToken", response.token);
              // localStorage.setItem("AuthDataEmail", response.userData.email);
              // localStorage.setItem("AuthDataId", response.userData._id);
              setPositiveSnackBarOpen(true);
            }
          }
        });
    } else {
      setMessage("password and confirm password should match");
      setNegativeSnackBarOpen(true);
    }
  };

  return (
    <div className="signup">
      <div className="box">
        <h1>Registation</h1>
        <div>
          <input
            type="text"
            required
            placeholder="Enter Email id"
            value={Register.email}
            onChange={(e) =>
              setRegister({ ...Register, email: e.target.value })
            }
          />
          {/* <p className='text-muted'>
            We'll never share your email with anyone else.
          </p> */}
        </div>
        <div>
          <input
            type="password"
            required
            placeholder="Password"
            value={Register.password}
            onChange={(e) =>
              setRegister({ ...Register, password: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type="password"
            required
            placeholder="Re-Password"
            value={Register.repassword}
            onChange={(e) => {
              setRegister({ ...Register, repassword: e.target.value });
              if (Register.password === Register.repassword) {
                setsubmit(true);
              } else {
                setsubmit(false);
              }
              console.log(submit);
            }}
          />
        </div>
        <input type="button" onClick={onsubmit} value="create profile" />

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
            Forgot password ?
          </span>
        </div>
      </div>
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

// import React, { useState } from "react";
// import Navj from "./Navj";
// import Footer from "./Footer";
// import { Card, Form, Button } from "react-bootstrap";
// import { FcGoogle } from "react-icons/fc";
// import { SiFacebook } from "react-icons/si";
// import { VscGithub } from "react-icons/vsc";
// import { ImLinkedin } from "react-icons/im";

// export default function Newreg() {
//   //email
//   const [email, setemail] = useState("");
//   //pass
//   const [pass, setpass] = useState("");
//   //re-pass
//   const [repass, setrepass] = useState("");
//   //for only check
//   const [checkpass, setcheckpass] = useState(0);
//   //after process
//   const completereg = () => {
//     if (pass === repass) {
//     } else {
//       setcheckpass(1);
//     }
//   };
//   return (
//     <div>
//       <Navj />
//       <div style={{ marginTop: "3%" }}>
//         <div
//           style={{
//             margin: "auto",
//             width: "30%",
//             padding: "10px",
//           }}>
//           <Card style={{ marginTop: "10%" }}>
//             <Card.Body>
//               <Card.Title style={{ textAlign: "center" }}>
//                 Registation
//               </Card.Title>
//               <Form>
//                 <Form.Group controlId='formBasicEmail'>
//                   <Form.Label>Email address</Form.Label>
//                   <Form.Control
//                     type='email'
//                     value={email}
//                     onChange={(e) => {
//                       setemail(e.target.value);
//                     }}
//                     placeholder='Enter email-id'
//                   />
//                   <Form.Text className='text-muted'>
//                     We'll never share your email with anyone else.
//                   </Form.Text>
//                 </Form.Group>
//                 <Form.Group controlId='formBasicPassword'>
//                   <Form.Label>Password</Form.Label>
//                   <Form.Control
//                     type='password'
//                     value={pass}
//                     onChange={(e) => {
//                       setpass(e.target.value);
//                     }}
//                     placeholder='Enter Password'
//                   />
//                 </Form.Group>
//                 <Form.Group controlId='formBasicRePassword'>
//                   <Form.Label>Re-Password</Form.Label>
//                   <Form.Control
//                     type='password'
//                     value={repass}
//                     onChange={(e) => {
//                       setrepass(e.target.value);
//                     }}
//                     placeholder='Re-Enter Password'
//                   />
//                   {checkpass === 1 ? (
//                     <Form.Text style={{ color: "red" }}>Mismatch</Form.Text>
//                   ) : (
//                     <Form.Text style={{ color: "red" }}></Form.Text>
//                   )}
//                 </Form.Group>
//                 <Button
//                   className='mb-2'
//                   style={{ float: "right" }}
//                   onClick={completereg}
//                   variant='success'>
//                   Join us
//                 </Button>
//               </Form>

//               <br />
//               <br />
//               <Card.Text style={{ textAlign: "center" }}>
//                 or Connect us with Social Account
//               </Card.Text>
//               <div style={{ display: "flex", justifyContent: "space-around" }}>
//                 <span style={{ cursor: "pointer" }}>
//                   <FcGoogle size={25} />
//                 </span>
//                 <span style={{ cursor: "pointer" }}>
//                   <SiFacebook size={25} color={"#3b5998 "} />
//                 </span>
//                 <span style={{ cursor: "pointer" }}>
//                   <VscGithub size={25} color={"black"} />
//                 </span>
//                 <span style={{ cursor: "pointer" }}>
//                   <ImLinkedin size={25} color={"#0e76a8"} />
//                 </span>
//               </div>
//             </Card.Body>
//           </Card>
//         </div>
//       </div>

//       <Footer />
//     </div>
//   );
// }
