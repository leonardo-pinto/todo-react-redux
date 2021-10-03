import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  deleteIcon,
  editIcon,
  cancelEditIcon,
  confirmEditIcon,
} from '../icons/icons';

function ListTodos(props) {
  const {
    todo: { text, id },
    handleDeleteButtonClick,
    handleEditButtonClick,
    handleCompleteButtonClick,
  } = props;

  const [editEnabled, setEditEnabled] = useState(false);
  const [editedTodoText, setEditedTodoText] = useState(text);
  const [completed, setCompleted] = useState(false); // alterar nome

  const confirmEditButtonClick = () => {
    handleEditButtonClick(id, editedTodoText);
    setEditEnabled(!editEnabled);
  };

  useEffect(() => {
    handleCompleteButtonClick(id, completed);
  }, [completed]);

  return (
    <div data-testid="itemContainer">
      { !editEnabled
        ? (
          <div className="space-x-4 flex justify-center items-center p-4 w-full">
            <input
              className="w-4 h-4 p-2"
              type="checkbox"
              data-testid="completedCheckbox"
              checked={completed}
              onChange={() => setCompleted(!completed)}
            />
            <p className={completed ? 'w-3/4 p-2 line-through' : 'w-3/4 p-2'} data-testid="itemTodo">
              {text}
            </p>
            <button
              type="button"
              data-testid="deleteButton"
              onClick={() => handleDeleteButtonClick(id)}
            >
              {deleteIcon()}
            </button>
            <button
              type="button"
              data-testid="editButton"
              onClick={() => setEditEnabled(!editEnabled)}
            >
              {confirmEditIcon()}
            </button>
          </div>
        )
        : (
          <div className="space-x-4 flex justify-center items-center p-4">
            <input
              className="shadow appearance-none border rounded mx-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              data-testid="editTodoInput"
              type="text"
              maxLength="30"
              value={editedTodoText}
              onChange={(e) => setEditedTodoText(e.target.value)}
            />
            <button
              type="button"
              data-testid="confirmEditButton"
              onClick={() => confirmEditButtonClick()}
            >
              {editIcon()}
            </button>
            <button
              type="button"
              data-testid="cancelEditButton"
              onClick={() => setEditEnabled(!editEnabled)}
            >
              {cancelEditIcon()}
            </button>
          </div>
        )}
    </div>
  );
}

ListTodos.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  }).isRequired,
  handleDeleteButtonClick: PropTypes.func.isRequired,
  handleEditButtonClick: PropTypes.func.isRequired,
  handleCompleteButtonClick: PropTypes.func.isRequired,
};

export default ListTodos;
