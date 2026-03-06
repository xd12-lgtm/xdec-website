import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        home: 'Home',
        about: 'About Us',
        products: 'Products',
        technology: 'Technology',
        contact: 'Contact',
        company360: 'Company 360°'
      },
      hero: {
        title: 'Professional Speaker Manufacturer',
        subtitle: '20 Years of Excellence in Audio Solutions',
        description: 'XDEC - Your trusted partner for high-quality speaker manufacturing and custom audio solutions worldwide.',
        cta: 'Learn More',
        viewProducts: 'View Products'
      },
      about: {
        title: 'About XDEC',
        subtitle: 'Leading the Audio Industry for 20 Years',
        description: 'Shenzhen Xuanda Electronics Co., Ltd. (XDEC) is a professional speaker manufacturer with over 20 years of experience in the audio industry. We specialize in OEM/ODM services, providing high-quality audio solutions to customers worldwide.',
        experience: 'Years Experience',
        experienceValue: '20+',
        globalClients: 'Global Clients',
        globalClientsValue: '500+',
        qualityCert: 'Quality Certifications',
        qualityCertValue: '15+'
      },
      products: {
        title: 'Our Products',
        subtitle: 'Comprehensive Audio Solutions',
        speaker1: 'Melody Speaker',
        speaker1Desc: 'High-quality melody speaker for various audio equipment',
        speaker2: 'Multimedia Speaker',
        speaker2Desc: 'High-performance speaker designed for multimedia devices',
        speaker3: 'Headphone Speaker',
        speaker3Desc: 'High-fidelity headphone speaker for superior audio experience',
        speaker4: 'Vibration Speaker',
        speaker4Desc: 'Speaker with integrated vibration function for haptic feedback devices',
        speaker5: 'Micro Speaker',
        speaker5Desc: 'Ultra-compact speaker for space-constrained portable devices',
        speaker6: 'Cavity Speaker',
        speaker6Desc: 'Speaker with cavity design for optimized acoustic performance',
        viewDetails: 'View Details',
        needCustom: 'Need Custom Solutions?',
        customDescription: 'Our engineering team can design and manufacture speakers according to your specific requirements.',
        contactEngineers: 'Contact Our Engineers'
      },
      technology: {
        title: 'Technology Advantages',
        subtitle: 'Innovation Drives Excellence',
        advantage1: 'Advanced R&D',
        advantage1Desc: 'State-of-the-art research and development facilities',
        advantage2: 'Quality Control',
        advantage2Desc: 'Rigorous testing and quality assurance processes',
        advantage3: 'Manufacturing Excellence',
        advantage3Desc: 'Modern production lines with precision engineering',
        advantage4: 'Global Standards',
        advantage4Desc: 'ISO certified manufacturing processes'
      },
      contact: {
        title: 'Contact Us',
        subtitle: 'Get in Touch for Custom Solutions',
        name: 'Full Name',
        email: 'Email Address',
        company: 'Company Name',
        message: 'Message',
        submit: 'Send Message',
        phone: 'Phone',
        address: 'Address'
      },
      footer: {
        company: 'Shenzhen Xuanda Electronics Co., Ltd.',
        description: 'Professional speaker manufacturer with 20 years of experience.',
        quickLinks: 'Quick Links',
        contact: 'Contact Info',
        copyright: '© 2024 XDEC. All rights reserved.'
      }
    }
  },
  zh: {
    translation: {
      nav: {
        home: '首页',
        about: '关于我们',
        products: '产品中心',
        technology: '技术优势',
        contact: '联系我们',
        company360: '公司360°全景'
      },
      hero: {
        title: '专业扬声器制造商',
        subtitle: '20年音频解决方案卓越经验',
        description: 'XDEC - 您值得信赖的高质量扬声器制造和定制音频解决方案的全球合作伙伴。',
        cta: '了解更多',
        viewProducts: '查看产品'
      },
      about: {
        title: '关于轩达电子',
        subtitle: '引领音频行业20年',
        description: '深圳市轩达电子有限公司（XDEC）是一家专业的扬声器制造商，在音频行业拥有超过20年的经验。我们专注于OEM/ODM服务，为全球客户提供高质量的音频解决方案。',
        experience: '年经验',
        experienceValue: '20+',
        globalClients: '全球客户',
        globalClientsValue: '500+',
        qualityCert: '质量认证',
        qualityCertValue: '15+'
      },
      products: {
        title: '我们的产品',
        subtitle: '全面的音频解决方案',
        speaker1: '麦拉扬声器',
        speaker1Desc: '适用于各类音频设备的高质量麦拉扬声器',
        speaker2: '多媒体扬声器',
        speaker2Desc: '专为多媒体设备设计的高性能扬声器',
        speaker3: '耳机扬声器',
        speaker3Desc: '高保真耳机扬声器，提供卓越音频体验',
        speaker4: '振动扬声器',
        speaker4Desc: '集成振动功能的扬声器，适用于触觉反馈设备',
        speaker5: '微型扬声器',
        speaker5Desc: '超紧凑扬声器，适用于空间受限的便携设备',
        speaker6: '腔体扬声器',
        speaker6Desc: '采用腔体设计优化声学性能的扬声器',
        viewDetails: '查看详情',
        needCustom: '需要定制解决方案？',
        customDescription: '我们的工程团队可以根据您的特定要求设计和制造扬声器。',
        contactEngineers: '联系我们的工程师'
      },
      technology: {
        title: '技术优势',
        subtitle: '创新驱动卓越',
        advantage1: '先进研发',
        advantage1Desc: '最先进的研发设施',
        advantage2: '质量控制',
        advantage2Desc: '严格的测试和质量保证流程',
        advantage3: '制造卓越',
        advantage3Desc: '精密工程的现代化生产线',
        advantage4: '全球标准',
        advantage4Desc: 'ISO认证的制造流程'
      },
      contact: {
        title: '联系我们',
        subtitle: '联系获取定制解决方案',
        name: '姓名',
        email: '邮箱地址',
        company: '公司名称',
        message: '留言内容',
        submit: '发送消息',
        phone: '电话',
        address: '地址'
      },
      footer: {
        company: '深圳市轩达电子有限公司',
        description: '拥有20年经验的专业扬声器制造商。',
        quickLinks: '快速链接',
        contact: '联系信息',
        copyright: '© 2024 轩达电子. 保留所有权利。'
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'zh', // 默认设置为中文
    fallbackLng: 'zh',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
