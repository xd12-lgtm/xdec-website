import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';

const SEO = ({ title, description, keywords, image, type = 'website' }) => {
  const { i18n } = useTranslation();
  
  const metaData = {
    en: {
      title: title || 'Xuanda Electronics - Professional Speaker Manufacturer',
      description: description || 'Xuanda Electronics is a professional speaker manufacturer with 20 years of experience, providing high-quality audio solutions worldwide.',
      keywords: keywords || 'speaker manufacturer, audio solutions, OEM speaker, custom speaker'
    },
    zh: {
      title: title || '轩达电子 - 专业扬声器制造商',
      description: description || '轩达电子是一家拥有20年经验的专业扬声器制造商，提供高质量的全球音频解决方案。',
      keywords: keywords || '扬声器制造商, 音频解决方案, OEM扬声器, 定制扬声器'
    }
  };

  const currentLang = i18n.language;
  const data = metaData[currentLang] || metaData.en;

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Shenzhen Xuanda Electronics Co., Ltd.",
    "alternateName": "XDEC",
    "url": "https://www.xdec.com",
    "logo": "https://photo.bj.ide.test.sankuai.com/?keyword=electronics,logo&width=200&height=100",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+86-755-12345678",
      "contactType": "customer service",
      "availableLanguage": ["English", "Chinese"]
    },
    "sameAs": [
      "https://www.facebook.com/xdec",
      "https://www.linkedin.com/company/xdec"
    ]
  };

  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": title || "Speaker Driver",
    "image": image || "https://photo.bj.ide.test.sankuai.com/?keyword=speaker,driver&width=800&height=600",
    "description": description || "High-quality speaker driver for audio applications",
    "brand": {
      "@type": "Brand",
      "name": "XDEC"
    },
    "manufacturer": {
      "@type": "Organization",
      "name": "Shenzhen Xuanda Electronics Co., Ltd."
    }
  };

  const schema = type === 'product' ? productSchema : organizationSchema;

  return (
    <Helmet>
      <title>{data.title}</title>
      <meta name="description" content={data.description} />
      <meta name="keywords" content={data.keywords} />
      <meta property="og:title" content={data.title} />
      <meta property="og:description" content={data.description} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={image || "https://photo.bj.ide.test.sankuai.com/?keyword=electronics,factory&width=1200&height=630"} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={data.title} />
      <meta name="twitter:description" content={data.description} />
      <script type="application/ld+json">
        {JSON.stringify(schema)}
      </script>
    </Helmet>
  );
};

export default SEO;
