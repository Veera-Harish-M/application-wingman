import React, { Component } from "react";
import "./activation.css";
import { withRouter } from 'react-router'; 


class activation extends Component {
  constructor() {
    super();
    this.state = {
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
            });
          } else {
            if (response.status === "Error")
            {
              this.setState({
                message: (
                  <div>
                    <h4>Your account is not verified :(</h4>
                    <h5>May be expired link. Please Try <span onClick={()=>this.props.history.push('/signup')} style={{cursor:"pointer",color:"#9727a9"}}><u>SignUp</u></span> again.</h5>
                  </div>
                ),
              });
            }else{
            this.setState({
              message: (
                <div>
                  <h4>Your account has been verified Successfully.</h4>
                  <h5><span onClick={()=>this.props.history.push('/')} style={{cursor:"pointer",color:"#9727a9"}}><u>SignIn</u></span> for great experience! </h5>
                </div>
              ),
            });
            console.log("Success:", response);
          }}
        }
      });
  }
  render() {
    return (
      <div className="activation">
          <div md={6} className="activation-content">
            <h1>Hello World!</h1>
            {this.state.message}
          </div>
        </div>
    );
  }
}
export default withRouter(activation)