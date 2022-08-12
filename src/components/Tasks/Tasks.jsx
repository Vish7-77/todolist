import React from 'react'
import  "./Tasks.css"
import dlt from "../img/dlt.png"

function Tasks({title,desc,deleteTask,index}) {
  return (
    <div  className='Task'>
<div className='divOne'>
<h3>
  {title}
</h3>
<p>
{desc}
</p>
</div>
<button className='bt' onClick={()=>{deleteTask(index)}}> <img src={dlt} style={{width:"1rem"}} alt="dlt"/> </button>
    </div>
  )
}

export default Tasks