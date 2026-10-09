import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { travelImages } from '../../data/images';

const journeys = [
  {
    id: 'pilgrimage',
    title: 'Pilgrimage',
    description: 'Tirupati • Srisailam • Kanipakam',
    image: travelImages.categories.spiritual,
    type: 'image-backed',
    span: 'lg:col-span-1 lg:row-span-2'
  },
  {
    id: 'beach-escapes',
    title: 'Beach Escapes',
    description: 'Vizag • Bheemili • Suryalanka',
    image: travelImages.categories.beach,
    type: 'image-backed',
    span: 'lg:col-span-2 lg:row-span-1'
  },
  {
    id: 'hill-nature',
    title: 'Hill & Nature',
    description: 'Araku • Lambasingi',
    image: travelImages.categories.nature,
    type: 'editorial',
    span: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 'family-holidays',
    title: 'Family Holidays',
    description: 'Relaxed trips designed for families',
    image: travelImages.categories.heritage,
    type: 'editorial',
    span: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 'weekend-getaways',
    title: 'Weekend Getaways',
    description: 'Short escapes close to home',
    image: travelImages.hero,
    type: 'editorial',
    span: 'lg:col-span-1 lg:row-span-1'
  },
  {
    id: 'couple-honeymoon',
    title: 'Couple & Honeymoon',
    description: 'Private and romantic experiences',
    image: travelImages.fallback,
    type: 'image-backed',
    span: 'lg:col-span-2 lg:row-span-1'
  }
];

export const JourneyTypes = () => {
  return (
    <section className="py-24 bg-background border-t border-gray-100">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <SectionHeading 
            title="Find Your Kind of Journey" 
            subtitle="Travel Your Way"
            className="!mb-4"
          />
          <p className="text-gray-600 text-lg max-w-2xl">
            Whether you're seeking spiritual experiences, coastal escapes, family holidays or peaceful nature retreats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[250px] lg:auto-rows-[300px]">
          {journeys.map((journey, index) => {
            const isImageBacked = journey.type === 'image-backed';
            
            return (
              <motion.div
                key={journey.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`${journey.span} relative group overflow-hidden rounded-2xl cursor-pointer shadow-sm border border-gray-100/50`}
              >
                <Link to={`/packages?type=${journey.id}`} className="block w-full h-full">
                  {isImageBacked ? (
                    <>
                      {/* Image Backed Card */}
                      <div className="absolute inset-0 bg-primary z-0">
                        <ImageWithFallback 
                          src={journey.image} 
                          alt={journey.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent transition-opacity duration-300"></div>
                      </div>
                      
                      <div className="absolute inset-0 z-10 p-8 flex flex-col justify-end">
                        <div className="flex items-end justify-between gap-4">
                          <div>
                            <h3 className="text-2xl md:text-3xl font-serif font-bold text-white mb-2 leading-tight">
                              {journey.title}
                            </h3>
                            <p className="text-background/90 text-sm font-medium">
                              {journey.description}
                            </p>
                          </div>
                          <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center transform group-hover:translate-x-2 transition-transform duration-300 border border-white/30 shrink-0">
                            <ArrowRight className="w-5 h-5 text-white" />
                          </div>
                        </div>
                      </div>
                    </>
                  ) : (
                    <>
                      {/* Editorial Card */}
                      <div className="w-full h-full flex flex-col bg-white">
                        <div className="h-[55%] overflow-hidden relative">
                          <ImageWithFallback 
                            src={journey.image} 
                            alt={journey.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          />
                        </div>
                        <div className="h-[45%] p-6 flex flex-col justify-center relative">
                          <h3 className="text-xl font-serif font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                            {journey.title}
                          </h3>
                          <p className="text-gray-500 text-sm">
                            {journey.description}
                          </p>
                          <div className="absolute bottom-6 right-6 opacity-0 transform -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 text-accent">
                            <ArrowRight className="w-5 h-5" />
                          </div>
                        </div>
                      </div>
                    </>
                  )}
                </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
