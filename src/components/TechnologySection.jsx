import React from 'react';
import { useTranslation } from 'react-i18next';
import { Lightbulb, Shield, Factory, Award } from 'lucide-react';

const TechnologySection = () => {
  const { t } = useTranslation();

  const advantages = [
    {
      icon: <Lightbulb className="h-8 w-8 text-white" />,
      title: t('technology.advantage1'),
      description: t('technology.advantage1Desc'),
      color: 'from-blue-500 to-blue-600'
    },
    {
      icon: <Shield className="h-8 w-8 text-white" />,
      title: t('technology.advantage2'),
      description: t('technology.advantage2Desc'),
      color: 'from-green-500 to-green-600'
    },
    {
      icon: <Factory className="h-8 w-8 text-white" />,
      title: t('technology.advantage3'),
      description: t('technology.advantage3Desc'),
      color: 'from-purple-500 to-purple-600'
    },
    {
      icon: <Award className="h-8 w-8 text-white" />,
      title: t('technology.advantage4'),
      description: t('technology.advantage4Desc'),
      color: 'from-orange-500 to-orange-600'
    }
  ];

  return (
    <section id="technology" className="py-20 bg-[#f7fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
            {t('technology.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('technology.subtitle')}
          </p>
        </div>

        {/* Technology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="group relative">
              <div className={`relative p-8 rounded-lg bg-gradient-to-br ${advantage.color} text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2`}>
                <div className="flex items-center justify-center w-16 h-16 bg-white/20 rounded-full mb-6 mx-auto">
                  {advantage.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-center">
                  {advantage.title}
                </h3>
                <p className="text-white/90 text-center leading-relaxed">
                  {advantage.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Technology Showcase */}
        <div className="mt-16 bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="p-8 lg:p-12">
              <h3 className="text-2xl font-bold text-[#1a365d] mb-6">
                {t('technology.processTitle', 'Advanced Manufacturing Process')}
              </h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#1a365d] rounded-full"></div>
                  <span className="text-gray-700">{t('technology.process1', 'Automated production lines')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#1a365d] rounded-full"></div>
                  <span className="text-gray-700">{t('technology.process2', 'Precision testing equipment')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#1a365d] rounded-full"></div>
                  <span className="text-gray-700">{t('technology.process3', 'Quality control systems')}</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-[#1a365d] rounded-full"></div>
                  <span className="text-gray-700">{t('technology.process4', 'Environmental compliance')}</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://nocode.meituan.com/photo/search?keyword=manufacturing,technology,precision&width=600&height=400" 
                alt="Advanced Manufacturing" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/20 to-transparent"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
