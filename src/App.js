import './App.css'
import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import Tags from './components/Tags'
import Tasks from './components/Tasks'

// These are the lists used in the application. You can move them to any component needed.

const tagsList = [
  {
    optionId: 'HEALTH',
    displayText: 'Health',
    isActive: false,
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
    isActive: false,
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
    isActive: false,
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
    isActive: false,
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
    isActive: false,
  },
]

// Replace your code here
let taskList = []

class App extends Component {
  state = {option: 'HEALTH', userInput: '', List: tagsList}

  onClickTagItem = (id, active) => {
    const {option, userInput} = this.state
    const initialList = taskList

    if (active === false) {
      taskList = taskList.filter(each => each.tag === id)
    } else {
      taskList = initialList
    }

    console.log('tasks list =', taskList)

    const index = tagsList.findIndex(each => {
      if (each.optionId === id) {
        return true
      }
      return false
    })

    tagsList[index].isActive = !active

    this.setState({
      List: tagsList,
    })
  }

  onChangeInput = event => {
    console.log('input=', event.target.value)
    this.setState({
      userInput: event.target.value,
    })
  }

  onChangeOption = event => {
    console.log('option=', event.target.value)
    this.setState({
      option: event.target.value,
    })
  }

  onClickAddBtn = () => {
    const {option, userInput} = this.state

    const newObj = {
      id: uuidv4(),
      task: userInput,
      tag: option,
    }

    taskList.push(newObj)

    this.setState({
      userInput: '',
    })
  }

  render() {
    const {List, userInput} = this.state
    console.log('tasks list=', taskList)

    return (
      <div className="bg-container">
        <div className="creating-task-container">
          <h1 className="task-heading">Create a task!</h1>
          <form className="form-container">
            <div className="input-container">
              <label htmlFor="task" className="task-label">
                Task
              </label>
              <input
                className="input"
                id="task"
                type="text"
                placeholder="Enter the task here"
                value={userInput}
                onChange={this.onChangeInput}
              />
            </div>
            <div className="input-container">
              <label htmlFor="tags" className="task-label">
                Task
              </label>
              <select
                className="input"
                id="tags"
                onChange={this.onChangeOption}
              >
                {List.map(each => (
                  <option key={each.optionId} value={each.optionId}>
                    {each.displayText}
                  </option>
                ))}
              </select>
            </div>
            <button
              type="button"
              className="addTaskBtn"
              onClick={this.onClickAddBtn}
            >
              Add Task
            </button>
          </form>
        </div>

        <div className="tags-and-task-container">
          <h1 className="task-label">Tags</h1>
          <ul className="tags-container">
            {List.map(each => (
              <Tags
                item={each}
                key={each.optionId}
                onClickTagItem={this.onClickTagItem}
              />
            ))}
          </ul>

          <h1 className="task-label">Tasks</h1>
          <ul className="task-container">
            {taskList.map(each => (
              <Tasks key={each.id} taskItem={each} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
