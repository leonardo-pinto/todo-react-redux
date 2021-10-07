import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { completeTodo, deleteTodo, editTodo } from '../../redux/reducers/todoReducer';
import {
  DeleteIcon,
  EditIcon,
  CancelEditIcon,
  ConfirmEditIcon,
} from '../icons/icons';

function ListTodos(props) {
  const dispatch = useDispatch();
  const { todo: { text, id, completed } } = props;
  const [editEnabled, setEditEnabled] = useState(false);
  const [editedTodoText, setEditedTodoText] = useState(text);

  const handleConfirmEditButtonClick = () => {
    dispatch(editTodo({ id, text: editedTodoText }));
    setEditEnabled(!editEnabled);
  };

  return (
    <div data-testid="itemContainer">
      { !editEnabled
        ? (
          <div className="space-x-4 flex justify-center items-center p-4 w-full">
            <input
              className="w-8 h-8 sm:w-6 sm:h-6"
              type="checkbox"
              data-testid="completedCheckbox"
              checked={completed}
              onChange={() => dispatch(completeTodo({ id, completed: !completed }))}
            />
            <p className={completed ? 'w-3/4 p-2 line-through' : 'w-3/4 p-2'} data-testid="itemTodo">
              {text}
            </p>
            <button
              type="button"
              data-testid="deleteButton"
              onClick={() => dispatch(deleteTodo((id)))}
            >
              {DeleteIcon()}
            </button>
            <button
              type="button"
              data-testid="editButton"
              onClick={() => setEditEnabled(!editEnabled)}
            >
              {EditIcon()}
            </button>
          </div>
        )
        : (
          <div className="space-x-4 flex justify-center items-center p-2 w-full">
            <input
              className="shadow appearance-none border rounded w-3/4 mx-3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              data-testid="editTodoInput"
              type="text"
              maxLength="30"
              value={editedTodoText}
              onChange={(e) => setEditedTodoText(e.target.value)}
            />
            <button
              type="button"
              data-testid="confirmEditButton"
              onClick={() => handleConfirmEditButtonClick()}
            >
              {ConfirmEditIcon()}
            </button>
            <button
              type="button"
              data-testid="cancelEditButton"
              onClick={() => setEditEnabled(!editEnabled)}
            >
              {CancelEditIcon()}
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
    completed: PropTypes.bool,
  }).isRequired,
};

export default ListTodos;
