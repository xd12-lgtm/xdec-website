// 简单的 Markdown 和 YAML 前端解析器
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
  
  // 简单解析 YAML 前端数据
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

// 将 Markdown 转换为简单的 HTML
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
