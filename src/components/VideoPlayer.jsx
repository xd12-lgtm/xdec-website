import React from 'react';

const VideoPlayer = ({ url, title, className = "" }) => {
  // 如果没有URL，返回null
  if (!url) return null;

  // 检测是否为YouTube链接
  const isYouTube = url.includes('youtube.com') || url.includes('youtu.be');
  
  // 检测是否为Vimeo链接
  const isVimeo = url.includes('vimeo.com');
  
  // 如果是YouTube链接，提取视频ID
  if (isYouTube) {
    const videoId = url.split('v=')[1]?.split('&')[0] || url.split('youtu.be/')[1];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;
    
    return (
      <div className={`video-container ${className}`}>
        <iframe 
          src={embedUrl}
          title={title || "YouTube Video"}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
        ></iframe>
      </div>
    );
  }
  
  // 如果是Vimeo链接，提取视频ID
  if (isVimeo) {
    const videoId = url.split('vimeo.com/')[1]?.split('?')[0];
    const embedUrl = `https://player.vimeo.com/video/${videoId}`;
    
    return (
      <div className={`video-container ${className}`}>
        <iframe 
          src={embedUrl}
          title={title || "Vimeo Video"}
          frameBorder="0"
          allow="autoplay; fullscreen; picture-in-picture"
          allowFullScreen
          className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
        ></iframe>
      </div>
    );
  }
  
  // 如果是普通视频文件链接
  return (
    <div className={`video-container ${className}`}>
      <video 
        controls
        className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
      >
        <source src={url} type="video/mp4" />
        您的浏览器不支持视频播放。
      </video>
    </div>
  );
};

export default VideoPlayer;
