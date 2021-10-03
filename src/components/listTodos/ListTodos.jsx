import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SharedButton from '../button/SharedButton';

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
            <SharedButton
              todoId={id}
              buttonId="deleteButton"
              onClickAction={handleDeleteButtonClick}
            />
            <SharedButton
              buttonId="editButton"
              editEnabled={editEnabled}
              onClickAction={setEditEnabled}
            />
          </div>
        )}
      { editEnabled
        && (
        <div>
          <input
            type="text"
            value={editedTodoText}
            onChange={(e) => setEditedTodoText(e.target.value)}
          />
          <SharedButton
            buttonId="confirmEditButton"
            onClickAction={confirmEditButtonClick}
          />
          <SharedButton
            buttonId="cancelEditButton"
            onClickAction={setEditEnabled}
          />
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
