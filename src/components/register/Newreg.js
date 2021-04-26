import React, { useState } from "react";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

export default function Newreg() {
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

  onsubmit=(e)=>{
    console.log("sdfsdS");
    e.preventDefault();
    //clearing previous error state
    setMessage("");

    if (Register.password === Register.repassword){
      //send received data from user to our server
      const url = "https://application-wingman.herokuapp.com/api/signup";

      //body of api
      var data = {
        name: Register.email,
        email: Register.email,
        password: Register.password,
        profilepic: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80"
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
              setPositiveSnackBarOpen(true);
            }
          }
        });
    }else{
      setMessage("password and confirm password should match");
      setNegativeSnackBarOpen(true);
    }
  }

  return (
    <div className='signin'>
      <div className='box'>
        <h1>Registation</h1>
        <div>
          <input
            type='text'
            required
            placeholder='Enter Email id'
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
            type='password'
            required
            placeholder='Password'
            value={Register.password}
            onChange={(e) =>
              setRegister({ ...Register, password: e.target.value })
            }
          />
        </div>
        <div>
          <input
            type='password'
            required
            placeholder='Re-Password'
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
        <input type='button' onClick={onsubmit} value='create profile' />
      </div>
      <Snackbar
        open={NegativeSnackBarOpen}
        autoHideDuration={6000}
        onClose={handleNegativeSnackbarClose}>
        <Alert severity='error'>{message}</Alert>
      </Snackbar>

      <Snackbar
        open={PositiveSnackBarOpen}
        autoHideDuration={6000}
        onClose={handlePositiveSnackbarClose}>
        <Alert severity='success'>{message}</Alert>
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
