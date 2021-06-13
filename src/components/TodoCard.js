import React from 'react'
import EditTodo from './EditTodo'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux'
import { deleteTodo } from'../JS/actions/actions'
import { done } from'../JS/actions/actions'
import '../App.css'

const TodoCard = ({todo}) => {

    const dispatch = useDispatch()

    return (
        <div className='todoList'>
            <p style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}>{todo.text}</p>
            <button onClick={() => dispatch(done(todo.id))} >
                { todo.isDone ? 'isDone' : 'Undone' }
            </button>
            <EditTodo todo={todo} />
            <button onClick={() => dispatch(deleteTodo(todo.id))} >delete</button>
        </div>
    )
}

export default TodoCard

