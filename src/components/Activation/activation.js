import React, { Component } from "react";
import "./activation.css";
import { withRouter } from 'react-router'; 
import Checking from "../../asserts/checking.gif"
import Verified from "../../asserts/activation.webp"
import Repair from "../../asserts/repair.gif"

class activation extends Component {
  constructor() {
    super();
    this.state = {
      image:Checking,
      bgcolor:"#fbfbfb",
      message: <h4>Getting Resourses Ready..Please Wait</h4>,
    };
  }

  componentDidMount() {
    console.log(this.props.match.params.slug);
    const url = "https://application-wingman.herokuapp.com/api/account-activation";
    var bearer = "Bearer " + this.props.match.params.slug;
    fetch(url, {
      method: "POST",
      headers: {
        Authorization: bearer,
        "Content-Type": "application/json",
      },
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
          if (response.error) {
            this.setState({
              message: <h4>{response.error}</h4>,
              image:Repair,
              bgcolor:"#ffffff"
            });
          } else {
            if (response.status === "Error")
            {
              this.setState({
                message: (
                  <div>
                    <h4>Your account is not verified :(</h4>
                    <h5>May be expired link. Please Try <span onClick={()=>this.props.history.push('/session/SignUp')} style={{cursor:"pointer",color:"#5a8fab"}}><u>SignUp</u></span> again.</h5>
                  </div>
                ),
                image:Repair,
                bgcolor:"#ffffff"
              });
            }else{
            this.setState({
              message: (
                <div>
                  <h4>Your account has been verified Successfully.</h4>
                  <h5><span onClick={()=>this.props.history.push('/session/SignIn')} style={{cursor:"pointer",color:"#51c27d"}}><u>SignIn</u></span> for great experience! </h5>
                </div>
              ),
              image:Verified,
              bgcolor:"#ffffff"
            });
            console.log("Success:", response);
          }}
        }
      });
  }
  render() {
    return (
      <div style={{backgroundColor:`${this.state.bgcolor}`}} className="activation">
          <div md={6} className="activation-content">
            <img style={{width: "40%"}} src={this.state.image} alt="activation"/>
            {this.state.message}
          </div>
        </div>
    );
  }
}
export default withRouter(activation)