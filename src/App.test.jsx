import React from 'react';
import { screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { render } from './utils/renderWithRedux';
import App from './App';

const preloadedState = {
  todoReducer: {
    todos:
     [
       {
         id: 0,
         completed:
         false,
         text: 'text',
       }],
  },
};

describe('App component', () => {
  it('should render the app container correctly', () => {
    render(<App />);
    const appContainer = screen.getByTestId('appContainer');
    expect(appContainer).toBeInTheDocument();
  });

  it('renders text "No todos" if the initial state is empty', () => {
    render(<App />);
    const noTodos = screen.getByText(/To Do list is empty/);
    expect(noTodos).toBeInTheDocument();
  });

  it('should not accept an empty to do', () => {
    render(<App />);
    const todoInput = screen.getByTestId('todoInput');
    fireEvent.change(todoInput, { target: { value: '' } });

    const addButton = screen.getByTestId('addButton');
    fireEvent.click(addButton);

    const noTodos = screen.getByText(/To Do list is empty/);
    expect(noTodos).toBeInTheDocument();
  });

  it('should render todos container if a todo is add', () => {
    render(<App />);

    const todoInput = screen.getByTestId('todoInput');
    fireEvent.change(todoInput, { target: { value: 'test' } });
    const addButton = screen.getByTestId('addButton');
    fireEvent.click(addButton);

    const todosContainer = screen.getByTestId('todosContainer');

    expect(todosContainer).toBeInTheDocument();
  });

  it('should delete todo after clicking on delete button', () => {
    render(<App />, { preloadedState });

    const todoText = screen.getByText(/text/);

    expect(todoText).toBeInTheDocument();

    const deleteBtn = screen.getByTestId('deleteButton');
    fireEvent.click(deleteBtn);

    expect(todoText).not.toBeInTheDocument();
  });

  it('should edit todos after clicking on the confirm edit button', () => {
    render(<App />, { preloadedState });

    const todoText = screen.getByText(/text/);
    expect(todoText).toBeInTheDocument();

    const editBtn = screen.getByTestId('editButton');
    fireEvent.click(editBtn);

    const editTodoInput = screen.getByTestId('editTodoInput');
    fireEvent.change(editTodoInput, { target: { value: 'edited text' } });

    const confirmEditButton = screen.getByTestId('confirmEditButton');
    fireEvent.click(confirmEditButton);

    const editedTodoText = screen.getByText(/edited text/);
    expect(editedTodoText).toBeInTheDocument();
  });

  it('Should change todo checked value value after clicking on checkbox', () => {
    render(<App />, { preloadedState });

    const checkbox = screen.getByTestId('completedCheckbox');
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });

  it('Should not edit todo after clicking on cancel edit button', () => {
    render(<App />, { preloadedState });

    const editBtn = screen.getByTestId('editButton');
    fireEvent.click(editBtn);

    const editTodoInput = screen.getByTestId('editTodoInput');
    fireEvent.change(editTodoInput, { target: { value: 'edited text' } });

    const cancelEditButton = screen.getByTestId('cancelEditButton');
    fireEvent.click(cancelEditButton);

    const editedTodo = screen.getByText(/text/);
    expect(editedTodo).toBeInTheDocument();
  });
});
