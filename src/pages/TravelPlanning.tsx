import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle2, ChevronRight, ChevronLeft, MapPin, Calendar, Users, 
  Compass, Wallet, Settings2, Sparkles, Navigation
} from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { travelImages } from '../data/images';

// Step definitions
const STEPS = [
  { id: 'destination', title: 'Destination', icon: <MapPin className="w-5 h-5" /> },
  { id: 'dates', title: 'Dates', icon: <Calendar className="w-5 h-5" /> },
  { id: 'travelers', title: 'Travelers', icon: <Users className="w-5 h-5" /> },
  { id: 'type', title: 'Trip Type', icon: <Compass className="w-5 h-5" /> },
  { id: 'budget', title: 'Budget', icon: <Wallet className="w-5 h-5" /> },
  { id: 'preferences', title: 'Preferences', icon: <Settings2 className="w-5 h-5" /> },
  { id: 'review', title: 'Review', icon: <CheckCircle2 className="w-5 h-5" /> }
];

const TRIP_TYPES = ['Family', 'Couple', 'Pilgrimage', 'Nature', 'Beach', 'Adventure', 'Weekend'];
const BUDGET_RANGES = ['Economy (Under ₹15,000)', 'Standard (₹15,000 - ₹35,000)', 'Premium (₹35,000 - ₹75,000)', 'Luxury (₹75,000+)'];

