import React, { Component } from 'react'
import Home from '../home/home';
import Navigbar from '../Navbar/Navigbar';

export default class main extends Component {
    render() {
        return (
            <div>
 <Navigbar />      
  <Home />
      {/* <Voicetotext />  */}
            </div>
        )
    }
}
