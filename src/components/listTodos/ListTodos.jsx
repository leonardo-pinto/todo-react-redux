import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { RiDeleteBin6Line as DeleteIcon, RiCheckboxCircleLine as ConfirmEditIcon } from 'react-icons/ri';
import { ImCancelCircle as CancelIcon } from 'react-icons/im';
import { BiEdit as EditIcon } from 'react-icons/bi';

function ListTodos(props) {
  const { todo, handleDeleteButtonClick, handleEditButtonClick } = props; // adicionar completed
  const { text, id } = todo;
  const [editEnabled, setEditEnabled] = useState(false);
  const [editedTodoText, setEditedTodoText] = useState(text);

  const confirmEditButtonClick = () => {
    handleEditButtonClick(id, editedTodoText);
    setEditEnabled(!editEnabled);
  };

  return (
    <div data-testid="itemContainer">
      { !editEnabled
        && (
          <div>
            <p data-testid="itemTodo">
              {text}
            </p>
            <button
              type="button"
              data-testid="deleteButton"
              onClick={() => handleDeleteButtonClick(id)}
            >
              <DeleteIcon />
            </button>
            <button
              type="button"
              data-testid="editButton"
              onClick={() => setEditEnabled(!editEnabled)}
            >
              <EditIcon />
            </button>
          </div>
        )}
      { editEnabled
        && (
        <div>
          <input
            data-testid="editTodoInput"
            type="text"
            value={editedTodoText}
            onChange={(e) => setEditedTodoText(e.target.value)}
          />
          <button
            type="button"
            data-testid="confirmEditButton"
            onClick={() => confirmEditButtonClick()}
          >
            <ConfirmEditIcon />
          </button>
          <button
            type="button"
            data-testid="cancelEditButton"
            onClick={() => setEditEnabled(!editEnabled)}
          >
            <CancelIcon />
          </button>
        </div>
        )}
    </div>
  );
}

ListTodos.propTypes = {
  todo: PropTypes.objectOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  handleDeleteButtonClick: PropTypes.func.isRequired,
  handleEditButtonClick: PropTypes.func.isRequired,
};

export default ListTodos;
