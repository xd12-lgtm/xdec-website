import React from 'react';

const CompanyPreview = ({ entry }) => {
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
        <h2>公司信息预览</h2>
        <div style={{ marginBottom: '15px' }}>
          <strong>公司名称:</strong> {data.companyName || '未设置'}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>邮箱:</strong> {data.email || '未设置'}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>电话:</strong> {data.phone || '未设置'}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>地址:</strong> {data.address || '未设置'}
        </div>
        <div style={{ marginBottom: '15px' }}>
          <strong>营业时间:</strong> 
          <div style={{ whiteSpace: 'pre-line' }}>
            {data.businessHours || '未设置'}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyPreview;
