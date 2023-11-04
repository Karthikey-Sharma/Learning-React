import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter , setCounter] = useState(15);
  
  let addValue = () => {
    console.log("counter clicked of ADD");
    if(counter < 20){
      setCounter(counter + 1);
    }
   
  }

  let subtractValue = () =>{
    console.log("counter clicked of SUBTRACT");
    if(counter > 0){
      setCounter(counter - 1);
    }
    
  }
  return (
    <>
      <h1>Karthikey Sharma</h1>
      <h2>Counter value is :- {counter}</h2>
      <button onClick={addValue}>Increment Value {counter}</button>
      <button onClick = {subtractValue}>Decrement Value {counter}</button>
    </>
  )
}

export default App
