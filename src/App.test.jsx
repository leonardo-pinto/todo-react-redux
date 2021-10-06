import React from 'react';
import {
  render,
  screen,
  cleanup,
  fireEvent,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './redux/reducers/todoReducer';
// import store from './redux/store';
import App from './App';

beforeEach(() => {
  const store = configureStore({
    reducer: {
      todoReducer,
    },
  });
  render(
    <Provider store={store}>
      <App />
    </Provider>,
  );
});

afterEach(cleanup);

describe('App component', () => {
  it('renders without errors', () => {
    const appContainer = screen.getByTestId('appContainer');
    expect(appContainer).toBeInTheDocument();
  });

  it('renders text "No todos" if the initial state is empty', () => {
    const noTodos = screen.getByText('No todos');
    expect(noTodos).toBeInTheDocument();
  });

  it('if a todo is added must render todos container', () => {
    const todosInput = screen.getByTestId('todoInput');
    fireEvent.change(todosInput, { target: { value: 'test' } });
    const addButton = screen.getByTestId('addButton');
    fireEvent.click(addButton);

    const todosContainer = screen.getByTestId('todosContainer');
    expect(todosContainer).toBeInTheDocument();
  });

  it('should delete todo after clicking on delete button', () => {
    const todosInput = screen.getByTestId('todoInput');
    fireEvent.change(todosInput, { target: { value: 'test' } });
    const addButton = screen.getByTestId('addButton');
    fireEvent.click(addButton);

    const todoText = screen.getByText(/test/);

    expect(todoText).toBeInTheDocument();

    const deleteBtn = screen.getByTestId('deleteButton');
    fireEvent.click(deleteBtn);

    expect(todoText).not.toBeInTheDocument();
  });

  it('Should edit todo after clicking on confirm edit button', () => {
    const todosInput = screen.getByTestId('todoInput');
    fireEvent.change(todosInput, { target: { value: 'test' } });

    const addButton = screen.getByTestId('addButton');
    fireEvent.click(addButton);

    const editBtn = screen.getByTestId('editButton');
    fireEvent.click(editBtn);

    const editTodoInput = screen.getByTestId('editTodoInput');
    fireEvent.change(editTodoInput, { target: { value: 'edited test' } });

    const confirmEditButton = screen.getByTestId('confirmEditButton');
    fireEvent.click(confirmEditButton);

    const editedTodo = screen.getByText(/edited test/);
    expect(editedTodo).toBeInTheDocument();
  });

  it('Should not edit todo after clicking on cancel edit button', () => {
    const todosInput = screen.getByTestId('todoInput');
    fireEvent.change(todosInput, { target: { value: 'test' } });
    const addButton = screen.getByTestId('addButton');
    fireEvent.click(addButton);

    const editBtn = screen.getByTestId('editButton');
    fireEvent.click(editBtn);

    const editTodoInput = screen.getByTestId('editTodoInput');
    fireEvent.change(editTodoInput, { target: { value: 'edited test' } });

    const cancelEditButton = screen.getByTestId('cancelEditButton');
    fireEvent.click(cancelEditButton);

    const editedTodo = screen.getByText(/test/);
    expect(editedTodo).toBeInTheDocument();
  });

  it('Should change todo checked value value after clicking on checkbox', () => {
    const todosInput = screen.getByTestId('todoInput');
    fireEvent.change(todosInput, { target: { value: 'test' } });
    const addButton = screen.getByTestId('addButton');
    fireEvent.click(addButton);

    const checkbox = screen.getByTestId('completedCheckbox');
    expect(checkbox.checked).toBe(false);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toBe(true);
  });
});
