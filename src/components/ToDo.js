import React from 'react'

function ToDo(props) {
  const removeToDo = (prevState) => {
    //1. Take a copy of previous state
    const newToDos = { ...prevState }
    //2. Remove the todo
    delete newToDos[props.index]
    //3. Return new todo object
    return newToDos
  }
  return (
    <div className="to-do-item">
      <input className="to-do-checkbox" type="checkbox" name="complete" id="" />
      <p className="to-do-text">{props.text}</p>
      <button
        className="to-do-remove"
        onClick={() => props.updateTodos((prevState) => removeToDo(prevState))}
      >
        &times;
      </button>
    </div>
  )
}

export default ToDo
