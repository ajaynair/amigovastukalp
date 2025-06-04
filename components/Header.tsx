
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { NavLinkItem } from '../types';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0">
            <h1 className="text-2xl sm:text-3xl font-bold">
              <span className="text-white">Amigo</span>
              <span className="text-cyan-400">Vastukalp</span>
            </h1>
            <p className="text-xs text-cyan-300 tracking-wider hidden sm:block">Friendly To Customer</p>
          </Link>
          
          <nav className="flex space-x-2 sm:space-x-4">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-2 py-2 sm:px-3 rounded-md text-xs sm:text-sm font-medium transition-colors duration-300 ease-in-out whitespace-nowrap
                  ${isActive ? 'bg-cyan-500 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
