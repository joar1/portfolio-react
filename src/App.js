import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Header/>
    <img src={logo} className="App-logo" alt="logo" width="80" />
    </>
  );
}

export default App;
