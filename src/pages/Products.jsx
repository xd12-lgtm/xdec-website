import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import SEO from './../components/SEO';
import Header from './../components/Header';
import Footer from './../components/Footer';
import { Speaker, Volume2, Headphones, Zap, Mic, Box, ArrowRight, MessageCircle } from 'lucide-react';

const Products = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState(null);

  const productCategories = [
    {
      id: 'melody-driver',
      icon: <Speaker className="h-12 w-12 text-[#1a365d]" />,
      title: t('products.speaker1', 'Melody Speaker'),
      description: t('products.speaker1Desc', 'High-quality melody speaker for various audio equipment'),
      image: 'https://nocode.meituan.com/photo/search?keyword=speaker,driver,electronics&width=400&height=300',
      products: [
        { 
          id: 'md-100', 
          name: 'MD-100', 
          specs: '4Ω, 5W, 40mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=speaker,driver,40mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=speaker,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'md-200', 
          name: 'MD-200', 
          specs: '8Ω, 10W, 50mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=speaker,driver,50mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=speaker,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'md-300', 
          name: 'MD-300', 
          specs: '8Ω, 20W, 60mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=speaker,driver,60mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=speaker,component,electronics&width=600&height=400'
          ]
        }
      ]
    },
    {
      id: 'multimedia-driver',
      icon: <Volume2 className="h-12 w-12 text-[#1a365d]" />,
      title: t('products.speaker2', 'Multimedia Speaker'),
      description: t('products.speaker2Desc', 'High-performance speaker designed for multimedia devices'),
      image: 'https://nocode.meituan.com/photo/search?keyword=multimedia,speaker,driver&width=400&height=300',
      products: [
        { 
          id: 'mmd-100', 
          name: 'MMD-100', 
          specs: '4Ω, 15W, 52mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=multimedia,speaker,52mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=multimedia,driver,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'mmd-200', 
          name: 'MMD-200', 
          specs: '8Ω, 25W, 65mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=multimedia,speaker,65mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=multimedia,driver,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'mmd-300', 
          name: 'MMD-300', 
          specs: '8Ω, 35W, 80mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=multimedia,speaker,80mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=multimedia,driver,electronics&width=600&height=400'
          ]
        }
      ]
    },
    {
      id: 'headphone-driver',
      icon: <Headphones className="h-12 w-12 text-[#1a365d]" />,
      title: t('products.speaker3', 'Headphone Speaker'),
      description: t('products.speaker3Desc', 'High-fidelity headphone speaker for superior audio experience'),
      image: 'https://nocode.meituan.com/photo/search?keyword=headphone,driver,electronics&width=400&height=300',
      products: [
        { 
          id: 'hd-100', 
          name: 'HD-100', 
          specs: '32Ω, 0.5W, 20mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=headphone,driver,20mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=headphone,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'hd-200', 
          name: 'HD-200', 
          specs: '32Ω, 1W, 30mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=headphone,driver,30mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=headphone,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'hd-300', 
          name: 'HD-300', 
          specs: '16Ω, 2W, 40mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=headphone,driver,40mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=headphone,component,electronics&width=600&height=400'
          ]
        }
      ]
    },
    {
      id: 'vibration-driver',
      icon: <Zap className="h-12 w-12 text-[#1a365d]" />,
      title: t('products.speaker4', 'Vibration Speaker'),
      description: t('products.speaker4Desc', 'Speaker with integrated vibration function for haptic feedback devices'),
      image: 'https://nocode.meituan.com/photo/search?keyword=vibration,speaker,driver&width=400&height=300',
      products: [
        { 
          id: 'vd-100', 
          name: 'VD-100', 
          specs: '8Ω, 5W, 30mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=vibration,driver,30mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=vibration,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'vd-200', 
          name: 'VD-200', 
          specs: '8Ω, 10W, 40mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=vibration,driver,40mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=vibration,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'vd-300', 
          name: 'VD-300', 
          specs: '4Ω, 15W, 50mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=vibration,driver,50mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=vibration,component,electronics&width=600&height=400'
          ]
        }
      ]
    },
    {
      id: 'micro-driver',
      icon: <Mic className="h-12 w-12 text-[#1a365d]" />,
      title: t('products.speaker5', 'Micro Speaker'),
      description: t('products.speaker5Desc', 'Ultra-compact speaker for space-constrained portable devices'),
      image: 'https://nocode.meituan.com/photo/search?keyword=micro,speaker,driver&width=400&height=300',
      products: [
        { 
          id: 'mid-100', 
          name: 'MID-100', 
          specs: '16Ω, 0.5W, 10mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=micro,driver,10mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=micro,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'mid-200', 
          name: 'MID-200', 
          specs: '16Ω, 1W, 15mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=micro,driver,15mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=micro,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'mid-300', 
          name: 'MID-300', 
          specs: '8Ω, 2W, 20mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=micro,driver,20mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=micro,component,electronics&width=600&height=400'
          ]
        }
      ]
    },
    {
      id: 'cavity-driver',
      icon: <Box className="h-12 w-12 text-[#1a365d]" />,
      title: t('products.speaker6', 'Cavity Speaker'),
      description: t('products.speaker6Desc', 'Speaker with cavity design for optimized acoustic performance'),
      image: 'https://nocode.meituan.com/photo/search?keyword=cavity,speaker,driver&width=400&height=300',
      products: [
        { 
          id: 'cd-100', 
          name: 'CD-100', 
          specs: '4Ω, 10W, 50mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=cavity,driver,50mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=cavity,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'cd-200', 
          name: 'CD-200', 
          specs: '8Ω, 20W, 65mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=cavity,driver,65mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=cavity,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'cd-300', 
          name: 'CD-300', 
          specs: '8Ω, 30W, 80mm', 
          images: [
            'https://nocode.meituan.com/photo/search?keyword=cavity,driver,80mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=cavity,component,electronics&width=600&height=400'
          ]
        }
      ]
    }
  ];

  const handleCategoryClick = (categoryId) => {
    // 使用路由跳转到分类详情页面
    navigate(`/products/${categoryId}`);
  };

  const selectedCategoryData = productCategories.find(cat => cat.id === selectedCategory);

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEO />
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative py-20 bg-gradient-to-br from-[#1a365d] to-[#2d5a87]">
            <div className="absolute inset-0 z-0">
              <img 
                src="https://nocode.meituan.com/photo/search?keyword=electronics,factory,modern&width=1920&height=1080" 
                alt="Modern Electronics Factory" 
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/80 to-[#2d5a87]/60"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('products.title', 'Product Center')}
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                {t('products.subtitle', 'Comprehensive Audio Solutions - Professional Speaker Manufacturer')}
              </p>
            </div>
          </section>

          {/* Product Categories */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {productCategories.map((category) => (
                  <div 
                    key={category.id} 
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => handleCategoryClick(category.id)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={category.image} 
                        alt={category.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                      <div className="absolute bottom-4 left-4 text-white">
                        <h3 className="text-2xl font-bold">{category.title}</h3>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center justify-center w-16 h-16 bg-[#f7fafc] rounded-full mb-4 mx-auto">
                        {category.icon}
                      </div>
                      <p className="text-gray-600 text-center mb-6 leading-relaxed">
                        {category.description}
                      </p>
                      
                      <div className="text-center">
                        <button className="bg-[#1a365d] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#2d5a87] transition-colors duration-300 flex items-center justify-center space-x-2 mx-auto">
                          <span>{t('products.viewDetails', 'View Details')}</span>
                          <ArrowRight className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Selected Category Products */}
          {selectedCategory && selectedCategoryData && (
            <section className="py-16 bg-[#f7fafc]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-3xl font-bold text-[#1a365d]">
                    {selectedCategoryData.title} - Product List
                  </h2>
                  <button 
                    onClick={() => setSelectedCategory(null)}
                    className="text-[#1a365d] hover:text-[#2d5a87] transition-colors"
                  >
                    ← Back to Categories
                  </button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {selectedCategoryData.products.map((product) => (
                    <div 
                      key={product.id} 
                      className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer"
                      onClick={() => navigate(`/product/${product.id}`)}
                    >
                      <div className="relative overflow-hidden">
                        <img 
                          src={product.images[0]} 
                          alt={product.name}
                          className="w-full h-48 object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      </div>
                      
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-[#1a365d] mb-2">
                          {product.name}
                        </h3>
                        <p className="text-gray-600 mb-4">
                          Specs: {product.specs}
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                            Speaker
                          </span>
                          <button className="bg-[#1a365d] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#2d5a87] transition-colors duration-300">
                            {t('products.viewDetails', 'View Details')}
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* CTA Section */}
          <section className="py-16 bg-[#1a365d]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-white mb-4">
                {t('products.needCustom', 'Need Custom Solutions?')}
              </h2>
              <p className="text-xl text-gray-200 mb-8 max-w-3xl mx-auto">
                {t('products.customDescription', 'Our engineering team can design and manufacture speakers according to your specific requirements.')}
              </p>
              <button className="bg-white text-[#1a365d] px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto">
                <MessageCircle className="h-5 w-5" />
                <span>Contact Our Engineers</span>
              </button>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Products;
