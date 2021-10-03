import React from 'react';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import ListTodos from './ListTodos';

const todoTest = {
  id: 1,
  text: 'test',
  completed: false,
};

describe('ListTodos component', () => {
  let deleteClickMock;
  let editClickMock;
  let completeClickMock;

  beforeEach(() => {
    deleteClickMock = jest.fn();
    editClickMock = jest.fn();
    completeClickMock = jest.fn();
    render(
      <Provider store={store}>
        <ListTodos
          handleEditButtonClick={editClickMock}
          handleDeleteButtonClick={deleteClickMock}
          handleCompleteButtonClick={completeClickMock}
          todo={todoTest}
        />
      </Provider>,
    );
  });

  afterEach(cleanup);

  it('Should render delete button correctly', () => {
    const deleteBtn = screen.getByTestId('deleteButton');

    expect(deleteBtn).toBeInTheDocument();
  });

  it('Should render edit button correctly', () => {
    const editBtn = screen.getByTestId('editButton');

    expect(editBtn).toBeInTheDocument();
  });

  it('Should call onClick function after clicking on delete button', () => {
    const deleteBtn = screen.getByTestId('deleteButton');
    fireEvent.click(deleteBtn);

    expect(deleteClickMock).toHaveBeenCalledTimes(1);
  });

  it('Should call onClick function after clicking on edit button', () => {
    const editBtn = screen.getByTestId('editButton');
    fireEvent.click(editBtn);

    const confirmEditBtn = screen.getByTestId('confirmEditButton');
    fireEvent.click(confirmEditBtn);

    expect(editClickMock).toHaveBeenCalledTimes(1);
  });

  it('Should change edit input value', () => {
    const editBtn = screen.getByTestId('editButton');
    fireEvent.click(editBtn);

    const editInput = screen.getByTestId('editTodoInput');
    expect(editInput.value).toBe('test');

    fireEvent.change(editInput, { target: { value: 'edited text' } });
    expect(editInput.value).toBe('edited text');
  });

  it('Should not update todo text if cancelEditButton is clicked', () => {
    const editBtn = screen.getByTestId('editButton');
    fireEvent.click(editBtn);

    const editInput = screen.getByTestId('editTodoInput');
    expect(editInput.value).toBe('test');

    fireEvent.change(editInput, { target: { value: 'edited text' } });
    expect(editInput.value).toBe('edited text');

    const cancelEditBtn = screen.getByTestId('cancelEditButton');
    fireEvent.click(cancelEditBtn);

    const currentItemTodo = screen.getByTestId('itemTodo');
    expect(currentItemTodo.innerHTML).toBe('test');
  });

  it('Should change checkbox value after click', () => {
    const checkbox = screen.getByTestId('completedCheckbox');
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});
