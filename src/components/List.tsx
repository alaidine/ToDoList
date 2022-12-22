import { useState, useRef } from 'react'
import '../index.css'

function ToDoList() {
  const [list, setList] = useState([])
  const inputRef = useRef(null)

  const addTask = () => { // add a task to the list
    var task = inputRef.current.value
    console.log("task added to the list")
    console.log(list)
    setList([task, ...list])
  }

  const deleteTask = (index: any) => { // delete a task from the list
    console.log("task removed from the list")
    const newList = [...list]
    newList.splice(index, 1)
    setList(newList)
  }

  return (
    <div>
      <h1>To Do List</h1>

      <div className="container">
        <input ref={inputRef} id="input"/>
        <button onClick={addTask}>add</button>
      </div>

      <div id="list">
        <ul>
          {list.map((task, index) => (
            <div className="task">
              <li key={task}>{task}</li><button onClick={() => deleteTask(index)}>delete</button>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ToDoList
