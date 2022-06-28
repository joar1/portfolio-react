import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header';

function App() {
  return (
    <>
    <Header/>
    <h1>TEST</h1>
    <img src={logo} className="App-logo" alt="logo" width="80" />
    </>
  );
}

export default App;
