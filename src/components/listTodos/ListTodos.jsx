import React from 'react';
import PropTypes from 'prop-types';
import { TiDeleteOutline } from 'react-icons/ti';

function ListTodos(props) {
  const { todo, handleDeleteButtonClick } = props;

  return (
    <div data-testid="itemContainer">
      <p data-testid="itemTodo">
        {todo}
      </p>
      <button
        type="button"
        data-testid="deleteButton"
        onClick={() => handleDeleteButtonClick(todo)}
      >
        <TiDeleteOutline />
      </button>
    </div>
  );
}

ListTodos.propTypes = {
  todo: PropTypes.string.isRequired,
  handleDeleteButtonClick: PropTypes.func.isRequired,
};

export default ListTodos;
