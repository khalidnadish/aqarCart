import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import MiniCard from './component/card/MiniCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
       
       <MiniCard title="TST"  detail="DFDFD"  sts="مجاني" color="crimson" />
    </div>
  )
}

export default App
