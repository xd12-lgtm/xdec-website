import React from 'react';

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
        <div style={{ marginTop: '15px' }}>
          <div dangerouslySetInnerHTML={{ __html: data.body }} />
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
