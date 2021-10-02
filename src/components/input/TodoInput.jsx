import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RiAddCircleLine } from 'react-icons/ri';

function TodoInput(props) {
  const [todo, setTodo] = useState('');
  const { handleAddButtonClick } = props;

  return (
    <div data-testid="inputContainer">
      <label htmlFor="todoInput">
        <input
          type="text"
          name="todoInput"
          placeholder="Add todo..."
          data-testid="todoInput"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
      </label>
      <button
        type="button"
        data-testid="addButton"
        onClick={() => handleAddButtonClick(todo)}
      >
        <RiAddCircleLine />
      </button>
    </div>
  );
}

TodoInput.propTypes = {
  handleAddButtonClick: PropTypes.func.isRequired,
};

export default TodoInput;
