import React from 'react';
import { Hero } from '../components/home/Hero';
import { TripSearch } from '../components/home/TripSearch';
import { Destinations as HomeDestinations } from '../components/home/Destinations';
import { FeaturedPackages } from '../components/home/FeaturedPackages';
import { JourneyTypes } from '../components/home/JourneyTypes';
import { Trust } from '../components/home/Trust';
import { SeasonalOffers } from '../components/home/SeasonalOffers';
import { Testimonials } from '../components/home/Testimonials';
import { TravelGuides } from '../components/home/TravelGuides';
import { FinalCTA } from '../components/home/FinalCTA';
import { PageHeader } from '../components/ui/PageHeader';
import { Container } from '../components/ui/Container';

export const Home = () => (
  <div className="min-h-screen bg-background">
    <Hero />
    <TripSearch />
    <HomeDestinations />
    <FeaturedPackages />
    <JourneyTypes />
    <Trust />
    <SeasonalOffers />
    <Testimonials />
    <TravelGuides />
    <FinalCTA />
  </div>
);

export { Packages } from './Packages';

export { PackageDetail } from './PackageDetail';

export { Destinations } from './Destinations';

export { PilgrimageTours } from './PilgrimageTours';

export { TravelPlanning } from './TravelPlanning';

export { About } from './About';

export { Contact } from './Contact';
