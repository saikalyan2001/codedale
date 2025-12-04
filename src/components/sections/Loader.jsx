import { motion } from 'framer-motion';

/**
 * Loader component - Initial loading screen
 * Shows "Loading CodeDale..." with pulsing animation
 * Fades out after 2 seconds
 * 
 * @param {Object} props
 * @param {Function} props.onComplete - Callback when loading finishes
 */
const Loader = ({ onComplete }) => {
  return (
    <motion.div
      className="fixed inset-0 bg-codedale-navy flex items-center justify-center z-50"
      
      // Initial state: fully visible
      initial={{ opacity: 1 }}
      
      // Animate to: invisible
      animate={{ opacity: 0 }}
      
      // After 2 seconds, fade out over 0.5 seconds
      transition={{ delay: 2, duration: 0.5 }}
      
      // When animation completes, call onComplete function
      onAnimationComplete={onComplete}
    >
      <motion.p
        className="text-white font-satoshi text-2xl md:text-3xl"
        
        // Pulse effect: opacity goes 0.5 → 1 → 0.5
        animate={{ opacity: [0.5, 1, 0.5] }}
        
        // Repeat infinitely, 1.5 seconds per cycle
        transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
      >
        Loading CodeDale...
      </motion.p>
    </motion.div>
  );
};

export default Loader;
