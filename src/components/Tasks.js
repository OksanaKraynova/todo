import React from 'react'
import Task from './Task'

export const Tasks = ({todos, toggleComplete, deleteTodo}) => {
    return (
        <div className='tasks'>
          {todos.map(todo => (
            <Task todo={todo} key={todo.id} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
          ))}
        </div>
    )
}
