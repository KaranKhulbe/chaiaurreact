import React, { useEffect,useState } from 'react'
import './App.css'
import { ThemeProvider } from './contexts/theme'
import ThemeBtn from './components/Themebutton'
import Card from './components/Card'

function App() {
  
  const [themeMode, setthemeMode] = useState("light")

  const lightTheme =()=>{
    setthemeMode("light")
  }
  const darkTheme=()=>{
    setthemeMode("dark")
  }
  //actual change in the theme
  useEffect(()=>{
    document.querySelector('html').classList.remove("light","dark")
    document.querySelector('html').classList.add(themeMode)

  },[themeMode])

  return (
    <>
    console.log("karan")
<ThemeProvider value={{themeMode,lightTheme, darkTheme}}> 
<div className="flex flex-wrap min-h-screen items-center">
      <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                      <ThemeBtn/>
            </div>
             <div className="w-full max-w-sm mx-auto">
              <Card/>

              </div>
              </div>
            </div>
</ThemeProvider>
    </>
  )

}

export default App
