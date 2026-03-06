import React, { useEffect } from 'react';

const CMSIntegration = () => {
  useEffect(() => {
    // 检查是否在浏览器环境中运行
    if (typeof window === 'undefined') return;
    
    // 只有在访问 /admin 路径时才加载 CMS
    if (window.location.pathname.includes('/admin')) {
      // 确保CMS脚本只加载一次
      if (window.CMS && window.CMS.init) {
        console.log('CMS already loaded');
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://unpkg.com/decap-cms@^3.0.0/dist/decap-cms.js';
      script.async = true;
      
      script.onload = () => {
        try {
          if (window.CMS) {
            // 初始化CMS
            window.CMS.init();
            console.log('CMS initialized successfully');
            
            // 注册自定义小工具和预览模板
            if (window.CMS.registerWidget && window.CMS.registerPreviewTemplate) {
              // 延迟注册以确保CMS完全加载
              setTimeout(() => {
                // 注册自定义小工具
                registerCustomWidgets();
                // 注册预览模板
                registerPreviewTemplates();
              }, 500);
            }
          }
        } catch (error) {
          console.error('CMS initialization error:', error);
        }
      };
      
      script.onerror = () => {
        console.error('Failed to load CMS script');
      };
      
      document.body.appendChild(script);

      return () => {
        // 清理脚本
        if (document.body.contains(script)) {
          document.body.removeChild(script);
        }
      };
    }
  }, []);

  // 注册自定义小工具
  const registerCustomWidgets = () => {
    if (!window.CMS || !window.CMS.registerWidget) return;
    
    try {
      // 视频选择器小工具
      window.CMS.registerWidget('video-selector', VideoSelector);
      console.log('Video selector widget registered');
    } catch (error) {
      console.error('Error registering custom widgets:', error);
    }
  };

  // 注册预览模板
  const registerPreviewTemplates = () => {
    if (!window.CMS || !window.CMS.registerPreviewTemplate) return;
    
    try {
      // 注册主页预览模板
      window.CMS.registerPreviewTemplate('home', HomePreview);
      // 注册产品预览模板
      window.CMS.registerPreviewTemplate('products', ProductPreview);
      // 注册新闻预览模板
      window.CMS.registerPreviewTemplate('news', NewsPreview);
      // 注册关于页面预览模板
      window.CMS.registerPreviewTemplate('about', AboutPreview);
      
      console.log('Preview templates registered successfully');
    } catch (error) {
      console.error('Error registering preview templates:', error);
    }
  };

  return null;
};

// 视频选择器小工具
const VideoSelector = ({ value, onChange, forID }) => {
  const handleVideoChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div className="video-selector">
      <label htmlFor={forID} className="block text-sm font-medium text-gray-700 mb-2">
        视频链接或上传
      </label>
      <input
        type="text"
        id={forID}
        value={value || ''}
        onChange={handleVideoChange}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="输入YouTube、Vimeo链接或视频文件URL"
      />
      <div className="mt-2 text-sm text-gray-500">
        支持YouTube、Vimeo链接或视频文件URL
      </div>
      {value && (
        <div className="mt-4">
          <VideoPlayer url={value} title="视频预览" />
        </div>
      )}
    </div>
  );
};

