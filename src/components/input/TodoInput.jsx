import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTodo } from '../../redux/reducers/todoReducer';
import { AddIcon } from '../icons/icons';

function TodoInput() {
  const dispatch = useDispatch();

  const [todo, setTodo] = useState('');

  const handleAddTodoClick = () => {
    if (todo !== '') {
      dispatch(addTodo(todo));
      setTodo('');
    }
  };

  return (
    <div className="my-8 w-full flex justify-center items-center" data-testid="inputContainer">
      <input
        className="shadow appearance-none border rounded w-3/4 mx-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        name="todoInput"
        maxLength="30"
        placeholder="Add todo..."
        data-testid="todoInput"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button
        type="button"
        data-testid="addButton"
        onClick={() => handleAddTodoClick()}
      >
        {AddIcon()}
      </button>
    </div>
  );
}

export default TodoInput;
