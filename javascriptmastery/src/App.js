import { useState, useEffect } from 'react';
import './App.css';


const Person = (props) => {
  return (
    <>
    <h1>Name: {props.name}</h1>
    <h2>Last: {props.lastName}</h2>
    <h2>Age: {props.age}</h2>
    </>
  )
}

const App = () => {
const dev = "devendra";
const isnameShowing = true;
// 3 Basic hooks in react are: useState, useEffect, useContext
const [counter, setCounter] = useState(0);

useEffect(() => {
  setCounter(100);
}, [])

  return (
    <div className="App">

      <button onClick={() => setCounter((prevCount) => prevCount - 1)}>-</button>
      <h1>{counter}</h1>
      <button onClick={() => setCounter((prevCount) => prevCount + 1)}>+</button>

      <Person name={"johnny"}/>
      <Person name={"devendra"} lastName={"chitanna"} age={12+13}/>
      <h1>Hello, World!, {isnameShowing ? dev : "someone"}</h1>
      {dev ? (
        <>
          test
        </>
      ) : (
        <>
        <h1>test</h1>
        <h2>There is no name</h2>
        </>
      )}
    </div>
  );
}

export default App;
