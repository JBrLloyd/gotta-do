import React from "react";
import { connect } from "react-redux";
import "./App.css";
import { AppState } from "./store";

import { ToDoState } from "./store/todo/types";
import { addToDo } from "./store/todo/actions";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapStateToProps = (state: AppState) => ({
  toDo: state.toDo
});

export default connect(mapStateToProps, {
  addToDo,
})(App);
