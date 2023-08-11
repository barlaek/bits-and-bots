import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as styled from './Return.styles.js';

/**
 * Breadcrumb component that
 * @returns back button
 */
function Return() {
  /**
   * Initializes navigation
   */
  const history = useNavigate();

  return <styled.Return onClick={() => history(-1)}>Back</styled.Return>;
}

export default Return;
