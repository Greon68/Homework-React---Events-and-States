import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hello from './components/Hello/Hello'
import Menu from './components/Menu/Menu'


import cards from './data';
import ProjectList from './components/ProjectList/ProjectList'
import  Portfolio from './components/Portfolio/Portfolio'


function App() {
  

  return (
    <>
     {/* <Hello/> */}
      {/* <Menu/> */}
      <Portfolio/> 
      {/* <Toolbar
          filters={["All", "Websites", "Flayers", "Business Cards"]}
          selected="All"
          onSelectFilter={(filter) => {console.log(filter);}}/> */}
      {/* < ProjectList cards = {cards}/> */}





    </>
  )
}

export default App
