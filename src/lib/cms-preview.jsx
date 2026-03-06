import React from 'react';

export const HomePreview = ({ entry, getAsset }) => {
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

export const ProductPreview = ({ entry, getAsset }) => {
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
        <div style={{ marginTop: '15px' }}>
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </div>
      </div>
    </div>
  );
};

export const NewsPreview = ({ entry, getAsset }) => {
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
          <div style={{ marginTop: '20px' }}>
            <div dangerouslySetInnerHTML={{ __html: data.body }} />
          </div>
        </div>
      </article>
    </div>
  );
};

// 注册预览组件的函数
export const registerPreviewTemplates = () => {
  // 确保在浏览器环境中运行
  if (typeof window !== 'undefined' && window.CMS) {
    try {
      // 检查是否已经注册过
      if (!window.CMS._previewTemplates) {
        window.CMS.registerPreviewTemplate('home', HomePreview);
        window.CMS.registerPreviewTemplate('products', ProductPreview);
        window.CMS.registerPreviewTemplate('news', NewsPreview);
        window.CMS._previewTemplates = true;
        console.log('Preview templates registered successfully');
      }
    } catch (error) {
      console.error('Error registering preview templates:', error);
    }
  }
};

// 在CMS初始化后注册预览模板
if (typeof window !== 'undefined') {
  window.addEventListener('DOMContentLoaded', () => {
    // 延迟注册，确保CMS已加载
    setTimeout(() => {
      if (window.CMS) {
        registerPreviewTemplates();
      }
    }, 1000);
  });
}
