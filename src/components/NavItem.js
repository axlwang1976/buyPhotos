import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = props => {
  return (
    <li>
      <a href={props.link}>{props.itemName}</a>
      {/* <NavLink to={props.link}>{props.itemName}</NavLink> */}
    </li>
  );
};

export default NavItem;
