import React from 'react'
import EditTodo from './EditTodo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDispatch } from 'react-redux'
import { deleteTodo } from'../JS/actions/actions'
import { done } from'../JS/actions/actions'
import '../App.css'

const TodoCard = ({todo}) => {

    const dispatch = useDispatch()

    return (
        <div className='Todo__Item'>
            <span className='Todo__Text' onClick={() => dispatch(done(todo.id))} style={{textDecoration: todo.isDone ? 'line-through' : 'none'}}>{todo.text}</span>
            <div className='icons__container'>
                <EditTodo todo={todo} />
                <div><FontAwesomeIcon className='icon' icon='trash' onClick={() => dispatch(deleteTodo(todo.id))}/></div>
            </div>
        </div>
    )
}

export default TodoCard

