import React, {useEffect, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from "./components/Counter";

function App() {

  const [counter,setCounter]=useState(0);

  return (
    <div className="App">
     <Counter counter={counter} setCounter={setCounter}/>
    </div>
  );
}

export default App;
