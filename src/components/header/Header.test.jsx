import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import store from '../../redux/store';
import Header from './Header';

beforeEach(() => {
  render(
    <Provider store={store}>
      <Header />
    </Provider>,
  );
});

afterEach(cleanup);

describe('Header component', () => {
  it('renders the logo without errors', () => {
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });

  it('renders the title without erros', () => {
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
  });
});
