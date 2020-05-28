import React from 'react'

class AddToDo extends React.Component {
  toDoRef = React.createRef()

  createToDo = (e) => {
    // 1. Stop form from submitting
    e.preventDefault()
    // 2. Create a ToDo object containing the text, have done an object so other things like date created can be added at a later date
    const todo = {
      text: this.toDoRef.current.value,
    }
    // 3. Pass todo upto App to be added to state
    this.props.addToDo(todo)
    // 4. Reset form
    e.currentTarget.reset()
  }
  render() {
    return (
      <form action="" onSubmit={this.createToDo} className="to-do-form">
        <input
          type="text"
          name="to-do-item"
          ref={this.toDoRef}
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
}

export default AddToDo
