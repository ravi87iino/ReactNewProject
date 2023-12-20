import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count,setCount] = useState(1)
  function AddCount(){
    setCount(count+1)
    setCount(count=> count+1)
  }
  function RemoveCount(){
    if(count==0){
      setCount(0)
    }
    else{
      setCount(count-1)
    }
  }
  return (
    <>
      <h1>My New react project Button:{count}</h1>
      <button onClick={AddCount}>count increase {count}</button>
      <br />
      <br />
      <button onClick={RemoveCount}>count decrease {count}</button>
      <h2>Now, new count is {count}</h2>
    </>
  )
}

export default App
