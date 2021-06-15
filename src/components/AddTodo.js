import React, {useState} from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { addTodo } from '../JS/actions/actions'

const AddTodo = () => {

    const[newTextTodo, setNewTextTodo] = useState('')

    const dispatch = useDispatch()

    const add = () => {

        let newTodo = {
            text: newTextTodo,
            id: Math.random(),
            isDone: false,
        };

        dispatch(addTodo(newTodo))

        setNewTextTodo('')

    }

    return (
        <div className='input'>
            <input type='text' value={newTextTodo} onChange={(e) => setNewTextTodo(e.target.value)}/>
            <button onClick={add}>Add</button>
        </div>
    )
}

export default AddTodo
