import '../index.css'
import Task from './Task.tsx'

function ToDoList() {
  const tasks: string[] = []

  const add = () => { // add a task in the to do list
    var task = ""
    tasks.push(task)
  }

  return (
    <div>
      <h1>To Do List</h1>

      <div className="container">
        <input id="input"/>
        <button onClick={add}>add</button>
      </div>

      <div id="list">

      </div>
    </div>
  )
  
}

export default ToDoList
