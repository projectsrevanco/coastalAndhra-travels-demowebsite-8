import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  PhoneCall, Mail, MessageCircle, MapPin, CheckCircle2, ChevronDown, Sparkles
} from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { travelImages } from '../data/images';

const faqs = [
  { 
    q: 'Can I customize a package?', 
    a: 'Yes! While we offer carefully curated standard packages, all our itineraries can be fully customized based on your travel preferences, budget, and group size.' 
  },
  { 
    q: 'What is included in the package price?', 
    a: 'Standard package prices typically include your accommodation, private local transportation, and breakfast. Specific inclusions and exclusions are clearly listed on every individual package page before you book.' 
  },
  { 
    q: 'How do cancellations work?', 
    a: 'We offer a transparent cancellation policy. Generally, cancellations made 15 days in advance are fully refunded, with sliding scale fees closer to the departure date. (Note: Standard terms apply).'
  },
  { 
    q: 'Can you arrange transportation?', 
    a: 'Yes, we arrange reliable, private AC vehicles (Sedans for couples, SUVs or Tempo Travellers for families and groups) driven by professional local drivers.' 
  },
  { 
    q: 'Can you help with pilgrimage trips?', 
    a: 'Absolutely. We specialize in coordinating seamless pilgrimage journeys including temple transfers and nearby accommodations. (Note: We do not guarantee VIP Darshan tickets).'
  }
];

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    destination: '',
    dates: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const isFormValid = formData.name.trim() !== '' && formData.phone.trim() !== '' && formData.email.trim() !== '' && formData.message.trim() !== '';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      setIsSubmitted(true);
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Let's Plan Your Next Journey"
        bgImage={travelImages.categories.nature}
        description="Have a question about a package or need help planning a trip? Get in touch."
      />

      {/* Main Content */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16">
            
            {/* Left: Contact Info */}
            <div className="w-full lg:w-5/12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">We're here to help</h2>
              <p className="text-gray-600 mb-12 leading-relaxed text-lg">
                Whether you know exactly where you want to go or you're just starting to explore options, our team is ready to assist you.
              </p>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center shrink-0">
                    <PhoneCall className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Call Us</p>
                    <p className="font-bold text-primary text-lg">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center shrink-0">
                    <MessageCircle className="w-6 h-6 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">WhatsApp</p>
                    <p className="font-bold text-primary text-lg">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-secondary" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg">hello@coastalandhratravels.in</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-14 h-14 bg-white border border-gray-100 shadow-sm rounded-2xl flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-primary text-lg leading-relaxed">
                      123 Sunrise Avenue, Beach Road<br/>
                      Visakhapatnam, AP 530003
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form / Success State */}
            <div className="w-full lg:w-7/12">
              <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-xl shadow-primary/5">
                
                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-green-500" />
                    </div>
                    <h3 className="text-2xl font-serif font-bold text-primary mb-4">Thank you. Your enquiry has been received.</h3>
                    <p className="text-gray-600 mb-8 max-w-sm mx-auto leading-relaxed">
                      Our travel experts will review your details and get back to you within 24 hours.
                    </p>
                    
                    <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl inline-flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-orange-800" />
                      <span className="text-sm font-medium text-orange-800">We look forward to helping you.</span>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  >
                    <h3 className="text-2xl font-serif font-bold text-primary mb-8">Send us an Enquiry</h3>
                    
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-primary mb-2">Full Name *</label>
                          <input 
                            type="text" 
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                            placeholder="e.g. Ananya R."
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-primary mb-2">Phone Number *</label>
                          <input 
                            type="tel" 
                            name="phone"
                            required
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                            placeholder="+91"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="md:col-span-2">
                          <label className="block text-sm font-bold text-primary mb-2">Email Address *</label>
                          <input 
                            type="email" 
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                            placeholder="your@email.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label className="block text-sm font-bold text-primary mb-2">Travel Destination</label>
                          <input 
                            type="text" 
                            name="destination"
                            value={formData.destination}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                            placeholder="Where to?"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-bold text-primary mb-2">Expected Travel Dates</label>
                          <input 
                            type="text" 
                            name="dates"
                            value={formData.dates}
                            onChange={handleChange}
                            className="w-full px-4 py-3.5 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                            placeholder="e.g. Next month, Mid Dec"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold text-primary mb-2">Message *</label>
                        <textarea 
                          name="message"
                          required
                          rows={4}
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-3.5 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary resize-none"
                          placeholder="How can we help you plan?"
                        ></textarea>
                      </div>

                      <Button 
                        type="submit" 
                        variant="accent" 
                        className="w-full py-4 text-base shadow-lg shadow-accent/20"
                        disabled={!isFormValid}
                      >
                        Send Enquiry
                      </Button>
                    </form>
                  </motion.div>
                )}

              </div>
            </div>

          </div>
        </Container>
      </section>

      {/* FAQ Section */}
      <section className="py-20 lg:py-24 bg-white border-t border-gray-100">
        <Container>
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Frequently Asked Questions</h2>
              <p className="text-gray-600 text-lg">Quick answers to common travel planning questions.</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <div 
                  key={idx} 
                  className={`border rounded-2xl overflow-hidden transition-colors ${openFaq === idx ? 'bg-background border-gray-200' : 'bg-white border-gray-100 hover:border-gray-200'}`}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-bold text-primary pr-8">{faq.q}</span>
                    <ChevronDown className={`w-5 h-5 text-accent shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openFaq === idx && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="px-6 pb-5 pt-1 text-gray-600 leading-relaxed border-t border-gray-100/50">
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

    </div>
  );
};
