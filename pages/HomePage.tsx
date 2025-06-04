
import React from 'react';
import { Link } from 'react-router-dom';
import SectionContainer from '../components/SectionContainer';
import ServiceCard from '../components/ServiceCard';
import { SERVICES_DATA, COMPANY_TAGLINE, HERO_IMAGE_URL } from '../constants';
import { Service } from '../types';

// Hero Section Component
const HeroSection: React.FC = () => {
  return (
    <div 
      className="relative text-white min-h-[calc(80vh-5rem)] sm:min-h-[calc(100vh-5rem)] flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url('${HERO_IMAGE_URL}')` }}
      role="banner"
      aria-labelledby="hero-title"
    >
      <div className="absolute inset-0 bg-black/60"></div> {/* Dark overlay for better text readability */}
      
      <div className="relative z-10 text-center p-4">
        {/* Content can be added here if needed, but main focus is the image and header */}
        {/* For example, a very subtle tagline or welcome message */}
         <h1 id="hero-title" className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            <span className="block text-white">Amigo <span className="text-cyan-400">Vastukalp</span></span>
          </h1>
          <p className="text-xl sm:text-2xl text-slate-300">{COMPANY_TAGLINE}</p>
      </div>
    </div>
  );
};

// Services Section Component
const ServicesSection: React.FC = () => {
  return (
    <SectionContainer id="services" className="bg-slate-900">
      <div className="text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-white">Our <span className="text-cyan-400">Services</span></h2>
        <p className="mt-4 text-lg text-slate-300 max-w-2xl mx-auto">
          Comprehensive solutions for all your interior and civil contracting needs. We are dedicated to quality and client satisfaction.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES_DATA.map((service: Service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </SectionContainer>
  );
};


const HomePage: React.FC = () => {
  return (
    <>
      <HeroSection />
      <ServicesSection />
       {/* Call To Action Section */}
      <SectionContainer className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
          <p className="text-lg mb-8 max-w-xl mx-auto">
            Let Amigo Vastukalp turn your vision into reality. We are friendly to our customers and committed to excellence.
          </p>
          <Link
            to="/contact"
            className="bg-white text-cyan-600 font-semibold py-3 px-10 rounded-lg shadow-md hover:bg-slate-100 transition-colors duration-300 text-xl"
            aria-label="Contact us today to start your project"
          >
            Contact Us Today
          </Link>
        </div>
      </SectionContainer>
    </>
  );
};

export default HomePage;
