import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

describe('Header component', () => {
  it('Title must render without erros', () => {
    render(<Header />);
    const title = screen.getByTestId('title');
    expect(title).toBeInTheDocument();
  });
});
