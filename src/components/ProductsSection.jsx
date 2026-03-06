import React from 'react';
import { useTranslation } from 'react-i18next';
import { Speaker, Volume2, Headphones, Zap, Mic, Box, ArrowRight, MessageCircle } from 'lucide-react';

const ProductsSection = () => {
  const { t } = useTranslation();

  const productCategories = [
    {
      id: 'melody-driver',
      icon: <Speaker className="h-12 w-12 text-[#1a365d]" />,
      title: t('products.speaker1', 'Melody Speaker'),
      description: t('products.speaker1Desc', 'High-quality melody speaker for various audio equipment'),
      image: 'https://nocode.meituan.com/photo/search?keyword=melody,speaker&width=400&height=300'
    },
    {
      id: 'multimedia-driver',
      icon: <Volume2 className="h-12 w-12 text-[#1a365d]" />,
      title: t('products.speaker2', 'Multimedia Speaker'),
      description: t('products.speaker2Desc', 'High-performance speaker designed for multimedia devices'),
      image: 'https://nocode.meituan.com/photo/search?keyword=multimedia,speaker&width=400&height=300'
    },
    {
      id: 'headphone-driver',
      icon: <Headphones className="h-12 w-12 text-[#1a365d]" />,
      title: t('products.speaker3', 'Headphone Speaker'),
      description: t('products.speaker3Desc', 'High-fidelity headphone speaker for superior audio experience'),
      image: 'https://nocode.meituan.com/photo/search?keyword=headphone,speaker&width=400&height=300'
    },
    {
      id: 'vibration-driver',
      icon: <Zap className="h-12 w-12 text-[#1a365d]" />,
      title: t('products.speaker4', 'Vibration Speaker'),
      description: t('products.speaker4Desc', 'Speaker with integrated vibration function for haptic feedback devices'),
      image: 'https://nocode.meituan.com/photo/search?keyword=vibration,speaker&width=400&height=300'
    },
    {
      id: 'micro-driver',
      icon: <Mic className="h-12 w-12 text-[#1a365d]" />,
      title: t('products.speaker5', 'Micro Speaker'),
      description: t('products.speaker5Desc', 'Ultra-compact speaker for space-constrained portable devices'),
      image: 'https://nocode.meituan.com/photo/search?keyword=micro,speaker&width=400&height=300'
    },
    {
      id: 'cavity-driver',
      icon: <Box className="h-12 w-12 text-[#1a365d]" />,
      title: t('products.speaker6', 'Cavity Speaker'),
      description: t('products.speaker6Desc', 'Speaker with cavity design for optimized acoustic performance'),
      image: 'https://nocode.meituan.com/photo/search?keyword=cavity,speaker&width=400&height=300'
    }
  ];

  const handleCategoryClick = (categoryId) => {
    // 使用路由跳转到分类详情页面
    window.location.href = `#/products/${categoryId}`;
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
            {t('products.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('products.subtitle')}
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {productCategories.map((category) => (
            <div 
              key={category.id} 
              className="group bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
              onClick={() => handleCategoryClick(category.id)}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={category.image} 
                  alt={category.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-center w-16 h-16 bg-[#f7fafc] rounded-full mb-4 mx-auto">
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1a365d] mb-3 text-center">
                  {category.title}
                </h3>
                <p className="text-gray-600 text-center leading-relaxed mb-4">
                  {category.description}
                </p>
                <div className="flex justify-center">
                  <button className="text-[#1a365d] font-medium hover:text-[#2d5a87] transition-colors flex items-center">
                    {t('products.viewDetails', 'View Details')}
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <button 
            onClick={() => {
              window.location.href = '#/products';
            }}
            className="bg-[#1a365d] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2d5a87] transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
          >
            <span>{t('products.viewAll', 'View All Products')}</span>
            <ArrowRight className="h-5 w-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
