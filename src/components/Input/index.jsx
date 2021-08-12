import React from 'react';
import './styles.scss';

const Input = ({ value, onChange, label, placeholder, autofocus, error, limit }) => {
  const classes = `${error ? 'invalid' : ''} ${label ? 'mt-2' : ''}`;
  return (
    <div className="input">
      <div className="label">
        <label className={error ? 'invalid' : ''}>{label}</label>
        {limit ? (
          <p className={error ? 'invalid' : ''}>
            {value.length}/{limit}
          </p>
        ) : null}
      </div>
      <input
        className={classes}
        placeholder={placeholder}
        type="text"
        autoFocus={autofocus}
        value={value}
        onChange={onChange}
      />
      {error ? <p className="error">{error}</p> : null}
    </div>
  );
};

export default Input;
