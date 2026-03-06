import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { ArrowLeft, Calendar, User, ArrowRight } from 'lucide-react';
import SEO from './../components/SEO';
import Header from './../components/Header';
import Footer from './../components/Footer';
import VideoPlayer from './../components/VideoPlayer';

const NewsDetail = () => {
  const { newsId } = useParams();
  const navigate = useNavigate();

  // 示例新闻数据
  const newsArticles = [
    {
      id: 1,
      title: 'XDEC Launches New Line of Smart Speakers with AI Integration',
      content: `Our latest smart speaker series features advanced AI voice recognition and seamless smart home integration. This groundbreaking product line represents years of research and development in artificial intelligence and audio technology.

The new smart speakers come equipped with state-of-the-art voice processing capabilities, allowing for natural language interactions and personalized responses. With support for multiple languages and dialects, these speakers can adapt to various user preferences and environments.

Key features include:
- Advanced AI voice recognition
- Seamless smart home integration
- Multi-room audio synchronization
- High-fidelity sound quality
- Energy-efficient design

The speakers are designed to work with popular smart home ecosystems, providing users with a unified control experience. Whether you're managing your lighting, security system, or entertainment devices, these speakers offer intuitive voice control capabilities.

Our engineering team has worked tirelessly to ensure that these speakers deliver exceptional audio performance while maintaining the compact form factor that our customers expect. The result is a product that combines cutting-edge technology with practical functionality.

We believe this new product line will set a new standard in the smart speaker market, offering unparalleled user experience and reliability.`,
      date: '2024-03-01',
      author: 'XDEC Team',
      category: 'Product Launch',
      image: 'https://photo.bj.ide.test.sankuai.com/?keyword=smart,speaker,ai&width=800&height=400',
      video: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' // 示例视频链接
    },
    {
      id: 2,
      title: 'XDEC Expands Manufacturing Facility to Meet Growing Demand',
      content: `To meet the increasing global demand for our audio products, XDEC has announced the expansion of our manufacturing facility. The new 50,000 sq ft addition will increase our production capacity by 40%, allowing us to serve our customers more efficiently.

This expansion represents a significant investment in our future and demonstrates our commitment to maintaining the highest standards of quality and service. The new facility will be equipped with the latest manufacturing technologies and will create over 200 new jobs in the local community.

The expanded facility will feature:
- State-of-the-art production lines
- Advanced quality control systems
- Environmentally sustainable practices
- Increased storage and logistics capabilities
- Research and development laboratories

Our CEO stated, "This expansion is a testament to the hard work and dedication of our team, as well as the trust that our customers place in our products. We are excited to be able to meet the growing demand for our audio solutions and to continue innovating in this space."

The new facility is expected to be fully operational by the end of the year, with initial production beginning in the third quarter. This expansion will enable us to reduce lead times and improve our ability to respond to customer needs quickly.`,
      date: '2024-02-15',
      author: 'XDEC Team',
      category: 'Company News',
      image: 'https://photo.bj.ide.test.sankuai.com/?keyword=manufacturing,factory,expansion&width=800&height=400'
    },
    {
      id: 3,
      title: 'XDEC Receives ISO 9001:2015 Certification for Quality Management',
      content: `XDEC is proud to announce that we have received ISO 9001:2015 certification for our quality management system. This internationally recognized certification demonstrates our commitment to quality and continuous improvement in all our processes.

The ISO 9001:2015 certification is based on a number of quality management principles including a strong customer focus, the involvement of top management, a process approach, and continual improvement. It provides a framework that ensures consistent quality in our products and services.

Achieving this certification involved:
- Comprehensive review of our quality management processes
- Implementation of standardized procedures
- Employee training and awareness programs
- Regular internal audits and assessments
- Continuous monitoring and improvement initiatives

Our Quality Manager commented, "This certification is a reflection of our dedication to excellence and our ongoing efforts to provide the highest quality products to our customers. It validates the hard work of our entire team and our commitment to maintaining the highest standards."

The certification process was conducted by an independent third-party auditor and involved a thorough assessment of our quality management system. We are now one of the few companies in our industry to achieve this level of certification.

This achievement reinforces our position as a leader in the audio industry and provides our customers with additional confidence in the quality and reliability of our products.`,
      date: '2024-01-20',
      author: 'XDEC Team',
      category: 'Certification',
      image: 'https://photo.bj.ide.test.sankuai.com/?keyword=iso,certification,quality&width=800&height=400'
    },
    {
      id: 4,
      title: 'XDEC Partners with Leading Audio Technology Company',
      content: `XDEC has entered into a strategic partnership with a leading audio technology company to enhance our research and development capabilities and expand our product portfolio. This collaboration will enable us to bring innovative audio solutions to market more quickly and efficiently.

The partnership will focus on:
- Joint research and development projects
- Technology sharing and licensing
- Co-development of next-generation audio products
- Expansion into new market segments
- Enhanced customer support and service

Our Chief Technology Officer stated, "This partnership represents a significant milestone in our company's growth strategy. By combining our expertise with that of our partner, we can accelerate innovation and deliver even more value to our customers."

The collaboration will begin with a focus on developing advanced audio processing technologies that will be integrated into our existing product lines. This will include improvements in sound quality, noise cancellation, and energy efficiency.

We expect this partnership to result in several new product launches over the next two years, further strengthening our position in the global audio market. Our customers can look forward to even more innovative and high-quality audio solutions in the near future.`,
      date: '2024-01-10',
      author: 'XDEC Team',
      category: 'Partnership',
      image: 'https://photo.bj.ide.test.sankuai.com/?keyword=partnership,business,handshake&width=800&height=400'
    },
    {
      id: 5,
      title: 'XDEC Showcases Latest Innovations at CES 2024',
      content: `XDEC made a significant impact at CES 2024, showcasing our latest audio innovations to industry leaders and technology enthusiasts from around the world. Our booth featured cutting-edge audio technologies and received overwhelmingly positive feedback from attendees.

Highlights from our CES 2024 showcase included:
- Next-generation smart speaker prototypes
- Advanced noise-cancellation technologies
- Wireless audio transmission solutions
- Customizable audio profiles
- Sustainable audio product designs

Our team demonstrated several breakthrough technologies that are set to revolutionize the audio industry. Visitors to our booth were particularly impressed by our new line of eco-friendly speakers, which combine high performance with sustainable materials.

The event provided an excellent platform for us to connect with potential partners, customers, and industry experts. We held numerous productive meetings and established several new business relationships that we believe will lead to exciting collaborations in the future.

Our Marketing Director commented, "CES 2024 was an incredible opportunity for us to showcase our latest innovations and to demonstrate our commitment to pushing the boundaries of audio technology. The response from attendees has been overwhelmingly positive, and we are excited about the opportunities that lie ahead."

We are already planning our participation in CES 2025 and are working on even more groundbreaking technologies to share with the world.`,
      date: '2023-12-15',
      author: 'XDEC Team',
      category: 'Trade Show',
      image: 'https://photo.bj.ide.test.sankuai.com/?keyword=ces,trade,show,technology&width=800&height=400'
    },
    {
      id: 6,
      title: 'XDEC Wins "Best Audio Product" Award at Tech Innovation Awards',
      content: `XDEC is honored to have received the "Best Audio Product" award at the prestigious Tech Innovation Awards for our XDEC-BT300 Bluetooth speaker. This recognition is a testament to our commitment to innovation and excellence in audio technology.

The XDEC-BT300 was recognized for its:
- Superior sound quality
- Innovative design
- Energy efficiency
- User-friendly interface
- Competitive pricing

The award was presented by a panel of industry experts who evaluated hundreds of products based on innovation, design, functionality, and market impact. Our XDEC-BT300 stood out for its exceptional audio performance and sleek, modern design.

Our Product Manager stated, "We are thrilled to receive this award, which validates the hard work and dedication of our entire team. The XDEC-BT300 represents the culmination of years of research and development, and we are proud to see it recognized by our peers in the industry."

The XDEC-BT300 features advanced Bluetooth 5.0 technology, providing seamless connectivity and extended range. Its compact design makes it perfect for both indoor and outdoor use, while its long-lasting battery ensures hours of uninterrupted music playback.

This award reinforces our position as a leader in the audio industry and motivates us to continue pushing the boundaries of what's possible in audio technology. We are grateful to the Tech Innovation Awards for this recognition and to our customers for their continued support.`,
      date: '2023-11-30',
      author: 'XDEC Team',
      category: 'Award',
      image: 'https://photo.bj.ide.test.sankuai.com/?keyword=award,trophy,recognition&width=800&height=400'
    }
  ];

  const article = newsArticles.find(item => item.id === parseInt(newsId));

  // 添加滚动到顶部的效果
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [newsId]);

  if (!article) {
    return (
      <HelmetProvider>
        <div className="min-h-screen">
          <SEO />
          <Header />
          <main className="py-20 text-center">
            <h1 className="text-3xl font-bold text-[#1a365d] mb-4">Article Not Found</h1>
            <p className="text-gray-600 mb-8">The article you are looking for does not exist.</p>
            <button 
              onClick={() => navigate('/media')}
              className="bg-[#1a365d] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#2d5a87] transition-colors"
            >
              Back to Media Center
            </button>
          </main>
          <Footer />
        </div>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <div className="min-h-screen">
        <SEO 
          title={`${article.title} - XDEC`}
          description={article.content.substring(0, 150) + '...'}
          keywords={`${article.category}, ${article.title}, XDEC News`}
          image={article.image}
        />
        <Header />
        <main>
          {/* Hero Section */}
          <section className="relative py-16 bg-gradient-to-br from-[#1a365d] to-[#2d5a87]">
            <div className="absolute inset-0 z-0">
              <img 
                src={article.image} 
                alt={article.title} 
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#1a365d]/80 to-[#2d5a87]/60"></div>
            </div>
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <button 
                onClick={() => navigate('/media')}
                className="flex items-center text-white mb-6 hover:text-gray-200 transition-colors"
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Back to Media Center
              </button>
              <div className="bg-[#1a365d] text-white px-3 py-1 rounded-full text-sm font-medium inline-block mb-4">
                {article.category}
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                {article.title}
              </h1>
              <div className="flex items-center text-gray-200">
                <Calendar className="h-5 w-5 mr-2" />
                <span className="mr-6">{new Date(article.date).toLocaleDateString()}</span>
                <User className="h-5 w-5 mr-2" />
                <span>{article.author}</span>
              </div>
            </div>
          </section>

          {/* Article Video */}
          {article.video && (
            <section className="py-16 bg-[#f7fafc]">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-2xl font-bold text-[#1a365d] mb-8">Related Video</h2>
                <div className="max-w-4xl mx-auto">
                  <VideoPlayer url={article.video} title={article.title} />
                </div>
              </div>
            </section>
          )}

          {/* Article Content */}
          <section className="py-16 bg-white">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="prose prose-lg max-w-none">
                {article.content.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="mb-6 text-gray-700 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </section>

          {/* Related Articles */}
          <section className="py-16 bg-[#f7fafc]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-2xl font-bold text-[#1a365d] mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {newsArticles
                  .filter(item => item.id !== article.id)
                  .slice(0, 3)
                  .map((relatedArticle) => (
                    <div 
                      key={relatedArticle.id} 
                      className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
                      onClick={() => navigate(`/news/${relatedArticle.id}`)}
                    >
                      <img 
                        src={relatedArticle.image} 
                        alt={relatedArticle.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <div className="flex items-center text-sm text-gray-500 mb-2">
                          <Calendar className="h-4 w-4 mr-2" />
                          <span>{new Date(relatedArticle.date).toLocaleDateString()}</span>
                        </div>
                        <h3 className="font-semibold text-[#1a365d] mb-2 line-clamp-2">
                          {relatedArticle.title}
                        </h3>
                        <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                          {relatedArticle.content.substring(0, 100)}...
                        </p>
                        <div className="flex justify-between items-center">
                          <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                            {relatedArticle.category}
                          </span>
                          <button className="text-[#1a365d] hover:text-[#2d5a87] flex items-center">
                            <span className="text-sm">Read More</span>
                            <ArrowRight className="h-4 w-4 ml-1" />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </HelmetProvider>
  );
};

export default NewsDetail;
