import React from 'react';

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
          <div style={{ marginTop: '20px' }}>
            <div dangerouslySetInnerHTML={{ __html: data.body }} />
          </div>
        </div>
      </article>
    </div>
  );
};

export default NewsPreview;
