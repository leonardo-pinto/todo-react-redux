import React from 'react';
import { FcTodoList } from 'react-icons/fc';

function Header() {
  return (
    <header>
      <FcTodoList data-testid="logo" />
      <h1 data-testid="title">
        Todo do List
      </h1>
    </header>
  );
}

export default Header;
