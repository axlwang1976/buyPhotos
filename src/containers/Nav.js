import React from 'react';
import NavItems from '../components/NavItems';
import styles from '../sass/containers/Nav.module.scss';

const Nav = props => {
  return (
    <nav className={styles.nav}>
      <NavItems
        cartCount={props.cartCount}
        onSignInClicked={props.onSignInClicked}
      />
    </nav>
  );
};

export default Nav;
