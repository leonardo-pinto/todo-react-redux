import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

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
            <p className="w-3/4 p-2" data-testid="itemTodo">
              {text}
            </p>
            <button
              type="button"
              data-testid="deleteButton"
              onClick={() => handleDeleteButtonClick(id)}
            >
              <svg
                className="w-10 h-10 p-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
            <button
              type="button"
              data-testid="editButton"
              onClick={() => setEditEnabled(!editEnabled)}
            >
              <svg
                className="w-10 h-10 p-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
              </svg>
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
              <svg
                className="w-10 h-10 p-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </button>
            <button
              type="button"
              data-testid="cancelEditButton"
              onClick={() => setEditEnabled(!editEnabled)}
            >
              <svg
                className="w-10 h-10 p-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
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
