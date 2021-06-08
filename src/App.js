import React, { useEffect, useState } from 'react';
import Loader from './components/assets/common/Loader';
import Context from './components/context/context';
import TodoList from './components/TodoList';

const AddTodo = React.lazy(() => new Promise((res) => setTimeout(() => res(import('./components/AddTodo')), 1000)));

function App() {
  const [todo, setTodo] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos/?_limit=5')
      .then((response) => response.json())
      .then((json) => {
        setTimeout(() => {
          setTodo(json);
          setLoader(false);
        }, 2000);
      });
  }, []);

  const addTodo = (title) => {
    setTodo(
      todo.concat({
        id: Date.now(),
        completed: false,
        title,
      })
    );
  };

  const onChange = (id) => {
    setTodo(
      todo.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    );
  };

  const deleteTodo = (id) => {
    setTodo(todo.filter((todo) => todo.id !== id));
  };

  return (
    <Context.Provider value={{ onChange, deleteTodo }}>
      <div className="wrapper">
        <h1>TODO LIST</h1>
        <React.Suspense fallback={'Loading...'}>
          <AddTodo addTodo={addTodo} />
        </React.Suspense>
        {loader ? <Loader /> : todo.length ? <TodoList todos={todo} /> : 'No todos!'}
      </div>
    </Context.Provider>
  );
}

export default App;
