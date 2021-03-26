import React, { Component } from "react";
import ResizePanel from "react-resize-panel";
import Content from "../../content/content";
//import Sidebar from "../sidebar/sidebar";
import Description from "../description/Description";
//top bot heading
import HeaderBot from "../sidebar/HeaderBot";
//full chat
import Chart from "../sidebar/Chart";

import "./home.css";
import Filler from "./FIller";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";

class Home extends Component{
  constructor(){
    super();
    this.state={
      quota : [
        `All our dreams can come true, if we have the courage to pursue them. – Walt Disney`,
        `The secret of getting ahead is getting started. – Mark Twain`,
        `Don’t limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve. – Mary Kay Ash`,
        `Only the paranoid survive. – Andy Grove`,
        `I wake up every morning and think to myself, ‘how far can I push this company in the next 24 hours.’ – Leah Busque`,
        `We need to accept that we won’t always make the right decisions, that we’ll screw up royally sometimes – understanding that failure is not the opposite of success, it’s part of success. – Arianna Huffington`,
        `Write it. Shoot it. Publish it. Crochet it, sauté it, whatever. MAKE. – Joss Whedon`,
        `Do one thing every day that scares you. ― Eleanor Roosevelt`,
        `Smart people learn from everything and everyone, average people from their experiences, stupid people already have all the answers. – Socrates`,
        `Do what you feel in your heart to be right – for you’ll be criticized anyway. - Eleanor Roosevelt`,
        `Happiness is not something ready made. It comes from your own actions. - Dalai Lama XIV`,
        `Whatever you are, be a good one. - Abraham Lincoln`,
        `If we have the attitude that it’s going to be a great day it usually is. – Catherine Pulsifier`,
      ],
      fillup:[],
      Close:1,
      algo:[],
      PositiveSnackBarOpen:false,
      NegativeSnackBarOpen:false,
      message:"",
      selectedAlgoCode:"",
    }
    this.handleChange=this.handleChange.bind(this);
    this.handleNegativeSnackbarClose=this.handleNegativeSnackbarClose.bind(this);
    this.handlePositiveSnackbarClose=this.handlePositiveSnackbarClose.bind(this);
    this.getAlgoWithUserInput=this.getAlgoWithUserInput.bind(this);
    this.getSelectedAlgo=this.getSelectedAlgo.bind(this);
  } 

  componentDidMount(){
    this.setState({
      fillup:[
        { id: 0, msg: this.state.quota[Math.floor(Math.random() * 13 + 1)], who: "bot" },
        { id: 1, msg: "Let's us Start coding!", who: "bot" },
        { id: 2, msg: "Hello ", who: "user" },
      ]
    })
  }

  handleNegativeSnackbarClose = () => {
    this.setState({
      NegativeSnackBarOpen:false,
      message:""
    })

  };

  handlePositiveSnackbarClose = () => {
    this.state({
      PositiveSnackBarOpen:false,
      message:""
    })
  };


  getAlgoWithUserInput=async(params)=>{
    const url = `http://localhost:8000/api/getAlgoSearch/?search=${params}`;

      await fetch(url, {
        method: "GET",
      })
      .then((res) => res.json())
        .then((response)=>{
          console.log(response);
          this.setState({
            algo:response.data
          })
        })
        .catch((error) => {
          console.error("Error", error);
          this.setState({
            message:"Error in retriving Algorithm",
            NegativeSnackBarOpen:true
          })
        })
  }


  getSelectedAlgo=(params)=>{
    this.setState({
      selectedAlgoCode:params.code
    })
      console.log(params.code);
    }

  // chat histery

handleChange=(newValue,userInput)=> {
  this.setState({
    fillup:newValue
  })
    this.getAlgoWithUserInput(userInput);
    console.log("new",userInput);
  }
  render(){
    console.log("rendering");
  return (
    <div>
      <div className='home'>
          <div className='sidebar ' style={{    background: "#000b18"}}>
            <HeaderBot />
            <Chart val={this.state.fillup} onChange={this.handleChange} />
          </div>
        <div className='content'>
          <Content algoCode={this.state.selectedAlgoCode}/>
        </div>
        {this.state.Close === 1 ? (
          <ResizePanel direction='w' style={{ flexGrow: "1" }}>
            <div className='description'>
              {this.state.algo.length === 0? <Filler message="No algo availabe. Try searching with different keywork"/>:
              <Description
                getSelectedAlgo={this.getSelectedAlgo}

                closecallback={(cc) => {
                  this.setState({close:cc});
                }}
                algoData={this.state.algo}
              />
              }
            </div>
          </ResizePanel>
        ) : (
          <div></div>
        )}
      </div>

      
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
export default Home;
