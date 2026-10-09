import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Users, Briefcase, Search, AlertCircle, ChevronDown } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const TripSearch = () => {
  const navigate = useNavigate();
  const [destination, setDestination] = useState('');
  const [dates, setDates] = useState('');
  const [travellers, setTravellers] = useState('');
  const [tripType, setTripType] = useState('');
  const [error, setError] = useState('');

  const tripTypes = [
    'Family',
    'Pilgrimage',
    'Couple',
    'Adventure',
    'Weekend Getaway',
    'Nature & Leisure'
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!destination && !tripType) {
      setError('Please select a destination or trip type to begin your search.');
      return;
    }
    setError('');
    
    const params = new URLSearchParams();
    if (destination) params.append('dest', destination);
    if (tripType) params.append('type', tripType);
    
    navigate(`/packages?${params.toString()}`);
  };

  return (
    <section className="relative z-20 -mt-8 mb-20 px-4 md:px-0">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          className="bg-white rounded-xl shadow-xl shadow-primary/10 p-6 md:p-8 border border-gray-100 max-w-6xl mx-auto"
        >
          <div className="mb-6 flex flex-col md:flex-row md:items-center justify-between gap-2">
            <h2 className="text-2xl font-serif font-bold text-primary">Where do you want to go?</h2>
            {error && (
              <motion.p 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="text-accent text-sm flex items-center gap-1 font-medium"
              >
                <AlertCircle className="w-4 h-4" />
                {error}
              </motion.p>
            )}
          </div>
          
          <form onSubmit={handleSearch} className="flex flex-col lg:flex-row lg:items-center divide-y lg:divide-y-0 lg:divide-x divide-gray-100 border border-gray-100 rounded-lg lg:rounded-full bg-gray-50/50">
            {/* Destination */}
            <div className="flex flex-col px-6 py-4 flex-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-secondary" /> Destination
              </label>
              <input 
                type="text" 
                placeholder="Choose a destination"
                className="w-full bg-transparent text-gray-800 placeholder:text-gray-400 focus:outline-none font-medium text-sm md:text-base"
                value={destination}
                onChange={(e) => {
                  setDestination(e.target.value);
                  if (error) setError('');
                }}
              />
            </div>
            
            {/* Travel Dates */}
            <div className="flex flex-col px-6 py-4 flex-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                <Calendar className="w-3.5 h-3.5 text-secondary" /> Travel Dates
              </label>
              <input 
                type="text" 
                placeholder="Select dates"
                className="w-full bg-transparent text-gray-800 placeholder:text-gray-400 focus:outline-none font-medium text-sm md:text-base"
                value={dates}
                onChange={(e) => setDates(e.target.value)}
              />
            </div>
            
            {/* Travellers */}
            <div className="flex flex-col px-6 py-4 flex-1">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                <Users className="w-3.5 h-3.5 text-secondary" /> Travellers
              </label>
              <input 
                type="text" 
                placeholder="2 Travellers"
                className="w-full bg-transparent text-gray-800 placeholder:text-gray-400 focus:outline-none font-medium text-sm md:text-base"
                value={travellers}
                onChange={(e) => setTravellers(e.target.value)}
              />
            </div>
            
            {/* Trip Type */}
            <div className="flex flex-col px-6 py-4 flex-1 relative">
              <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex items-center gap-2">
                <Briefcase className="w-3.5 h-3.5 text-secondary" /> Trip Type
              </label>
              <div className="relative">
                <select 
                  className="w-full bg-transparent text-gray-800 font-medium text-sm md:text-base focus:outline-none appearance-none cursor-pointer"
                  value={tripType}
                  onChange={(e) => {
                    setTripType(e.target.value);
                    if (error) setError('');
                  }}
                >
                  <option value="" disabled className="text-gray-400">Select trip type</option>
                  {tripTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
                <ChevronDown className="absolute right-0 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* CTA */}
            <div className="px-4 py-4 lg:py-2">
              <Button type="submit" variant="accent" className="w-full lg:w-auto h-12 lg:rounded-full lg:px-8 shadow-lg shadow-accent/20 flex items-center justify-center gap-2 font-semibold">
                <Search className="w-4 h-4" />
                Find My Trip
              </Button>
            </div>
          </form>
        </motion.div>
      </Container>
    </section>
  );
};
