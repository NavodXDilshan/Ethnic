import type { NextPage } from 'next';

import  Footer  from 'components/ui/Footer';
import { Header } from 'components/ui/Header';
import { CarouselSection } from 'components/ui/sections/Carousel';
import { DestinationsSection } from 'components/ui/sections/Destination';
import { HeroSection } from 'components/ui/sections/Hero1';
import { SelectionSection } from 'components/ui/sections/Selection';


const index: NextPage = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <DestinationsSection />
      <Footer />
    </>
  );
};

export default index;
