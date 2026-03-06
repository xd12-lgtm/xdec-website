import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X, Globe, Camera } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleLanguage = () => {
    const newLang = i18n.language === 'en' ? 'zh' : 'en';
    i18n.changeLanguage(newLang);
  };

  const navItems = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'products', href: '#products' },
    { key: 'technology', href: '#technology' },
    { key: 'contact', href: '#contact' }
  ];

  const handleNavClick = (e, href) => {
    e.preventDefault();
    // 如果当前在首页，直接滚动到对应部分
    if (window.location.hash === '' || window.location.hash === '#/') {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      // 如果不在首页，先导航到首页，然后滚动到对应部分
      navigate('/');
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
    setIsMenuOpen(false);
  };

  // 处理首页按钮点击
  const handleHomeClick = () => {
    navigate('/');
    setTimeout(() => {
      window.scrollTo(0, 0);
    }, 100);
    setIsMenuOpen(false);
  };

  // 处理360全景点击
  const handle360Click = () => {
    // TODO: 添加360全景链接
    console.log('360全景链接待添加');
  };

  return (
    <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - 添加首页点击功能 */}
          <div className="flex items-center cursor-pointer" onClick={handleHomeClick}>
            <span className="text-xl font-bold text-[#1a365d]">XDEC</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-gray-700 hover:text-[#1a365d] px-3 py-2 text-sm font-medium transition-colors cursor-pointer"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </nav>

          {/* Language Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handle360Click}
              className="flex items-center space-x-1 text-gray-700 hover:text-[#1a365d] transition-colors"
              title={t('nav.company360')}
            >
              <Camera className="h-4 w-4" />
              <span className="text-sm font-medium hidden sm:inline">
                {t('nav.company360')}
              </span>
            </button>

            <button
              onClick={toggleLanguage}
              className="flex items-center space-x-1 text-gray-700 hover:text-[#1a365d] transition-colors"
            >
              <Globe className="h-4 w-4" />
              <span className="text-sm font-medium">
                {i18n.language === 'en' ? 'EN' : '中文'}
              </span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-[#1a365d] hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              {navItems.map((item) => (
                <a
                  key={item.key}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-700 hover:text-[#1a365d] block px-3 py-2 text-base font-medium cursor-pointer"
                >
                  {t(`nav.${item.key}`)}
                </a>
              ))}
              <button
                onClick={handle360Click}
                className="text-gray-700 hover:text-[#1a365d] block px-3 py-2 text-base font-medium cursor-pointer w-full text-left"
              >
                {t('nav.company360')}
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
