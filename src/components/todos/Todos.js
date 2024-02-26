import React from 'react'
import Todo from './Todo'
const Todos = (props) => {
  return (
    <div className="todos-list">

      {props.todos.map(todo => (
        <Todo
          todo={todo}
          key={todo.id}
          mode={props.mode}
          toggleTodo={props.toggleTodo}
          deleteTodo={props.deleteTodo}
          editTodo={props.editTodo}

        />
      ))}

      {props.todos.length === 0 && (
        <h3 className="no-todos"> لايوجد مهام حالية ... </h3>
      )}

    </div>
  )
}

export default Todos