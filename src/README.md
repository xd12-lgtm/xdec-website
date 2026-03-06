# XDEC 扬声器制造公司官网

这是一个专业的扬声器制造公司官网，使用 React + Vite + Tailwind CSS 构建。

## 项目特性

- 响应式设计，支持移动端和桌面端
- 中英文双语支持
- 现代化UI设计
- 完整的产品展示系统
- 媒体新闻中心
- 联系表单功能
- SEO优化

## 技术栈

- React 18
- Vite
- Tailwind CSS
- React Router
- React i18next
- Lucide React Icons
- React Helmet Async

## 项目结构

```
src/
├── components/          # 可复用组件
│   ├── AboutSection.jsx
│   ├── ContactSection.jsx
│   ├── Footer.jsx
│   ├── Header.jsx
│   ├── HeroSection.jsx
│   ├── MediaSection.jsx
│   ├── ProductsSection.jsx
│   ├── SEO.jsx
│   └── TechnologySection.jsx
├── pages/              # 页面组件
│   ├── About.jsx
│   ├── CategoryDetail.jsx
│   ├── Index.jsx
│   ├── Media.jsx
│   ├── NewsDetail.jsx
│   ├── ProductDetail.jsx
│   └── Products.jsx
├── i18n/              # 国际化配置
│   └── index.js
├── lib/               # 工具函数
│   └── utils.js
├── App.jsx           # 应用入口
├── main.jsx         # 渲染入口
└── nav-items.jsx    # 路由配置
```

## 快速开始

1. 克隆项目
```bash
git clone <repository-url>
cd xdec-website
```

2. 安装依赖
```bash
npm install
```

3. 启动开发服务器
```bash
npm run dev
```

4. 构建生产版本
```bash
npm run build
```

## 主要功能

### 首页
- 英雄区域展示
- 公司介绍
- 产品概览
- 媒体中心
- 技术优势
- 联系信息

### 产品中心
- 产品分类展示
- 产品详情页面
- 技术规格表
- 相关产品推荐

### 媒体中心
- 新闻文章列表
- 文章详情页面
- 搜索和分类功能

### 关于我们
- 公司历史
- 核心价值观
- 制造流程
- 全球业务

## 部署

项目支持静态部署，构建后的文件位于 `build/` 目录。

### 使用 Netlify 部署
1. 将项目推送到 GitHub
2. 在 Netlify 中导入项目
3. 设置构建命令：`npm run build`
4. 设置发布目录：`build`

### 使用 Vercel 部署
1. 将项目推送到 GitHub
2. 在 Vercel 中导入项目
3. 自动检测构建配置

## 自定义配置

### 修改公司信息
编辑 `src/components/Footer.jsx` 和各个页面中的公司信息。

### 添加新产品
在 `src/pages/Products.jsx` 中的 `productCategories` 数组添加新产品。

### 修改颜色主题
编辑 `tailwind.config.js` 中的颜色配置。

### 添加新语言
在 `src/i18n/index.js` 中添加新的语言资源。

## 许可证

MIT License
