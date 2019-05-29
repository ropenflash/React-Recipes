import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const HeaderLink = ({ children, ...props }) => (
  <NavLink
    className="p1 mx2 black rounded text-decoration-none "
    activeClassName="bg-white"
    {...props}
  >
    {' '}
    {children}
  </NavLink>
);

const Header = () => (
  <header className="flex items-center justify-between px4">
    <h1 className="h1">
      <span role="img">🍔</span>
      MyRecipes
    </h1>
    <nav>
      <HeaderLink exact to="/">
        Home
      </HeaderLink>
      <HeaderLink exact to="/Favorites">
        Favorites
      </HeaderLink>
    </nav>
  </header>
);

HeaderLink.propTypes = {
  children: PropTypes.node,
};

export default Header;
