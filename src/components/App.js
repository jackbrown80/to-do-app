import React, { useState } from 'react'
import AddToDo from './AddToDo'
import ToDo from './ToDo'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

function App(props) {
  // Adds a 'todos' property to state object and creates addToDo function which is used to update the state
  const [todos, updateTodos] = useState({})

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
