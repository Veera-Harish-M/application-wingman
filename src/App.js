import './App.css';
import Home from './components/home/home';
import Navigbar from './components/Navbar/Navigbar';
//import Voicetotext from "./components/sidebar/Voicetotext";
function App() {
  return (
    <div className="App">
      <Navigbar />
      <Home />
      {/* <Voicetotext /> */}
    </div>
  );
}
export default App;
