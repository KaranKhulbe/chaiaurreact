import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter, setCounter] = useState(0)
  //let counter = 45;
  const addValue =()=>{
    console.log("value added",Math.random())
    //counter = counter + 1;
    if(counter==20){
      setCounter(counter=20)
    }else{
      setCounter(prevcounter => prevcounter+1)
      setCounter(prevcounter => prevcounter+1)
      setCounter(prevcounter => prevcounter+1)
      setCounter(prevcounter => prevcounter+1)

    }
   // setCounter(counter+1)
    console.log("clicked",counter)
  }
  const removeValue=()=>{
    if(counter>0){
      setCounter(counter-1)
    }else{
      setCounter(counter=0)
    }
   // setCounter(counter-1)
    console.log(counter)
  }

  return (
    <>
      <div>
       <h1>Chai Aur react</h1>
       <h2>Counter value: {counter}</h2>
       <button onClick={addValue}>Add Value {counter}</button>
       <br/>
       <button onClick={removeValue}> Remove Value{counter} </button>
       <p>footer: {counter}</p>
      </div>
      
    
    </>
  )
}

export default App
