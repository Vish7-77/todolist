import React, { useState, useEffect } from 'react'
import Tasks from '../Tasks/Tasks'
import "./home.css"

function Home() {
  const temp=localStorage.getItem("task")?JSON.parse(localStorage.getItem("task")):[];
  const [task, settask] = useState(temp)
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [dis , setdis]=useState(true)

  const submitHandler = (e) => {
    e.preventDefault();
    settask([...task, { title, desc }])
    settitle("")
    setdesc("")
    setdis(true)
   
  }
  const deleteTask=(index)=>{
    const flArr=task.filter((val,i)=>{
      return i!==index
    })
    settask(flArr)
    
  }
  useEffect(() => {
    localStorage.setItem("task",JSON.stringify(task))
  }, [task])

  return (
    <>
      <div className="cont">
      <h2> DAILY TASKS</h2>
        <form onSubmit={submitHandler}>
          
          <input className='inp' placeholder='type here' onChange={(e) => {
            settitle(e.target.value)
            setdis(false)
            

          }} value={title} />
          <textarea className='txt' placeholder='type here' value={desc} onChange={(e) => {
            setdesc(e.target.value)
            setdis(false)

           }} />
          <button id="bit" type="submit" disabled={dis}>add</button>
        </form>
      </div>
      
      {
      task.map((item, index) => {
        return (
          <Tasks key={index} title={item.title} desc={item.desc} deleteTask={deleteTask} index={index}/>)

      })}
    </>
  )
}

export default Home
