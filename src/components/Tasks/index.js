import './index.css'

const Tasks = props => {
  const {taskItem} = props
  const {tag, task} = taskItem

  return (
    <li className="task-item">
      <p className="task">{task}</p>
      <p className="tagBtn">{tag}</p>
    </li>
  )
}

export default Tasks
