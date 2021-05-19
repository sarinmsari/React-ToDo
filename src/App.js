import "./App.css";
import { useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [activetodo, setActivetodo] = useState([]);
  const [removedtodo, setRemovedtodo] = useState([]);

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setActivetodo([
        ...activetodo,
        { id: Date.now(), text: todo, status: false },
      ]);
    }
    console.log(activetodo);
    setTodo("");
  };

  return (
    <div className="frame">
      <div className="activeTodos todos_box">
        <form onSubmit={handleInputSubmit}>
          <input
            type="text"
            className="activeTodosInput"
            placeholder="Todos here..."
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
          />
        </form>
        <div className="todos">
          {activetodo.map((data, key) => {
            return (
              <div key={key} className="todo">
                <input
                  type="checkbox"
                  name="checkbox"
                  id=""
                  value={data.status}
                  onChange={(e) => {
                    setActivetodo(
                      activetodo.filter((obj) => {
                        if (obj.id === data.id) {
                          obj.status = e.target.checked;
                        }
                        return obj;
                      })
                    );
                    console.log(data);
                  }}
                />
                <span className="todoText">{data.text}</span>
                <span className="closeButton">x</span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="completedTodos todos_box">
        <p className="title">Completed</p>
        <div className="todos">
          {activetodo.map((data, key) => {
            if (data.status) {
              return (
                <div key={key} className="todo">
                  <span className="todoText">{data.text}</span>
                  <span className="closeButton">x</span>
                </div>
              );
            }
            return null;
          })}
        </div>
      </div>
      <div className="removedTodos todos_box">
        <p className="title">Removed</p>
        <div className="todos">
          <div className="todo">
            <span className="todoText">blah balh</span>
            <span className="closeButton">x</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
