import React from 'react'
import {useSelector} from 'react-redux'
import TodoCard from './TodoCard'

const TodoList = () => {

    const todoList = useSelector ((state) => state.todoList)
    
    return (
        <div>
            {
                todoList.map(todo => <TodoCard todo={todo} />)
            }
        </div>
    )
}

export default TodoList
