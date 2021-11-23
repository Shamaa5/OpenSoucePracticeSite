import Navigate from './Navigate/Navigate';
import React from 'react';
import Logo from './Logo/index';

function HeaderContainer() {
  return (
    <header>
      <Logo />
      <Navigate />
    </header>
  );
}

export default HeaderContainer;
