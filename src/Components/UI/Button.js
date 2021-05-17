import React from 'react';

import classes from './Button.module.css';

const Button = (props) => {

  const propsClass = props.className;

  return (
    <button
      className={`${classes.button} ${propsClass === 'selected' && classes.selected}`}
      type={props.type || 'button'}
      onClick={props.onClick}
      value={props.value}
    >
      {props.children}
    </button>
  );
};

export default Button;
