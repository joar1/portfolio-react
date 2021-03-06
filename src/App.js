import logo from './logo.svg';
import javaLogo from './images/js.png'
import htmlLogo from './images/html.png'
import cssLogo from './images/css.png'
import { BrowserRouter as Router, Routes ,Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import {Nav} from './components/Navbar';
import Linkedin from "./pages/Linkedin";
import OmMeg from "./pages/OmMeg";
import Prosjekter from "./pages/Prosjekter"
import Hjem from "./pages/Hjem"


function App() {
  return (
    <>
      <Router>
        <Nav/>
          <Routes>
            <Route path="/" element={<Hjem/>}/>
            <Route path="Hjem" component={<Hjem/>} />
            <Route path="/OmMeg" element={<OmMeg/>} />
            <Route path="LinkedIn" component={<Linkedin/>} />
            <Route path="Prosjekter" component={<Prosjekter/>} />
          </Routes>
      </Router>
    <Header/>
    <img src={logo} className="App-logo" alt="logo" width="140" />
    <img src={javaLogo} className="App-logo-reverse" alt="javaLogo" width="80"/>
    <img src={htmlLogo} className="App-logo-reverse" alt="htmlLogo" width="83"/>
    <img src={cssLogo} className="App-logo-reverse" alt="cssLogo" width="80"/>
    </>
  );
}
export default App;