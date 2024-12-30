import './App.css';
import Greet from './Components/Greet';
import Welcome from './Components/Welcome';
import Hello from './Components/Hello';
import Message from './Components/Message';
import Counter from './Components/Counter'

function App() {
  return (
    <div className="App">
      {/* <Greet firstName = "josh" lastName="Cheng">
        <p>i dont understand whats happening!</p>
      </Greet>
      <Greet firstName = "josh2" lastName="Cheng2">
        <button>press</button>
      </Greet>
      <Greet firstName = "josh3" lastName="Cheng3"></Greet>
      <Welcome firstName = "josh3" lastName="Cheng3">
        <button>press</button>
      </Welcome> */}
      {/* <Hello></Hello> */}
      {/* <Message /> */}
      <Counter />

    </div>
  );
}

export default App;
