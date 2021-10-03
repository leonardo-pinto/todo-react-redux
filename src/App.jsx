import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import TodoInput from './components/input/TodoInput';
import ListTodos from './components/listTodos/ListTodos';
import {
  addTodo, deleteTodo, editTodo, completeTodo,
} from './redux/reducers/todoReducer';

function App() {
  const { todoList } = useSelector((state) => state.todoReducer);
  const dispatch = useDispatch();

  const handleAddButtonClick = (todo) => {
    dispatch(addTodo(todo));
  };

  const handleDeleteButtonClick = (todo) => {
    dispatch(deleteTodo(todo));
  };

  const handleEditButtonClick = (id, editedTodoText) => {
    const editedTodo = {
      id,
      text: editedTodoText,
    };
    dispatch(editTodo(editedTodo));
  };

  const handleCompleteButtonClick = (id, completed) => {
    const completedTodo = {
      id,
      completed,
    };

    dispatch(completeTodo(completedTodo));
  };

  return (
    <div className="flex h-screen items-center bg-indigo-200">
      <div className="bg-indigo-300 w-2/3 mx-auto border-2 border-solid border-black rounded-lg">
        <Header />
        <TodoInput handleAddButtonClick={handleAddButtonClick} />
        { todoList.length > 0
          ? (
            <div>
              {todoList.map((todo) => (
                <div key={todo.id}>
                  <ListTodos
                    todo={todo}
                    handleDeleteButtonClick={handleDeleteButtonClick}
                    handleEditButtonClick={handleEditButtonClick}
                    handleCompleteButtonClick={handleCompleteButtonClick}
                  />
                </div>
              ))}
            </div>
          )
          : <h1 className="p-4 text-2xl text-center">No todos</h1>}
      </div>
    </div>
  );
}

export default App;
