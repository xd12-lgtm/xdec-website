import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './../components/SEO';
import Header from './../components/Header';
import Footer from './../components/Footer';
import VideoPlayer from './../components/VideoPlayer';
import { Calendar, User, ArrowRight, Search, Mail, Phone, MapPin, Send } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Media = () => {
  const { t } = useTranslation();
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const newsArticles = [
    {
      id: 1,
      title: 'XDEC Launches New Line of Smart Speakers with AI Integration',
      excerpt: 'Our latest smart speaker series features advanced AI voice recognition and seamless smart home integration.',
      date: '2024-03-01',
      author: 'XDEC Team',
      category: 'Product Launch',
      image: 'https://photo.bj.ide.test.sankuai.com/?keyword=smart,speaker,ai&width=600&height=400',
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // 示例视频链接
    },
    {
      id: 2,
      title: 'XDEC Expands Manufacturing Facility to Meet Growing Demand',
      excerpt: 'New 50,000 sq ft facility will increase production capacity by 40% to serve global customers.',
      date: '2024-02-15',
      author: 'XDEC Team',
      category: 'Company News',
      image: 'https://photo.bj.ide.test.sankuai.com/?keyword=manufacturing,factory,expansion&width=600&height=400'
    },
    {
      id: 3,
      title: 'XDEC Receives ISO 9001:2015 Certification for Quality Management',
      excerpt: 'This certification demonstrates our commitment to quality and continuous improvement in all processes.',
      date: '2024-01-20',
      author: 'XDEC Team',
      category: 'Certification',
      image: 'https://photo.bj.ide.test.sankuai.com/?keyword=iso,certification,quality&width=600&height=400'
    },
    {
      id: 4,
      title: 'XDEC Partners with Leading Audio Technology Company',
      excerpt: 'Strategic partnership will enhance our R&D capabilities and expand our product portfolio.',
      date: '2024-01-10',
      author: 'XDEC Team',
      category: 'Partnership',
      image: 'https://photo.bj.ide.test.sankuai.com/?keyword=partnership,business,handshake&width=600&height=400'
    },
    {
      id: 5,
      title: 'XDEC Showcases Latest Innovations at CES 2024',
      excerpt: 'Our booth featured cutting-edge audio technologies and received positive feedback from industry leaders.',
      date: '2023-12-15',
      author: 'XDEC Team',
      category: 'Trade Show',
      image: 'https://photo.bj.ide.test.sankuai.com/?keyword=ces,trade,show,technology&width=600&height=400'
    },
    {
      id: 6,
      title: 'XDEC Wins "Best Audio Product" Award at Tech Innovation Awards',
      excerpt: 'Our XDEC-BT300 Bluetooth speaker was recognized for its superior sound quality and innovative design.',
      date: '2023-11-30',
      author: 'XDEC Team',
      category: 'Award',
      image: 'https://photo.bj.ide.test.sankuai.com/?keyword=award,trophy,recognition&width=600&height=400'
    }
  ];

  const filteredArticles = newsArticles.filter(article =>
    article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    article.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const categories = [...new Set(newsArticles.map(article => article.category))];

  const handleArticleClick = (articleId) => {
    navigate(`/news/${articleId}`);
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

  // 添加滚动到顶部的效果
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
                src="https://photo.bj.ide.test.sankuai.com/?keyword=news,media,technology&width=1920&height=1080" 
                alt="Media Center" 
                className="w-full h-full object-cover opacity-20"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/80 to-[#2d5a87]/60"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Media Center
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                Latest news, updates, and insights from XDEC
              </p>
            </div>
          </section>

          {/* Search and Filter */}
          <section className="py-8 bg-white border-b">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                <div className="relative w-full md:w-96">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Search news and articles..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1a365d] focus:border-transparent"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full hover:bg-[#1a365d] hover:text-white transition-colors"
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* News Articles */}
          <section className="py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArticles.map((article) => (
                  <article 
                    key={article.id} 
                    className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    onClick={() => handleArticleClick(article.id)}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={article.image} 
                        alt={article.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#1a365d] text-white px-3 py-1 rounded-full text-sm font-medium">
                          {article.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>{new Date(article.date).toLocaleDateString()}</span>
                        <User className="h-4 w-4 ml-4 mr-2" />
                        <span>{article.author}</span>
                      </div>
                      
                      <h3 className="text-xl font-bold text-[#1a365d] mb-3 group-hover:text-[#2d5a87] transition-colors">
                        {article.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 leading-relaxed">
                        {article.excerpt}
                      </p>
                      
                      {/* 视频预览 */}
                      {article.video && (
                        <div className="mb-4">
                          <VideoPlayer url={article.video} title={article.title} className="h-32" />
                        </div>
                      )}
                      
                      <button className="flex items-center text-[#1a365d] font-medium hover:text-[#2d5a87] transition-colors">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </button>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="py-20 bg-[#f7fafc]">
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
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default Media;