// 主页预览组件
const HomePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  const heroImage = getAsset(data.hero_image);

  return (
    <div className="preview-container">
      <div className="hero-section" style={{ 
        backgroundImage: heroImage ? `url(${heroImage})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '400px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textAlign: 'center'
      }}>
        <div>
          <h1>{data.title || '主页标题'}</h1>
          {data.button_text && (
            <a href={data.button_link || '#'} className="btn btn-primary">
              {data.button_text}
            </a>
          )}
        </div>
      </div>
      <div className="content-section" style={{ padding: '20px' }}>
        <div dangerouslySetInnerHTML={{ __html: data.body }} />
      </div>
    </div>
  );
};

// 产品预览组件
const ProductPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  const productImage = getAsset(data.image);

  return (
    <div className="preview-container" style={{ padding: '20px' }}>
      <div className="product-card" style={{ 
        border: '1px solid #ddd', 
        borderRadius: '8px', 
        padding: '20px',
        maxWidth: '600px',
        margin: '0 auto'
      }}>
        {productImage && (
          <img 
            src={productImage} 
            alt={data.title} 
            style={{ 
              width: '100%', 
              height: '200px', 
              objectFit: 'cover',
              borderRadius: '4px',
              marginBottom: '15px'
            }} 
          />
        )}
        <h2>{data.title || '产品名称'}</h2>
        <p><strong>分类:</strong> {data.category || '未分类'}</p>
        <p><strong>规格:</strong> {data.specs || '暂无规格'}</p>
        <p><strong>价格:</strong> {data.price || '价格待定'}</p>
        <p>{data.description || '产品描述'}</p>
        
        {/* 视频预览 */}
        {data.video && (
          <div style={{ margin: '15px 0' }}>
            <VideoPlayer url={data.video} title={data.title} />
          </div>
        )}
        
        <div style={{ marginTop: '15px' }}>
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </div>
      </div>
    </div>
  );
};

// 新闻预览组件
const NewsPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  const newsImage = getAsset(data.image);

  return (
    <div className="preview-container" style={{ padding: '20px' }}>
      <article className="news-article" style={{ 
        maxWidth: '800px',
        margin: '0 auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        {newsImage && (
          <img 
            src={newsImage} 
            alt={data.title} 
            style={{ 
              width: '100%', 
              height: '300px', 
              objectFit: 'cover'
            }} 
          />
        )}
        <div style={{ padding: '20px' }}>
          <div style={{ 
            display: 'inline-block',
            backgroundColor: '#1a365d',
            color: 'white',
            padding: '4px 12px',
            borderRadius: '20px',
            fontSize: '12px',
            marginBottom: '10px'
          }}>
            {data.category || '新闻分类'}
          </div>
          <h1>{data.title || '新闻标题'}</h1>
          <p style={{ color: '#666', fontSize: '14px' }}>
            {data.date ? new Date(data.date).toLocaleDateString() : '发布日期'}
          </p>
          <p style={{ fontStyle: 'italic', margin: '15px 0' }}>
            {data.excerpt || '新闻摘要'}
          </p>
          
          {/* 视频预览 */}
          {data.video && (
            <div style={{ margin: '15px 0' }}>
              <VideoPlayer url={data.video} title={data.title} />
            </div>
          )}
          
          <div style={{ marginTop: '20px' }}>
            <div dangerouslySetInnerHTML={{ __html: data.body }} />
          </div>
        </div>
      </article>
    </div>
  );
};

// 关于页面预览组件
const AboutPreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS();
  const aboutImage = getAsset(data.about_image);

  return (
    <div className="preview-container" style={{ padding: '20px' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1>{data.title || '关于我们'}</h1>
        <h2>{data.subtitle || '副标题'}</h2>
        <p>{data.description || '描述'}</p>
        
        {aboutImage && (
          <img 
            src={aboutImage} 
            alt="关于我们" 
            style={{ 
              width: '100%', 
              height: '300px', 
              objectFit: 'cover',
              borderRadius: '8px',
              margin: '20px 0'
            }} 
          />
        )}
        
        {/* 视频预览 */}
        {data.about_video && (
          <div style={{ margin: '20px 0' }}>
            <VideoPlayer url={data.about_video} title="公司介绍视频" />
          </div>
        )}
        
        <div style={{ marginTop: '20px' }}>
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </div>
      </div>
    </div>
  );
};

// 视频播放器组件
const VideoPlayer = ({ url, title }) => {
  if (!url) return null;

  // 检测是否为YouTube链接
  const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');
  
  // 检测是否为Vimeo链接
  const isVimeo = url.includes('vimeo.com');
  
  // 如果是YouTube链接，提取视频ID
  if (isYouTube) {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('youtu.be/')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    
    return (
      <div className="video-container">
        <iframe 
          src={embedUrl}
          title={title || "YouTube Video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '300px' }}
        ></iframe>
      </div>
    );
  }
  
  // 如果是Vimeo链接，提取视频ID
  if (isVimeo) {
    const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
    const embedUrl = `https://player.vimeo.com/video/${videoId}`;
    
    return (
      <div className="video-container">
        <iframe 
          src={embedUrl}
          title={title || "Vimeo Video"}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          style={{ width: '100%', height: '300px' }}
        ></iframe>
      </div>
    );
  }
  
  // 如果是普通视频文件链接
  return (
    <div className="video-container">
      <video 
        controls
        style={{ width: '100%', height: '300px' }}
      >
        <source src={url} type="video/mp4" />
        您的浏览器不支持视频播放。
      </video>
    </div>
  );
};

export default CMSIntegration;
