import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MapPin, Clock, CheckCircle2, XCircle, Calendar, 
  Info, ShieldCheck, Star, Bed, Bus 
} from 'lucide-react';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { BookingModal } from '../components/packages/BookingModal';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { travelImages } from '../data/images';

// Mock data
const packageData = {
  id: 'araku-valley-escape',
  name: 'Araku Valley Escape',
  destination: 'Araku Valley, Andhra Pradesh',
  duration: '3 Days / 2 Nights',
  price: 8499,
  images: [
    travelImages.packages.arakuEscape,
    travelImages.categories.nature,
    travelImages.lambasingi
  ],
  overview: "Experience the misty mountains, rich coffee plantations, and tribal culture of Araku Valley. This carefully curated 3-day journey takes you through the most scenic routes in Andhra Pradesh, featuring a memorable Vistadome train ride, breathtaking viewpoints, and comfortable stays.",
  highlights: [
    "Vistadome train journey through the Eastern Ghats",
    "Visit to the ancient Borra Caves",
    "Explore lush green coffee plantations",
    "Tribal museum and local cultural experiences",
    "Katiki Waterfalls excursion"
  ],
  itinerary: [
    {
      day: '01',
      title: 'Arrival & Vistadome Journey',
      description: 'Arrive in Visakhapatnam early morning. Board the Vistadome glass-dome train for a breathtaking 4-hour journey through tunnels and valleys to Araku. Check-in to your resort and spend the evening exploring the local coffee museum and tribal gardens.'
    },
    {
      day: '02',
      title: 'Caves & Waterfalls',
      description: 'After breakfast, drive to the famous million-year-old Borra Caves. Later, take a thrilling jeep ride to Katiki Waterfalls. Return to Araku by evening for a traditional Dhimsa dance performance (subject to availability).'
    },
    {
      day: '03',
      title: 'Viewpoints & Return',
      description: 'Wake up early to catch the sunrise at Galikonda Viewpoint, the highest point in Visakhapatnam district. Visit the Padmapuram Botanical Gardens before beginning your scenic road journey back to Vizag.'
    }
  ],
  inclusions: [
    '2 Nights accommodation in a premium resort',
    'Daily breakfast and dinner',
    'Vistadome train tickets (Vizag to Araku)',
    'AC private vehicle for all transfers and sightseeing',
    'All toll, parking, and driver allowances'
  ],
  exclusions: [
    'Flights/Trains to Visakhapatnam',
    'Entry tickets to monuments and parks',
    'Lunch and personal expenses',
    'Optional jeep ride at Katiki Waterfalls'
  ],
  accommodation: "Stay in carefully selected premium properties with valley views. All rooms feature modern amenities, attached baths, and complimentary Wi-Fi. (Options: Novotel Varun Beach equivalent in Vizag, Haritha Valley Resort or equivalent in Araku).",
  transportation: "All transfers and sightseeing by private air-conditioned Sedan (Dzire/Etios for up to 3 pax) or SUV (Innova for 4-6 pax). Professional tourist driver included.",
  faqs: [
    {
      q: 'Is this trip suitable for children and elderly?',
      a: 'Yes, this is a family-friendly itinerary. However, the jeep ride to Katiki waterfalls can be bumpy, and Borra Caves involves walking on uneven stairs.'
    },
    {
      q: 'When is the best time to visit Araku?',
      a: 'The best time is between September and February when the weather is cool and the valleys are lush green. November and December are particularly magical with morning mist.'
    }
  ]
};

