#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 开始构建 XDEC 官网...');

try {
  // 安装依赖
  console.log('📦 安装依赖...');
  execSync('npm install', { stdio: 'inherit' });
  
  // 构建项目
  console.log('🔨 构建项目...');
  execSync('npm run build', { stdio: 'inherit' });
  
  console.log('✅ 构建完成！');
  console.log('📁 构建文件位于: build/ 目录');
  
} catch (error) {
  console.error('❌ 构建失败:', error.message);
  process.exit(1);
}
