import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import * as styles from './Layout.styles.js';

/**
 *
 * @returns an outlet for the router dom
 */
function Layout() {
  return (
    <styles.Container>
      <Header />
      <Outlet />
      <Footer />
    </styles.Container>
  );
}

export default Layout;
