import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useLocation } from 'react-router-dom';
import { Filter, X, ChevronDown, CheckCircle2, Clock, MapPin, Coffee, Car, Home as HomeIcon } from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { travelImages } from '../data/images';

// -- DATA --
const allPackages = [
  {
    id: 'vizag-coastal-getaway',
    name: 'Vizag Coastal Getaway',
    destination: 'Visakhapatnam',
    duration: '2 Days / 1 Night',
    durationDays: 2,
    price: 5999,
    type: ['Beach', 'Weekend', 'Family'],
    image: travelImages.packages.vizagGetaway,
    inclusions: ['Hotel', 'Transport', 'Sightseeing']
  },
  {
    id: 'araku-valley-escape',
    name: 'Araku Valley Escape',
    destination: 'Araku',
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    price: 8499,
    type: ['Nature', 'Couple', 'Weekend'],
    image: travelImages.packages.arakuEscape,
    inclusions: ['Hotel', 'Train', 'Sightseeing']
  },
  {
    id: 'tirupati-spiritual-journey',
    name: 'Tirupati Spiritual Journey',
    destination: 'Tirupati',
    duration: '2 Days / 1 Night',
    durationDays: 2,
    price: 6499,
    type: ['Pilgrimage', 'Family'],
    image: travelImages.packages.tirupatiSpiritual,
    inclusions: ['Hotel', 'Transfers', 'Breakfast']
  },
  {
    id: 'konaseema-nature-retreat',
    name: 'Konaseema Nature Retreat',
    destination: 'Konaseema',
    duration: '3 Days / 2 Nights',
    durationDays: 3,
    price: 7999,
    type: ['Nature', 'Family', 'Couple'],
    image: travelImages.packages.konaseemaRetreat,
    inclusions: ['Homestay', 'Boat Ride', 'Meals']
  },
  {
    id: 'srisailam-divine-tour',
    name: 'Srisailam Divine Tour',
    destination: 'Srisailam',
    duration: '2 Days / 1 Night',
    durationDays: 2,
    price: 4999,
    type: ['Pilgrimage'],
    image: travelImages.srisailam,
    inclusions: ['Hotel', 'Transport', 'Temple']
  },
  {
    id: 'vijayawada-heritage',
    name: 'Vijayawada Heritage & Culture',
    destination: 'Vijayawada',
    duration: '2 Days / 1 Night',
    durationDays: 2,
    price: 4500,
    type: ['Pilgrimage', 'Family', 'Weekend'],
    image: travelImages.vijayawada,
    inclusions: ['Hotel', 'Sightseeing', 'Breakfast']
  },
  {
    id: 'ultimate-andhra-coastline',
    name: 'Ultimate Andhra Coastline',
    destination: 'Visakhapatnam',
    duration: '5 Days / 4 Nights',
    durationDays: 5,
    price: 15999,
    type: ['Beach', 'Family'],
    image: travelImages.vizag,
    inclusions: ['Resorts', 'Transport', 'Meals', 'Guide']
  },
  {
    id: 'araku-lambasingi-winter',
    name: 'Araku & Lambasingi Winter Magic',
    destination: 'Araku',
    duration: '4 Days / 3 Nights',
    durationDays: 4,
    price: 11500,
    type: ['Nature', 'Couple'],
    image: travelImages.lambasingi,
    inclusions: ['Hotel', 'Transport', 'Sightseeing']
  }
];

// Inclusions icons helper
const renderInclusionIcon = (item: string) => {
  const i = item.toLowerCase();
  if (i.includes('hotel') || i.includes('resort') || i.includes('homestay')) return <HomeIcon className="w-3.5 h-3.5" />;
  if (i.includes('transport') || i.includes('transfer') || i.includes('train')) return <Car className="w-3.5 h-3.5" />;
  if (i.includes('meal') || i.includes('breakfast')) return <Coffee className="w-3.5 h-3.5" />;
  return <CheckCircle2 className="w-3.5 h-3.5" />;
};

