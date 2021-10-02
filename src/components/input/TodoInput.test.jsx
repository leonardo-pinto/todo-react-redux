import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import TodoInput from './TodoInput';

describe('TodoInput component', () => {
  it('container renders correctly', () => {
    const onClickMock = jest.fn();
    render(
      <Provider store={store}>
        <TodoInput handleAddButtonClick={onClickMock} />
      </Provider>,
    );
    const container = screen.getByTestId('inputContainer');
    expect(container).toBeInTheDocument();
  });

  it('input element renders correctly', () => {
    const onClickMock = jest.fn();
    render(
      <Provider store={store}>
        <TodoInput handleAddButtonClick={onClickMock} />
      </Provider>,
    );
    const input = screen.getByTestId('todoInput');
    expect(input).toBeInTheDocument();
  });

  it('add todo button renders correctly', () => {
    const onClickMock = jest.fn();
    render(
      <Provider store={store}>
        <TodoInput handleAddButtonClick={onClickMock} />
      </Provider>,
    );
    const addBtn = screen.getByTestId('addButton');
    expect(addBtn).toBeInTheDocument();
  });

  it('changes input element value', () => {
    const onClickMock = jest.fn();
    render(
      <Provider store={store}>
        <TodoInput handleAddButtonClick={onClickMock} />
      </Provider>,
    );
    const input = screen.getByTestId('todoInput');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });

  it('calls "onClick" on button click', () => {
    const onClickMock = jest.fn();
    render(
      <Provider store={store}>
        <TodoInput handleAddButtonClick={onClickMock} />
      </Provider>,
    );
    const addBtn = screen.getByTestId('addButton');

    fireEvent.click(addBtn);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
