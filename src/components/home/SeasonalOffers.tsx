import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Tag } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { ImageWithFallback } from '../ui/ImageWithFallback';
import { travelImages } from '../../data/images';

const offers = [
  {
    id: 'monsoon-nature',
    title: 'Monsoon Nature Trips',
    description: 'Araku, Lambasingi and lush green escapes. Experience the misty mountains.',
    image: travelImages.categories.nature,
    label: 'Monsoon Magic',
    price: '7,999',
    span: 'lg:col-span-6 lg:row-span-2',
    isFeatured: true
  },
  {
    id: 'festival-pilgrimage',
    title: 'Festival & Pilgrimage Specials',
    description: 'Divine temple and pilgrimage journeys for a peaceful soul.',
    image: travelImages.categories.spiritual,
    label: 'Festive Season',
    price: '5,499',
    span: 'lg:col-span-6 lg:row-span-1',
    isFeatured: false
  },
  {
    id: 'coastal-summer',
    title: 'Coastal Summer Escapes',
    description: 'Short beach and coastal trips.',
    image: travelImages.categories.beach,
    label: 'Summer Special',
    price: '4,999',
    span: 'md:col-span-6 lg:col-span-3 lg:row-span-1',
    isFeatured: false
  },
  {
    id: 'holiday-family',
    title: 'Holiday Family Getaways',
    description: 'Comfortable family travel packages.',
    image: travelImages.categories.heritage,
    label: 'Holiday Booking',
    price: '12,999',
    span: 'md:col-span-6 lg:col-span-3 lg:row-span-1',
    isFeatured: false
  }
];

export const SeasonalOffers = () => {
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
              title="Travel More This Season" 
              subtitle="Limited Time Offers"
              className="!mb-4"
            />
            <p className="text-gray-600 text-lg">
              Discover limited-time journeys and seasonal experiences curated for every kind of traveller.
            </p>
          </div>
          <Link to="/packages" className="inline-flex items-center gap-2 text-accent font-semibold hover:gap-3 transition-all duration-300">
            View All Offers <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 auto-rows-[280px] lg:auto-rows-[300px] gap-6">
          {offers.map((offer, index) => (
            <motion.div
              key={offer.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`${offer.span} group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-gray-100/50`}
            >
              <Link to="/packages" className="block w-full h-full">
                {/* Background Image */}
                <div className="absolute inset-0 bg-primary z-0">
                  <ImageWithFallback 
                    src={offer.image} 
                    alt={offer.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t ${offer.isFeatured ? 'from-primary/95 via-primary/30 to-transparent' : 'from-primary/90 via-primary/40 to-transparent'} transition-opacity duration-300`}></div>
                </div>
                
                {/* Content Overlay */}
                <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-between">
                  {/* Top Header */}
                  <div className="flex items-start justify-between">
                    <div className="inline-flex items-center gap-1.5 bg-accent text-white text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-md">
                      <Tag className="w-3 h-3" />
                      {offer.label}
                    </div>
                    {offer.isFeatured && (
                      <div className="hidden md:flex w-12 h-12 rounded-full bg-white/20 backdrop-blur-md items-center justify-center border border-white/30 transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        <ArrowRight className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </div>

                  {/* Bottom Content */}
                  <div>
                    <h3 className={`${offer.isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl'} font-serif font-bold text-white mb-2 leading-tight`}>
                      {offer.title}
                    </h3>
                    {offer.isFeatured && (
                      <p className="text-white/90 text-sm md:text-base font-medium mb-4 max-w-md line-clamp-2">
                        {offer.description}
                      </p>
                    )}
                    {!offer.isFeatured && (
                      <p className="text-white/90 text-sm font-medium mb-3 line-clamp-1">
                        {offer.description}
                      </p>
                    )}
                    
                    <div className="flex items-end justify-between mt-auto">
                      <div>
                        <p className="text-[10px] font-bold text-white/70 uppercase tracking-widest mb-1">Starting From</p>
                        <p className={`${offer.isFeatured ? 'text-2xl md:text-3xl' : 'text-xl'} font-bold text-white leading-none`}>
                          ₹{offer.price} <span className="text-xs font-medium text-white/80 font-sans">/ person</span>
                        </p>
                      </div>
                      
                      {!offer.isFeatured && (
                        <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 transform group-hover:bg-white transition-all duration-300 group-hover:border-white">
                          <ArrowRight className="w-4 h-4 text-white group-hover:text-primary transition-colors" />
                        </div>
                      )}
                    </div>
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
