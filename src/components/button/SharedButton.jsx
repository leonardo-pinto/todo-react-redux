import React from 'react';
import PropTypes from 'prop-types';
import { ImCancelCircle as CancelIcon } from 'react-icons/im';
import { BiEdit as EditIcon } from 'react-icons/bi';
import { RiDeleteBin6Line as DeleteIcon, RiCheckboxCircleLine as ConfirmEditIcon } from 'react-icons/ri';

function SharedButton(props) {
  const { buttonId, onClickAction, todoId } = props;

  const icons = () => {
    switch (buttonId) {
      case 'deleteButton': return <DeleteIcon />;
      case 'editButton': return <EditIcon />;
      case 'confirmEditButton': return <ConfirmEditIcon />;
      case 'cancelEditButton': return <CancelIcon />;
      default: return null;
    }
  };

  return (
    <button
      type="button"
      data-testid={buttonId}
      onClick={() => onClickAction(todoId)}
    >
      { icons() }
    </button>
  );
}

SharedButton.propTypes = {
  buttonId: PropTypes.string.isRequired,
  onClickAction: PropTypes.func.isRequired,
  todoId: PropTypes.number,
};

SharedButton.defaultProps = {
  todoId: null,
};

export default SharedButton;
