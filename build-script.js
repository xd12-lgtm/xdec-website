```js
#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 开始构建 XDEC 官网...');

try {
  // 清理缓存和构建目录
  console.log('🧹 清理缓存和构建目录...');
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
  
  // 安装依赖
  console.log('📦 安装依赖...');
  try {
    execSync('npm install --legacy-peer-deps', { 
      stdio: 'inherit',
      env: {
        ...process.env,
        NPM_CONFIG_PRODUCTION: 'false'
      }
    });
  } catch (error) {
    console.error('❌ 依赖安装失败，尝试清理后重试...');
    execSync('rm -rf node_modules package-lock.json', { stdio: 'inherit' });
    execSync('npm install --legacy-peer-deps', { 
      stdio: 'inherit',
      env: {
        ...process.env,
        NPM_CONFIG_PRODUCTION: 'false'
      }
    });
  }
  
  // 构建项目
  console.log('🔨 构建项目...');
  execSync('npm run build', { 
    stdio: 'inherit',
    env: {
      ...process.env,
      NODE_ENV: 'production'
    }
  });
  
  console.log('✅ 构建完成！');
  console.log('📁 构建文件位于: build/ 目录');
  
} catch (error) {
  console.error('❌ 构建失败:', error.message);
  console.error('💡 建议检查以下内容:');
  console.error('   1. Node.js 版本是否为 18.x');
  console.error('   2. 网络连接是否正常');
  console.error('   3. package.json 中的依赖是否正确');
  process.exit(1);
}
```
