import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
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
  it('Should render item component correctly', () => {
    const onClickMock = jest.fn();
    render(
      <Provider store={store}>
        <ListTodos todo={todoTest} handleDeleteButtonClick={onClickMock} />
      </Provider>,
    );

    const itemContainer = screen.getByTestId('itemContainer');
    expect(itemContainer).toBeInTheDocument();
  });

  // it('Should render items correctly', () => {
  //   const onClickMock = jest.fn();
  //   render(
  //     <Provider store={store}>
  //       <ListTodos todo={todoTest} handleDeleteButtonClick={onClickMock} />
  //     </Provider>,
  //   );
  //   const itemTodo = screen.getByTestId('itemTodo');
  //   expect(itemTodo).toBeInTheDocument();
  // });

  // it('calls "onClick" on delete button click', () => {
  //   const onClickMock = jest.fn();
  //   render(
  //     <Provider store={store}>
  //       <ListTodos todo={todoTest} handleDeleteButtonClick={onClickMock} />
  //     </Provider>,
  //   );
  //   const deleteBtn = screen.getByTestId('deleteButton');

  //   fireEvent.click(deleteBtn);
  //   expect(onClickMock).toHaveBeenCalledTimes(1);
  // });

  // it('calls "onClick" on edit button click', () => {
  //   const onClickMock = jest.fn();
  //   render(
  //     <Provider store={store}>
  //       <ListTodos todo={todoTest} handleEditButtonClick={onClickMock} />
  //     </Provider>,
  //   );
  //   const editBtn = screen.getByTestId('editButton');

  //   fireEvent.click(editBtn);
  //   expect(onClickMock).toHaveBeenCalledTimes(1);
  // });
});
