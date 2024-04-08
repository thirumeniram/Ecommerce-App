


"use client"

import React from 'react';
import Navbar1 from './Navbar1';
import Navbar2 from './Navbar2';
import { useSelector } from 'react-redux';

const Nav = () => {
  const navbarVariant = useSelector((state) => state.display.navBarVariant);
  console.log(navbarVariant)

  // Conditional component selection based on navbarVariant
  const NavbarComponent = navbarVariant === 'NavBar1' ? Navbar1 : Navbar2;

  return (
    <NavbarComponent />
  );
};

export default Nav;


