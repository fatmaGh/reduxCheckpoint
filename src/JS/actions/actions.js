import {ADD} from "../constants/actionTypes"
import {EDIT} from "../constants/actionTypes"
import {DELETE} from "../constants/actionTypes"
import {DONE} from "../constants/actionTypes"

export const addTodo = (payload) => {
  return {
    type: ADD,
    payload
  };
};

export const editTodo = (payload) => {
  return {
    type: EDIT,
    payload
  };
};

export const deleteTodo = (payload) => {
  return {
    type: DELETE,
    payload
  };
};

export const done = (payload) => {
  return {
    type: DONE,
    payload
  };
};