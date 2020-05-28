import React from 'react'
import AddToDo from './AddToDo'
import ToDo from './ToDo'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

class App extends React.Component {
  state = {
    todos: {},
  }

  addToDo = (newToDo) => {
    // 1. Take a copy of exisiting state so we're not directly mutating state
    const todos = { ...this.state.todos }
    // 2. Add the new to-do to the copied state object. I'm using a timestamp as a unique identifier here.
    todos[`ToDo${Date.now()}`] = newToDo
    // 3. Set the state to this new copied object with the new to-do
    this.setState({ todos })
  }

  removeToDo = (key) => {
    // 1. Take a copy of existing state
    const todos = { ...this.state.todos }
    // 2. Remove todo using key
    delete todos[key]
    // 3. Set the state to this new copied object without the passed in todo
    this.setState({ todos })
  }

  render() {
    return (
      <div className="app">
        <div className="to-do-wrapper">
          <h2 className="app-title">TO DO APP</h2>
          <AddToDo addToDo={this.addToDo} />
          <TransitionGroup component="ul">
            {Object.keys(this.state.todos).map((key) => (
              <CSSTransition
                classNames="to-do"
                key={key}
                timeout={{ enter: 500, exit: 500 }}
              >
                <li key={key}>
                  <ToDo
                    index={key}
                    text={this.state.todos[key].text}
                    removeToDo={this.removeToDo}
                  />
                </li>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    )
  }
}

export default App
