import { ToDoCard, ADD_TODO } from "./types";

export function addToDo(newToDo: ToDoCard) {
  return {
    type: ADD_TODO,
    payload: newToDo
  };
}
