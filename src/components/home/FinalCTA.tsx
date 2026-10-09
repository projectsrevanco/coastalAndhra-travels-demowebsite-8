import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../ui/Container';
import { Button } from '../ui/Button';
import { travelImages } from '../../data/images';

export const FinalCTA = () => {
  return (
    <section className="relative py-32 md:py-40 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-primary">
        <motion.img 
          initial={{ scale: 1.05 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 10, ease: "linear" }}
          src={travelImages.categories.nature} 
          alt="Scenic Andhra sunset over backwaters"
          className="w-full h-full object-cover"
        />
        {/* Teal / Dark Overlays to ensure text pops perfectly */}
        <div className="absolute inset-0 bg-primary/70 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-primary/80"></div>
      </div>

      <Container className="relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Your Next Journey <br className="hidden md:block" />Starts Here
            </h2>
            <p className="text-white/90 text-lg md:text-xl mb-12 max-w-xl mx-auto font-light leading-relaxed">
              Tell us where you want to go. We'll help you plan the rest.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <Link to="/travel-planning">
                <Button variant="accent" className="w-full sm:w-auto px-8 py-3.5 shadow-lg shadow-accent/20 text-base">
                  Plan My Trip
                </Button>
              </Link>
              <Link to="/contact">
                <Button className="w-full sm:w-auto px-8 py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md transition-all duration-300 text-base">
                  Talk to a Travel Expert
                </Button>
              </Link>
            </div>

            {/* Trust Line */}
            <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 text-white/70 text-xs md:text-sm font-bold tracking-widest uppercase">
              <span>Verified partners</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/80"></span>
              <span>Clear pricing</span>
              <span className="w-1.5 h-1.5 rounded-full bg-accent/80"></span>
              <span>Travel support</span>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
