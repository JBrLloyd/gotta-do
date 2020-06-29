import { Action } from "redux";
import { ThunkAction } from "redux-thunk";
import { AppState } from "./store";
import { addToDo } from "./store/todo/actions";
import { COLUMNS } from "./common/types";

export const thunkAddToDo = (
  title: string,
): ThunkAction<void, AppState, null, Action<string>> => async dispatch => {
  const asyncResp = await exampleAPI();
  dispatch(
    addToDo({
      title,
      column: COLUMNS.DO,
      createdAt: new Date().getTime()
    })
  );
};

function exampleAPI() {
  return Promise.resolve("Async Chat Bot");
}
