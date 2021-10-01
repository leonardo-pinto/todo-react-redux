import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header component', () => {
  beforeEach(() => {
    render(<Header />);
  });

  it('Title must render without erros', () => {
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
  });

  it('Logo must render without erros', () => {
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });
});
