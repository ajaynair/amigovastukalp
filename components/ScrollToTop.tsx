
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScrollToTop = () => {
      window.scrollTo(0, 0);
    };

    // Use requestAnimationFrame to ensure scrolling happens after paint
    requestAnimationFrame(handleScrollToTop);
    
  }, [pathname]);

  return null; // This component does not render anything
};

export default ScrollToTop;
