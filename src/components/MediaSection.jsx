import React from 'react';
import { useTranslation } from 'react-i18next';
import { Newspaper, ArrowRight } from 'lucide-react';

const MediaSection = () => {
  const { t } = useTranslation();

  const handleMediaCenterClick = () => {
    // 使用路由跳转到媒体中心页面
    window.location.href = '#/media';
  };

  return (
    <section id="media" className="py-20 bg-[#f7fafc]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
            {t('media.title', 'Media Center')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('media.subtitle', 'Stay updated with the latest news and insights from XDEC and the audio industry')}
          </p>
        </div>

        {/* Media Center Card */}
        <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 cursor-pointer group"
             onClick={handleMediaCenterClick}>
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative overflow-hidden">
              <img 
                src="https://nocode.meituan.com/photo/search?keyword=news,media,technology&width=800&height=400" 
                alt="Media Center"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center justify-center w-16 h-16 bg-[#f7fafc] rounded-full mb-6">
                <Newspaper className="h-8 w-8 text-[#1a365d]" />
              </div>
              <h3 className="text-2xl font-bold text-[#1a365d] mb-4">
                {t('media.latestNews', 'Latest News & Updates')}
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                {t('media.description', 'Discover the latest developments, product launches, and industry insights from XDEC. Stay informed about our innovations and company milestones.')}
              </p>
              <div className="flex items-center text-[#1a365d] font-medium group-hover:text-[#2d5a87] transition-colors">
                <span>{t('media.visit', 'Visit Media Center')}</span>
                <ArrowRight className="h-5 w-5 ml-2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaSection;
