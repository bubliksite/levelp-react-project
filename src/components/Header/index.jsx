import React from 'react';
import './styles.scss';
import Input from '../Input';
import Button from '../Button';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__search-bar">
          <Input placeholder="Search..." />
          <Button variant="light" title="Search" />
        </div>
      </div>
    </header>
  );
}

export default Header;