export const TravelPlanning = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [refNumber, setRefNumber] = useState('');

  // Form Data State
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    adults: 2,
    children: 0,
    tripType: '',
    budget: '',
    hotelPref: '3 Star / Standard',
    transportPref: 'Sedan (AC)',
    foodPref: 'Any',
    specialReq: '',
    additionalInfo: ''
  });

  const updateFormData = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (currentStep < STEPS.length - 1) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = () => {
    // Generate reference
    const randomRef = 'CAT-' + Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
    setRefNumber(randomRef);
    setIsSubmitted(true);
    window.scrollTo(0, 0);
  };

  // Validation helpers per step
  const isStepValid = () => {
    switch(currentStep) {
      case 0: return formData.destination.trim().length > 0;
      case 1: return formData.startDate !== '' && formData.endDate !== '';
      case 2: return formData.adults > 0;
      case 3: return formData.tripType !== '';
      case 4: return formData.budget !== '';
      case 5: return true; // Preferences are optional
      case 6: return true; // Review step
      default: return true;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Plan a Trip That's Truly Yours"
        bgImage={travelImages.categories.nature}
        description="Tell us where you want to go, how you want to travel and what matters most. We'll help shape the journey."
      />

      <section className="py-16 lg:py-24">
        <Container>
          
          {isSubmitted ? (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto bg-white rounded-3xl p-10 md:p-16 border border-gray-100 shadow-xl text-center"
            >
              <div className="w-24 h-24 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-green-500" />
              </div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">Request Received</h2>
              <p className="text-gray-600 text-lg mb-8">
                Thank you! Your travel planning request has been successfully submitted. We'll use the details you provided to prepare a custom itinerary.
              </p>
              
              <div className="bg-background border border-gray-200 rounded-2xl p-6 mb-8 inline-block text-left">
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mb-1">Reference Number</p>
                <p className="text-2xl font-bold text-primary font-mono">{refNumber}</p>
              </div>

              <div className="bg-orange-50 border border-orange-100 p-4 rounded-xl mb-10">
                <p className="text-sm text-orange-800 font-medium flex items-center justify-center gap-2">
                  <Sparkles className="w-4 h-4" /> Your trip plan has been generated successfully.
                </p>
              </div>

              <Button variant="primary" onClick={() => window.location.reload()}>Plan Another Trip</Button>
            </motion.div>
          ) : (
            <div className="max-w-4xl mx-auto">
              
              {/* Progress Indicator */}
              <div className="mb-12">
                <div className="flex justify-between items-center relative z-10 px-2 md:px-6">
                  {/* Progress Line */}
                  <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -z-10 -translate-y-1/2 mx-8 md:mx-14"></div>
                  <div 
                    className="absolute top-1/2 left-0 h-1 bg-accent -z-10 -translate-y-1/2 transition-all duration-500 ease-out mx-8 md:mx-14"
                    style={{ width: `calc(${currentStep / (STEPS.length - 1)} * (100% - 4rem))` }}
                  ></div>

                  {STEPS.map((step, idx) => (
                    <div key={idx} className="flex flex-col items-center gap-2">
                      <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-4 transition-colors duration-300
                        ${idx < currentStep ? 'bg-accent border-accent text-white' : 
                          idx === currentStep ? 'bg-white border-accent text-accent shadow-lg shadow-accent/20' : 
                          'bg-white border-gray-200 text-gray-400'}`}
                      >
                        {idx < currentStep ? <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6" /> : step.icon}
                      </div>
                      <span className={`text-[10px] md:text-xs font-bold uppercase tracking-wider hidden md:block
                        ${idx <= currentStep ? 'text-primary' : 'text-gray-400'}`}>
                        {step.title}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Form Content */}
              <div className="bg-white rounded-3xl p-6 md:p-12 border border-gray-100 shadow-sm min-h-[400px] flex flex-col">
                
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    className="flex-grow"
                  >
                    
                    {/* STEP 0: Destination */}
                    {currentStep === 0 && (
                      <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">Where are you going?</h2>
                        <p className="text-gray-500 mb-8">Enter a specific city, region, or just "Undecided" if you want suggestions.</p>
                        
                        <div className="max-w-md">
                          <label className="block text-sm font-bold text-primary mb-2">Destination</label>
                          <div className="relative">
                            <Navigation className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <input 
                              type="text" 
                              placeholder="e.g. Visakhapatnam, Araku, Tirupati..." 
                              value={formData.destination}
                              onChange={(e) => updateFormData('destination', e.target.value)}
                              className="w-full pl-12 pr-4 py-4 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent font-medium transition-shadow text-primary"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 1: Dates */}
                    {currentStep === 1 && (
                      <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">When are you travelling?</h2>
                        <p className="text-gray-500 mb-8">Select your preferred start and end dates.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-xl">
                          <div>
                            <label className="block text-sm font-bold text-primary mb-2">Start Date</label>
                            <input 
                              type="date" 
                              value={formData.startDate}
                              onChange={(e) => updateFormData('startDate', e.target.value)}
                              className="w-full px-4 py-4 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                            />
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-primary mb-2">End Date</label>
                            <input 
                              type="date" 
                              value={formData.endDate}
                              onChange={(e) => updateFormData('endDate', e.target.value)}
                              className="w-full px-4 py-4 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                            />
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 2: Travelers */}
                    {currentStep === 2 && (
                      <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">Who is travelling?</h2>
                        <p className="text-gray-500 mb-8">Tell us how many people are in your group.</p>
                        
                        <div className="max-w-md space-y-6">
                          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                            <div>
                              <p className="font-bold text-primary">Adults</p>
                              <p className="text-sm text-gray-500">Ages 12 or above</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <button 
                                onClick={() => updateFormData('adults', Math.max(1, formData.adults - 1))}
                                className="w-10 h-10 rounded-full bg-background border border-gray-200 flex items-center justify-center font-bold text-primary hover:border-accent hover:text-accent"
                              >-</button>
                              <span className="w-4 text-center font-bold text-lg text-primary">{formData.adults}</span>
                              <button 
                                onClick={() => updateFormData('adults', formData.adults + 1)}
                                className="w-10 h-10 rounded-full bg-background border border-gray-200 flex items-center justify-center font-bold text-primary hover:border-accent hover:text-accent"
                              >+</button>
                            </div>
                          </div>

                          <div className="flex items-center justify-between p-4 border border-gray-200 rounded-xl">
                            <div>
                              <p className="font-bold text-primary">Children</p>
                              <p className="text-sm text-gray-500">Ages 0 to 11</p>
                            </div>
                            <div className="flex items-center gap-4">
                              <button 
                                onClick={() => updateFormData('children', Math.max(0, formData.children - 1))}
                                className="w-10 h-10 rounded-full bg-background border border-gray-200 flex items-center justify-center font-bold text-primary hover:border-accent hover:text-accent"
                              >-</button>
                              <span className="w-4 text-center font-bold text-lg text-primary">{formData.children}</span>
                              <button 
                                onClick={() => updateFormData('children', formData.children + 1)}
                                className="w-10 h-10 rounded-full bg-background border border-gray-200 flex items-center justify-center font-bold text-primary hover:border-accent hover:text-accent"
                              >+</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* STEP 3: Trip Type */}
                    {currentStep === 3 && (
                      <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">What type of trip?</h2>
                        <p className="text-gray-500 mb-8">Select the style that best fits your journey.</p>
                        
                        <div className="flex flex-wrap gap-4">
                          {TRIP_TYPES.map(type => (
                            <button
                              key={type}
                              onClick={() => updateFormData('tripType', type)}
                              className={`px-6 py-3 rounded-full border font-bold transition-all ${
                                formData.tripType === type 
                                ? 'bg-accent border-accent text-white shadow-md' 
                                : 'bg-background border-gray-200 text-gray-600 hover:border-accent hover:text-accent'
                              }`}
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 4: Budget */}
                    {currentStep === 4 && (
                      <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">What is your budget?</h2>
                        <p className="text-gray-500 mb-8">Select an estimated budget range per person.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {BUDGET_RANGES.map(range => (
                            <button
                              key={range}
                              onClick={() => updateFormData('budget', range)}
                              className={`p-6 rounded-2xl border text-left font-bold transition-all ${
                                formData.budget === range 
                                ? 'bg-accent/5 border-accent text-primary shadow-sm ring-1 ring-accent' 
                                : 'bg-background border-gray-200 text-gray-600 hover:border-accent'
                              }`}
                            >
                              {range}
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* STEP 5: Preferences */}
                    {currentStep === 5 && (
                      <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">Travel Preferences</h2>
                        <p className="text-gray-500 mb-8">Help us tailor the fine details of your trip.</p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                          <div>
                            <label className="block text-sm font-bold text-primary mb-2">Hotel Preference</label>
                            <select 
                              value={formData.hotelPref}
                              onChange={(e) => updateFormData('hotelPref', e.target.value)}
                              className="w-full px-4 py-3 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                            >
                              <option>Budget / Homestays</option>
                              <option>3 Star / Standard</option>
                              <option>4 Star / Premium</option>
                              <option>5 Star / Luxury</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-primary mb-2">Transportation</label>
                            <select 
                              value={formData.transportPref}
                              onChange={(e) => updateFormData('transportPref', e.target.value)}
                              className="w-full px-4 py-3 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                            >
                              <option>Public / Self-Managed</option>
                              <option>Sedan (AC)</option>
                              <option>SUV (Innova/Ertiga AC)</option>
                              <option>Tempo Traveller</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-primary mb-2">Food Preferences</label>
                            <select 
                              value={formData.foodPref}
                              onChange={(e) => updateFormData('foodPref', e.target.value)}
                              className="w-full px-4 py-3 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                            >
                              <option>Any</option>
                              <option>Strictly Vegetarian</option>
                              <option>Jain Food</option>
                              <option>Non-Vegetarian Preferred</option>
                            </select>
                          </div>
                          <div>
                            <label className="block text-sm font-bold text-primary mb-2">Special Requirements</label>
                            <select 
                              value={formData.specialReq}
                              onChange={(e) => updateFormData('specialReq', e.target.value)}
                              className="w-full px-4 py-3 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary"
                            >
                              <option value="">None</option>
                              <option>Wheelchair Accessibility</option>
                              <option>Elderly Support</option>
                              <option>Infant Care Setup</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block text-sm font-bold text-primary mb-2">Additional Information</label>
                          <textarea 
                            rows={3}
                            placeholder="Tell us anything else about your trip (special occasions, places you must visit, etc.)"
                            value={formData.additionalInfo}
                            onChange={(e) => updateFormData('additionalInfo', e.target.value)}
                            className="w-full px-4 py-3 bg-background border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-accent font-medium text-primary resize-none"
                          ></textarea>
                        </div>
                      </div>
                    )}

                    {/* STEP 6: Review */}
                    {currentStep === 6 && (
                      <div>
                        <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary mb-2">Review Your Request</h2>
                        <p className="text-gray-500 mb-8">Please check your details before submitting.</p>
                        
                        <div className="bg-background rounded-2xl p-6 md:p-8 border border-gray-100">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-8">
                            
                            <div>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Destination</p>
                              <p className="font-bold text-primary text-lg">{formData.destination}</p>
                            </div>

                            <div>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Dates</p>
                              <p className="font-bold text-primary text-lg">{formData.startDate || 'Not Set'} to {formData.endDate || 'Not Set'}</p>
                            </div>

                            <div>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Travelers</p>
                              <p className="font-bold text-primary text-lg">{formData.adults} Adults, {formData.children} Children</p>
                            </div>

                            <div>
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Trip Type</p>
                              <p className="font-bold text-primary text-lg">{formData.tripType}</p>
                            </div>

                            <div className="md:col-span-2 pt-6 border-t border-gray-200">
                              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">Preferences</p>
                              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                <div>
                                  <span className="text-sm text-gray-500 block">Budget</span>
                                  <span className="font-bold text-primary text-sm">{formData.budget.split('(')[0]}</span>
                                </div>
                                <div>
                                  <span className="text-sm text-gray-500 block">Hotel</span>
                                  <span className="font-bold text-primary text-sm">{formData.hotelPref}</span>
                                </div>
                                <div>
                                  <span className="text-sm text-gray-500 block">Transport</span>
                                  <span className="font-bold text-primary text-sm">{formData.transportPref}</span>
                                </div>
                                <div>
                                  <span className="text-sm text-gray-500 block">Food</span>
                                  <span className="font-bold text-primary text-sm">{formData.foodPref}</span>
                                </div>
                              </div>
                            </div>
                            
                            {formData.additionalInfo && (
                              <div className="md:col-span-2 pt-6 border-t border-gray-200">
                                <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1">Additional Notes</p>
                                <p className="text-primary italic">{formData.additionalInfo}</p>
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                  </motion.div>
                </AnimatePresence>
                
                {/* Navigation Buttons */}
                <div className="mt-auto pt-8 flex items-center justify-between border-t border-gray-100">
                  <Button 
                    variant="ghost" 
                    onClick={handleBack}
                    disabled={currentStep === 0}
                    className={currentStep === 0 ? 'opacity-0 pointer-events-none' : ''}
                  >
                    <ChevronLeft className="w-4 h-4 mr-1" /> Back
                  </Button>
                  
                  {currentStep === STEPS.length - 1 ? (
                    <Button variant="accent" onClick={handleSubmit} className="px-8 shadow-lg shadow-accent/20">
                      Create My Itinerary
                    </Button>
                  ) : (
                    <Button 
                      variant="primary" 
                      onClick={handleNext}
                      disabled={!isStepValid()}
                      className={!isStepValid() ? 'opacity-50 cursor-not-allowed' : ''}
                    >
                      Continue <ChevronRight className="w-4 h-4 ml-1" />
                    </Button>
                  )}
                </div>

              </div>
            </div>
          )}
          
          {/* Contextual CTA */}
          {!isSubmitted && (
            <div className="mt-12 text-center">
              <p className="text-gray-500 mb-4">Prefer to speak with someone?</p>
              <Button variant="outline" className="bg-white" onClick={() => window.location.href = '/contact'}>
                Contact Travel Expert
              </Button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};
