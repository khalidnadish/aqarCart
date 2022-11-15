import  { useState,lazy,Suspense } from 'react'
import reactLogo from './assets/react.svg'
import styled, { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./component/utils/Theme";
import './App.css'
import MiniCard from './component/card/MiniCard'

function App() {
 
  const [darkMode, setDarkMode] = useState(false);

  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
    <div className="App">
       
       <MiniCard title="TST"  detail="DFDFD"  sts="مجاني" color="crimson" />
    </div>
    </ThemeProvider>
  )
}

export default App
