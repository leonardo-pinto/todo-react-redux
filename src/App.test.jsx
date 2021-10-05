import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './App';
import {
  addTodo, completeTodo, deleteTodo, editTodo,
} from './redux/reducers/todoReducer';

describe('App Component cycle with all todo actions', () => {
  beforeEach(() => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );
  });

  it('Should render without errors', () => {
    const appComponent = screen.getByTestId('appComponent');
    expect(appComponent).toBeInTheDocument();
  });

  it('Store is updated correctly after dispatching addTodo action', () => {
    store.dispatch(addTodo('test 1'));
    const newStore = store.getState().todoReducer.todoList;
    expect(newStore).toStrictEqual([{ id: 1, text: 'test 1', completed: false }]);
  });

  // it('Store is updated correctly after dispatching deleteTodo action', () => {
  //   store.dispatch(addTodo('test 2'));
  //   store.dispatch(addTodo('test 3'));
  //   store.dispatch(deleteTodo(2));

  //   const expectedState = [
  //     {
  //       completed: false,
  //       id: 1,
  //       text: 'test 1',
  //     },
  //     {
  //       completed: false,
  //       id: 3,
  //       text: 'test 3',
  //     },
  //   ];

  //   const newStore = store.getState().todoReducer.todoList;
  //   expect(newStore).toStrictEqual(expectedState);
  // });

  // it('Store is updated correctly after dispatching editTodo action', () => {
  //   store.dispatch(editTodo({ id: 3, text: 'edited test 3' }));
  //   const newStore = store.getState().todoReducer.todoList;

  //   const expectedState = [
  //     {
  //       completed: false,
  //       id: 1,
  //       text: 'test 1',
  //     },
  //     {
  //       completed: false,
  //       id: 3,
  //       text: 'edited test 3',
  //     },
  //   ];

  //   expect(newStore).toStrictEqual(expectedState);
  // });

  // it('Store is updated correctly after dispatching completeTodo action', () => {
  //   store.dispatch(completeTodo({ id: 1, completed: true }));
  //   const newStore = store.getState().todoReducer.todoList;

  //   const expectedState = [
  //     {
  //       completed: true,
  //       id: 1,
  //       text: 'test 1',
  //     },
  //     {
  //       completed: false,
  //       id: 3,
  //       text: 'edited test 3',
  //     },
  //   ];

  //   expect(newStore).toStrictEqual(expectedState);
  // });
});
