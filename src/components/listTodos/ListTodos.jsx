import React from 'react';
import PropTypes from 'prop-types';
import { TiDeleteOutline } from 'react-icons/ti';

function ListTodos(props) {
  const { todo: { text, id }, handleDeleteButtonClick } = props; // adicionar completed

  return (
    <div data-testid="itemContainer">
      <p data-testid="itemTodo">
        {text}
      </p>
      <button
        type="button"
        data-testid="deleteButton"
        onClick={() => handleDeleteButtonClick(id)}
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