export const PackageDetail = () => {
  const { slug } = useParams();
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  
  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Gallery Section */}
      <section className="relative pt-24 lg:pt-32 pb-12 lg:pb-16 bg-background">
        <Container>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row gap-4 lg:gap-6 mb-8"
          >
            <div className="w-full lg:w-2/3 h-[300px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden relative shadow-sm">
              <ImageWithFallback src={packageData.images[0]} alt={packageData.name} className="w-full h-full object-cover" />
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-white/95 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-accent" /> {packageData.destination}
                </span>
              </div>
            </div>
            <div className="w-full lg:w-1/3 flex flex-row lg:flex-col gap-4 lg:gap-6 h-[150px] sm:h-[200px] lg:h-[500px]">
              <div className="w-1/2 lg:w-full h-full lg:h-1/2 rounded-2xl overflow-hidden shadow-sm">
                <ImageWithFallback src={packageData.images[1]} alt="View 2" className="w-full h-full object-cover" />
              </div>
              <div className="w-1/2 lg:w-full h-full lg:h-1/2 rounded-2xl overflow-hidden shadow-sm">
                <ImageWithFallback src={packageData.images[2]} alt="View 3" className="w-full h-full object-cover" />
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col lg:flex-row justify-between items-start gap-8"
          >
            <div className="max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-serif font-bold text-primary mb-4 leading-tight">
                {packageData.name}
              </h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-600 font-medium">
                <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-accent" /> {packageData.duration}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-gray-300"></span>
                <span className="flex items-center gap-1.5"><Star className="w-4 h-4 text-accent fill-accent" /> 4.8 (124 Reviews)</span>
              </div>
            </div>
            
            <div className="hidden lg:flex flex-row items-center gap-4">
              <Button variant="outline" className="bg-white px-6">Plan Similar Trip</Button>
              <Button variant="accent" className="px-8 shadow-lg shadow-accent/20" onClick={() => setIsBookingModalOpen(true)}>Book This Trip</Button>
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Main Content & Sidebar */}
      <section className="py-16">
        <Container>
          <div className="flex flex-col lg:flex-row gap-12 relative">
            
            {/* Left Content */}
            <div className="w-full lg:w-2/3">
              
              {/* Overview */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="mb-12"
              >
                <h2 className="text-2xl font-serif font-bold text-primary mb-4">Overview</h2>
                <p className="text-gray-600 leading-relaxed text-lg">{packageData.overview}</p>
              </motion.div>

              {/* Highlights */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="mb-12 bg-background p-8 rounded-2xl border border-gray-100"
              >
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Trip Highlights</h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {packageData.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-gray-700 font-medium">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Itinerary */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="mb-12"
              >
                <h2 className="text-2xl font-serif font-bold text-primary mb-8">Day-by-Day Itinerary</h2>
                <div className="relative border-l-2 border-gray-100 ml-4 lg:ml-6 space-y-10 pb-4">
                  {packageData.itinerary.map((day, idx) => (
                    <div key={idx} className="relative pl-8 lg:pl-12">
                      <div className="absolute -left-[17px] top-0 bg-white border-4 border-accent w-8 h-8 rounded-full flex items-center justify-center shadow-sm"></div>
                      <div className="bg-white border border-gray-100 p-6 md:p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow">
                        <span className="text-accent font-bold tracking-widest uppercase text-xs mb-2 block">Day {day.day}</span>
                        <h3 className="text-xl font-bold text-primary mb-3">{day.title}</h3>
                        <p className="text-gray-600 leading-relaxed">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Inclusions & Exclusions */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="mb-12 grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                <div>
                  <h2 className="text-xl font-serif font-bold text-primary mb-6">What's Included</h2>
                  <ul className="space-y-4">
                    {packageData.inclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                        <span className="text-gray-600 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h2 className="text-xl font-serif font-bold text-primary mb-6">What's Not Included</h2>
                  <ul className="space-y-4">
                    {packageData.exclusions.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <XCircle className="w-5 h-5 text-red-500 shrink-0" />
                        <span className="text-gray-600 font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>

              {/* Accommodation & Transport */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="mb-12 space-y-8"
              >
                <div className="flex gap-5 bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0">
                    <Bed className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Accommodation</h3>
                    <p className="text-gray-600 leading-relaxed">{packageData.accommodation}</p>
                  </div>
                </div>
                <div className="flex gap-5 bg-white border border-gray-100 p-6 rounded-2xl shadow-sm">
                  <div className="w-12 h-12 bg-background rounded-full flex items-center justify-center shrink-0">
                    <Bus className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-primary mb-2">Transportation</h3>
                    <p className="text-gray-600 leading-relaxed">{packageData.transportation}</p>
                  </div>
                </div>
              </motion.div>

              {/* Cancellation Policy */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="mb-12 bg-white border border-gray-200 rounded-2xl p-8"
              >
                <h2 className="text-2xl font-serif font-bold text-primary mb-8 flex items-center gap-2">
                  <ShieldCheck className="w-6 h-6 text-accent" /> Cancellation Policy
                </h2>
                
                <div className="flex flex-col md:flex-row justify-between mb-8 relative">
                  <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gray-100 -z-10 -translate-y-1/2"></div>
                  
                  <div className="flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-2 bg-white px-2 mb-6 md:mb-0">
                    <div className="w-4 h-4 rounded-full bg-green-500 ring-4 ring-green-50"></div>
                    <div className="text-left md:text-center">
                      <p className="font-bold text-primary">Free Cancellation</p>
                      <p className="text-sm text-gray-500">Up to 15 days before</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-2 bg-white px-2 mb-6 md:mb-0">
                    <div className="w-4 h-4 rounded-full bg-orange-400 ring-4 ring-orange-50"></div>
                    <div className="text-left md:text-center">
                      <p className="font-bold text-primary">50% Refund</p>
                      <p className="text-sm text-gray-500">7 to 15 days before</p>
                    </div>
                  </div>

                  <div className="flex flex-row md:flex-col items-center md:items-center gap-4 md:gap-2 bg-white px-2">
                    <div className="w-4 h-4 rounded-full bg-red-500 ring-4 ring-red-50"></div>
                    <div className="text-left md:text-center">
                      <p className="font-bold text-primary">No Refund</p>
                      <p className="text-sm text-gray-500">Within 7 days</p>
                    </div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 italic text-center">* Standard cancellation terms apply.</p>
              </motion.div>

              {/* FAQs */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                className="mb-12"
              >
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Frequently Asked Questions</h2>
                <div className="space-y-4">
                  {packageData.faqs.map((faq, idx) => (
                    <div key={idx} className="bg-background p-6 rounded-xl border border-gray-100">
                      <h3 className="font-bold text-primary mb-2 flex items-start gap-2">
                        <span className="text-accent">Q:</span> {faq.q}
                      </h3>
                      <p className="text-gray-600 pl-6 leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Reviews */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h2 className="text-2xl font-serif font-bold text-primary mb-6">Traveller Reviews</h2>
                <div className="bg-white border border-gray-100 rounded-2xl p-6 md:p-8 shadow-sm mb-4">
                  <div className="flex items-center gap-1.5 mb-4">
                    {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-4 h-4 fill-accent text-accent" />)}
                  </div>
                  <h4 className="text-lg font-bold text-primary mb-3">Beautiful trip, well organized!</h4>
                  <p className="text-gray-600 italic mb-5 leading-relaxed">"The Vistadome journey was exactly as promised. The resort in Araku had stunning views and the driver was very polite, punctual, and guided us well throughout the journey."</p>
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">- Rajesh K., Family Trip</p>
                </div>
                <p className="text-xs text-gray-400 text-center font-medium">Reviews shown are from verified travelers.</p>
              </motion.div>

            </div>

            {/* Right Sidebar (Sticky Booking Card) */}
            <div className="w-full lg:w-1/3">
              <div className="sticky top-24 bg-white border border-gray-200 rounded-2xl shadow-xl overflow-hidden p-6 z-10 hidden lg:block">
                <div className="mb-6 pb-6 border-b border-gray-100">
                  <p className="text-sm text-gray-500 font-bold uppercase tracking-wider mb-2">Starting Price</p>
                  <div className="flex items-end gap-2">
                    <span className="text-4xl font-bold text-primary">₹{packageData.price.toLocaleString('en-IN')}</span>
                    <span className="text-gray-500 font-medium mb-1">/ person</span>
                  </div>
                  <p className="text-xs text-gray-400 mt-2 font-medium">* Taxes & fees calculated at checkout</p>
                </div>

                <div className="space-y-4 mb-8">
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-gray-600 flex items-center gap-2"><Calendar className="w-4 h-4" /> Travel Dates</span>
                    <span className="text-primary font-bold hover:text-accent cursor-pointer transition-colors">Select Date</span>
                  </div>
                  <div className="flex justify-between items-center text-sm font-medium">
                    <span className="text-gray-600 flex items-center gap-2"><MapPin className="w-4 h-4" /> Start/End</span>
                    <span className="text-primary font-bold">Visakhapatnam</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button variant="accent" className="w-full py-4 text-base shadow-lg shadow-accent/20" onClick={() => setIsBookingModalOpen(true)}>
                    Request to Book
                  </Button>
                  <Button variant="outline" className="w-full bg-white text-base py-4">
                    Customize This Trip
                  </Button>
                </div>
                
                <div className="mt-6 flex items-start gap-3 bg-secondary/5 border border-secondary/10 p-4 rounded-xl">
                  <Info className="w-5 h-5 text-secondary shrink-0 mt-0.5" />
                  <p className="text-xs text-primary/80 font-medium leading-relaxed">
                    Need help deciding? Contact our travel experts for a free consultation about this specific itinerary.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* Mobile Sticky Bottom CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-4 pb-safe shadow-[0_-10px_20px_rgba(0,0,0,0.05)] z-50 flex items-center justify-between">
        <div>
          <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Starting at</p>
          <div className="flex items-end gap-1">
            <p className="text-xl font-bold text-primary leading-none">₹{packageData.price.toLocaleString('en-IN')}</p>
            <span className="text-xs text-gray-500 font-medium mb-0.5">/ person</span>
          </div>
        </div>
        <Button variant="accent" className="px-6 py-2.5 shadow-md shadow-accent/20 text-sm" onClick={() => setIsBookingModalOpen(true)}>
          Book Now
        </Button>
      </div>

      {/* Booking Modal */}
      <BookingModal 
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
        packageData={{ ...packageData, image: packageData.images[0] }}
      />

    </div>
  );
};
