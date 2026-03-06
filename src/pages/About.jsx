import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { HelmetProvider } from 'react-helmet-async';
import SEO from './../components/SEO';
import Header from './../components/Header';
import Footer from './../components/Footer';
import VideoPlayer from './../components/VideoPlayer';
import { Award, Users, Globe, Factory, Lightbulb, Shield, Target, Heart } from 'lucide-react';
import { getAboutData } from '../lib/cms-data';

const About = () => {
  const { t } = useTranslation();
  const [aboutData, setAboutData] = useState(null);

  // 添加滚动到顶部的效果
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // 加载关于页面数据
    const loadAboutData = async () => {
      const data = await getAboutData();
      if (data) {
        setAboutData(data.data);
      }
    };
    
    loadAboutData();
  }, []);

  const stats = [
    {
      icon: <Award className="h-8 w-8 text-[#1a365d]" />,
      value: t('about.experienceValue'),
      label: t('about.experience')
    },
    {
      icon: <Users className="h-8 w-8 text-[#1a365d]" />,
      value: t('about.globalClientsValue'),
      label: t('about.globalClients')
    },
    {
      icon: <Globe className="h-8 w-8 text-[#1a365d]" />,
      value: t('about.qualityCertValue'),
      label: t('about.qualityCert')
    }
  ];

  const values = [
    {
      icon: <Target className="h-12 w-12 text-[#1a365d]" />,
      title: 'Quality First',
      description: 'We maintain the highest standards in every aspect of our manufacturing process.'
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-[#1a365d]" />,
      title: 'Innovation',
      description: 'Continuous research and development to stay at the forefront of audio technology.'
    },
    {
      icon: <Heart className="h-12 w-12 text-[#1a365d]" />,
      title: 'Customer Focus',
      description: 'Your satisfaction is our priority. We work closely with you to meet your needs.'
    },
    {
      icon: <Shield className="h-12 w-12 text-[#1a365d]" />,
      title: 'Reliability',
      description: 'Trusted by hundreds of clients worldwide for consistent quality and service.'
    }
  ];

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEO 
          title="About XDEC - Professional Speaker Manufacturer"
          description="Learn about XDEC's 20-year journey in audio manufacturing, our values, and commitment to quality."
        />
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
                {aboutData?.title || t('about.title')}
              </h1>
              <p className="text-xl text-gray-200 max-w-3xl mx-auto">
                {aboutData?.subtitle || t('about.subtitle')}
              </p>
            </div>
          </section>

          {/* Company Story */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">
                    Our Story
                  </h2>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    {aboutData?.description || "Founded in 2004, Shenzhen Xuanda Electronics Co., Ltd. (XDEC) has grown from a small startup to a leading professional speaker manufacturer in the audio industry."}
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Over the past two decades, we have built a reputation for excellence, innovation, and reliability. Our commitment to quality has earned us the trust of over 500 global clients across various industries.
                  </p>
                  <p className="text-gray-700 mb-6 leading-relaxed">
                    Today, XDEC operates state-of-the-art manufacturing facilities and continues to push the boundaries of audio technology, delivering cutting-edge solutions to customers worldwide.
                  </p>
                </div>
                <div className="relative">
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src={aboutData?.about_image || "https://nocode.meituan.com/photo/search?keyword=electronics,manufacturing,quality&width=600&height=400"} 
                      alt="XDEC Manufacturing Facility" 
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/20 to-transparent"></div>
                  </div>
                  
                  {/* 公司介绍视频 */}
                  {aboutData?.about_video && (
                    <div className="mt-6">
                      <VideoPlayer url={aboutData.about_video} title="XDEC Company Introduction" />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>

          {/* Stats Section */}
          <section className="py-16 bg-[#f7fafc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-8 bg-white rounded-lg shadow-sm">
                    <div className="flex justify-center mb-4">
                      {stat.icon}
                    </div>
                    <div className="text-3xl font-bold text-[#1a365d] mb-2">
                      {stat.value}
                    </div>
                    <div className="text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Our Values */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
                  Our Values
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  The principles that guide our work and define our company culture
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="text-center p-6 bg-[#f7fafc] rounded-lg hover:shadow-lg transition-shadow">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-[#1a365d] mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Manufacturing Process */}
          <section className="py-20 bg-[#f7fafc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
                  Our Manufacturing Process
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  From design to delivery, we ensure excellence at every step
                </p>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <div className="relative overflow-hidden rounded-lg shadow-xl">
                    <img 
                      src="https://nocode.meituan.com/photo/search?keyword=manufacturing,technology,precision&width=600&height=400" 
                      alt="Manufacturing Process" 
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/20 to-transparent"></div>
                  </div>
                </div>
                <div>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center font-semibold">
                        1
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1a365d] mb-2">Design & Engineering</h3>
                        <p className="text-gray-600">Our expert team designs products with precision and innovation.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center font-semibold">
                        2
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1a365d] mb-2">Quality Materials</h3>
                        <p className="text-gray-600">We source only the highest quality materials for our products.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center font-semibold">
                        3
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1a365d] mb-2">Precision Manufacturing</h3>
                        <p className="text-gray-600">State-of-the-art equipment ensures consistent quality.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center font-semibold">
                        4
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1a365d] mb-2">Rigorous Testing</h3>
                        <p className="text-gray-600">Every product undergoes comprehensive quality testing.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-8 h-8 bg-[#1a365d] text-white rounded-full flex items-center justify-center font-semibold">
                        5
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-[#1a365d] mb-2">Global Delivery</h3>
                        <p className="text-gray-600">Efficient logistics ensure timely delivery worldwide.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Global Presence */}
          <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
                  Global Presence
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  Serving customers across the globe with reliable audio solutions
                </p>
              </div>
              <div className="relative">
                <div className="relative overflow-hidden rounded-lg shadow-xl">
                  <img 
                    src="https://nocode.meituan.com/photo/search?keyword=world,map,global,business&width=1200&height=600" 
                    alt="Global Presence" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/20 to-transparent"></div>
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

export default About;
