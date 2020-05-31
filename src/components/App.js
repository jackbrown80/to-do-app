import React, { useState, useEffect } from 'react'
import AddToDo from './AddToDo'
import ToDo from './ToDo'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function App() {
  // Get intial todos state from local storage, if it doesn't exist set it to 0. Parse turns it from a string to an object
  const initialTodos = JSON.parse(window.localStorage.getItem('todos')) || 0
  // Adds a 'todos' property to state object and creates addToDo function which is used to update the state. Intital state of todos is set to the local storage
  const [todos, updateTodos] = useState(initialTodos)

  // Each time App rerenders update local storage with the new state
  useEffect(() => {
    // Stringify turns the object into a string so it can be stored correctly
    window.localStorage.setItem('todos', JSON.stringify(todos))
  })

  return (
    <div className="app">
      <div className="to-do-wrapper">
        <h2 className="app-title">TO DO APP</h2>
        <AddToDo updateTodos={updateTodos} />
        <TransitionGroup component="ul">
          {Object.keys(todos).map((key) => (
            <CSSTransition
              classNames="to-do"
              key={key}
              timeout={{ enter: 500, exit: 500 }}
            >
              <li key={key}>
                <ToDo
                  index={key}
                  text={todos[key].text}
                  updateTodos={updateTodos}
                />
              </li>
            </CSSTransition>
          ))}
        </TransitionGroup>
      </div>
    </div>
  )
}

export default App
