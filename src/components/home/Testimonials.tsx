import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

const testimonials = [
  {
    id: 1,
    name: 'Meghana S.',
    trip: 'Konaseema Nature Retreat',
    quote: "The backwaters of Konaseema were incredibly peaceful. The curated homestay and local food recommendations made our family holiday truly unforgettable. It felt like we were in a completely different world, away from the city's chaos.",
    isFeatured: true
  },
  {
    id: 2,
    name: 'Ravi K.',
    trip: 'Araku Valley Escape',
    quote: "Stunning coffee plantations and a seamless travel experience from start to finish. Highly recommend this weekend trip to anyone needing a quick reset.",
    isFeatured: false
  },
  {
    id: 3,
    name: 'Suresh P.',
    trip: 'Tirupati Spiritual Journey',
    quote: "Extremely well organized. The temple transfers were punctual, the guidance was clear, and the accommodation provided was incredibly comfortable.",
    isFeatured: false
  },
  {
    id: 4,
    name: 'Ananya R.',
    trip: 'Vizag Coastal Getaway',
    quote: "The perfect short holiday! We loved the beachside stay and the relaxed, easy-going itinerary which was absolutely perfect for our kids.",
    isFeatured: false
  }
];

export const Testimonials = () => {
  return (
    <section className="py-24 bg-white border-t border-gray-100">
      <Container>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center max-w-3xl mx-auto flex flex-col items-center"
        >
          <SectionHeading 
            title="Stories From Our Travellers" 
            subtitle="Real Experiences"
            className="!mb-4"
          />
          <p className="text-gray-600 text-lg">
            Real journeys are remembered long after the trip ends.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
          {/* Featured Review */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 bg-background rounded-2xl p-8 lg:p-12 relative overflow-hidden flex flex-col h-full shadow-sm border border-gray-100/50"
          >
            <Quote className="absolute top-6 left-6 lg:top-8 lg:left-8 w-32 h-32 text-primary/5 -z-0 rotate-180" />
            <div className="relative z-10 flex-grow flex flex-col">
              <div className="flex gap-1.5 mb-10">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="text-2xl lg:text-3xl font-serif font-medium text-primary mb-12 leading-snug flex-grow">
                "{testimonials[0].quote}"
              </blockquote>
              <div className="mt-auto border-t border-gray-200/60 pt-6">
                <p className="font-bold text-lg text-primary">{testimonials[0].name}</p>
                <p className="text-sm text-gray-500 uppercase tracking-widest font-bold mt-1">
                  {testimonials[0].trip}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Supporting Reviews */}
          <div className="lg:col-span-6 flex flex-col gap-6 justify-between">
            {testimonials.slice(1).map((testimonial, index) => (
              <motion.div 
                key={testimonial.id}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="bg-white p-6 md:p-8 rounded-2xl border border-gray-100 shadow-sm flex flex-col h-full hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <blockquote className="text-gray-600 text-base md:text-lg italic mb-6 flex-grow leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                <div className="mt-auto pt-4 border-t border-gray-50">
                  <p className="font-bold text-primary">{testimonial.name}</p>
                  <p className="text-xs text-gray-500 uppercase tracking-widest font-bold mt-1">
                    {testimonial.trip}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-xs text-gray-400 font-medium">
            Customer experiences shown here are verified.
          </p>
        </motion.div>
      </Container>
    </section>
  );
};
