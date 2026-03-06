import React from 'react';

const SettingsPreview = ({ entry }) => {
  const data = entry.getIn(['data']).toJS();

  return (
    <div className="preview-container" style={{ padding: '20px' }}>
      <div style={{ 
        maxWidth: '600px',
        margin: '0 auto',
        border: '1px solid #ddd',
        borderRadius: '8px',
        padding: '20px'
      }}>
        <h2>设置预览</h2>
        <div style={{ marginBottom: '15px' }}>
          <strong>网站标题:</strong> {data.siteTitle || '未设置'}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>网站描述:</strong> {data.siteDescription || '未设置'}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>联系邮箱:</strong> {data.contactEmail || '未设置'}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>联系电话:</strong> {data.contactPhone || '未设置'}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>公司地址:</strong> {data.companyAddress || '未设置'}
        </div>
      </div>
    </div>
  );
};

export default SettingsPreview;
