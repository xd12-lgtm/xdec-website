import React from 'react';
import { useTranslation } from 'react-i18next';
import { Award, Users, Globe } from 'lucide-react';

const AboutSection = () => {
  const { t } = useTranslation();

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

  return (
    <section id="about" className="py-20 bg-[#f7fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-6">
              {t('about.title')}
            </h2>
            <p className="text-xl text-gray-600 mb-4 font-medium">
              {t('about.subtitle')}
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              {t('about.description')}
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                  <div className="flex justify-center mb-3">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-[#1a365d] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-lg shadow-xl">
              <img 
                src="https://photo.bj.ide.test.sankuai.com/?keyword=electronics,manufacturing,quality&width=600&height=400" 
                alt="XDEC Manufacturing Facility" 
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a365d]/20 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-[#1a365d] rounded-full flex items-center justify-center">
                  <Award className="h-6 w-6 text-white" />
                </div>
                <div>
                  <div className="font-semibold text-[#1a365d]">ISO Certified</div>
                  <div className="text-sm text-gray-600">Quality Manufacturing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
