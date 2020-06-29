import { COLUMNS } from "../../common/types";

export interface ToDoCard {
  createdAt: number;
  title: string;
  column: COLUMNS
}

export interface ToDoState {
  toDoCards: ToDoCard[];
}

// Describing the different ACTION NAMES available
export const ADD_TODO = "ADD_TODO";

interface AddToDoAction {
  type: typeof ADD_TODO;
  payload: ToDoCard;
}

export type ToDoActionTypes = AddToDoAction;
