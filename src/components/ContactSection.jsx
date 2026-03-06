import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

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
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#1a365d] mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-[#f7fafc] p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-[#1a365d] mb-6">
              {t('contact.title')}
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
                  placeholder={t('contact.name')}
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
                  placeholder={t('contact.email')}
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
                  placeholder={t('contact.company')}
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
                  placeholder={t('contact.message')}
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
                {t('contact.title')}
              </h3>
              <p className="text-gray-600 mb-8">
                {t('contact.subtitle')}
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-[#f7fafc] rounded-full flex items-center justify-center">
                    {info.icon}
                  </div>
                  <div>
                    <div className="font-semibold text-[#1a365d]">{info.title}</div>
                    <div className="text-gray-600">{info.value}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#f7fafc] p-6 rounded-lg">
              <h4 className="font-semibold text-[#1a365d] mb-3">{t('contact.businessHours', 'Business Hours')}</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex justify-between">
                  <span>{t('contact.monday', 'Monday')} - {t('contact.friday', 'Friday')}:</span>
                  <span>9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.saturday', 'Saturday')}:</span>
                  <span>9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>{t('contact.sunday', 'Sunday')}:</span>
                  <span>{t('contact.closed', 'Closed')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
