import React, { useState } from 'react';

import { useHistory } from 'react-router-dom';

import './styles.scss';
import iconSearch from '../../assets/icons/icon-search.svg';
import iconClear from '../../assets/icons/icon-close-white.svg';

import Input from '../Input';
import Button from '../Button';

function SearchBar() {
  const [value, setValue] = useState('');
  const history = useHistory();
  const url = new URL(window.location.href);
  const changeValue = (e) => {
    setValue(e.target.value);
  };

  const clearHistory = () => {
    setValue('');
    history.replace('');
  };

  const setUrlValue = (e) => {
    e.preventDefault();
    if (value) {
      const setUrlValue = url.searchParams.set('search', value);
      history.replace(url.search.replace(setUrlValue));
    } else {
      clearHistory();
    }
  };
  return (
    <form className="search-bar" onSubmit={setUrlValue}>
      <Input onChange={changeValue} value={value} placeholder="Search..." />
      <Button icon={iconSearch} type="submit" variant="link" />
      <Button icon={iconClear} type="button" onClick={clearHistory} variant="link button-clear" />
    </form>
  );
}

export default SearchBar;
