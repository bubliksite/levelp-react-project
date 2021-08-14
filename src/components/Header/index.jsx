import React from 'react';
import './styles.scss';
import SearchBar from '../SearchBar';

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <SearchBar />
      </div>
    </header>
  );
}

export default Header;
