import React from 'react'
import {useSelector} from 'react-redux'
import TodoCard from './TodoCard'

const TodoList = ({done, unDone}) => {

    const todoList = useSelector ((state) => state.todoList)
    
    return (
        <div className='Todo__container'>
            {
                done === unDone ?
                todoList.map((todo) => (<TodoCard todo={todo} key={todo.id} />)) 
                : done ?
                todoList.filter((todo) => (todo.isDone === true))
                .map((todo)=>(<TodoCard todo={todo} key={todo.id} />)) 
                : todoList.filter((todo) => (todo.isDone === false))
                .map((todo)=>(<TodoCard todo={todo} key={todo.id}/>))     
            }
        </div>
    )
}

export default TodoList
