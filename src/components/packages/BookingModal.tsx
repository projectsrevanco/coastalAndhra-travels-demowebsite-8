import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  X, CheckCircle2, ChevronRight, ChevronLeft, MapPin, 
  Calendar, Users, Info, ShieldCheck, Sparkles 
} from 'lucide-react';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from '../ui/ImageWithFallback';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  packageData: {
    id: string;
    name: string;
    destination: string;
    duration: string;
    price: number;
    image: string;
  };
}

export const BookingModal = ({ isOpen, onClose, packageData }: BookingModalProps) => {
  const [step, setStep] = useState(1);
  const [refNumber, setRefNumber] = useState('');

  // Form State
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    travellers: 2,
    date: '',
    roomPref: 'Standard Double',
    transportPref: 'Private AC Sedan',
    specialReq: ''
  });

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen) {
      setStep(1);
      setFormData({
        fullName: '',
        phone: '',
        email: '',
        travellers: 2,
        date: '',
        roomPref: 'Standard Double',
        transportPref: 'Private AC Sedan',
        specialReq: ''
      });
      setRefNumber('');
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  if (!isOpen) return null;

  const updateForm = (field: string, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => setStep(prev => prev + 1);
  const handleBack = () => setStep(prev => prev - 1);

  const handleSubmit = () => {
    // Generate booking reference
    const randomRef = 'CAT-2026-' + Math.floor(1000 + Math.random() * 9000).toString();
    setRefNumber(randomRef);
    setStep(5);
  };

  const isStep2Valid = formData.fullName.trim() !== '' && formData.phone.trim() !== '' && formData.email.trim() !== '';
  const isStep3Valid = formData.date !== '';

  const totalEstimated = packageData.price * formData.travellers;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12">
      {/* Backdrop */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={step === 5 ? onClose : undefined}
        className="absolute inset-0 bg-primary/80 backdrop-blur-sm"
      ></motion.div>

      {/* Modal Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-full"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100 bg-white z-10 shrink-0">
          <div>
            <h3 className="font-serif font-bold text-xl text-primary">Booking Request</h3>
            {step < 5 && <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mt-1">Step {step} of 4</p>}
          </div>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-background flex items-center justify-center text-gray-500 hover:text-primary hover:bg-gray-200 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto flex-grow bg-background relative">
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Trip Summary */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 md:p-10 max-w-2xl mx-auto"
              >
                <h2 className="text-2xl font-serif font-bold text-primary mb-6 text-center">Trip Summary</h2>
                
                <div className="bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
                  <div className="h-48 relative">
                    <ImageWithFallback src={packageData.image} alt={packageData.name} className="w-full h-full object-cover" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/95 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider shadow-sm flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-accent" /> {packageData.destination}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-primary mb-2">{packageData.name}</h3>
                    <p className="text-gray-500 font-medium mb-6 flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {packageData.duration}
                    </p>
                    <div className="pt-6 border-t border-gray-100 flex justify-between items-end">
                      <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">Price per person</p>
                      <p className="text-3xl font-bold text-primary">₹{packageData.price.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-end">
                  <Button variant="accent" onClick={handleNext} className="w-full md:w-auto px-8">
                    Continue to Details <ChevronRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Traveller Details */}
            {step === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 md:p-10 max-w-2xl mx-auto"
              >
                <h2 className="text-2xl font-serif font-bold text-primary mb-2">Traveller Details</h2>
                <p className="text-gray-500 mb-8">Please provide the primary contact information.</p>
                
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Full Name *</label>
                    <input 
                      type="text" 
                      value={formData.fullName}
                      onChange={(e) => updateForm('fullName', e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Phone Number *</label>
                      <input 
                        type="tel" 
                        value={formData.phone}
                        onChange={(e) => updateForm('phone', e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-primary mb-2">Email Address *</label>
                      <input 
                        type="email" 
                        value={formData.email}
                        onChange={(e) => updateForm('email', e.target.value)}
                        className="w-full px-4 py-3 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                      />
                    </div>
                  </div>
                  <div className="pt-4 border-t border-gray-100">
                    <label className="block text-sm font-bold text-primary mb-2">Number of Travellers</label>
                    <div className="flex items-center gap-4">
                      <button 
                        onClick={() => updateForm('travellers', Math.max(1, formData.travellers - 1))}
                        className="w-10 h-10 rounded-full bg-background border border-gray-200 flex items-center justify-center font-bold text-primary hover:border-accent hover:text-accent"
                      >-</button>
                      <span className="w-8 text-center font-bold text-xl text-primary">{formData.travellers}</span>
                      <button 
                        onClick={() => updateForm('travellers', formData.travellers + 1)}
                        className="w-10 h-10 rounded-full bg-background border border-gray-200 flex items-center justify-center font-bold text-primary hover:border-accent hover:text-accent"
                      >+</button>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button variant="ghost" onClick={handleBack}><ChevronLeft className="w-4 h-4 mr-1" /> Back</Button>
                  <Button variant="primary" onClick={handleNext} disabled={!isStep2Valid}>Continue <ChevronRight className="w-4 h-4 ml-1" /></Button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Travel Details */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 md:p-10 max-w-2xl mx-auto"
              >
                <h2 className="text-2xl font-serif font-bold text-primary mb-2">Travel Details</h2>
                <p className="text-gray-500 mb-8">Customize the logistics of your journey.</p>
                
                <div className="bg-white p-6 md:p-8 rounded-2xl border border-gray-200 shadow-sm space-y-6">
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Preferred Start Date *</label>
                    <input 
                      type="date" 
                      value={formData.date}
                      onChange={(e) => updateForm('date', e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Room Preference</label>
                    <select 
                      value={formData.roomPref}
                      onChange={(e) => updateForm('roomPref', e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                    >
                      <option>Standard Double</option>
                      <option>Twin Sharing</option>
                      <option>Family Suite</option>
                      <option>Single Occupancy (+ Supplement)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Transportation Preference</label>
                    <select 
                      value={formData.transportPref}
                      onChange={(e) => updateForm('transportPref', e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                    >
                      <option>Private AC Sedan</option>
                      <option>Private AC SUV (Innova)</option>
                      <option>Tempo Traveller (For Groups)</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-primary mb-2">Special Requirements (Optional)</label>
                    <textarea 
                      rows={2}
                      value={formData.specialReq}
                      onChange={(e) => updateForm('specialReq', e.target.value)}
                      className="w-full px-4 py-3 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary resize-none"
                      placeholder="Dietary needs, accessibility requirements, etc."
                    ></textarea>
                  </div>
                </div>

                <div className="mt-8 flex justify-between">
                  <Button variant="ghost" onClick={handleBack}><ChevronLeft className="w-4 h-4 mr-1" /> Back</Button>
                  <Button variant="primary" onClick={handleNext} disabled={!isStep3Valid}>Review Request <ChevronRight className="w-4 h-4 ml-1" /></Button>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Price Summary */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="p-6 md:p-10 max-w-2xl mx-auto"
              >
                <h2 className="text-2xl font-serif font-bold text-primary mb-2">Price Summary</h2>
                <p className="text-gray-500 mb-8">Review the estimated cost before submitting your request.</p>
                
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden mb-6">
                  <div className="p-6 bg-primary text-white">
                    <h4 className="font-bold text-lg mb-1">{packageData.name}</h4>
                    <p className="text-primary-foreground/70 text-sm flex items-center gap-2">
                      <Calendar className="w-4 h-4" /> {formData.date} • {formData.travellers} Travellers
                    </p>
                  </div>
                  <div className="p-6 md:p-8 space-y-4">
                    <div className="flex justify-between items-center text-gray-600">
                      <span>Package Price (per person)</span>
                      <span className="font-medium">₹{packageData.price.toLocaleString('en-IN')}</span>
                    </div>
                    <div className="flex justify-between items-center text-gray-600">
                      <span>Number of Travellers</span>
                      <span className="font-medium">x {formData.travellers}</span>
                    </div>
                    <div className="pt-4 border-t border-gray-100 flex justify-between items-center">
                      <span className="font-bold text-primary text-lg">Estimated Total</span>
                      <span className="font-bold text-primary text-3xl">₹{totalEstimated.toLocaleString('en-IN')}</span>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex items-start gap-3 mb-8">
                  <Info className="w-5 h-5 text-orange-800 shrink-0 mt-0.5" />
                  <p className="text-sm text-orange-800 font-medium leading-relaxed">
                    Final pricing will be confirmed by the travel team based on exact dates, room availability, and seasonal fluctuations. No payment is required at this step.
                  </p>
                </div>

                <div className="flex justify-between">
                  <Button variant="ghost" onClick={handleBack}><ChevronLeft className="w-4 h-4 mr-1" /> Back</Button>
                  <Button variant="accent" onClick={handleSubmit} className="px-8 shadow-lg shadow-accent/20">Submit Booking Request</Button>
                </div>
              </motion.div>
            )}

            {/* STEP 5: Confirmation */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-6 md:p-16 max-w-2xl mx-auto text-center"
              >
                <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-12 h-12 text-green-500" />
                </div>
                <h2 className="text-3xl font-serif font-bold text-primary mb-4">Booking Request Received</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  Thank you, {formData.fullName.split(' ')[0]}. We have received your request for the <span className="font-bold">{packageData.name}</span> package.
                </p>

                <div className="bg-white border border-gray-200 rounded-2xl p-6 mb-8 inline-block text-left shadow-sm">
                  <p className="text-sm text-gray-400 uppercase tracking-widest font-bold mb-1">Booking Reference</p>
                  <p className="text-3xl font-bold text-primary font-mono">{refNumber}</p>
                </div>

                <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl flex items-center justify-center gap-2 mb-10 mx-auto max-w-md">
                  <Sparkles className="w-4 h-4 text-orange-800" />
                  <span className="text-sm font-medium text-orange-800">Your booking has been received.</span>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Button variant="primary" onClick={onClose} className="w-full sm:w-auto">View Package</Button>
                  <Link to="/" className="w-full sm:w-auto">
                    <Button variant="outline" className="w-full">Return Home</Button>
                  </Link>
                  <Link to="/contact" className="w-full sm:w-auto">
                    <Button variant="ghost" className="w-full">Contact Expert</Button>
                  </Link>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
};
