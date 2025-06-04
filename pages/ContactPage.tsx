
import React from 'react';
import SectionContainer from '../components/SectionContainer';
import { CONTACT_PERSON_NAME, CONTACT_EMAIL, CONTACT_PHONE, CONTACT_ADDRESS } from '../constants';

const ContactPage: React.FC = () => {
  return (
    <SectionContainer>
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white">Get In <span className="text-cyan-400">Touch</span></h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          We're here to help! Contact us for inquiries, quotes, or to discuss your next project using the details below.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="w-full max-w-lg bg-slate-800 p-8 rounded-lg shadow-xl space-y-8">
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-1">Contact Person</h3>
            <p className="text-xl text-white">{CONTACT_PERSON_NAME}</p>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-4">Our Office & Contact</h3>
            <address className="not-italic text-slate-300 space-y-4">
              <p className="flex items-start">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mr-3 mt-1 text-cyan-400 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>{CONTACT_ADDRESS}</span>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href={`mailto:${CONTACT_EMAIL}`} className="hover:text-cyan-300 transition-colors">{CONTACT_EMAIL}</a>
              </p>
              <p className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-3 text-cyan-400 flex-shrink-0">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href={`tel:${CONTACT_PHONE.replace(/\s/g, '')}`} className="hover:text-cyan-300 transition-colors">{CONTACT_PHONE}</a>
              </p>
            </address>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-cyan-400 mb-3">Business Hours</h3>
            <p className="text-slate-300">Monday - Saturday: 9:00 AM - 6:00 PM</p>
            <p className="text-slate-300">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
};

export default ContactPage;
