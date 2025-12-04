import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import Card from '../ui/Card';

/**
 * TestimonialCard - Single testimonial card with scroll animation
 * Animates in when it enters viewport
 * 
 * @param {Object} props
 * @param {string} props.name - Client name
 * @param {string} props.quote - Client testimonial
 * @param {string} props.response - Codedale's response
 * @param {number} props.index - Card position (for stagger effect)
 */
const TestimonialCard = ({ name, quote, response, index }) => {
  
  // Create a ref to track this element in the DOM
  const ref = useRef(null);
  
  // Check if element is in viewport
  // once: true = only animate once (don't re-animate on scroll up)
  // margin: "-100px" = trigger when element is 100px before entering viewport
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref} // Attach ref to track viewport position
      
      // Initial state: invisible and 60px below final position
      initial={{ opacity: 0, y: 60 }}
      
      // Animate only when in viewport
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
      
      // Each card delayed by index * 0.1 seconds (stagger effect)
      // Card 1: 0s delay
      // Card 2: 0.1s delay
      // Card 3: 0.2s delay, etc.
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: "easeOut" 
      }}
    >
      <Card className="p-8 max-w-3xl mx-auto">
        
        {/* Client Quote */}
        <p className="text-codedale-navy font-satoshi text-xl md:text-2xl leading-relaxed mb-6">
          &ldquo;{quote}&rdquo;
        </p>

        {/* Codedale's Response */}
        <p className="text-codedale-blue font-inter text-sm md:text-base italic mb-4">
          {response}
        </p>

        {/* Client Name */}
        <h4 className="text-codedale-black font-satoshi font-semibold text-lg">
          {name}
        </h4>
      </Card>
    </motion.div>
  );
};

export default TestimonialCard;
