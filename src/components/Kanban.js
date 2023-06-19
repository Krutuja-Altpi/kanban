import React, { useState } from 'react'
import Board from '../features/Board'
import { taskData } from '../data/taskData'
import './Kanban.css'
const Kanban = () => {
    const [toDo , setTodo] = useState(taskData.filter((data) => data.status === 'todo'))
    const [inprogress , setinProgress] = useState(taskData.filter((data) => data.status === 'inprogress'))
    const [completed , setCompeted] = useState(taskData.filter((data) => data.status === 'completed'))
  return (
    <div className='kanban'>
        <Board color = '#5030E5' data = {toDo} title = 'To Do'/>
        <Board color = '#FFA500' data = {inprogress} title = 'On Progress'/>
        <Board color = ' #8BC48A' data = {completed} title = 'Done'/>

    </div>
  )
}

export default Kanban