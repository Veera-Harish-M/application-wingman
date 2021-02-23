import React from "react";
import "./App.css";
//router-dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import files
import SignIn from "./components/adisplaywebpages/SignIn";
import Regist from "./components/adisplaywebpages/Regist";
import CodeBlock from "./components/adisplaywebpages/CodeBlock";
import GuiVoice from "./components/adisplaywebpages/GuiVoice";
import AddnewAlgorithm from "./components/adisplaywebpages/AddnewAlgorithm";
import Activation from './components/Activation/activation'

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>

          <Route exact path='/session/SignIn' component={SignIn} />
          <Route exact path='/session/SignUp' component={Regist} />


          <Route path='/' component={CodeBlock} />
          <Route path='/gui' component={GuiVoice} />
          <Route path='/addnewalgorithm' component={AddnewAlgorithm} />
          <Route path='/auth/activation/:slug' component={Activation} />

          {/* <Route path='/auth/password/reset/:slug' component={ResetPassword} />  */}
        </Switch>
      </Router>
    </div>
  );
}
export default App;
