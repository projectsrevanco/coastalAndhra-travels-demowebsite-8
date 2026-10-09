import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, MapPin, Phone, MessageCircle } from 'lucide-react';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Packages', path: '/packages' },
    { name: 'Pilgrimage Tours', path: '/pilgrimage-tours' },
    { name: 'Travel Planning', path: '/travel-planning' },
  ];

  const isActive = (path: string) => {
    if (path === '/' && location.pathname !== '/') return false;
    if (path !== '/' && location.pathname.startsWith(path)) return true;
    if (path === '/' && location.pathname === '/') return true;
    return false;
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-gray-100' 
          : 'bg-transparent py-5'
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          {/* Left: Logo */}
          <Link to="/" className="flex items-center gap-2 group relative z-50">
            <MapPin className="h-8 w-8 text-accent transition-transform group-hover:scale-110 duration-300" />
            <div className="flex flex-col">
              <span className={`font-serif font-bold text-xl leading-none tracking-wide ${scrolled ? 'text-primary' : 'text-white'}`}>
                COASTAL ANDHRA
              </span>
              <span className={`text-[0.65rem] font-semibold tracking-[0.2em] uppercase leading-none mt-1 ${scrolled ? 'text-secondary' : 'text-white/80'}`}>
                Travels
              </span>
            </div>
          </Link>
          
          {/* Center: Desktop Links */}
          <div className="hidden lg:flex items-center space-x-8">
            {links.map((link) => {
              const active = isActive(link.path);
              return (
                <Link 
                  key={link.name} 
                  to={link.path} 
                  className={`relative font-medium text-sm transition-colors duration-300 hover:text-accent ${
                    active ? 'text-accent' : (scrolled ? 'text-primary/80' : 'text-white/90')
                  }`}
                >
                  {link.name}
                  {active && (
                    <motion.div 
                      layoutId="navbar-active"
                      className="absolute -bottom-2 left-0 right-0 h-0.5 bg-accent"
                      initial={false}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right: Contact & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <Link to="/contact" className={`text-sm font-medium transition-colors flex items-center gap-2 ${scrolled ? 'text-primary/80 hover:text-accent' : 'text-white/90 hover:text-white'}`}>
              <Phone className="w-4 h-4" />
              <span>Contact</span>
            </Link>
            <Button variant="primary" className="shadow-md shadow-primary/20">
              Plan My Trip
            </Button>
          </div>

          {/* Mobile Toggle */}
          <div className="lg:hidden flex items-center relative z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-primary focus:outline-none p-2 bg-white/80 rounded-full backdrop-blur-sm shadow-sm border border-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </Container>
      
      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 bg-white z-40 lg:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center justify-center min-h-screen px-6 py-20 space-y-8">
              {links.map((link, index) => {
                const active = isActive(link.path);
                return (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + (index * 0.05) }}
                    key={link.name}
                  >
                    <Link 
                      to={link.path} 
                      className={`text-xl sm:text-2xl md:text-3xl font-serif font-medium tracking-wide ${
                        active ? 'text-accent' : 'text-primary'
                      }`}
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                );
              })}
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + (links.length * 0.05) }}
                className="w-full max-w-xs pt-8 flex flex-col gap-4 border-t border-primary/10 mt-8"
              >
                <Link to="/contact" className="flex items-center justify-center gap-2 sm:gap-3 text-primary font-medium p-3 sm:p-4 text-sm sm:text-base bg-white rounded-md shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
                  <Phone className="w-5 h-5 text-secondary" />
                  Call Us Now
                </Link>
                <Link to="#" className="flex items-center justify-center gap-2 sm:gap-3 text-[#25D366] font-medium p-3 sm:p-4 text-sm sm:text-base bg-white rounded-md shadow-sm border border-gray-100 hover:bg-gray-50 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </Link>
                <Button variant="primary" className="w-full py-3 sm:py-4 text-base sm:text-lg mt-2 shadow-lg shadow-primary/20">
                  Plan My Trip
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
