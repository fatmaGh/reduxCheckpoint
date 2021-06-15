import{ADD} from '../constants/actionTypes'
import{EDIT} from '../constants/actionTypes'
import{DELETE} from '../constants/actionTypes'
import{DONE} from '../constants/actionTypes'

const initialState = {
    todoList : [
        {
            text: 'My First Todo',
            id: 0,
            isDone: false
        },
        {
            text: 'My Second Todo',
            id: 1,
            isDone: false
        },
        {
            text: 'My Third Todo',
            id: 2,
            isDone: false
        },
    ]
}

const todoReducer = (state = initialState, {type, payload}) => {
    switch (type){
        case ADD :
            return {...state, todoList: [...state.todoList, payload]}

        case EDIT :
            return {
                ...state, todoList: state.todoList.map((todo) => 
                (payload.id === todo.id) ? {text : payload.text} : todo 
                )
            }

        case DELETE :
        return {
            ...state, 
            todoList: state.todoList.filter((todo) => todo.id !== payload)
        }

        case DONE :
        return{
            ...state, 
            // todoList: state.todoList.filter((todo) => 
            // (todo.id !== payload.id) ? { isDone: !todo.isDone } : todo
            //)
            
            todoList: state.todoList.map((todo) => 
                (todo.id === payload) ? {...todo, isDone : !todo.isDone} : todo        
            )
        }
            
        default: 
            return state;        
    }
}

export default todoReducer