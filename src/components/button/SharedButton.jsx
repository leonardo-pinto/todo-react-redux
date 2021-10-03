import React from 'react';
import PropTypes from 'prop-types';
import { ImCancelCircle as CancelIcon } from 'react-icons/im';
import { BiEdit as EditIcon } from 'react-icons/bi';
import { RiDeleteBin6Line as DeleteIcon, RiCheckboxCircleLine as ConfirmEditIcon } from 'react-icons/ri';

function SharedButton(props) {
  const {
    buttonId,
    onClickAction,
    todoId,
    editEnabled,
  } = props;

  const icons = () => {
    switch (buttonId) {
      case 'deleteButton': return <DeleteIcon onClick={() => onClickAction(todoId)} />;
      case 'editButton': return <EditIcon onClick={() => onClickAction(!editEnabled)} />;
      case 'confirmEditButton': return <ConfirmEditIcon onClick={() => onClickAction()} />;
      case 'cancelEditButton': return <CancelIcon onClick={() => onClickAction()} />;
      default: return null;
    }
  };

  return (
    <button
      type="button"
      data-testid={buttonId}
    >
      { icons() }
    </button>
  );
}

SharedButton.propTypes = {
  buttonId: PropTypes.string.isRequired,
  onClickAction: PropTypes.func.isRequired,
  todoId: PropTypes.number,
  editEnabled: PropTypes.bool,
};

SharedButton.defaultProps = {
  todoId: null,
  editEnabled: null,
};

export default SharedButton;
