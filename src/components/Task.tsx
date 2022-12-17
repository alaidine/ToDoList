import '../index.css'

function Task(props: any) {
  const Delete = () => { // delete the task
  }

  return (
    <div>
      <p>{props.text}</p>
      <button onClick={Delete}>Delete</button>
    </div>
  )
}

export default Task
