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
  },
  {
    optionId: 'EDUCATION',
    displayText: 'Education',
  },
  {
    optionId: 'ENTERTAINMENT',
    displayText: 'Entertainment',
  },
  {
    optionId: 'SPORTS',
    displayText: 'Sports',
  },
  {
    optionId: 'TRAVEL',
    displayText: 'Travel',
  },
  {
    optionId: 'OTHERS',
    displayText: 'Others',
  },
]

// Replace your code here
const taskList = []

class App extends Component {
  state = {
    activeTagId: '',
    option: 'HEALTH',
    userInput: '',
    List: tagsList,
    filteredList: [],
  }

  onClickTagItem = (id, active) => {
    if (active === false) {
      console.log('isClicked', active)
      this.setState({
        activeTagId: tagsList.filter(each => each.optionId === id)[0].optionId,
        filteredList: taskList.filter(each => each.tag === id),
      })
    } else {
      console.log('else block')
      this.setState({
        activeTagId: '',
        filteredList: taskList,
      })
    }
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

  onClickAddBtn = event => {
    const {option, userInput} = this.state
    console.log('event', event.target)
    const newObj = {
      id: uuidv4(),
      task: userInput,
      tag: option,
    }

    taskList.push(newObj)

    this.setState({
      userInput: '',
      filteredList: taskList,
    })
  }

  render() {
    const {List, userInput, activeTagId, filteredList} = this.state
    console.log('tasks list=', filteredList)

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
                Tags
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
                isClicked={activeTagId === each.optionId}
              />
            ))}
          </ul>

          <h1 className="task-label">Tasks</h1>
          <ul className="task-container">
            {filteredList.length === 0 ? (
              <p className="no-task">No Tasks Added Yet</p>
            ) : (
              filteredList.map(each => <Tasks key={each.id} taskItem={each} />)
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default App
