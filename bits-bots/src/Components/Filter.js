import React, { useState } from 'react';
import * as styled from './Filter.styles.js';

/**
 * @param {array} props of objects that
 * @returns a button that filters through the array
 */
const Filter = (props) => {
  /**
   * Initializes the state of the box
   */
  const [open, setOpen] = useState(false);

  /**
   * Opens and closes the box
   */
  const toggle = () => {
    setOpen(!open);
  };

  return (
    <styled.Container>
      <styled.Filter onClick={toggle}>{props.label}</styled.Filter>
      {open && <div>{props.children}</div>}
    </styled.Container>
  );
};

export default Filter;
