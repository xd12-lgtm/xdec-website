import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ArrowLeft, MessageCircle, Eye } from 'lucide-react';
import SEO from './../components/SEO';
import Header from './../components/Header';
import Footer from './../components/Footer';
import ContactSection from './../components/ContactSection';

const CategoryDetail = () => {
  const { categoryId } = useParams();
  const navigate = useNavigate();

  // 产品数据
  const productCategories = {
    'melody-driver': {
      id: 'melody-driver',
      title: 'Melody Speaker',
      description: 'High-quality melody speaker for various audio equipment',
      image: 'https://nocode.meituan.com/photo/search?keyword=speaker,driver,electronics&width=800&height=400',
      products: [
        { 
          id: 'md-100', 
          name: 'MD-100', 
          specs: '4Ω, 5W, 40mm', 
          price: '¥45.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=speaker,driver,40mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=speaker,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'md-200', 
          name: 'MD-200', 
          specs: '8Ω, 10W, 50mm', 
          price: '¥68.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=speaker,driver,50mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=speaker,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'md-300', 
          name: 'MD-300', 
          specs: '8Ω, 20W, 60mm', 
          price: '¥92.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=speaker,driver,60mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=speaker,component,electronics&width=600&height=400'
          ]
        }
      ]
    },
    'multimedia-driver': {
      id: 'multimedia-driver',
      title: 'Multimedia Speaker',
      description: 'High-performance speaker designed for multimedia devices',
      image: 'https://nocode.meituan.com/photo/search?keyword=multimedia,speaker,driver&width=800&height=400',
      products: [
        { 
          id: 'mmd-100', 
          name: 'MMD-100', 
          specs: '4Ω, 15W, 52mm', 
          price: '¥78.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=multimedia,speaker,52mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=multimedia,driver,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'mmd-200', 
          name: 'MMD-200', 
          specs: '8Ω, 25W, 65mm', 
          price: '¥115.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=multimedia,speaker,65mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=multimedia,driver,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'mmd-300', 
          name: 'MMD-300', 
          specs: '8Ω, 35W, 80mm', 
          price: '¥158.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=multimedia,speaker,80mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=multimedia,driver,electronics&width=600&height=400'
          ]
        }
      ]
    },
    'headphone-driver': {
      id: 'headphone-driver',
      title: 'Headphone Speaker',
      description: 'High-fidelity headphone speaker for superior audio experience',
      image: 'https://nocode.meituan.com/photo/search?keyword=headphone,driver,electronics&width=800&height=400',
      products: [
        { 
          id: 'hd-100', 
          name: 'HD-100', 
          specs: '32Ω, 0.5W, 20mm', 
          price: '¥32.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=headphone,driver,20mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=headphone,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'hd-200', 
          name: 'HD-200', 
          specs: '32Ω, 1W, 30mm', 
          price: '¥48.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=headphone,driver,30mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=headphone,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'hd-300', 
          name: 'HD-300', 
          specs: '16Ω, 2W, 40mm', 
          price: '¥65.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=headphone,driver,40mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=headphone,component,electronics&width=600&height=400'
          ]
        }
      ]
    },
    'vibration-driver': {
      id: 'vibration-driver',
      title: 'Vibration Speaker',
      description: 'Speaker with integrated vibration function for haptic feedback devices',
      image: 'https://nocode.meituan.com/photo/search?keyword=vibration,speaker,driver&width=800&height=400',
      products: [
        { 
          id: 'vd-100', 
          name: 'VD-100', 
          specs: '8Ω, 5W, 30mm', 
          price: '¥56.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=vibration,driver,30mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=vibration,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'vd-200', 
          name: 'VD-200', 
          specs: '8Ω, 10W, 40mm', 
          price: '¥78.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=vibration,driver,40mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=vibration,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'vd-300', 
          name: 'VD-300', 
          specs: '4Ω, 15W, 50mm', 
          price: '¥105.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=vibration,driver,50mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=vibration,component,electronics&width=600&height=400'
          ]
        }
      ]
    },
    'micro-driver': {
      id: 'micro-driver',
      title: 'Micro Speaker',
      description: 'Ultra-compact speaker for space-constrained portable devices',
      image: 'https://nocode.meituan.com/photo/search?keyword=micro,speaker,driver&width=800&height=400',
      products: [
        { 
          id: 'mid-100', 
          name: 'MID-100', 
          specs: '16Ω, 0.5W, 10mm', 
          price: '¥28.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=micro,driver,10mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=micro,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'mid-200', 
          name: 'MID-200', 
          specs: '16Ω, 1W, 15mm', 
          price: '¥38.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=micro,driver,15mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=micro,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'mid-300', 
          name: 'MID-300', 
          specs: '8Ω, 2W, 20mm', 
          price: '¥48.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=micro,driver,20mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=micro,component,electronics&width=600&height=400'
          ]
        }
      ]
    },
    'cavity-driver': {
      id: 'cavity-driver',
      title: 'Cavity Speaker',
      description: 'Speaker with cavity design for optimized acoustic performance',
      image: 'https://nocode.meituan.com/photo/search?keyword=cavity,speaker,driver&width=800&height=400',
      products: [
        { 
          id: 'cd-100', 
          name: 'CD-100', 
          specs: '4Ω, 10W, 50mm', 
          price: '¥88.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=cavity,driver,50mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=cavity,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'cd-200', 
          name: 'CD-200', 
          specs: '8Ω, 20W, 65mm', 
          price: '¥128.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=cavity,driver,65mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=cavity,component,electronics&width=600&height=400'
          ]
        },
        { 
          id: 'cd-300', 
          name: 'CD-300', 
          specs: '8Ω, 30W, 80mm', 
          price: '¥168.00',
          images: [
            'https://nocode.meituan.com/photo/search?keyword=cavity,driver,80mm&width=600&height=400',
            'https://nocode.meituan.com/photo/search?keyword=cavity,component,electronics&width=600&height=400'
          ]
        }
      ]
    }
  };

  const category = productCategories[categoryId];

  // 添加滚动到顶部的效果
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [categoryId]);

  const handleContactClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (!category) {
    return (
      <HelmetProvider>
        <div className="min-h-screen">
          <SEO />
          <Header />
          <main className="py-20 text-center">
            <h1 className="text-3xl font-bold text-[#1a365d] mb-4">Category Not Found</h1>
            <p className="text-gray-600 mb-8">The category you are looking for does not exist.</p>
            <button 
              onClick={() => navigate('/products')}
              className="bg-[#1a365d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d5a87] transition-colors"
            >
              Back to Products
            </button>
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEO 
          title={`${category.title} - XDEC`}
          description={category.description}
          keywords={`${category.title}, Speaker Driver, Audio Equipment`}
          image={category.image}
          type="product"
        />
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative py-16 bg-gradient-to-br from-[#1a365d] to-[#2d5a87]">
            <div className="absolute inset-0 z-0">
              <img 
                src={category.image} 
                alt={category.title} 
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/80 to-[#2d5a87]/60"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button 
                onClick={() => navigate('/products')}
                className="flex items-center text-white mb-6 hover:text-gray-200 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Product Categories
              </button>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {category.title}
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl">
                {category.description}
              </p>
            </div>
          </section>

          {/* Products Grid */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl font-bold text-[#1a365d] mb-12 text-center">
                {category.title} Products
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product) => (
                  <div 
                    key={product.id} 
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={product.images[0]} 
                        alt={product.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                      <div className="absolute top-4 right-4 bg-white/90 text-[#1a365d] px-3 py-1 rounded-full text-sm font-semibold">
                        {product.price}
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <h3 className="text-2xl font-bold text-[#1a365d] mb-2">
                        {product.name}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        Specifications: {product.specs}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          Speaker Driver
                        </span>
                        <div className="flex space-x-2">
                          <button 
                            className="p-2 bg-[#f7fafc] text-[#1a365d] rounded-full hover:bg-[#1a365d] hover:text-white transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(`/product/${product.id}`);
                            }}
                          >
                            <Eye className="h-5 w-5" />
                          </button>
                          <button 
                            className="p-2 bg-[#f7fafc] text-[#1a365d] rounded-full hover:bg-[#1a365d] hover:text-white transition-colors"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleContactClick();
                            }}
                          >
                            <MessageCircle className="h-5 w-5" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-16 bg-[#f7fafc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h2 className="text-3xl font-bold text-[#1a365d] mb-4">
                Need Custom {category.title}?
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
                Our engineering team can customize {category.title.toLowerCase()} according to your specific requirements.
              </p>
              <button 
                onClick={handleContactClick}
                className="bg-[#1a365d] text-white px-8 py-4 rounded-lg font-semibold hover:bg-[#2d5a87] transition-colors duration-300 shadow-lg hover:shadow-xl flex items-center space-x-2 mx-auto"
              >
                <MessageCircle className="h-5 w-5" />
                <span>Contact Our Engineers</span>
              </button>
            </div>
          </section>

          {/* Contact Section */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default CategoryDetail;
