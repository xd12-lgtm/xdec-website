import React from 'react';

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

export default HomePreview;
