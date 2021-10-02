import './App.css';
import { useDispatch } from 'react-redux';
import Header from './components/header/Header';
import TodoInput from './components/input/TodoInput';
import { addTodo } from './redux/reducers/todoReducer';

function App() {
  const dispatch = useDispatch();

  const handleAddButtonClick = (todo) => {
    dispatch(addTodo(todo));
  };

  return (
    <div>
      <Header />
      <TodoInput handleAddButtonClick={handleAddButtonClick} />
    </div>
  );
}

export default App;
