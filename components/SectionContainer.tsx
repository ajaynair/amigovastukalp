
import React from 'react';

interface SectionContainerProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

const SectionContainer: React.FC<SectionContainerProps> = ({ children, className = '', id }) => {
  return (
    <section id={id} className={`py-16 sm:py-20 ${className}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
};

export default SectionContainer;
