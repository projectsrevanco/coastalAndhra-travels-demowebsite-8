import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { travelImages } from '../../data/images';

const trustPoints = [
  {
    title: 'Verified Partners',
    description: 'Carefully selected hotels and travel operators.'
  },
  {
    title: 'Transparent Pricing',
    description: 'Know what your package includes before you book.'
  },
  {
    title: 'Confirmed Bookings',
    description: 'Receive clear booking confirmation and trip details.'
  },
  {
    title: 'Flexible Policies',
    description: 'Clear cancellation and refund information.'
  },
  {
    title: 'Travel Support',
    description: 'Get assistance before and during your journey.'
  }
];

export const Trust = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100 overflow-hidden">
      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:items-center">
          
          {/* Left: Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-1/2 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] lg:h-[700px] border border-gray-100/50">
              <ImageWithFallback 
                src={travelImages.fallback} 
                alt="Traveller looking at a beautiful landscape" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/10 to-transparent"></div>
              
              {/* Verification Info Box floating on image */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-md rounded-xl p-5 md:p-6 shadow-xl border border-white/50"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-surface rounded-full flex items-center justify-center shrink-0">
                    <ShieldCheck className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <h4 className="font-serif font-bold text-primary text-lg md:text-xl leading-tight mb-1">
                      Verified travel partners
                    </h4>
                    <p className="text-gray-500 text-sm font-medium">Clear booking information</p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Background decorative blob/pattern */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-accent/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -z-10"></div>
          </motion.div>
          
          {/* Right: Content Side */}
          <div className="w-full lg:w-1/2 lg:pl-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-6">
                Travel With Confidence
              </h2>
              <p className="text-gray-600 text-lg md:text-xl mb-12 max-w-lg leading-relaxed font-light">
                Clear information, verified partners and dependable support at every step of your journey.
              </p>
            </motion.div>
            
            <div className="space-y-8">
              {trustPoints.map((point, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-5 group"
                >
                  <div className="shrink-0 mt-1">
                    <CheckCircle2 className="w-6 h-6 text-accent transition-transform group-hover:scale-110" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-primary mb-1.5 transition-colors group-hover:text-secondary">{point.title}</h3>
                    <p className="text-gray-600">{point.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-14 pt-8 border-t border-gray-100"
            >
              <Link to="/travel-planning" className="inline-flex items-center gap-2 text-primary font-bold text-lg hover:text-accent transition-colors group">
                How We Plan Your Trip 
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" />
              </Link>
            </motion.div>
          </div>
          
        </div>
      </Container>
    </section>
  );
};
