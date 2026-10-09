import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Map, ArrowRight, MapPin } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { Container } from '../components/ui/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { travelImages } from '../data/images';

const categories = [
  {
    id: 'coastal',
    title: 'Coastal Escapes',
    description: 'Golden sands and endless blue horizons along the Bay of Bengal.',
    destinations: [
      {
        id: 'vizag',
        name: 'Visakhapatnam',
        description: 'The City of Destiny, famous for its sweeping beaches and vibrant coastal culture.',
        image: travelImages.vizag,
        span: 'lg:col-span-8',
        isFeatured: true,
        height: 'h-[350px] md:h-[450px]'
      },
      {
        id: 'bheemili',
        name: 'Bheemili',
        description: 'A quiet, historic beach town with Dutch colonial heritage.',
        image: travelImages.bheemili,
        span: 'lg:col-span-4',
        isFeatured: false,
        height: 'h-[350px] md:h-[450px]'
      }
    ]
  },
  {
    id: 'nature',
    title: 'Nature & Hills',
    description: 'Misty valleys, dense forests, and tranquil backwaters.',
    destinations: [
      {
        id: 'araku',
        name: 'Araku Valley',
        description: 'Lush coffee plantations and spectacular mountain railway journeys.',
        image: travelImages.araku,
        span: 'lg:col-span-12',
        isFeatured: true,
        height: 'h-[400px] md:h-[500px]'
      },
      {
        id: 'konaseema',
        name: 'Konaseema',
        description: 'The Kerala of Andhra, renowned for its coconut groves and backwaters.',
        image: travelImages.konaseema,
        span: 'lg:col-span-6',
        isFeatured: false,
        height: 'h-[300px] md:h-[350px]'
      },
      {
        id: 'lambasingi',
        name: 'Lambasingi',
        description: 'The Kashmir of Andhra, where winter mornings occasionally bring frost.',
        image: travelImages.lambasingi,
        span: 'lg:col-span-6',
        isFeatured: false,
        height: 'h-[300px] md:h-[350px]'
      }
    ]
  },
  {
    id: 'pilgrimage',
    title: 'Sacred Pilgrimage',
    description: 'Ancient temples and divine spiritual journeys.',
    destinations: [
      {
        id: 'tirupati',
        name: 'Tirupati',
        description: 'The spiritual capital of Andhra, home to the revered Lord Venkateswara Temple.',
        image: travelImages.tirupati,
        span: 'lg:col-span-8',
        isFeatured: true,
        height: 'h-[350px] md:h-[450px]'
      },
      {
        id: 'srisailam',
        name: 'Srisailam',
        description: 'A sacred Shiva Jyotirlinga nestled deep within the Nallamala forests.',
        image: travelImages.srisailam,
        span: 'lg:col-span-4',
        isFeatured: false,
        height: 'h-[350px] md:h-[450px]'
      },
      {
        id: 'kanipakam',
        name: 'Kanipakam',
        description: 'Ancient temple of Lord Ganesha famous for its swayambhu idol.',
        image: travelImages.categories.spiritual,
        span: 'lg:col-span-6',
        isFeatured: false,
        height: 'h-[300px] md:h-[350px]'
      },
      {
        id: 'simhachalam',
        name: 'Simhachalam',
        description: 'Hilltop shrine dedicated to the lion-man incarnation of Lord Vishnu.',
        image: travelImages.categories.heritage,
        span: 'lg:col-span-6',
        isFeatured: false,
        height: 'h-[300px] md:h-[350px]'
      }
    ]
  },
  {
    id: 'culture',
    title: 'Culture & Heritage',
    description: 'Explore the rich history, ancient caves, and grand stupas of the region.',
    destinations: [
      {
        id: 'vijayawada',
        name: 'Vijayawada',
        description: 'A bustling hub spanning the Krishna River, featuring the ancient Undavalli Caves.',
        image: travelImages.vijayawada,
        span: 'lg:col-span-8',
        isFeatured: true,
        height: 'h-[350px] md:h-[400px]'
      },
      {
        id: 'amaravati',
        name: 'Amaravati',
        description: 'A deeply historic site holding the ruins of the Great Stupa and Buddhist heritage.',
        image: travelImages.categories.heritage,
        span: 'lg:col-span-4',
        isFeatured: false,
        height: 'h-[350px] md:h-[400px]'
      }
    ]
  }
];

export const Destinations = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Discover Andhra"
        bgImage={travelImages.categories.nature}
        description="Explore beaches, hills, heritage, temples and peaceful escapes across Andhra Pradesh."
      />

      <div className="py-20 lg:py-24 relative overflow-hidden">
        {/* Subtle decorative map/grid pattern in background */}
        <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
          <Map className="w-[800px] h-[800px] text-primary -rotate-12" />
        </div>

        <Container className="relative z-10">
          {categories.map((category) => (
            <div key={category.id} className="mb-24 last:mb-0">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-10 lg:mb-12"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-[1px] bg-accent"></div>
                  <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary">
                    {category.title}
                  </h2>
                </div>
                <p className="text-gray-600 text-lg max-w-2xl pl-14">
                  {category.description}
                </p>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8">
                {category.destinations.map((dest, destIndex) => (
                  <motion.div
                    key={dest.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: destIndex * 0.1 }}
                    className={`${dest.span} group relative rounded-2xl overflow-hidden cursor-pointer shadow-sm border border-gray-100 ${dest.height}`}
                  >
                    <Link to={`/packages?destination=${dest.name}`} className="block w-full h-full">
                      {/* Image */}
                      <div className="absolute inset-0 bg-primary z-0">
                        <ImageWithFallback 
                          src={dest.image} 
                          alt={dest.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                        />
                        <div className={`absolute inset-0 bg-gradient-to-t ${dest.isFeatured ? 'from-primary/95 via-primary/20 to-transparent' : 'from-primary/90 via-primary/30 to-transparent'} transition-opacity duration-300`}></div>
                      </div>
                      
                      {/* Content */}
                      <div className="absolute inset-0 z-10 p-6 md:p-8 flex flex-col justify-between">
                        {/* Top */}
                        <div className="flex justify-between items-start">
                          <div className="bg-white/20 backdrop-blur-md border border-white/30 w-10 h-10 rounded-full flex items-center justify-center transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                            <MapPin className="w-4 h-4 text-white" />
                          </div>
                          
                          {dest.isFeatured && (
                            <div className="hidden md:flex bg-white/20 backdrop-blur-md border border-white/30 w-12 h-12 rounded-full items-center justify-center transform -translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                              <ArrowRight className="w-5 h-5 text-white" />
                            </div>
                          )}
                        </div>

                        {/* Bottom */}
                        <div>
                          <h3 className={`${dest.isFeatured ? 'text-3xl md:text-4xl' : 'text-2xl md:text-3xl'} font-serif font-bold text-white mb-3 leading-tight group-hover:text-white transition-colors`}>
                            {dest.name}
                          </h3>
                          <p className={`text-white/90 ${dest.isFeatured ? 'text-base md:text-lg max-w-md line-clamp-2' : 'text-sm font-medium line-clamp-2'} mb-4`}>
                            {dest.description}
                          </p>
                          
                          <div className="flex items-center gap-2 text-white font-bold text-sm uppercase tracking-wider group-hover:text-accent transition-colors">
                            Explore Packages 
                            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </Container>
      </div>
    </div>
  );
};
