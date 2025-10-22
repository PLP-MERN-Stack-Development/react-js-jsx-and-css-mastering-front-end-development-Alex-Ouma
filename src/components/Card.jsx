import React from 'react';

/**
 * Card component for displaying content in a boxed layout
 * @param {Object} props - Component props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional CSS classes
 * @param {boolean} props.hover - Whether to show hover effects
 * @param {boolean} props.shadow - Whether to show shadow
 * @returns {JSX.Element} - Card component
 */
const Card = ({ 
  children, 
  className = '', 
  hover = false, 
  shadow = true,
  ...rest 
}) => {
  const baseClasses = 'bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700';
  const shadowClasses = shadow ? 'shadow-md' : '';
  const hoverClasses = hover ? 'hover:shadow-lg transition-shadow duration-200' : '';
  
  const cardClasses = `${baseClasses} ${shadowClasses} ${hoverClasses} ${className}`;
  
  return (
    <div className={cardClasses} {...rest}>
      {children}
    </div>
  );
};

// PropTypes removed for simplicity

export default Card;
