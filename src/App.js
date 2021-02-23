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
    </div>
  );
}
export default App;
