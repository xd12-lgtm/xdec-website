import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import SEO from './../components/SEO';
import Header from './../components/Header';
import Footer from './../components/Footer';
import ContactSection from './../components/ContactSection';
import VideoPlayer from './../components/VideoPlayer';
import { ArrowLeft, ZoomIn, Download, MessageCircle, Eye, Mail, Phone, MapPin, Send } from 'lucide-react';

const ProductDetail = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [zoomedImage, setZoomedImage] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  // 示例产品数据
  const product = {
    id: 'md-100',
    name: 'MD-100 Melody Speaker',
    category: 'Melody Speaker',
    specs: '4Ω, 5W, 40mm',
    price: '¥45.00',
    description: 'High-quality melody speaker for various audio equipment. Designed with precision engineering for optimal sound performance.',
    images: [
      'https://nocode.meituan.com/photo/search?keyword=speaker,driver,40mm&width=800&height=600',
      'https://nocode.meituan.com/photo/search?keyword=speaker,component,electronics&width=800&height=600',
      'https://nocode.meituan.com/photo/search?keyword=speaker,driver,detail&width=800&height=600',
      'https://nocode.meituan.com/photo/search?keyword=speaker,driver,specification&width=800&height=600',
      'https://nocode.meituan.com/photo/search?keyword=speaker,driver,application&width=800&height=600'
    ],
    video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ', // 示例视频链接
    features: [
      'High-quality materials',
      '40mm diameter design',
      '4Ω impedance matching',
      '5W power output',
      'Suitable for various audio equipment'
    ],
    applications: [
      'Portable audio devices',
      'Car audio systems',
      'Home audio equipment',
      'Professional audio devices'
    ],
    // 新增产品参数表格数据
    specifications: [
      { parameter: 'Model', value: 'MD-100' },
      { parameter: 'Impedance', value: '4Ω' },
      { parameter: 'Power', value: '5W' },
      { parameter: 'Diameter', value: '40mm' },
      { parameter: 'Frequency Response', value: '100Hz - 20kHz' },
      { parameter: 'Sensitivity', value: '85dB' },
      { parameter: 'Material', value: 'Paper Cone' },
      { parameter: 'Magnet', value: 'Ferrite' }
    ]
  };

  // 添加滚动到顶部的效果
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleImageClick = (index) => {
    setSelectedImage(index);
  };

  const handleZoom = (index) => {
    setZoomedImage(index);
  };

  const closeZoom = () => {
    setZoomedImage(null);
  };

  const handleContactClick = () => {
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      company: '',
      message: ''
    });
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-[#1a365d]" />,
      title: 'Email',
      value: 'info@xdec.com'
    },
    {
      icon: <Phone className="h-6 w-6 text-[#1a365d]" />,
      title: t('contact.phone'),
      value: '+86-755-12345678'
    },
    {
      icon: <MapPin className="h-6 w-6 text-[#1a365d]" />,
      title: t('contact.address'),
      value: 'Shenzhen, Guangdong, China'
    }
  ];

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEO 
          title={`${product.name} - XDEC`}
          description={product.description}
          keywords={`${product.category}, ${product.name}, Speaker Driver, Audio Equipment`}
          image={product.images[0]}
          type="product"
        />
        <Header />
        <main>
          {/* Breadcrumb */}
          <div className="bg-gray-100 py-4">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center space-x-2 text-sm">
                <button 
                  onClick={() => navigate('/products')}
                  className="text-[#1a365d] hover:text-[#2d5a87] cursor-pointer"
                >
                  Product Center
                </button>
                <span>/</span>
                <button 
                  onClick={() => navigate('/products/melody-driver')}
                  className="text-[#1a365d] hover:text-[#2d5a87] cursor-pointer"
                >
                  Melody Speaker
                </button>
                <span>/</span>
                <span className="text-gray-600">{product.name}</span>
              </div>
            </div>
          </div>

          {/* Product Detail */}
          <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div>
                  <div className="relative mb-4">
                    <img 
                      src={product.images[selectedImage]} 
                      alt={product.name}
                      className="w-full h-96 object-cover rounded-lg shadow-lg"
                    />
                    <button 
                      onClick={() => handleZoom(selectedImage)}
                      className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                    >
                      <ZoomIn className="h-5 w-5 text-[#1a365d]" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-5 gap-2">
                    {product.images.map((image, index) => (
                      <div 
                        key={index}
                        className={`cursor-pointer rounded-lg overflow-hidden border-2 ${
                          selectedImage === index ? 'border-[#1a365d]' : 'border-transparent'
                        }`}
                        onClick={() => handleImageClick(index)}
                      >
                        <img 
                          src={image} 
                          alt={`${product.name} ${index + 1}`}
                          className="w-full h-20 object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>

                {/* Product Info */}
                <div>
                  <div className="mb-6">
                    <span className="inline-block bg-[#1a365d] text-white px-3 py-1 rounded-full text-sm font-medium mb-2">
                      {product.category}
                    </span>
                    <h1 className="text-3xl font-bold text-[#1a365d] mb-2">
                      {product.name}
                    </h1>
                    <p className="text-gray-600 mb-4">
                      {product.description}
                    </p>
                    <div className="text-2xl font-bold text-[#1a365d] mb-6">
                      {product.price}
                    </div>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#1a365d] mb-4">Product Features</h3>
                    <ul className="space-y-2">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <div className="w-2 h-2 bg-[#1a365d] rounded-full mt-2 mr-3"></div>
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-[#1a365d] mb-4">Applications</h3>
                    <div className="flex flex-wrap gap-2">
                      {product.applications.map((app, index) => (
                        <span 
                          key={index}
                          className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                        >
                          {app}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex space-x-4">
                    <button 
                      onClick={handleContactClick}
                      className="bg-[#1a365d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d5a87] transition-colors duration-300 flex items-center space-x-2"
                    >
                      <MessageCircle className="h-5 w-5" />
                      <span>Request Quote</span>
                    </button>
                    <button className="border border-[#1a365d] text-[#1a365d] px-6 py-3 rounded-lg font-semibold hover:bg-[#1a365d] hover:text-white transition-colors duration-300 flex items-center space-x-2">
                      <Download className="h-5 w-5" />
                      <span>Download Specs</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Product Video */}
          {product.video && (
            <section className="py-16 bg-[#f7fafc]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-[#1a365d] mb-8">Product Video</h2>
                <div className="max-w-4xl mx-auto">
                  <VideoPlayer url={product.video} title={product.name} />
                </div>
              </div>
            </section>
          )}

          {/* Product Specifications Table */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-[#1a365d] mb-8">Technical Specifications</h2>
              <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <table className="w-full">
                  <thead className="bg-[#1a365d] text-white">
                    <tr>
                      <th className="px-6 py-4 text-left">Parameter</th>
                      <th className="px-6 py-4 text-left">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    {product.specifications.map((spec, index) => (
                      <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
                        <td className="px-6 py-4 font-medium text-[#1a365d]">{spec.parameter}</td>
                        <td className="px-6 py-4 text-gray-700">{spec.value}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* Company Introduction */}
          <section className="py-16 bg-[#f7fafc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-[#1a365d] mb-6">About XDEC</h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Shenzhen Xuanda Electronics Co., Ltd. (XDEC) is a professional speaker manufacturer with over 20 years of experience in the audio industry. We specialize in OEM/ODM services, providing high-quality audio solutions to customers worldwide.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Our state-of-the-art manufacturing facilities and rigorous quality control processes ensure that every product meets the highest standards. We are committed to innovation and continuous improvement in all our processes.
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-[#1a365d] mb-1">20+</div>
                      <div className="text-sm text-gray-600">Years Experience</div>
                    </div>
                    <div className="text-center p-4 bg-white rounded-lg">
                      <div className="text-2xl font-bold text-[#1a365d] mb-1">500+</div>
                      <div className="text-sm text-gray-600">Global Clients</div>
                    </div>
                  </div>
                </div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src="https://nocode.meituan.com/photo/search?keyword=electronics,manufacturing,quality&width=600&height=400" 
                      alt="XDEC Manufacturing Facility" 
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/20 to-transparent"></div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Related Products */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-[#1a365d] mb-8">Related Products</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                    <img 
                      src={`https://nocode.meituan.com/photo/search?keyword=speaker,driver,related${item}&width=300&height=200`} 
                      alt={`Related Product ${item}`}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-[#1a365d] mb-1">MD-{100 + item}</h3>
                      <p className="text-sm text-gray-600 mb-2">4Ω, 5W, 40mm</p>
                      <div className="flex justify-between items-center">
                        <span className="text-[#1a365d] font-semibold">¥{(45 + item * 10).toFixed(2)}</span>
                        <button 
                          onClick={handleContactClick}
                          className="text-[#1a365d] hover:text-[#2d5a87]"
                        >
                          <MessageCircle className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 bg-[#f7fafc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
                  Contact Us
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Get in touch for custom solutions and inquiries
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Contact Form */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                  <h3 className="text-2xl font-semibold text-[#1a365d] mb-6">
                    Send us a Message
                  </h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.name')}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.email')}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-colors"
                        placeholder="your.email@company.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-colors"
                        placeholder="Your company name"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                        {t('contact.message')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent transition-colors resize-none"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>
                    
                    <button
                      type="submit"
                      className="w-full bg-[#1a365d] text-white py-3 px-6 rounded-lg font-semibold hover:bg-[#2d5a87] transition-colors duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl"
                    >
                      <Send className="h-5 w-5" />
                      <span>{t('contact.submit')}</span>
                    </button>
                  </form>
                </div>

                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-[#1a365d] mb-6">
                      Get in Touch
                    </h3>
                    <p className="text-gray-600 mb-8">
                      Ready to discuss your audio solution needs? Our team of experts is here to help you find the perfect solution for your project.
                    </p>
                  </div>

                  <div className="space-y-6">
                    {contactInfo.map((info, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="flex-shrink-0 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md">
                          {info.icon}
                        </div>
                        <div>
                          <div className="font-semibold text-[#1a365d]">{info.title}</div>
                          <div className="text-gray-600">{info.value}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="font-semibold text-[#1a365d] mb-3">Business Hours</h4>
                    <div className="space-y-2 text-sm text-gray-600">
                      <div className="flex justify-between">
                        <span>Monday - Friday:</span>
                        <span>9:00 AM - 6:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Saturday:</span>
                        <span>9:00 AM - 12:00 PM</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Sunday:</span>
                        <span>Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Zoom Modal */}
          {zoomedImage !== null && (
            <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4" onClick={closeZoom}>
              <div className="relative max-w-4xl max-h-full">
                <img 
                  src={product.images[zoomedImage]} 
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
                <button 
                  onClick={closeZoom}
                  className="absolute top-4 right-4 bg-white/80 p-2 rounded-full shadow-md hover:bg-white transition-colors"
                >
                  <ArrowLeft className="h-5 w-5 text-[#1a365d]" />
                </button>
              </div>
            </div>
          )}
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default ProductDetail;
