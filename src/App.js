import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';

function App() {
  return (
  <div className="App">
    <h1>Hello</h1>
    <Greet name="Dave" />
    <Greet name="Yaw" />
    <Welcome name="Dave" />
    <Welcome name="Yaw" />
    <Message />
  </div>
  );    
}

export default App;

