#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🧹 清理构建缓存...');

const dirsToClean = [
  'node_modules/.vite',
  '.vite',
  'build',
  'dist'
];

dirsToClean.forEach(dir => {
  const dirPath = path.join(process.cwd(), dir);
  if (fs.existsSync(dirPath)) {
    console.log(`删除: ${dir}`);
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
});

console.log('✅ 清理完成！');
console.log('💡 请运行 npm install 重新安装依赖');
