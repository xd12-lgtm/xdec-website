// 自定义 CMS 小工具
import React from 'react';

// 图片选择器小工具
export const ImageSelector = ({ value, onChange, forID }) => {
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        onChange(e.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="image-selector">
      <label htmlFor={forID} className="block text-sm font-medium text-gray-700 mb-2">
        选择图片
      </label>
      <input
        type="file"
        id={forID}
        accept="image/*"
        onChange={handleImageChange}
        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"
      />
      {value && (
        <div className="mt-2">
          <img src={value} alt="预览" className="h-32 w-32 object-cover rounded" />
        </div>
      )}
    </div>
  );
};

// 富文本编辑器小工具
export const RichTextEditor = ({ value, onChange, forID }) => {
  return (
    <div className="rich-text-editor">
      <label htmlFor={forID} className="block text-sm font-medium text-gray-700 mb-2">
        内容编辑
      </label>
      <textarea
        id={forID}
        value={value || ''}
        onChange={(e) => onChange(e.target.value)}
        rows={10}
        className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        placeholder="请输入内容..."
      />
      <div className="mt-2 text-sm text-gray-500">
        支持 Markdown 语法
      </div>
    </div>
  );
};

// 颜色选择器小工具
export const ColorPicker = ({ value, onChange, forID }) => {
  return (
    <div className="color-picker">
      <label htmlFor={forID} className="block text-sm font-medium text-gray-700 mb-2">
        选择颜色
      </label>
      <div className="flex items-center">
        <input
          type="color"
          id={forID}
          value={value || '#1a365d'}
          onChange={(e) => onChange(e.target.value)}
          className="h-10 w-10 border border-gray-300 rounded"
        />
        <input
          type="text"
          value={value || '#1a365d'}
          onChange={(e) => onChange(e.target.value)}
          className="ml-2 block w-24 border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
        />
      </div>
    </div>
  );
};

// 注册自定义小工具
export const registerWidgets = () => {
  if (typeof CMS !== 'undefined') {
    CMS.registerWidget('image-selector', ImageSelector);
    CMS.registerWidget('rich-text', RichTextEditor);
    CMS.registerWidget('color-picker', ColorPicker);
  }
};
