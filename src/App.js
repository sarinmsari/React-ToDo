import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="frame">
      <div className="activeTodos todos_box">
        <input
          type="text"
          className="activeTodosInput"
          placeholder="Todos here..."
        />
        <div className="todos">
          <div className="todo">
            <input type="checkbox" name="checkbox" id="" />
            <i className="todoText">blah balh</i>
            <b className="closeButton">x</b>
          </div>
        </div>
      </div>
      <div className="completedTodos todos_box">
        <p className="title">Completed</p>
        <div className="todos"></div>
        <div className="todo">
          <i className="todoText">blah balh</i>
          <b className="closeButton">x</b>
        </div>
      </div>
      <div className="removedTodos todos_box">
        <p className="title">Removed</p>
        <div className="todos"></div>
        <div className="todo">
          <i className="todoText">blah balh</i>
          <b className="closeButton">x</b>
        </div>
      </div>
    </div>
  );
}

export default App;
