import { useState, useRef } from 'react'
import '../index.css'

const tasks: string[] = []


function ToDoList() {
  const [list, setList] = useState()
  const inputRef = useRef(null)

  const addTask = () => { // add a task to the list
    var task = inputRef.current.value
    tasks.push(task)
    console.log("task added to the list")
    console.log(tasks)
  }

  const deleteTask = () => { // delete a task from the list
    console.log("task removed from the list")
  }

  return (
    <div>
      <h1>To Do List</h1>

      <div className="container">
        <input ref={inputRef} id="input"/>
        <button onClick={addTask}>add</button>
      </div>

      <div id="list">
        {list}
      </div>
    </div>
  )
}

export default ToDoList
