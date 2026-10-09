import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { Button } from '../ui/Button';
import { Container } from '../ui/Container';
import { Check, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';import { ImageWithFallback } from '../ui/ImageWithFallback';
import { travelImages } from '../../data/images';

export const Hero = () => {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    },
  };

  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax-like subtle animation */}
      <motion.div 
        initial={{ scale: 1.05, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute inset-0 z-0"
      >
        <ImageWithFallback 
          src={travelImages.hero} 
          alt="Coastal Andhra Landscape" 
          className="w-full h-full object-cover object-center"
        />
        {/* Dark Gradient Overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-transparent to-primary/40"></div>
      </motion.div>

      <Container className="relative z-10 w-full pt-48 pb-32 md:pt-64 md:pb-40">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl text-left"
        >
          {/* Eyebrow */}
          <motion.div 
            variants={itemVariants}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-8 h-px bg-accent"></span>
            <p className="text-accent font-semibold tracking-[0.3em] uppercase text-xs md:text-sm">
              Travel • Explore • Experience
            </p>
          </motion.div>

          {/* Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-white leading-[1.1] mb-6"
          >
            Explore Andhra.<br />
            <span className="text-background/90">Travel With Confidence.</span>
          </motion.h1>

          {/* Paragraph */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl text-background/80 leading-relaxed mb-10 max-w-2xl font-light"
          >
            Curated journeys, verified stays, reliable transportation and seamless travel planning across Andhra Pradesh and beyond.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 mb-16"
          >
            <Button variant="primary" className="w-full sm:w-auto text-base md:text-lg px-8 py-4 shadow-lg shadow-primary/20">
              Explore Packages
            </Button>
            <Link to="/travel-planning" className="w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto text-base md:text-lg px-8 py-4 border-background text-background hover:bg-background hover:text-primary transition-colors">
                Plan My Trip
              </Button>
            </Link>
          </motion.div>

          {/* Trust Row */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-background/80 text-sm font-medium"
          >
            <div className="flex items-center gap-2">
              <div className="bg-accent/20 rounded-full p-1">
                <Check className="w-4 h-4 text-accent" />
              </div>
              <span>Verified Partners</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-accent/20 rounded-full p-1">
                <Check className="w-4 h-4 text-accent" />
              </div>
              <span>Clear Pricing</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="bg-accent/20 rounded-full p-1">
                <Check className="w-4 h-4 text-accent" />
              </div>
              <span>Booking Support</span>
            </div>
          </motion.div>
        </motion.div>
      </Container>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <span className="text-background/60 text-[10px] sm:text-xs tracking-[0.2em] uppercase font-medium">Discover your next journey</span>
        <motion.div 
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-accent/80" />
        </motion.div>
      </motion.div>
    </section>
  );
};
