import React from 'react'

class ToDo extends React.Component {
  render() {
    return (
      <div className="to-do-item">
        <input
          className="to-do-checkbox"
          type="checkbox"
          name="complete"
          id=""
        />
        <p className="to-do-text">{this.props.text}</p>
        <button
          className="to-do-remove"
          onClick={() => this.props.removeToDo(this.props.index)}
        >
          &times;
        </button>
      </div>
    )
  }
}


export default ToDo
