import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [todo, setTodo] = useState("");
  const [activetodo, setActivetodo] = useState(
    localStorage.getItem("activetodo")
      ? JSON.parse(localStorage.getItem("activetodo"))
      : []
  );
  const [removedtodo, setRemovedtodo] = useState(
    localStorage.getItem("removedtodo")
      ? JSON.parse(localStorage.getItem("removedtodo"))
      : []
  );

  useEffect(() => {
    localStorage.setItem("activetodo", JSON.stringify(activetodo));
    localStorage.setItem("removedtodo", JSON.stringify(removedtodo));
  }, [activetodo, removedtodo]);

  const handleInputSubmit = (e) => {
    e.preventDefault();
    if (todo !== "") {
      setActivetodo([
        ...activetodo,
        { id: Date.now(), text: todo, status: false },
      ]);
    }
    setTodo("");
  };

  const handleRemove = (data) => {
    setRemovedtodo([...removedtodo, data]);
    var items = activetodo.filter((item) => {
      return item !== data;
    });
    setActivetodo(items);
  };

  return (
    <>
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
              if (!data.status) {
                return (
                  <div key={key} className="todo">
                    <input
                      type="checkbox"
                      name="checkbox"
                      className="checkbox"
                      checked={data.status}
                      onChange={(e) => {
                        setActivetodo(
                          activetodo.filter((obj) => {
                            if (obj.id === data.id) {
                              obj.status = e.target.checked;
                            }
                            return obj;
                          })
                        );
                      }}
                    />
                    <span className="todoText">{data.text}</span>
                    <span
                      onClick={() => {
                        handleRemove(data);
                      }}
                      className="closeButton"
                    >
                      x
                    </span>
                  </div>
                );
              }
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
                    <input
                      type="checkbox"
                      name="checkbox"
                      className="checkbox"
                      checked={data.status}
                      onChange={(e) => {
                        setActivetodo(
                          activetodo.filter((obj) => {
                            if (obj.id === data.id) {
                              obj.status = e.target.checked;
                            }
                            return obj;
                          })
                        );
                      }}
                    />
                    <span className="todoText">{data.text}</span>
                    <span
                      onClick={() => {
                        handleRemove(data);
                      }}
                      className="closeButton"
                    >
                      x
                    </span>
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
            {removedtodo.map((data, key) => {
              return (
                <div className="todo">
                  <span className="todoText">{data.text}</span>
                  <span
                    onClick={() => {
                      var items = removedtodo.filter((item) => {
                        return item !== data;
                      });
                      setRemovedtodo(items);
                    }}
                    className="closeButton delete"
                  >
                    Delete
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="developer-info-section">
        <p>
          code with &#10084; by{" "}
          <a href="http://sarinm.me" target="_blank">
            Sarin M
          </a>
        </p>
      </div>
    </>
  );
}

export default App;
