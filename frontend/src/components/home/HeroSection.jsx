import React from 'react';
import { Home, Users, Award, MapPin } from 'lucide-react';
import HeroMain from '../common/HeroMain';
import HeroStats from '../common/HeroStats';
import HeroIntro from '../common/HeroIntro';

const HeroSection = () => {
  const stats = [
    { icon: Home, label: 'Properties', value: '500+' },
    { icon: Users, label: 'Happy Clients', value: '1200+' },
    { icon: Award, label: 'Awards Won', value: '15+' },
    { icon: MapPin, label: 'Locations', value: '25+' }
  ];

  return (
    <div className="relative overflow-hidden">
      <HeroMain />
      <HeroStats stats={stats} />
      <HeroIntro />
    </div>
  );
};

export default HeroSection;