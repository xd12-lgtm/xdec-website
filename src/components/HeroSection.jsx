import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    // 跳转到公司全面介绍页面
    navigate('/about');
  };

  const handleViewProductsClick = () => {
    // 跳转到产品中心
    navigate('/products');
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-[#1a365d] to-[#2d5a87]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://photo.bj.ide.test.sankuai.com/?keyword=electronics,factory,modern&width=1920&height=1080" 
          alt="Modern Electronics Factory" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/80 to-[#2d5a87]/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            {t('hero.title')}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-4 font-light">
            {t('hero.subtitle')}
          </p>
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t('hero.description')}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={handleLearnMoreClick}
              className="bg-white text-[#1a365d] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 flex items-center space-x-2 shadow-lg hover:shadow-xl"
            >
              <span>{t('hero.cta')}</span>
              <ArrowRight className="h-5 w-5" />
            </button>
            <button 
              onClick={handleViewProductsClick}
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-[#1a365d] transition-all duration-300"
            >
              {t('hero.viewProducts')}
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
