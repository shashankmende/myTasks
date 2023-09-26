import './index.css'

const Tasks = props => {
  const {taskItem} = props
  const {tag, task} = taskItem

  return (
    <li className="task-item">
      <p className="task">{task}</p>
      <button type="button" className="tagBtn">
        {tag}
      </button>
    </li>
  )
}

export default Tasks
