
import React from 'react';
import { ABOUT_COMPANY_SHORT, COMPANY_MOTTO, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS, NAV_LINKS } from '../constants';
import { Link } from 'react-router-dom';


const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Amigo Vastukalp</h3>
            <p className="text-sm mb-2">{COMPANY_MOTTO}</p>
            <p className="text-sm">{ABOUT_COMPANY_SHORT}</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {NAV_LINKS.map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="hover:text-cyan-300 transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-cyan-400 mb-4">Contact Info</h3>
            <address className="text-sm not-italic space-y-2">
              <p>{CONTACT_ADDRESS}</p>
              <p>Email: <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-cyan-300 transition-colors">{CONTACT_EMAIL}</a></p>
              <p>Phone: <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-cyan-300 transition-colors">{CONTACT_PHONE}</a></p>
            </address>
          </div>
        </div>
        <div className="mt-12 border-t border-slate-700 pt-8 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} Amigo Vastukalp. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
