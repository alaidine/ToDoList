import { useState } from 'react'
import '../index.css'
import Task from './Task'

const tasks: string[] = []

function ToDoList() {

  const [list, setList] = useState(0)

  const add = () => { // add a task in the to do list
    var task = ""
    tasks.push(task)
    console.log("task added to the list")
  }

  return (
    <div>
      <h1>To Do List</h1>

      <div className="container">
        <input id="input"/>
        <button onClick={add}>add</button>
      </div>

      <div id="list">
        {list}
      </div>
    </div>
  )
}

export default ToDoList
