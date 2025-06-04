
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { NavLinkItem } from '../types';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-2 sm:px-6 lg:px-8"> {/* Reduced base padding */}
        <div className="flex items-center justify-between min-h-[5rem] sm:h-20"> {/* Allow vertical expansion, sm height fixed */}
          <Link to="/" className="flex-shrink-0 py-2">
            <h1 className="text-2xl sm:text-3xl font-bold">
              <span className="text-white">Amigo</span>
              <span className="text-cyan-400">Vastukalp</span>
            </h1>
            <p className="text-xs text-cyan-300 tracking-wider hidden sm:block">Friendly To Customer</p>
          </Link>
          
          {/* Apply flex-wrap and gap for better responsiveness */}
          <nav className="flex flex-wrap justify-end items-center gap-x-1 sm:gap-x-2 md:gap-x-4 gap-y-1 py-2">
            {NAV_LINKS.map((link: NavLinkItem) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `px-2 py-1 sm:px-3 sm:py-2 rounded-md text-xs sm:text-sm font-medium transition-colors duration-300 ease-in-out 
                  ${isActive ? 'bg-cyan-500 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}`
                }
              >
                {/* Removed whitespace-nowrap to allow text wrapping */}
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
