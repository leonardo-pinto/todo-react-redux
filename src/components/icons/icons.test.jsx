import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TodoIcon, AddIcon } from './icons';

describe('Icons function', () => {
  it('Todolist Logo must render without erros', () => {
    render(<TodoIcon />);
    const logo = screen.getByTestId('logo');
    expect(logo).toBeInTheDocument();
  });

  it('AddIcon must render without erros', () => {
    render(<AddIcon />);
    const addIcon = screen.getByTestId('addIcon');
    expect(addIcon).toBeInTheDocument();
  });
});
