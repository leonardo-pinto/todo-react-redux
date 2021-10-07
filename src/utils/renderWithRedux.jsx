/* eslint-disable react/prop-types */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import todoReducer from '../redux/reducers/todoReducer';

// this function was adapted from redux documentation
// source: https://redux.js.org/usage/writing-tests

function render(
  ui,
  {
    preloadedState,
    store = configureStore({ reducer: { todoReducer }, preloadedState }),
    ...renderOptions
  } = {},
) {
  function Wrapper({ children }) {
    return (
      <Provider store={store}>
        {children}
      </Provider>
    );
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
}

// re-export everything
export * from '@testing-library/react';
// override render method
export { render };
