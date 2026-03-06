// CMS 数据获取工具

// 从本地文件获取数据
export const fetchLocalData = async (filePath) => {
  try {
    const response = await fetch(filePath);
    if (!response.ok) {
      throw new Error(`Failed to fetch ${filePath}`);
    }
    const text = await response.text();
    return parseMarkdownWithFrontmatter(text);
  } catch (error) {
    console.error('Error fetching local data:', error);
    return null;
  }
};

// 解析 Markdown 和 Frontmatter
export const parseMarkdownWithFrontmatter = (content) => {
  const frontmatterRegex = /^---\s*[\n\r]([\s\S]*?)[\n\r]---\s*[\n\r]([\s\S]*)$/;
  const match = content.match(frontmatterRegex);
  
  if (!match) {
    return {
      data: {},
      content: content
    };
  }
  
  const [, frontmatter, markdownContent] = match;
  const data = {};
  
  // 解析 YAML 前端数据
  frontmatter.split('\n').forEach(line => {
    const colonIndex = line.indexOf(':');
    if (colonIndex > 0) {
      const key = line.substring(0, colonIndex).trim();
      const value = line.substring(colonIndex + 1).trim();
      // 移除引号
      data[key] = value.replace(/^['"](.*)['"]$/, '$1');
    }
  });
  
  return {
    data,
    content: markdownContent
  };
};

// 获取主页数据
export const getHomeData = async () => {
  return await fetchLocalData('/src/content/home.md');
};

// 获取关于页面数据
export const getAboutData = async () => {
  return await fetchLocalData('/src/content/about.md');
};

// 获取公司信息数据
export const getCompanyData = async () => {
  return await fetchLocalData('/src/content/company.md');
};

// 获取产品数据
export const getProductData = async (productId) => {
  return await fetchLocalData(`/src/content/products/${productId}.md`);
};

// 获取所有产品数据
export const getAllProductsData = async () => {
  const products = [];
  const productFiles = [
    'md-100.md',
    'md-200.md',
    'md-300.md',
    'mmd-100.md',
    'mmd-200.md',
    'mmd-300.md',
    'hd-100.md',
    'hd-200.md',
    'hd-300.md',
    'vd-100.md',
    'vd-200.md',
    'vd-300.md',
    'mid-100.md',
    'mid-200.md',
    'mid-300.md',
    'cd-100.md',
    'cd-200.md',
    'cd-300.md'
  ];
  
  for (const file of productFiles) {
    const productData = await fetchLocalData(`/src/content/products/${file}`);
    if (productData) {
      products.push(productData);
    }
  }
  
  return products;
};

// 获取新闻数据
export const getNewsData = async (newsId) => {
  return await fetchLocalData(`/src/content/news/${newsId}.md`);
};

// 获取所有新闻数据
export const getAllNewsData = async () => {
  const news = [];
  const newsFiles = [
    'product-launch.md',
    'facility-expansion.md',
    'iso-certification.md',
    'partnership.md',
    'ces-2024.md',
    'award.md'
  ];
  
  for (const file of newsFiles) {
    const newsData = await fetchLocalData(`/src/content/news/${file}`);
    if (newsData) {
      news.push(newsData);
    }
  }
  
  return news;
};

// 获取设置数据
export const getSettingsData = async () => {
  const settings = {};
  
  const generalSettings = await fetchLocalData('/src/content/settings/general.md');
  if (generalSettings) {
    settings.general = generalSettings.data;
  }
  
  const homepageSettings = await fetchLocalData('/src/content/settings/homepage.md');
  if (homepageSettings) {
    settings.homepage = homepageSettings.data;
  }
  
  const aboutSettings = await fetchLocalData('/src/content/settings/about.md');
  if (aboutSettings) {
    settings.about = aboutSettings.data;
  }
  
  const productsSettings = await fetchLocalData('/src/content/settings/products.md');
  if (productsSettings) {
    settings.products = productsSettings.data;
  }
  
  const contactSettings = await fetchLocalData('/src/content/settings/contact.md');
  if (contactSettings) {
    settings.contact = contactSettings.data;
  }
  
  return settings;
};

// 将 Markdown 转换为 HTML
export const markdownToHtml = (markdown) => {
  if (!markdown) return '';
  
  return markdown
    .replace(/^# (.*$)/gim, '<h1>$1</h1>')
    .replace(/^## (.*$)/gim, '<h2>$1</h2>')
    .replace(/^### (.*$)/gim, '<h3>$1</h3>')
    .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
    .replace(/\*(.*)\*/gim, '<em>$1</em>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/gim, '<a href="$2">$1</a>')
    .replace(/\n/gim, '<br>');
};

// 获取双语内容
export const getBilingualContent = (content, language) => {
  if (!content) return '';
  
  // 如果内容是字符串，直接返回
  if (typeof content === 'string') return content;
  
  // 如果内容是对象，根据语言返回对应内容
  if (typeof content === 'object') {
    return content[language] || content.en || content.zh || '';
  }
  
  return '';
};
