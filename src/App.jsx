import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Header from './components/header/Header';
import TodoInput from './components/input/TodoInput';
import ListTodos from './components/listTodos/ListTodos';
import { addTodo, deleteTodo, editTodo } from './redux/reducers/todoReducer';

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

  return (
    <div>
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
                />
              </div>
            ))}
          </div>
        )
        : <h1>No todos</h1>}
    </div>
  );
}

export default App;
