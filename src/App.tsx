import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";

function App() {
  let startCount=0;
  const [counter,setCounter]=useState(startCount);
  return (
    <div className="App">
     <Counter counter={counter} setCounter={setCounter}/>
    </div>
  );
}

export default App;
