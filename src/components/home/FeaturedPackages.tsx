import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Clock, MapPin, Coffee, Car, Map, ArrowRight } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Button } from '../ui/Button';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { travelImages } from '../../data/images';

const packages = [
  {
    id: 'araku-valley-escape',
    title: 'Araku Valley Escape',
    location: 'Araku Valley',
    duration: '3 Days / 2 Nights',
    price: '8,499',
    description: 'Experience the pristine beauty, lush coffee plantations, and cool mountain breeze of Araku.',
    image: travelImages.packages.arakuEscape,
    badge: 'Best Seller',
    inclusions: ['Hotel', 'Transportation', 'Sightseeing', 'Breakfast']
  },
  {
    id: 'vizag-coastal-getaway',
    title: 'Vizag Coastal Getaway',
    location: 'Visakhapatnam',
    duration: '2 Days / 1 Night',
    price: '5,999',
    description: 'Explore the City of Destiny with its beautiful beaches, submarines, and hilltop views.',
    image: travelImages.packages.vizagGetaway,
    badge: 'Popular',
    inclusions: ['Hotel', 'Local Transport', 'Sightseeing', 'Breakfast']
  },
  {
    id: 'tirupati-spiritual-journey',
    title: 'Tirupati Spiritual Journey',
    location: 'Tirupati',
    duration: '2 Days / 1 Night',
    price: '6,499',
    description: 'A seamless, divinely planned pilgrimage experience to the sacred Tirumala hills.',
    image: travelImages.packages.tirupatiSpiritual,
    badge: 'Pilgrimage Special',
    inclusions: ['Hotel', 'Temple Transfers', 'Local Transport', 'Breakfast']
  },
  {
    id: 'konaseema-nature-retreat',
    title: 'Konaseema Nature Retreat',
    location: 'Konaseema',
    duration: '3 Days / 2 Nights',
    price: '7,999',
    description: 'Relax in the lush green backwaters and rich cultural heritage of the Godavari delta.',
    image: travelImages.packages.konaseemaRetreat,
    badge: 'Seasonal',
    inclusions: ['Hotel', 'Transportation', 'Sightseeing', 'Breakfast']
  }
];

export const FeaturedPackages = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <SectionHeading 
            title="Journeys Worth Taking" 
            subtitle="Curated Experiences"
            className="!mb-4"
          />
          <p className="text-gray-600 text-lg">
            Thoughtfully planned trips with transparent pricing, verified stays and reliable travel support.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md border border-gray-100 group flex flex-col h-full hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
            >
              {/* Image Container */}
              <div className="relative h-56 overflow-hidden bg-primary">
                <ImageWithFallback 
                  src={pkg.image} 
                  alt={pkg.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                />
                {pkg.badge && (
                  <div className="absolute top-4 left-4 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded shadow-sm uppercase tracking-wider">
                    {pkg.badge}
                  </div>
                )}
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded flex items-center gap-1.5 shadow-sm">
                  <MapPin className="w-3.5 h-3.5" />
                  {pkg.location}
                </div>
              </div>

              {/* Content Container */}
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-widest mb-3">
                  <Clock className="w-4 h-4 text-secondary" />
                  {pkg.duration}
                </div>
                
                <h3 className="text-xl font-serif font-bold text-primary mb-3 leading-tight group-hover:text-secondary transition-colors">
                  <Link to={`/packages/${pkg.id}`}>
                    {pkg.title}
                  </Link>
                </h3>
                
                <p className="text-gray-600 text-sm mb-6 flex-grow line-clamp-2">
                  {pkg.description}
                </p>

                {/* Inclusions */}
                <div className="mb-6 pt-4 border-t border-gray-100">
                  <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">Includes</p>
                  <div className="flex flex-wrap gap-2">
                    {pkg.inclusions.map((item, i) => (
                      <span key={i} className="text-xs font-medium text-gray-600 bg-background px-2.5 py-1 rounded-md border border-gray-100 flex items-center gap-1.5">
                        <CheckIcon item={item} /> {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="mt-auto flex flex-col gap-4">
                  <div>
                    <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Starting From</p>
                    <p className="text-2xl font-bold text-primary leading-none flex items-end gap-1">
                      ₹{pkg.price} <span className="text-sm font-medium text-gray-500 font-sans mb-0.5">/ person</span>
                    </p>
                  </div>
                  
                  <Link to={`/packages/${pkg.id}`} className="block">
                    <Button variant="outline" className="w-full group-hover:bg-primary group-hover:border-primary group-hover:text-white transition-all duration-300 py-3.5">
                      View Package
                    </Button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <Link to="/packages">
            <Button variant="primary" className="px-8 shadow-lg shadow-primary/20 inline-flex items-center gap-2">
              View All Packages <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </motion.div>
      </Container>
    </section>
  );
};

// Helper for inclusion icons
const CheckIcon = ({ item }: { item: string }) => {
  const i = item.toLowerCase();
  if (i.includes('hotel')) return <MapPin className="w-3 h-3 text-accent" />;
  if (i.includes('transport')) return <Car className="w-3 h-3 text-accent" />;
  if (i.includes('breakfast')) return <Coffee className="w-3 h-3 text-accent" />;
  return <Map className="w-3 h-3 text-accent" />;
};
