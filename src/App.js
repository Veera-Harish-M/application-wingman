<<<<<<< HEAD
import './App.css';
import Signup from './components/signup/signup'
import Signin from './components/signin/signin'
import Main from './components/main/main'
import Activation from './components/Activation/activation'
import ResetPassword from './components/ResetPassword/ResetPassword'
import {Switch, Route} from 'react-router-dom';
//import Voicetotext from "./components/sidebar/Voicetotext";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/session/SignIn" component={Signin} /> 
        <Route exact path="/session/SignUp" component={Signup}/>
        <Route exact path="/" component={Main} />
        <Route path="/auth/activation/:slug" component={Activation} />
        <Route path="/auth/password/reset/:slug" component={ResetPassword} />
      </Switch>
=======
import React from "react";
import "./App.css";
//router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import files
import SignUp from "./components/adisplaywebpages/SignUp";
import Regist from "./components/adisplaywebpages/Regist";
import CodeBlock from "./components/adisplaywebpages/CodeBlock";
import GuiVoice from "./components/adisplaywebpages/GuiVoice";
import AddnewAlgorithm from "./components/adisplaywebpages/AddnewAlgorithm";
//import AnswerForProblmes from "./components/adisplaywebpages/AnswerForProblmes";
function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route path='/' exact component={Regist} />
          <Route path='/signin' component={SignUp} />
          <Route path='/codeblock' component={CodeBlock} />
          <Route path='/gui' component={GuiVoice} />
          <Route path='/addnewalgorithm' component={AddnewAlgorithm} />
          {/* <Route exact path='/session/SignIn' component={Signin} />
          <Route exact path='/session/SignUp' component={Signup} />
          <Route exact path='/' component={Main} />
          <Route path='/auth/activation/:slug' component={Activation} />
          <Route path='/auth/password/reset/:slug' component={ResetPassword} /> */}
          {/* not avl */}
          {/* <Route path="/answerforproblems"  component={AnswerForProblmes}/> */}
        </Switch>
      </Router>
>>>>>>> ddbc538ca08223ca6ce56fe9816e2234ed1ae788
    </div>
  );
}
export default App;
