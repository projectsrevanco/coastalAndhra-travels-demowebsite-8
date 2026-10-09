import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { travelImages } from '../../data/images';

const guides = [
  {
    id: 'andhra-places',
    title: 'Best Places to Visit in Andhra Pradesh',
    excerpt: 'From pristine beaches to misty hills and ancient temples, discover the ultimate bucket list for your Andhra journey.',
    category: 'Destinations',
    image: travelImages.hero,
    span: 'lg:col-span-8',
    isHero: true
  },
  {
    id: 'araku-guide',
    title: 'A Complete Guide to Araku Valley',
    excerpt: 'Everything you need to know about the Vistadome train, coffee plantations, and the best viewpoints. A perfect weekend getaway.',
    category: 'Hill Stations',
    image: travelImages.categories.nature,
    span: 'lg:col-span-4 lg:row-span-2',
    isTall: true
  },
  {
    id: 'tirupati-planning',
    title: 'Planning a Tirupati Pilgrimage',
    excerpt: 'A step-by-step guide to booking darshan, finding accommodation, and navigating the sacred hills.',
    category: 'Pilgrimage',
    image: travelImages.categories.spiritual,
    span: 'lg:col-span-4',
  },
  {
    id: 'vizag-weekend',
    title: 'How to Plan a Vizag Weekend Escape',
    excerpt: 'Maximize your 48 hours in the City of Destiny with this perfect coastal itinerary.',
    category: 'Weekend Escapes',
    image: travelImages.categories.beach,
    span: 'lg:col-span-4',
  }
];

export const TravelGuides = () => {
  return (
    <section className="py-24 bg-background border-t border-gray-100">
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
              title="Travel Inspiration" 
              subtitle="Guides & Tips"
              className="!mb-4"
            />
            <p className="text-gray-600 text-lg">
              Useful guides to help you plan your next Andhra journey.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
          {guides.map((guide, index) => {
            const isHero = guide.isHero;
            const isTall = guide.isTall;

            return (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${guide.span} group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 flex flex-col ${isHero ? 'md:flex-row' : ''}`}
              >
                <Link to="/travel-planning" className={`block w-full h-full flex flex-col ${isHero ? 'md:flex-row' : ''}`}>
                  {/* Image Area */}
                  <div className={`relative overflow-hidden ${isHero ? 'w-full md:w-1/2 h-64 md:h-auto' : isTall ? 'h-64 lg:h-[50%]' : 'h-56'} shrink-0`}>
                    <ImageWithFallback 
                      src={guide.image} 
                      alt={guide.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-transparent transition-colors duration-500"></div>
                  </div>
                  
                  {/* Content Area */}
                  <div className={`flex flex-col flex-grow ${isHero ? 'w-full md:w-1/2 p-8 lg:p-12 justify-center' : 'p-6 lg:p-8'}`}>
                    <p className="text-accent text-xs font-bold tracking-widest uppercase mb-3">
                      {guide.category}
                    </p>
                    <h3 className={`${isHero ? 'text-2xl lg:text-3xl mb-4' : 'text-xl mb-3'} font-serif font-bold text-primary group-hover:text-secondary transition-colors leading-snug`}>
                      {guide.title}
                    </h3>
                    <p className="text-gray-600 text-sm md:text-base mb-6 flex-grow">
                      {guide.excerpt}
                    </p>
                    
                    <div className="mt-auto inline-flex items-center gap-2 text-primary font-bold text-sm group-hover:text-accent transition-colors">
                      Read Guide 
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
