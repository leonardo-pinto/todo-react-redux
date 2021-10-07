import React from 'react';
import {
  screen, fireEvent, cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import ListTodos from './ListTodos';
import { render } from '../../utils/renderWithRedux';

const todoTest = {
  id: 1,
  text: 'test',
  completed: false,
};

beforeEach(() => render(<ListTodos todo={todoTest} />));

afterEach(cleanup);

describe('ListTodos component', () => {
  it('Should render items container correctly', () => {
    const itemContainer = screen.getByTestId('itemContainer');
    expect(itemContainer).toBeInTheDocument();
  });

  it('Should render delete button correctly', () => {
    const deleteBtn = screen.getByTestId('deleteButton');

    expect(deleteBtn).toBeInTheDocument();
  });

  it('Should render edit button correctly', () => {
    const editBtn = screen.getByTestId('editButton');

    expect(editBtn).toBeInTheDocument();
  });

  it('Should render checkbox correctly', () => {
    const checkbox = screen.getByTestId('completedCheckbox');

    expect(checkbox).toBeInTheDocument();
  });

  it('Should render an edit todo input after clicking on edit button', () => {
    const editBtn = screen.getByTestId('editButton');
    fireEvent.click(editBtn);

    const editTodoInput = screen.getByTestId('editTodoInput');

    expect(editTodoInput).toBeInTheDocument();
  });

  it('Should change edit todo input value', () => {
    const editBtn = screen.getByTestId('editButton');
    fireEvent.click(editBtn);

    const editTodoInput = screen.getByTestId('editTodoInput');
    fireEvent.change(editTodoInput, { target: { value: 'test' } });
    expect(editTodoInput.value).toBe('test');
  });

  it('Should render confirm edit button after clicking on edit button', () => {
    const editBtn = screen.getByTestId('editButton');
    fireEvent.click(editBtn);

    const confirmEditButton = screen.getByTestId('confirmEditButton');

    expect(confirmEditButton).toBeInTheDocument();
  });

  it('Should render cancel edit button after clicking on edit button', () => {
    const editBtn = screen.getByTestId('editButton');
    fireEvent.click(editBtn);

    const cancelEditButton = screen.getByTestId('cancelEditButton');

    expect(cancelEditButton).toBeInTheDocument();
  });
});
