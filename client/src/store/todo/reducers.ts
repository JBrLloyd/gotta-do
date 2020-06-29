import { ToDoState, ADD_TODO, ToDoActionTypes } from "./types";

const initialState: ToDoState = {
  toDoCards: []
};

export function toDoReducer(
  state = initialState,
  action: ToDoActionTypes
): ToDoState {
  switch (action.type) {
    case ADD_TODO: {
      return {
        toDoCards: [...state.toDoCards, action.payload]
      };
    }
    default:
      return state;
  }
}