export const Packages = () => {
  const location = useLocation();
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  // Filters State
  const [destination, setDestination] = useState('All');
  const [duration, setDuration] = useState('Any');
  const [budget, setBudget] = useState('Any');
  const [tripType, setTripType] = useState('Any');
  const [sortBy, setSortBy] = useState('Recommended');

  // Parse URL queries for initial filter (e.g. from JourneyTypes on home)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const queryType = params.get('type');
    if (queryType) {
      setTripType(queryType);
    }
    const queryDest = params.get('destination');
    if (queryDest) {
      setDestination(queryDest);
    }
  }, [location.search]);

  // Filtering Logic
  const filteredPackages = useMemo(() => {
    let result = [...allPackages];

    if (destination !== 'All') {
      result = result.filter(p => p.destination === destination);
    }

    if (duration !== 'Any') {
      if (duration === '1–2 Days') result = result.filter(p => p.durationDays <= 2);
      if (duration === '3–4 Days') result = result.filter(p => p.durationDays >= 3 && p.durationDays <= 4);
      if (duration === '5+ Days') result = result.filter(p => p.durationDays >= 5);
    }

    if (budget !== 'Any') {
      if (budget === 'Under ₹5,000') result = result.filter(p => p.price < 5000);
      if (budget === '₹5,000–₹10,000') result = result.filter(p => p.price >= 5000 && p.price <= 10000);
      if (budget === '₹10,000+') result = result.filter(p => p.price > 10000);
    }

    if (tripType !== 'Any') {
      result = result.filter(p => p.type.includes(tripType));
    }

    if (sortBy === 'Price: Low to High') result.sort((a, b) => a.price - b.price);
    if (sortBy === 'Price: High to Low') result.sort((a, b) => b.price - a.price);

    return result;
  }, [destination, duration, budget, tripType, sortBy]);

  const clearFilters = () => {
    setDestination('All');
    setDuration('Any');
    setBudget('Any');
    setTripType('Any');
    setSortBy('Recommended');
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <PageHeader 
        title="Tour Packages"
        bgImage={travelImages.categories.nature}
        description="Choose from curated journeys with clear pricing, thoughtful itineraries and dependable travel support."
      />

      <Container className="mt-12">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden w-full flex justify-between items-center bg-white p-4 rounded-xl border border-gray-200 shadow-sm">
            <span className="font-bold text-primary flex items-center gap-2">
              <Filter className="w-5 h-5" /> Filters
            </span>
            <Button 
              variant="outline" 
              className="py-2 px-4 text-sm"
              onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
            >
              {isMobileFilterOpen ? 'Close' : 'Open Filters'}
            </Button>
          </div>

          {/* Sidebar Filters */}
          <div className={`w-full lg:w-1/4 lg:sticky lg:top-24 bg-white rounded-2xl border border-gray-100 shadow-sm p-6 overflow-y-auto z-40 transition-all duration-300 ${isMobileFilterOpen ? 'block fixed inset-0 m-4 rounded-3xl h-[calc(100vh-32px)] overflow-y-auto' : 'hidden lg:block'}`}>
            
            <div className="flex justify-between items-center mb-6 lg:mb-8">
              <h3 className="font-serif font-bold text-xl text-primary flex items-center gap-2">
                <Filter className="w-5 h-5 text-accent" /> Filter By
              </h3>
              {isMobileFilterOpen && (
                <button onClick={() => setIsMobileFilterOpen(false)} className="lg:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-full">
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Destination */}
            <div className="mb-8">
              <h4 className="font-bold text-primary mb-3">Destination</h4>
              <div className="space-y-2">
                {['All', 'Visakhapatnam', 'Araku', 'Tirupati', 'Konaseema', 'Vijayawada', 'Srisailam'].map(dest => (
                  <label key={dest} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="destination" 
                      checked={destination === dest} 
                      onChange={() => setDestination(dest)}
                      className="w-4 h-4 text-accent border-gray-300 focus:ring-accent accent-accent"
                    />
                    <span className={`text-sm ${destination === dest ? 'text-primary font-bold' : 'text-gray-600 group-hover:text-primary'}`}>
                      {dest}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Duration */}
            <div className="mb-8">
              <h4 className="font-bold text-primary mb-3">Duration</h4>
              <div className="space-y-2">
                {['Any', '1–2 Days', '3–4 Days', '5+ Days'].map(dur => (
                  <label key={dur} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="duration" 
                      checked={duration === dur} 
                      onChange={() => setDuration(dur)}
                      className="w-4 h-4 text-accent border-gray-300 focus:ring-accent accent-accent"
                    />
                    <span className={`text-sm ${duration === dur ? 'text-primary font-bold' : 'text-gray-600 group-hover:text-primary'}`}>
                      {dur}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Budget */}
            <div className="mb-8">
              <h4 className="font-bold text-primary mb-3">Budget</h4>
              <div className="space-y-2">
                {['Any', 'Under ₹5,000', '₹5,000–₹10,000', '₹10,000+'].map(bud => (
                  <label key={bud} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="budget" 
                      checked={budget === bud} 
                      onChange={() => setBudget(bud)}
                      className="w-4 h-4 text-accent border-gray-300 focus:ring-accent accent-accent"
                    />
                    <span className={`text-sm ${budget === bud ? 'text-primary font-bold' : 'text-gray-600 group-hover:text-primary'}`}>
                      {bud}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            {/* Trip Type */}
            <div className="mb-8">
              <h4 className="font-bold text-primary mb-3">Trip Type</h4>
              <div className="space-y-2">
                {['Any', 'Family', 'Pilgrimage', 'Beach', 'Nature', 'Couple', 'Weekend'].map(type => (
                  <label key={type} className="flex items-center gap-3 cursor-pointer group">
                    <input 
                      type="radio" 
                      name="tripType" 
                      checked={tripType === type} 
                      onChange={() => setTripType(type)}
                      className="w-4 h-4 text-accent border-gray-300 focus:ring-accent accent-accent"
                    />
                    <span className={`text-sm ${tripType === type ? 'text-primary font-bold' : 'text-gray-600 group-hover:text-primary'}`}>
                      {type}
                    </span>
                  </label>
                ))}
              </div>
            </div>

            <Button 
              variant="outline" 
              className="w-full"
              onClick={() => {
                clearFilters();
                if(isMobileFilterOpen) setIsMobileFilterOpen(false);
              }}
            >
              Clear All Filters
            </Button>
            
            {isMobileFilterOpen && (
              <Button variant="primary" className="w-full mt-4 lg:hidden" onClick={() => setIsMobileFilterOpen(false)}>
                Show Results ({filteredPackages.length})
              </Button>
            )}
          </div>

          {/* Main Content Area */}
          <div className="w-full lg:w-3/4">
            
            {/* Top Bar: Sort & Count */}
            <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
              <p className="text-gray-600 font-medium">
                Showing <span className="font-bold text-primary">{filteredPackages.length}</span> packages
              </p>
              
              <div className="flex items-center gap-3 relative">
                <span className="text-sm text-gray-500 font-medium">Sort by:</span>
                <select 
                  className="appearance-none bg-white border border-gray-200 text-primary font-bold text-sm rounded-lg py-2 pl-4 pr-10 focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent cursor-pointer"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option>Recommended</option>
                  <option>Price: Low to High</option>
                  <option>Price: High to Low</option>
                </select>
                <ChevronDown className="w-4 h-4 text-gray-500 absolute right-3 pointer-events-none" />
              </div>
            </div>

            {/* Grid */}
            {filteredPackages.length > 0 ? (
              <motion.div 
                layout
                className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6 lg:gap-8"
              >
                <AnimatePresence>
                  {filteredPackages.map(pkg => (
                    <motion.div
                      layout
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                      key={pkg.id}
                      className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all group flex flex-col h-full"
                    >
                      {/* Card Image */}
                      <div className="relative h-60 overflow-hidden">
                        <ImageWithFallback 
                          src={pkg.image} 
                          alt={pkg.name}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute top-4 left-4">
                          <span className="bg-white/95 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded shadow-sm inline-flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-accent" /> {pkg.destination}
                          </span>
                        </div>
                      </div>

                      {/* Card Content */}
                      <div className="p-6 flex flex-col flex-grow">
                        <div className="flex items-center gap-2 mb-3">
                          <Clock className="w-4 h-4 text-gray-400" />
                          <span className="text-sm font-semibold text-gray-600">{pkg.duration}</span>
                        </div>
                        
                        <h3 className="text-xl font-serif font-bold text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">
                          {pkg.name}
                        </h3>

                        {/* Inclusions */}
                        <div className="flex flex-wrap gap-x-4 gap-y-2 mb-6">
                          {pkg.inclusions.map((inc, i) => (
                            <div key={i} className="flex items-center gap-1.5 text-sm text-gray-500 font-medium">
                              {renderInclusionIcon(inc)} {inc}
                            </div>
                          ))}
                        </div>

                        {/* Footer (Price + CTA) */}
                        <div className="mt-auto pt-5 border-t border-gray-100 flex items-end justify-between">
                          <div>
                            <p className="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Starting From</p>
                            <p className="text-2xl font-bold text-primary leading-none">
                              ₹{pkg.price.toLocaleString('en-IN')} <span className="text-xs font-medium text-gray-500 line-through tracking-normal"></span>
                            </p>
                          </div>
                          <Link to={`/packages`}>
                            <Button variant="primary" className="py-2 px-4 text-sm group-hover:bg-accent group-hover:text-white transition-colors">
                              View Details
                            </Button>
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </motion.div>
            ) : (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-white rounded-2xl border border-gray-100 p-12 text-center shadow-sm"
              >
                <div className="w-20 h-20 bg-background rounded-full flex items-center justify-center mx-auto mb-6">
                  <Filter className="w-10 h-10 text-gray-400" />
                </div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-3">No packages found</h3>
                <p className="text-gray-500 max-w-md mx-auto mb-8">
                  We couldn't find any packages matching your current filters. Try adjusting your destination, budget, or trip type.
                </p>
                <Button variant="accent" onClick={clearFilters}>
                  Clear All Filters
                </Button>
              </motion.div>
            )}

          </div>
        </div>
      </Container>
    </div>
  );
};
