import logo from './logo.svg';
import javaLogo from './images/js.png'
import htmlLogo from './images/html.png'
import cssLogo from './images/css.png'


import './App.css';
import Header from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <img src={logo} className="App-logo" alt="logo" width="140" />
    <img src={javaLogo} className="App-logo" alt="javaLogo" width="80"/>
    <img src={htmlLogo} className="App-logo" alt="htmlLogo" width="83"/>
    <img src={cssLogo} className="App-logo" alt="cssLogo" width="80"/>
    </>
  );
}

export default App;
