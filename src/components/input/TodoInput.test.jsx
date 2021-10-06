import React from 'react';
import {
  render, screen, fireEvent, cleanup,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import TodoInput from './TodoInput';

beforeEach(() => {
  render(
    <Provider store={store}>
      <TodoInput />
    </Provider>,
  );
});

afterEach(cleanup);

describe('TodoInput component', () => {
  it('container renders correctly', () => {
    const container = screen.getByTestId('inputContainer');
    expect(container).toBeInTheDocument();
  });

  it('input element renders correctly', () => {
    const input = screen.getByTestId('todoInput');
    expect(input).toBeInTheDocument();
  });

  it('add todo button renders correctly', () => {
    const addBtn = screen.getByTestId('addButton');
    expect(addBtn).toBeInTheDocument();
  });

  it('changes input element value', () => {
    const input = screen.getByTestId('todoInput');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(input.value).toBe('test');
  });
});
