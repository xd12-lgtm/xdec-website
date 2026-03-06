import React from 'react';

// 主页组件
export const HomeComponent = ({ data }) => {
  if (!data) return null;
  
  return (
    <section className="hero-section" style={{ 
      backgroundImage: data.hero_image ? `url(${data.hero_image})` : 'none',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '500px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'white',
      textAlign: 'center'
    }}>
      <div>
        <h1>{data.title}</h1>
        {data.button_text && (
          <a href={data.button_link || '#'} className="btn btn-primary">
            {data.button_text}
          </a>
        )}
      </div>
    </section>
  );
};

// 产品组件
export const ProductComponent = ({ product }) => {
  if (!product) return null;
  
  return (
    <div className="product-card">
      {product.image && (
        <img src={product.image} alt={product.title} className="product-image" />
      )}
      <div className="product-info">
        <h3>{product.title}</h3>
        <p className="product-category">{product.category}</p>
        <p className="product-specs">{product.specs}</p>
        <p className="product-price">{product.price}</p>
        <p className="product-description">{product.description}</p>
      </div>
    </div>
  );
};

// 新闻组件
export const NewsComponent = ({ article }) => {
  if (!article) return null;
  
  return (
    <article className="news-article">
      {article.image && (
        <img src={article.image} alt={article.title} className="news-image" />
      )}
      <div className="news-content">
        <div className="news-category">{article.category}</div>
        <h2>{article.title}</h2>
        <p className="news-date">{new Date(article.date).toLocaleDateString()}</p>
        <p className="news-excerpt">{article.excerpt}</p>
        <div className="news-body">
          {article.body}
        </div>
      </div>
    </article>
  );
};

// 公司信息组件
export const CompanyComponent = ({ company }) => {
  if (!company) return null;
  
  return (
    <div className="company-info">
      <h2>{company.companyName}</h2>
      <div className="company-contact">
        <p><strong>邮箱:</strong> {company.email}</p>
        <p><strong>电话:</strong> {company.phone}</p>
        <p><strong>地址:</strong> {company.address}</p>
        <div className="company-hours">
          <strong>营业时间:</strong>
          <div>{company.businessHours}</div>
        </div>
      </div>
    </div>
  );
};

// 导出所有组件
export default {
  HomeComponent,
  ProductComponent,
  NewsComponent,
  CompanyComponent
};
