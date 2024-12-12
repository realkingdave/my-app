import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Message from './components/Message';
import EventHandler from './components/EventHandler';
import Pp from './components/PP';
import UserGreeting from './components/UserGreeting';
import ListRendering from './components/ListRendering';
import FormHandling from './components/FormHandling';
import FragmentDemo from './components/FragmentDemo';
import PureComp from './components/PureComp';
//import RefsDemo from './components/RefsDemo';
import Focus from './components/Focus';





function App() {
  return (
  <div className="App">
    <h1>Hello</h1>
    <Greet name="Dave" />
    <Greet name="Yaw" />
    <Welcome name="Dave" />
    <Welcome name="Yaw" />
    <Message />
    <EventHandler />
    <Pp />
    <UserGreeting /> 
    <ListRendering />
    <FormHandling />
    <FragmentDemo />
    <PureComp />
    {/* <RefsDemo /> */}
    <Focus />
    
    </div>
  );    
}

export default App;

