import React from 'react';

/**
 * Container component - wraps content with max-width and padding
 * This ensures consistent spacing across all sections
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Content to wrap
 * @param {string} props.className - Additional Tailwind classes
 */
const Container = ({ children, className = '' }) => {
  return (
    <div className={`max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 ${className}`}>
      {children}
    </div>
  );
};

export default Container;
