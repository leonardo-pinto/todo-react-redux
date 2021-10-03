import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

function TodoInput(props) {
  const [todo, setTodo] = useState('');

  const { handleAddButtonClick } = props;

  useEffect(() => {
    setTodo('');
  }, [handleAddButtonClick]);

  return (
    <div className="w-full flex justify-center items-center" data-testid="inputContainer">
      <input
        className="shadow appearance-none border rounded mx-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
        onClick={() => handleAddButtonClick(todo)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </button>
    </div>
  );
}

TodoInput.propTypes = {
  handleAddButtonClick: PropTypes.func.isRequired,
};

export default TodoInput;
