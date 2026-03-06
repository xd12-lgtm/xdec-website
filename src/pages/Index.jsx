import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import './../i18n';
import SEO from './../components/SEO';
import Header from './../components/Header';
import HeroSection from './../components/HeroSection';
import AboutSection from './../components/AboutSection';
import ProductsSection from './../components/ProductsSection';
import MediaSection from './../components/MediaSection';
import TechnologySection from './../components/TechnologySection';
import ContactSection from './../components/ContactSection';
import Footer from './../components/Footer';
import CMSIntegration from './../components/CMSIntegration';

const Index = () => {
  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEO />
        <CMSIntegration />
        <Header />
        <main>
          <HeroSection />
          <AboutSection />
          <ProductsSection />
          <MediaSection />
          <TechnologySection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Index;
