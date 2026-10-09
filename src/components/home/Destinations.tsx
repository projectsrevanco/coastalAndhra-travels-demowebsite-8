import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

import { ImageWithFallback } from '../ui/ImageWithFallback';
import { travelImages } from '../../data/images';

const destinations = [
  {
    id: 'visakhapatnam',
    name: 'Visakhapatnam',
    category: 'Coastal Escape',
    image: travelImages.vizag,
    span: 'md:col-span-8'
  },
  {
    id: 'araku-valley',
    name: 'Araku Valley',
    category: 'Hill & Nature',
    image: travelImages.araku,
    span: 'md:col-span-4'
  },
  {
    id: 'vijayawada',
    name: 'Vijayawada',
    category: 'Culture & Heritage',
    image: travelImages.vijayawada,
    span: 'md:col-span-4'
  },
  {
    id: 'tirupati',
    name: 'Tirupati',
    category: 'Pilgrimage',
    image: travelImages.tirupati,
    span: 'md:col-span-8'
  },
  {
    id: 'konaseema',
    name: 'Konaseema',
    category: 'Nature & Backwaters',
    image: travelImages.konaseema,
    span: 'md:col-span-6'
  },
  {
    id: 'srisailam',
    name: 'Srisailam',
    category: 'Pilgrimage & Nature',
    image: travelImages.srisailam,
    span: 'md:col-span-6'
  }
];

export const Destinations = () => {
  return (
    <section className="py-24 bg-background">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6"
        >
          <div className="max-w-2xl">
            <SectionHeading 
              title="Explore Andhra" 
              subtitle="Places Worth Travelling For"
              className="!mb-4"
            />
            <p className="text-gray-600 text-lg">
              From coastal escapes to mountain retreats and sacred journeys, discover places worth travelling for.
            </p>
          </div>
          <Link to="/destinations" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300">
            View All Destinations <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${dest.span} group relative h-[350px] md:h-[400px] rounded-2xl overflow-hidden cursor-pointer shadow-sm`}
            >
              <Link to="/destinations" className="block w-full h-full">
                <div className="absolute inset-0 z-0 bg-primary">
                  <ImageWithFallback 
                    src={dest.image} 
                    alt={dest.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                </div>
                
                <div className="absolute bottom-0 left-0 w-full p-8 z-10 flex items-end justify-between">
                  <div>
                    <p className="text-accent text-xs font-bold tracking-widest uppercase mb-2">
                      {dest.category}
                    </p>
                    <h3 className="text-3xl font-serif font-bold text-white">
                      {dest.name}
                    </h3>
                  </div>
                  
                  <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 ease-out border border-white/30">
                    <ArrowRight className="w-5 h-5 text-white" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
