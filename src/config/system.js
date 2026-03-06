// 系统配置文件
export const SYSTEM_CONFIG = {
  // 启用文件操作权限
  FILE_OPERATIONS_ENABLED: true,
  
  // 允许的文件操作类型
  ALLOWED_OPERATIONS: [
    'read',
    'write', 
    'delete',
    'create'
  ],
  
  // 允许操作的文件路径
  ALLOWED_PATHS: [
    'src/',
    'public/',
    'content/',
    'config/'
  ],
  
  // 最大文件大小限制 (MB)
  MAX_FILE_SIZE: 10,
  
  // 允许的文件扩展名
  ALLOWED_EXTENSIONS: [
    '.js',
    '.jsx', 
    '.json',
    '.md',
    '.yml',
    '.yaml',
    '.css',
    '.html'
  ]
};

// 检查文件操作权限
export const checkFilePermission = (operation, filePath) => {
  if (!SYSTEM_CONFIG.FILE_OPERATIONS_ENABLED) {
    throw new Error('文件操作权限未启用');
  }
  
  if (!SYSTEM_CONFIG.ALLOWED_OPERATIONS.includes(operation)) {
    throw new Error(`不允许的操作类型: ${operation}`);
  }
  
  const isAllowedPath = SYSTEM_CONFIG.ALLOWED_PATHS.some(path => 
    filePath.startsWith(path)
  );
  
  if (!isAllowedPath) {
    throw new Error(`不允许操作的文件路径: ${filePath}`);
  }
  
  return true;
};

// 获取文件大小
export const getFileSize = (filePath) => {
  // 这里可以实现获取文件大小的逻辑
  return 0;
};

// 检查文件大小限制
export const checkFileSize = (filePath) => {
  const size = getFileSize(filePath);
  const maxSize = SYSTEM_CONFIG.MAX_FILE_SIZE * 1024 * 1024; // 转换为字节
  
  if (size > maxSize) {
    throw new Error(`文件大小超出限制: ${size} bytes > ${maxSize} bytes`);
  }
  
  return true;
};
