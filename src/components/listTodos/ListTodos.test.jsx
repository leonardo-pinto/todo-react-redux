import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import ListTodos from './ListTodos';

describe('ListTodos component', () => {
  it('Should render item component correctly', () => {
    const onClickMock = jest.fn();
    render(
      <Provider store={store}>
        <ListTodos todo="test" handleDeleteButtonClick={onClickMock} />
      </Provider>,
    );

    const itemContainer = screen.getByTestId('itemContainer');
    expect(itemContainer).toBeInTheDocument();
  });

  it('Should render items correctly', () => {
    const onClickMock = jest.fn();
    render(
      <Provider store={store}>
        <ListTodos todo="test" handleDeleteButtonClick={onClickMock} />
      </Provider>,
    );
    const itemTodo = screen.getByTestId('itemTodo');
    expect(itemTodo).toBeInTheDocument();
  });

  it('calls "onClick" on button click', () => {
    const onClickMock = jest.fn();
    render(
      <Provider store={store}>
        <ListTodos todo="test" handleDeleteButtonClick={onClickMock} />
      </Provider>,
    );
    const deleteBtn = screen.getByTestId('deleteButton');

    fireEvent.click(deleteBtn);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
