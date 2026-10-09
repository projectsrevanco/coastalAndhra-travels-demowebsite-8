import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  MapPin, Clock, Car, Home, CheckCircle2, ArrowRight, ShieldCheck, HeartHandshake, Map
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { PageHeader } from '../components/ui/PageHeader';
import { Button } from '../components/ui/Button';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { travelImages } from '../data/images';

// Mock Data
const destinations = ['Tirupati', 'Srisailam', 'Kanipakam', 'Simhachalam', 'Vijayawada Kanaka Durga'];

const packages = [
  {
    id: 'tirupati-spiritual',
    name: 'Tirupati Spiritual Journey',
    destination: 'Tirupati',
    duration: '2 Days / 1 Night',
    price: 6499,
    image: travelImages.packages.tirupatiSpiritual,
    accommodation: 'Premium Hotel near Alipiri',
    transport: 'Private AC Sedan Transfers',
    highlights: ['Comfortable Stay', 'Temple Transfers', 'Local Assistance']
  },
  {
    id: 'srisailam-divine',
    name: 'Srisailam Divine Tour',
    destination: 'Srisailam',
    duration: '2 Days / 1 Night',
    price: 4999,
    image: travelImages.srisailam,
    accommodation: 'Comfortable Stay in Srisailam',
    transport: 'Private SUV from Hyderabad/Kurnool',
    highlights: ['Forest Drive', 'Local Guidance', 'Comfortable Stay']
  },
  {
    id: 'kanipakam-circuit',
    name: 'Kanipakam & Vellore Circuit',
    destination: 'Kanipakam',
    duration: '3 Days / 2 Nights',
    price: 8999,
    image: travelImages.categories.spiritual,
    accommodation: 'Premium Stays throughout circuit',
    transport: 'Dedicated AC Vehicle',
    highlights: ['Multiple Temple Visits', 'Seamless Inter-city Transfers', 'Breakfast Included']
  },
  {
    id: 'vijayawada-darshan',
    name: 'Vijayawada Heritage & Darshan',
    destination: 'Vijayawada',
    duration: '2 Days / 1 Night',
    price: 4500,
    image: travelImages.vijayawada,
    accommodation: 'City Center Premium Hotel',
    transport: 'Local AC Transport',
    highlights: ['River Ghats Visit', 'Kanaka Durga Temple transfers', 'Local Sightseeing']
  }
];

const planningFeatures = [
  {
    title: 'Temple Transfers',
    description: 'Punctual, dedicated transportation to and from temple locations, ensuring you arrive calmly and comfortably without hassle.'
  },
  {
    title: 'Hotel Arrangements',
    description: 'Carefully vetted, clean, and comfortable accommodations located conveniently near major pilgrimage sites, suitable for families.'
  },
  {
    title: 'Local Transportation',
    description: 'Reliable private vehicles with professional drivers familiar with local routes, traditions, and general temple timings.'
  },
  {
    title: 'Itinerary Planning',
    description: 'Thoughtfully paced schedules that balance temple visits with adequate rest, specifically designed to accommodate elders and children.'
  },
  {
    title: 'Travel Assistance',
    description: 'Dependable support throughout your journey. *Note: We do not offer, sell, or guarantee VIP Darshan tickets. All temple access is strictly subject to official Devasthanam rules and direct booking.'
  }
];

export const PilgrimageTours = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Sacred Journeys Across Andhra"
        bgImage={travelImages.categories.spiritual}
        description="Thoughtfully planned pilgrimage travel with comfortable stays, reliable transportation and clear itineraries."
      />

      {/* Featured Destinations Pills */}
      <section className="pt-12 pb-16 bg-white border-b border-gray-100">
        <Container>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mr-4 w-full text-center md:w-auto md:text-left mb-2 md:mb-0">
              Featured Sites
            </span>
            {destinations.map((dest, idx) => (
              <motion.div 
                key={dest}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-background border border-gray-200 px-6 py-2.5 rounded-full text-primary font-medium text-sm shadow-sm hover:border-accent hover:text-accent transition-colors cursor-pointer"
              >
                {dest}
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Packages Grid */}
      <section className="py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Curated Spiritual Journeys
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We arrange the logistics so you can focus entirely on your spiritual experience. No hidden claims, just dependable travel services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {packages.map((pkg, idx) => (
              <motion.div
                key={pkg.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg transition-all group flex flex-col md:flex-row h-full"
              >
                {/* Image */}
                <div className="relative w-full md:w-2/5 h-64 md:h-auto shrink-0 overflow-hidden">
                  <ImageWithFallback 
                    src={pkg.image} 
                    alt={pkg.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/95 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-accent" /> {pkg.destination}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-4 h-4 text-gray-400" />
                    <span className="text-sm font-semibold text-gray-600">{pkg.duration}</span>
                  </div>
                  
                  <h3 className="text-2xl font-serif font-bold text-primary mb-6 leading-tight group-hover:text-secondary transition-colors">
                    {pkg.name}
                  </h3>

                  <div className="space-y-4 mb-8">
                    <div className="flex items-start gap-3">
                      <Home className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-gray-600 text-sm font-medium">{pkg.accommodation}</span>
                    </div>
                    <div className="flex items-start gap-3">
                      <Car className="w-5 h-5 text-accent shrink-0" />
                      <span className="text-gray-600 text-sm font-medium">{pkg.transport}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Key Highlights</p>
                    <ul className="space-y-2">
                      {pkg.highlights.map((highlight, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                          <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Footer (Price + CTA) */}
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Starting From</p>
                      <p className="text-2xl font-bold text-primary leading-none">
                        ₹{pkg.price.toLocaleString('en-IN')}
                      </p>
                    </div>
                    <Link to={`/packages/${pkg.id}`}>
                      <Button variant="outline" className="px-5 py-2.5 text-sm group-hover:bg-accent group-hover:text-white group-hover:border-accent transition-colors">
                        View Package
                      </Button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Plan Your Pilgrimage Section */}
      <section className="py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        {/* Background visual element */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-background rounded-l-[100px] -z-10 hidden lg:block opacity-50"></div>
        
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                  <HeartHandshake className="w-8 h-8 text-accent" />
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary mb-6 leading-tight">
                  Plan Your Pilgrimage
                </h2>
                <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-lg">
                  Every spiritual journey is personal. We provide the dependable foundation of travel, stay, and logistics, allowing you to immerse yourself fully in devotion.
                </p>

                <div className="space-y-6">
                  {planningFeatures.map((feature, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-8 h-8 rounded-full bg-background border border-gray-200 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircle2 className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-bold text-primary mb-1">{feature.title}</h4>
                        <p className="text-sm text-gray-600 leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-12">
                  <Link to="/travel-planning">
                    <Button variant="accent" className="px-8 py-4 text-base shadow-lg shadow-accent/20">
                      Plan My Pilgrimage
                    </Button>
                  </Link>
                </div>
              </motion.div>
            </div>

            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl h-[400px] md:h-[500px] lg:h-[700px]"
              >
                <ImageWithFallback 
                  src={travelImages.categories.heritage} 
                  alt="Peaceful temple architecture" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent"></div>
                
                <div className="absolute bottom-8 left-8 right-8 bg-white/95 backdrop-blur-md rounded-xl p-6 shadow-lg border border-white/50">
                  <div className="flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-accent shrink-0 mt-1" />
                    <div>
                      <h4 className="font-serif font-bold text-primary text-lg mb-1">Ethical & Transparent</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        We pride ourselves on transparent pricing and realistic travel planning. We strictly abide by the rules of all local Devasthanams.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

          </div>
        </Container>
      </section>
    </div>
  );
};
