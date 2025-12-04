/**
 * Card component - reusable card with shadow and rounded corners
 * Used for testimonials and other content blocks
 * 
 * @param {Object} props
 * @param {React.ReactNode} props.children - Card content
 * @param {string} props.className - Additional classes
 */
const Card = ({ children, className = '' }) => {
  return (
    <div className={`
      bg-white 
      rounded-2xl 
      shadow-lg 
      hover:shadow-xl 
      transition-shadow 
      duration-300
      ${className}
    `}>
      {children}
    </div>
  );
};

export default Card;
