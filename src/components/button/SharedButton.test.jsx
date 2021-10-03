import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
// import { Provider } from 'react-redux';
// import store from '../../redux/store';
import SharedButton from './SharedButton';

describe('SharedButton component', () => {
  describe('Renders button correctly according to the buttonId', () => {
    it('Renders a delete button if passed deleteButton as buttonId', () => {
      render(
        <SharedButton buttonId="deleteButton" />,
      );

      const deleteBtn = screen.getByTestId('deleteButton');
      expect(deleteBtn).toBeInTheDocument();
    });

    it('Renders a edit button if passed editButton as buttonId', () => {
      render(
        <SharedButton buttonId="editButton" />,
      );

      const editBtn = screen.getByTestId('editButton');
      expect(editBtn).toBeInTheDocument();
    });

    it('Renders a confirm edit button if passed confirmEditButton as buttonId', () => {
      render(
        <SharedButton buttonId="confirmEditButton" />,
      );

      const confirmEditBtn = screen.getByTestId('confirmEditButton');
      expect(confirmEditBtn).toBeInTheDocument();
    });

    it('Renders a cancel edit button if passed cancelEditButton as buttonId', () => {
      render(
        <SharedButton buttonId="confirmEditButton" />,
      );

      const cancelEditBtn = screen.getByTestId('cancelEditButton');
      expect(cancelEditBtn).toBeInTheDocument();
    });
  });
});
