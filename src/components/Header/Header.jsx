import React from 'react'
import "./Header.css"
import logo from "../img/logo.png"
function Home() {
  return (
    <>
    <div className='Header'>
     <img src= {logo} alt="todo"style={{width:"7rem", height:"3rem"}} />
    </div>
    </>
  )
}

export default Home
