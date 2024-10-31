import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gradient-to-br from-[#2d718fac] to-[#5692cb] p-1.5 justify-end" >
      <div className="container mx-auto flex items-center justify-end">
        <div className="flex space-x-3 justify-end">
        <NavLink 
            to="/" 
            className={({ isActive }) => 
              isActive ? 'text-gray-300' : 'text-white hover:text-gray-300'
            }
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className={({ isActive }) => 
              isActive ? 'text-grey-300' : 'text-white hover:text-gray-300'
            }
          >
            About
          </NavLink>
          <NavLink 
            to="/contact" 
            className={({ isActive }) => 
              isActive ? 'text-gray-300' : 'text-white hover:text-gray-300'
            }
          >
            Contact
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
