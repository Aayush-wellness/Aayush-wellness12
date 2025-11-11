import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";

function HomeBlog() {
  const [showMoreBlogs, setShowMoreBlogs] = useState(false);
  const [cmsBlogs, setCmsBlogs] = useState([]);
  const buttonRef = useRef(null);

  // Load CMS blogs from localStorage
  useEffect(() => {
    const savedBlogs = localStorage.getItem('cmsBlogs');
    if (savedBlogs) {
      const blogs = JSON.parse(savedBlogs);
      const publishedBlogs = blogs
        .filter(blog => blog.status === 'published')
        .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
      setCmsBlogs(publishedBlogs);
    }
  }, []);

  // Legacy static blogs (keeping for backward compatibility)
  const staticBlogs = [
    {
      date: "12. 07. 2025",
      title: "Skin Glow Supplements: How Beauty Gummies Support Clearer, Healthier Skin",
      link: "/BlogH24",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Blog_22.jpg?v=1751981382",
    },
    {
      date: "12. 07. 2025",
      title: "Herbal Stress Relief Remedies: Natural Ways to Reduce Anxiety and Stay Calm",
      link: "/BlogH23",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Blog_23.jpg?v=1751981381",
    },
    {
      date: "05. 07. 2025",
      title: "How Meditation Can Enhance Your Overall Wellness and Calm Your Mind",
      link: "/BlogH21",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_20.jpg?v=1751719097",
    },
    {
      date: "05. 07. 2025",
      title: "Surprising Reasons You're Still Tired After 8 Hours of Sleep",
      link: "/BlogH22",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_21.jpg?v=1751719094",
    },
    {
      date: "03. 07. 2025",
      title: "Top 5 Natural Ways to Boost Your Energy and Wellness Every Day",
      link: "/BlogH19",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_18.jpg?v=1751461690",
    },
    {
      date: "03. 07. 2025",
      title: "How Harmful Ingredients in Pan Masala Affect Your Health",
      link: "/BlogH20",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_19.jpg?v=1751461688",
    },
    {
      date: "25. 06. 2025",
      title: "Side Effects of Chewing Tobacco: What It's Really Doing to Your Body",
      link: "/BlogH15",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_15.jpg?v=1750765642",
    },
    {
      date: "25. 06. 2025",
      title: "How Practicing Gratitude Can Transform Your Emotional and Physical Wellness",
      link: "/BlogH16",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_14.jpg?v=1750765644",
    },
    {
      date: "21. 06. 2025",
      title: "Easy Ways to Detox Your Body Naturally at Home",
      link: "/BlogH13",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_13.jpg?v=1750338371"
    },
    {
      date: "21. 06. 2025",
      title: "Stress vs Burnout: How to Tell the Difference and Heal Naturally",
      link: "/BlogH14",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_12.jpg?v=1750338371"
    }
  ];

  // Combine CMS blogs and static blogs
  const cmsFormattedBlogs = cmsBlogs.map(blog => ({
    date: blog.date || new Date(blog.createdAt).toLocaleDateString('en-GB').replace(/\//g, '. '),
    title: blog.title,
    link: `/blog/${blog.slug}`,
    image: blog.image,
    excerpt: blog.excerpt,
    category: blog.category,
    featured: blog.featured,
    isCMS: true
  }));

  // Combine all blogs, prioritizing CMS blogs
  const allBlogs = [...cmsFormattedBlogs, ...staticBlogs];
  
  // Show initial 6 blogs, then additional ones
  const initialBlogs = allBlogs.slice(0, 6);
  const additionalBlogs = allBlogs.slice(6);

  const handleShowMore = () => {
    setShowMoreBlogs(!showMoreBlogs);
    if (!showMoreBlogs && buttonRef.current) {
      setTimeout(() => {
        buttonRef.current.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const BlogCard = ({ blog, index }) => (
    <div 
      key={index}
      className="relative group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      {blog.featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
            Featured
          </span>
        </div>
      )}
      
      {blog.isCMS && (
        <div className="absolute top-4 right-4 z-10">
          <span className="bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
            New
          </span>
        </div>
      )}

      <div className="relative overflow-hidden h-48">
        <img 
          src={blog.image} 
          alt={blog.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-blue-600 font-medium">{blog.date}</span>
          {blog.category && (
            <span className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded-full">
              {blog.category}
            </span>
          )}
        </div>
        
        <h3 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 group-hover:text-blue-600 transition-colors">
          {blog.title}
        </h3>
        
        {blog.excerpt && (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">
            {blog.excerpt}
          </p>
        )}
        
        <Link 
          to={blog.link}
          className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium text-sm group-hover:underline transition-all"
        >
          Read More 
          <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Latest Health & Wellness Insights
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover evidence-based articles on Ayurveda, nutrition, mental wellness, 
            and holistic health practices to transform your life naturally.
          </p>
          <div className="mt-6">
            <Link 
              to="/blogs"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium"
            >
              View All Articles
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>

        {/* CMS Alert */}
        {cmsBlogs.length > 0 && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg mb-8 text-center">
            <p className="font-medium">
              🎉 {cmsBlogs.length} new article{cmsBlogs.length !== 1 ? 's' : ''} published via CMS! 
              <Link to="/admin/blog-cms" className="ml-2 underline hover:text-green-800">
                Manage Content
              </Link>
            </p>
          </div>
        )}

        {/* Initial Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {initialBlogs.map((blog, index) => (
            <BlogCard key={`initial-${index}`} blog={blog} index={index} />
          ))}
        </div>

        {/* Show More/Less Button */}
        {additionalBlogs.length > 0 && (
          <div className="text-center mb-8">
            <button
              ref={buttonRef}
              onClick={handleShowMore}
              className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 font-medium shadow-lg hover:shadow-xl"
            >
              {showMoreBlogs ? 'Show Less' : `Show ${additionalBlogs.length} More Articles`}
            </button>
          </div>
        )}

        {/* Additional Blogs */}
        {showMoreBlogs && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
            {additionalBlogs.map((blog, index) => (
              <BlogCard key={`additional-${index}`} blog={blog} index={index} />
            ))}
          </div>
        )}

        {/* Newsletter CTA */}
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Stay Updated with Our Latest Articles</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Get weekly insights on health, wellness, and Ayurvedic practices delivered straight to your inbox.
          </p>
          <Link 
            to="/newsletter"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium"
          >
            Subscribe to Newsletter
          </Link>
        </div>
      </div>

      <style jsx>{`
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-in;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}

export default HomeBlog;
