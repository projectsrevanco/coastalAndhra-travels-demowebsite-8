import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, MessageCircle } from 'lucide-react';
import { Container } from '../ui/Container';

export const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-24 pb-10 border-t-4 border-accent">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Column */}
          <div className="lg:col-span-4 lg:pr-8">
            <Link to="/" className="inline-block mb-6">
              <span className="font-serif font-bold text-2xl md:text-3xl tracking-wide uppercase block leading-none">Coastal Andhra</span>
              <span className="font-serif text-lg md:text-xl tracking-[0.3em] uppercase text-white/80 block mt-1">Travels</span>
            </Link>
            <p className="text-white/80 max-w-sm mb-8 leading-relaxed">
              Trusted journeys across Andhra Pradesh and beyond. Experience the perfect blend of coastal escapes, spiritual journeys, and natural retreats.
            </p>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-white/10 hover:border-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-white/10 hover:border-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-white/10 hover:border-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-white transition-all duration-300 border border-white/10 hover:border-accent">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"/><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"/></svg>
              </a>
            </div>
          </div>

          {/* Explore Column */}
          <div className="lg:col-span-2 lg:col-start-6">
            <h4 className="font-bold text-lg mb-6 font-serif tracking-wide text-white">Explore</h4>
            <ul className="space-y-4">
              <li><Link to="/destinations" className="text-white/70 hover:text-accent transition-colors text-sm font-medium">Destinations</Link></li>
              <li><Link to="/packages" className="text-white/70 hover:text-accent transition-colors text-sm font-medium">Tour Packages</Link></li>
              <li><Link to="/pilgrimage-tours" className="text-white/70 hover:text-accent transition-colors text-sm font-medium">Pilgrimage Tours</Link></li>
              <li><Link to="/travel-planning" className="text-white/70 hover:text-accent transition-colors text-sm font-medium">Travel Planning</Link></li>
              <li><Link to="/travel-planning" className="text-white/70 hover:text-accent transition-colors text-sm font-medium">Travel Guides</Link></li>
            </ul>
          </div>

          {/* Support Column */}
          <div className="lg:col-span-2">
            <h4 className="font-bold text-lg mb-6 font-serif tracking-wide text-white">Support</h4>
            <ul className="space-y-4">
              <li><Link to="/contact" className="text-white/70 hover:text-accent transition-colors text-sm font-medium">Contact Us</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-accent transition-colors text-sm font-medium">FAQs</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-accent transition-colors text-sm font-medium">Cancellation Policy</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-accent transition-colors text-sm font-medium">Refund Policy</Link></li>
              <li><Link to="/contact" className="text-white/70 hover:text-accent transition-colors text-sm font-medium">Booking Assistance</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div className="lg:col-span-3">
            <h4 className="font-bold text-lg mb-6 font-serif tracking-wide text-white">Contact</h4>
            <ul className="space-y-5">
              <li className="flex gap-3 text-white/80 text-sm">
                <Phone className="w-5 h-5 shrink-0 text-accent" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3 text-white/80 text-sm">
                <MessageCircle className="w-5 h-5 shrink-0 text-accent" />
                <span>+91 98765 43210</span>
              </li>
              <li className="flex gap-3 text-white/80 text-sm">
                <Mail className="w-5 h-5 shrink-0 text-accent" />
                <span>contact@coastalandhratravels.in</span>
              </li>
              <li className="flex gap-3 text-white/80 text-sm">
                <MapPin className="w-5 h-5 shrink-0 text-accent" />
                <span className="leading-relaxed">123 Sunrise Avenue, Beach Road<br />Visakhapatnam, Andhra Pradesh</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-xs text-center md:text-left font-medium">
            © 2026 Coastal Andhra Travels. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/contact" className="text-white/50 hover:text-white text-xs font-medium transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="text-white/50 hover:text-white text-xs font-medium transition-colors">Terms of Service</Link>
            <Link to="/contact" className="text-white/50 hover:text-white text-xs font-medium transition-colors">Cancellation Policy</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
