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
import Activation from './components/Activation/activation';
import Forgetpassword from './components/ForgetPassword/ForgetPassword';
import ResetPassword from './components/ResetPassword/ResetPassword';
import Page404 from './components/404/404';

function App() {
  return (
    <div className='App'>
      <Router>
        <Switch>
          <Route exact path='/session/SignIn' component={SignIn} />
          <Route exact path='/session/SignUp' component={Regist} />
          <Route exact path='/' component={CodeBlock} />
          <Route exact path='/gui' component={GuiVoice} />
          <Route exact path='/addnewalgorithm' component={AddnewAlgorithm} />
          <Route exact path='/auth/activation/:slug' component={Activation} />
          <Route exact path='/session/forget-password' component={Forgetpassword}/>
          <Route exact path='/auth/password/reset/:slug' component={ResetPassword} /> 
          <Route  component={Page404}/>
        </Switch>
      </Router>
    </div>
  );
}
export default App;
