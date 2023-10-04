//import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // Hook...
  let [counter, setCounter] = useState(20)

  // let counter = 20
  const addValue = () => {
    console.log("clicked", counter)
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    setCounter(counter => counter + 1);
    // The final outcome will we the add value by four.
  }

  const removeValue = () => {
    setCounter(counter - 1);
  }
  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter Value : {counter}</h2>

      <button
      onClick = {addValue}>Add Value {counter}</button>
      <br />
      <button
      onClick = {removeValue}>Remove Value { counter }</button>
      
      <p>Footer: {counter}</p>
    </>
  );
}

export default App;
