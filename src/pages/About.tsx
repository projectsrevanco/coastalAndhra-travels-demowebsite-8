import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Compass, ShieldCheck, HeartHandshake, Map, Headset, ArrowRight
} from 'lucide-react';
import { PageHeader } from '../components/ui/PageHeader';
import { Container } from '../components/ui/Container';
import { Button } from '../components/ui/Button';
import { ImageWithFallback } from '../components/ui/ImageWithFallback';
import { travelImages } from '../data/images';

const approaches = [
  {
    title: 'Clarity',
    description: 'Every package should be easy to understand. We prioritize transparent itineraries and clear inclusions over confusing terms.',
    icon: <Compass className="w-6 h-6" />
  },
  {
    title: 'Reliability',
    description: 'Travel partners should be carefully selected. We focus on dependable logistics, clean stays, and professional drivers.',
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    title: 'Care',
    description: 'Travellers should know where to turn when they need support. We ensure you have a dedicated point of contact.',
    icon: <HeartHandshake className="w-6 h-6" />
  }
];

const planningSteps = [
  {
    num: '01',
    title: 'Discover',
    description: 'Understand traveller requirements.'
  },
  {
    num: '02',
    title: 'Plan',
    description: 'Build a practical, well-paced itinerary.'
  },
  {
    num: '03',
    title: 'Coordinate',
    description: 'Arrange reliable stays, transportation and activities.'
  },
  {
    num: '04',
    title: 'Support',
    description: 'Assist dependably before and during the journey.'
  }
];

export const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <PageHeader 
        title="Travel Planning With Local Understanding"
        bgImage={travelImages.categories.nature}
        description="We believe in creating thoughtful, well-organized journeys through Andhra Pradesh without the confusion."
      />

      {/* Our Approach */}
      <section className="py-20 lg:py-24">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Our Approach</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              We started with a simple belief: travel should be enriching, not stressful. By focusing on three core principles, we ensure your journey is seamless from start to finish.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {approaches.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="bg-white p-8 lg:p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 bg-background rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-primary mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Why Travellers Choose Us */}
      <section className="py-20 lg:py-24 bg-white border-t border-gray-100 relative overflow-hidden">
        <Container>
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="relative rounded-3xl overflow-hidden h-[350px] md:h-[450px] lg:h-[500px] shadow-xl"
              >
                <ImageWithFallback 
                  src={travelImages.vizag} 
                  alt="Coastal sunset" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
            <div className="w-full lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
              >
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">Why Travellers Choose Us</h2>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  We don't just sell standard templates. We focus on qualitative experiences, understanding that a holiday is precious time meant for relaxation and discovery, not managing logistics.
                </p>
                <ul className="space-y-4">
                  {[
                    'Deep understanding of local Andhra routes and conditions',
                    'Realistic itineraries that respect travel fatigue',
                    'Direct communication without confusing agency layers',
                    'Ethical booking practices with no hidden surprises'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                      <span className="text-primary font-medium">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </Container>
      </section>

      {/* How We Plan Each Journey */}
      <section className="py-20 lg:py-24 bg-background">
        <Container>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">How We Plan Each Journey</h2>
            <p className="text-gray-600 text-lg leading-relaxed">
              A systematic approach to ensuring your trip is structured perfectly for your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {planningSteps.map((step, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden group hover:border-accent/30 transition-colors"
              >
                <div className="text-5xl font-serif font-bold text-background group-hover:text-accent/10 transition-colors absolute -right-2 -top-2">
                  {step.num}
                </div>
                <div className="relative z-10">
                  <span className="text-sm font-bold text-accent mb-2 block tracking-widest uppercase">Step {step.num}</span>
                  <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Partner Verification & Travel Support */}
      <section className="py-20 lg:py-24 bg-white border-y border-gray-100">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-8 h-8 text-secondary" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Partner Verification</h3>
                <p className="text-gray-600 leading-relaxed">
                  We don't work with just anyone. Our hotel and transport partners are carefully selected based on cleanliness, reliability, and professionalism. We continually monitor partner performance to ensure they meet our quality standards.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: 0.2 }}
              className="flex gap-6"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center shrink-0">
                <Headset className="w-8 h-8 text-accent" />
              </div>
              <div>
                <h3 className="text-2xl font-serif font-bold text-primary mb-4">Travel Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Even the best-planned trips can encounter unexpected weather or delays. We provide dependable support so you always have someone to call for assistance or itinerary adjustments during your journey.
                </p>
              </div>
            </motion.div>

          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background text-center relative overflow-hidden">
        <Container className="relative z-10">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-6">
              Ready to start your journey?
            </h2>
            <p className="text-gray-600 text-lg mb-10">
              Let us help you design a thoughtful, well-coordinated trip.
            </p>
            <Link to="/travel-planning">
              <Button variant="accent" className="px-8 py-4 text-base shadow-lg shadow-accent/20">
                Plan Your Trip Today
              </Button>
            </Link>
          </div>
        </Container>
      </section>

    </div>
  );
};
