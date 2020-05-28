import React from 'react'

function AddToDo(props) {
  const toDoRef = React.createRef()

  const createToDo = (e) => {
    // 1. Stop form from submitting
    e.preventDefault()
    // 2. Create a ToDo object containing the text, have done an object so other things like date created can be added at a later date
    const todo = {
      text: toDoRef.current.value,
    }
    // 3. Use hook created in App.js to update the state, take the previouse state and the new todo to this
    props.updateTodos((prevState) => ({
      ...prevState,
      [`ToDo${Date.now()}`]: todo,
    }))
    // 4. Reset form
    e.currentTarget.reset()
  }
  return (
    <form action="" onSubmit={createToDo} className="to-do-form">
      <input
        type="text"
        name="to-do-item"
        ref={toDoRef}
        placeholder="Start typing here..."
        className="to-do-input"
        autoComplete="off"
      />
      <button type="submit" className="to-do-submit">
        +
      </button>
    </form>
  )
}

export default AddToDo
