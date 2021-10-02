import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { ImCancelCircle } from 'react-icons/im';
import { BiEdit } from 'react-icons/bi';
import { RiDeleteBin6Line, RiCheckboxCircleLine } from 'react-icons/ri';
import { useDispatch } from 'react-redux';
import { editTodo } from '../../redux/reducers/todoReducer';

function ListTodos(props) {
  const { todo, handleDeleteButtonClick } = props; // adicionar completed
  const { text, id } = todo;
  const [editEnabled, setEditEnabled] = useState(false);
  const [editTodoState, setEditTodoState] = useState(text);

  const dispatch = useDispatch();

  const handleEditTodo = () => {
    const editedTodo = {
      id,
      text: editTodoState,
    };
    dispatch(editTodo(editedTodo));
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
              <RiDeleteBin6Line />
            </button>
            <button
              type="button"
              data-testid="editButton"
              onClick={() => setEditEnabled(!editEnabled)}
            >
              <BiEdit />
            </button>
          </div>
        )}
      { editEnabled
        && (
        <div>
          <input
            type="text"
            value={editTodoState}
            onChange={(e) => setEditTodoState(e.target.value)}
          />
          <button
            type="button"
            data-testid="confirmEditButton"
            onClick={() => handleEditTodo(editTodo)}
            // onClick={() => setEditEnabled(!editEnabled)}
          >
            <RiCheckboxCircleLine />
          </button>
          <button
            type="button"
            data-testid="cancelEditButton"
            onClick={() => setEditEnabled(!editEnabled)}
          >
            <ImCancelCircle />
          </button>
        </div>

        )}
    </div>
  );
}

ListTodos.propTypes = {
  todo: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    text: PropTypes.string,
  })).isRequired,
  handleDeleteButtonClick: PropTypes.func.isRequired,
};

export default ListTodos;
