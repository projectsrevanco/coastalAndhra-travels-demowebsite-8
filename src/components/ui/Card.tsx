import React from 'react';
import { motion } from 'framer-motion';

export const Card = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className={`bg-white rounded-md overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 ${className}`}
    >
      {children}
    </motion.div>
  );
};
