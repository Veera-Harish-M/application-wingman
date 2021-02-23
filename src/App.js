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
    </div>
  );
}
export default App;
