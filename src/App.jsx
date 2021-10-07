import { useSelector } from 'react-redux';
import Header from './components/header/Header';
import TodoInput from './components/input/TodoInput';
import ListTodos from './components/listTodos/ListTodos';

function App() {
  const { todos } = useSelector((state) => state.todoReducer);

  return (
    <div data-testid="appContainer" className="flex h-screen items-center bg-indigo-200">
      <div className="bg-indigo-300 w-4/5 sm:w-2/4 md:w-5/12 mx-auto border-2 border-solid border-black rounded-lg">
        <Header />
        <TodoInput />
        { todos.length !== 0
          ? (
            <div data-testid="todosContainer">
              {todos.map((todo) => (
                <div key={todo.id}>
                  <ListTodos
                    todo={todo}
                  />
                </div>
              ))}
            </div>
          )
          : <h1 data-testid="noTodos" className="p-4 text-2xl text-center">To-do list is empty</h1>}
      </div>
    </div>
  );
}

export default App;
