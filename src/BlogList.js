import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import NewFooter from './NewFooter';
import { blogService } from '../src/services/blogService';

const BlogList = () => {
  const [blogs, setBlogs] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const blogsPerPage = 9;

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        setLoading(true);
        const firebaseBlogs = await blogService.getAllBlogs();
        const publishedBlogs = firebaseBlogs
          .filter(blog => blog.status === 'published')
          .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        setBlogs(publishedBlogs);
        setFilteredBlogs(publishedBlogs);
      } catch (error) {
        console.error('Error loading blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadBlogs();
  }, []);

  useEffect(() => {
    let filtered = blogs;

    if (searchTerm) {
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (selectedCategory) {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    setFilteredBlogs(filtered);
    setCurrentPage(1);
  }, [searchTerm, selectedCategory, blogs]);

  const categories = [...new Set(blogs.map(blog => blog.category).filter(Boolean))];
  const featuredBlogs = blogs.filter(blog => blog.featured).slice(0, 3);

  // Pagination
  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gray-50">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Health & Wellness Blog
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              Discover the latest insights in health, wellness, and Ayurveda
            </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 rounded-full text-gray-900 text-lg focus:outline-none focus:ring-4 focus:ring-blue-300"
            />
            <button className="absolute right-2 top-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>
      </div>

      {/* Featured Blogs */}
      {featuredBlogs.length > 0 && (
        <div className="max-w-6xl mx-auto px-4 py-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Featured Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredBlogs.map((blog) => (
              <Link
                key={blog.id}
                to={`/blog/${blog.slug}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow group"
              >
                {blog.image && (
                  <div className="relative overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                        Featured
                      </span>
                    </div>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                    {blog.title}
                  </h3>
                  {blog.excerpt && (
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {blog.excerpt}
                    </p>
                  )}
                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>{blog.date || new Date(blog.createdAt).toLocaleDateString()}</span>
                    {blog.category && (
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">
                        {blog.category}
                      </span>
                    )}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Filters */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-4 items-center justify-between mb-8">
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setSelectedCategory('')}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === ''
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-100'
              }`}
            >
              All Categories
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="text-gray-600">
            {filteredBlogs.length} article{filteredBlogs.length !== 1 ? 's' : ''} found
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <div className="max-w-6xl mx-auto px-4 pb-12">
        {currentBlogs.length === 0 ? (
          <div className="text-center py-12">
            <h3 className="text-2xl font-semibold text-gray-600 mb-4">
              No articles found
            </h3>
            <p className="text-gray-500">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {currentBlogs.map((blog) => (
                <Link
                  key={blog.id}
                  to={`/blog/${blog.slug}`}
                  className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow group"
                >
                  {blog.image && (
                    <div className="relative overflow-hidden">
                      <img
                        src={blog.image}
                        alt={blog.title}
                        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      {blog.category && (
                        <div className="absolute top-4 left-4">
                          <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                            {blog.category}
                          </span>
                        </div>
                      )}
                    </div>
                  )}
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                      {blog.title}
                    </h3>
                    {blog.excerpt && (
                      <p className="text-gray-600 mb-4 line-clamp-3">
                        {blog.excerpt}
                      </p>
                    )}
                    <div className="flex justify-between items-center text-sm text-gray-500">
                      <span>{blog.date || new Date(blog.createdAt).toLocaleDateString()}</span>
                      {blog.author && <span>By {blog.author}</span>}
                    </div>
                    {blog.tags && blog.tags.length > 0 && (
                      <div className="mt-3 flex flex-wrap gap-1">
                        {blog.tags.slice(0, 3).map((tag, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex justify-center items-center space-x-2 mt-12">
                <button
                  onClick={() => paginate(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Previous
                </button>
                
                {[...Array(totalPages)].map((_, index) => (
                  <button
                    key={index + 1}
                    onClick={() => paginate(index + 1)}
                    className={`px-4 py-2 border rounded-md ${
                      currentPage === index + 1
                        ? 'bg-blue-600 text-white border-blue-600'
                        : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                    }`}
                  >
                    {index + 1}
                  </button>
                ))}
                
                <button
                  onClick={() => paginate(currentPage + 1)}
                  disabled={currentPage === totalPages}
                  className="px-4 py-2 border border-gray-300 rounded-md bg-white text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Next
                </button>
              </div>
            )}
          </>
        )}
      </div>
      </div>
      <NewFooter />
    </>
  );
};

export default BlogList;
