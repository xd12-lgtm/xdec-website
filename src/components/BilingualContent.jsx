import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';

const BilingualContent = ({ 
  content, 
  className = "", 
  enableCodeToggle = false,
  enableMarkdown = true 
}) => {
  const { i18n } = useTranslation();
  const [showCode, setShowCode] = useState(false);
  
  // 获取当前语言的内容
  const getCurrentLanguageContent = () => {
    if (!content) return '';
    
    // 如果内容是字符串，直接返回
    if (typeof content === 'string') return content;
    
    // 如果内容是对象，根据当前语言返回对应内容
    if (typeof content === 'object') {
      const currentLang = i18n.language;
      return content[currentLang] || content.en || content.zh || '';
    }
    
    return '';
  };

  const currentContent = getCurrentLanguageContent();

  // 如果不启用代码切换，直接渲染内容
  if (!enableCodeToggle) {
    if (enableMarkdown) {
      return (
        <div className={`prose prose-lg max-w-none ${className}`}>
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={tomorrow}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {currentContent}
          </ReactMarkdown>
        </div>
      );
    }
    
    return <div className={className}>{currentContent}</div>;
  }

  // 启用代码切换功能
  return (
    <div className={`bilingual-content ${className}`}>
      <div className="flex justify-between items-center mb-4">
        <div className="text-sm text-gray-500">
          当前语言: {i18n.language === 'zh' ? '中文' : 'English'}
        </div>
        <button
          onClick={() => setShowCode(!showCode)}
          className="px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded text-sm transition-colors"
        >
          {showCode ? '显示预览' : '显示代码'}
        </button>
      </div>
      
      {showCode ? (
        <div className="relative">
          <SyntaxHighlighter
            language="markdown"
            style={tomorrow}
            customStyle={{
              borderRadius: '0.375rem',
              fontSize: '0.875rem'
            }}
          >
            {currentContent}
          </SyntaxHighlighter>
        </div>
      ) : (
        <div className="prose prose-lg max-w-none">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              code({ node, inline, className, children, ...props }) {
                const match = /language-(\w+)/.exec(className || '');
                return !inline && match ? (
                  <SyntaxHighlighter
                    style={tomorrow}
                    language={match[1]}
                    PreTag="div"
                    {...props}
                  >
                    {String(children).replace(/\n$/, '')}
                  </SyntaxHighlighter>
                ) : (
                  <code className={className} {...props}>
                    {children}
                  </code>
                );
              }
            }}
          >
            {currentContent}
          </ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default BilingualContent;
