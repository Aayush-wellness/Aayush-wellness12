import React, { useState, useEffect, useRef } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './Header';
import NewFooter from './NewFooter';
import { blogService } from '../src/services/blogService';
import { useAuth } from './contexts/Authcontext';
import { useNavigate } from 'react-router-dom';
import BlogContentRenderer from './BlogContentRenderer';

const BlogCMS = () => {
  const { currentUser, isAdmin, logout } = useAuth();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [authChecked, setAuthChecked] = useState(false);
  const [saving, setSaving] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentBlog, setCurrentBlog] = useState({
    id: '',
    title: '',
    content: '',
    excerpt: '',
    image: '',
    author: '',
    date: '',
    tags: [],
    category: '',
    slug: '',
    featured: false,
    status: 'published' // draft, published
  });
  const [newTag, setNewTag] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [filterCategory, setFilterCategory] = useState('');
  const [filterStatus, setFilterStatus] = useState('');
  const [showPreview, setShowPreview] = useState(false);
  const contentTextareaRef = useRef(null);

  // Check authentication and load blogs
  useEffect(() => {
    // Wait for auth to be checked
    if (!authChecked) {
      if (currentUser !== undefined) { // Firebase returns undefined initially, then null or user
        setAuthChecked(true);
      } else {
        return; // Still loading auth state
      }
    }
    
    if (!currentUser) {
      navigate('/admin/login');
      return;
    }
    
    if (!isAdmin) {
      toast.error('Access denied. Admin privileges required.');
      navigate('/');
      return;
    }
    
    loadBlogs();
  }, [currentUser, isAdmin, navigate, authChecked]);

  // Test Firebase connection
  // Blog management functions are now streamlined for production use

  const loadBlogs = async () => {
    try {
      setLoading(true);
      const firebaseBlogs = await blogService.getAllBlogs();
      
      // Alert if any blog is missing an ID
      const fixedBlogs = firebaseBlogs.map(blog => {
        if (!blog.id) {
          console.error('Found blog with missing ID:', blog.title);
          toast.error(`Found blog "${blog.title}" with missing ID. This blog cannot be edited or deleted.`);
        }
        return blog;
      });
      
      setBlogs(fixedBlogs);
    } catch (error) {
      console.error('Error loading blogs:', error);
      toast.error('Failed to load blogs. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const generateSlug = (title) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim('-');
  };

  // Rich text formatting functions
  const insertFormatting = (startTag, endTag, placeholder) => {
    const textarea = contentTextareaRef.current;
    if (!textarea) return;

    const start = textarea.selectionStart;
    const end = textarea.selectionEnd;
    const selectedText = currentBlog.content.substring(start, end);
    const textToInsert = selectedText || placeholder;
    
    const before = currentBlog.content.substring(0, start);
    const after = currentBlog.content.substring(end);
    const newContent = before + startTag + textToInsert + endTag + after;
    
    setCurrentBlog(prev => ({ ...prev, content: newContent }));
    
    // Set cursor position after insertion
    setTimeout(() => {
      const newCursorPos = start + startTag.length + textToInsert.length;
      textarea.focus();
      textarea.setSelectionRange(newCursorPos, newCursorPos);
    }, 0);
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setCurrentBlog(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
      ...(name === 'title' && { slug: generateSlug(value) })
    }));
  };

  const handleTagAdd = () => {
    if (newTag.trim() && !currentBlog.tags.includes(newTag.trim())) {
      setCurrentBlog(prev => ({
        ...prev,
        tags: [...prev.tags, newTag.trim()]
      }));
      setNewTag('');
    }
  };

  const handleTagRemove = (tagToRemove) => {
    setCurrentBlog(prev => ({
      ...prev,
      tags: prev.tags.filter(tag => tag !== tagToRemove)
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!currentBlog.title || !currentBlog.content) {
      toast.error('Title and content are required!');
      return;
    }

    setSaving(true);
    try {
      const blogData = {
        ...currentBlog,
        date: currentBlog.date || new Date().toISOString().split('T')[0],
        slug: currentBlog.slug || generateSlug(currentBlog.title)
      };

      // Remove id from blogData to avoid conflicts
      delete blogData.id;

      if (isEditing) {
        if (!currentBlog.id) {
          toast.error('Invalid blog ID for update');
          return;
        }
        await blogService.updateBlog(currentBlog.id, blogData);
        toast.success('Blog updated successfully!');
      } else {
        await blogService.createBlog(blogData);
        toast.success('Blog created successfully!');
      }

      // Reload blogs from Firebase
      await loadBlogs();
      resetForm();
    } catch (error) {
      console.error('Error saving blog:', error);
      toast.error('Failed to save blog. Please try again.');
    } finally {
      setSaving(false);
    }
  };

  const resetForm = () => {
    setCurrentBlog({
      id: '',
      title: '',
      content: '',
      excerpt: '',
      image: '',
      author: '',
      date: '',
      tags: [],
      category: '',
      slug: '',
      featured: false,
      status: 'published'
    });
    setIsEditing(false);
    setShowPreview(false);
  };

  const handleEdit = (blog) => {    
    if (!blog.id) {
      toast.error('Cannot edit blog: Invalid blog ID');
      return;
    }
    
    setCurrentBlog(blog);
    setIsEditing(true);
    // Scroll to the form
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleDelete = async (id) => {
    // Check if the ID is valid
    if (!id || id === '') {
      toast.error('Invalid blog ID. Cannot delete this blog.');
      return;
    }
    
    if (window.confirm('Are you sure you want to delete this blog?')) {
      try {
        await blogService.deleteBlog(id);
        toast.success('Blog deleted successfully!');
        // Reload blogs from Firebase
        await loadBlogs();
      } catch (error) {
        console.error('Error deleting blog:', error);
        toast.error('Failed to delete blog: ' + error.message);
      }
    }
  };

  const handleDuplicate = async (blog) => {
    try {
      const duplicatedBlog = {
        ...blog,
        title: `${blog.title} (Copy)`,
        slug: generateSlug(`${blog.title} (Copy)`)
      };
      delete duplicatedBlog.id; // Remove ID so Firebase creates a new one
      
      await blogService.createBlog(duplicatedBlog);
      toast.success('Blog duplicated successfully!');
      // Reload blogs from Firebase
      await loadBlogs();
    } catch (error) {
      console.error('Error duplicating blog:', error);
      toast.error('Failed to duplicate blog. Please try again.');
    }
  };

  const filteredBlogs = blogs.filter(blog => {
    const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         blog.content.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !filterCategory || blog.category === filterCategory;
    const matchesStatus = !filterStatus || blog.status === filterStatus;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  const categories = [...new Set(blogs.map(blog => blog.category).filter(Boolean))];

  // Show loading while checking authentication
  if (!authChecked) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
        <ToastContainer position="top-right" autoClose={3000} />
        
        {/* Hero Section with Admin Info */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white pt-[130px] pb-8">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="mb-4 md:mb-0">
                <h1 className="text-4xl md:text-5xl font-bold mb-2">Blog Management</h1>
                <p className="text-blue-100 text-lg">Welcome back, {currentUser?.email}</p>
                <div className="flex items-center mt-3">
                  <div className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></div>
                  <span className="text-sm text-blue-100">System Online</span>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/20">
                  <div className="flex items-center text-sm">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    {blogs.length} Blog Posts
                  </div>
                </div>
                <div className="flex space-x-2">
                  <button
                    onClick={() => logout().then(() => navigate('/admin/login'))}
                    className="bg-red-500/90 hover:bg-red-600 transition-all duration-200 px-4 py-2 rounded-xl font-medium flex items-center space-x-2 backdrop-blur-sm border border-red-400/20 text-sm"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                    <span>Logout</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 py-8">
          {/* Create/Edit Blog Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8 mb-8">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    {isEditing ? 'Edit Blog Post' : 'Create New Blog Post'}
                  </h2>
                  <p className="text-gray-600">
                    {isEditing ? 'Update your existing blog post' : 'Share your thoughts with the world'}
                  </p>
                </div>
              </div>
              {isEditing && (
                <button
                  onClick={resetForm}
                  disabled={saving}
                  className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-6 py-3 rounded-2xl font-medium transition-all duration-200 flex items-center space-x-2"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Cancel Edit</span>
                </button>
              )}
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Title and Slug Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Blog Title *
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={currentBlog.title}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    placeholder="Enter an engaging title..."
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    URL Slug
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={currentBlog.slug}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    placeholder="url-friendly-slug"
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-semibold text-gray-700">
                    Blog Content *
                  </label>
                  <div className="flex bg-gray-100 rounded-xl p-1">
                    <button
                      type="button"
                      onClick={() => setShowPreview(false)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                        !showPreview 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      ✏️ Write
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowPreview(true)}
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                        showPreview 
                          ? 'bg-white text-blue-600 shadow-sm' 
                          : 'text-gray-600 hover:text-gray-900'
                      }`}
                    >
                      👁️ Preview
                    </button>
                  </div>
                </div>
                
                {!showPreview ? (
                  <div className="border border-gray-200 rounded-2xl overflow-hidden bg-gray-50/50 hover:bg-white transition-all duration-200">
                    {/* Rich Text Toolbar */}
                    <div className="bg-gray-100 px-4 py-3 border-b border-gray-200 flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => insertFormatting('**', '**', 'Bold text')}
                        className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-bold"
                        title="Bold"
                      >
                        B
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting('*', '*', 'Italic text')}
                        className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 italic"
                        title="Italic"
                      >
                        I
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting('# ', '', 'Heading 1')}
                        className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-bold"
                        title="Heading 1"
                      >
                        H1
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting('## ', '', 'Heading 2')}
                        className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50 font-semibold"
                        title="Heading 2"
                      >
                        H2
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting('### ', '', 'Heading 3')}
                        className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                        title="Heading 3"
                      >
                        H3
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting('- ', '', 'List item')}
                        className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                        title="Bullet List"
                      >
                        •
                      </button>
                      <button
                        type="button"
                        onClick={() => insertFormatting('[', '](url)', 'Link text')}
                        className="px-3 py-1 text-sm bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                        title="Link"
                      >
                        🔗
                      </button>
                    </div>
                    <textarea
                      ref={contentTextareaRef}
                      name="content"
                      value={currentBlog.content}
                      onChange={handleInputChange}
                      rows="16"
                      className="w-full p-4 border-0 focus:ring-0 focus:outline-none transition-all duration-200 resize-none"
                      placeholder="Share your story, insights, or knowledge here...

Formatting Guide:
**Bold Text** - Makes text bold
*Italic Text* - Makes text italic
# Heading 1 - Large heading
## Heading 2 - Medium heading
### Heading 3 - Small heading
- List item - Bullet point
[Link Text](url) - Creates a link"
                      required
                    />
                  </div>
                ) : (
                  <div className="border border-gray-200 rounded-2xl p-6 bg-white min-h-[400px]">
                    <div className="mb-4 text-sm text-gray-500 border-b border-gray-200 pb-2">
                      📖 Content Preview
                    </div>
                    {currentBlog.content ? (
                      <BlogContentRenderer content={currentBlog.content} />
                    ) : (
                      <div className="text-gray-400 italic">
                        Start writing your content to see the preview...
                      </div>
                    )}
                  </div>
                )}
                
                <div className="text-xs text-gray-500 mt-2">
                  💡 Use the toolbar buttons above or markdown syntax for formatting. Example: **bold**, *italic*, # headings
                </div>
              </div>

              {/* Excerpt */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Excerpt
                </label>
                <textarea
                  name="excerpt"
                  value={currentBlog.excerpt}
                  onChange={handleInputChange}
                  rows="3"
                  className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  placeholder="A brief, compelling description of your blog post..."
                />
              </div>

              {/* Image and Author Row */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Featured Image URL
                  </label>
                  <input
                    type="url"
                    name="image"
                    value={currentBlog.image}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    placeholder="https://example.com/your-image.jpg"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Author Name
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={currentBlog.author}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    placeholder="Author name"
                  />
                </div>
              </div>

              {/* Category, Date, Status Row */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Category
                  </label>
                  <input
                    type="text"
                    name="category"
                    value={currentBlog.category}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    placeholder="e.g., Health, Wellness, Tips"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Publication Date
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={currentBlog.date}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  />
                </div>
                
                <div className="space-y-2">
                  <label className="block text-sm font-semibold text-gray-700">
                    Status
                  </label>
                  <select
                    name="status"
                    value={currentBlog.status}
                    onChange={handleInputChange}
                    className="w-full p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                  >
                    <option value="published">📢 Published</option>
                    <option value="draft">📝 Draft</option>
                  </select>
                </div>
              </div>

              {/* Tags Section */}
              <div className="space-y-4">
                <label className="block text-sm font-semibold text-gray-700">
                  Tags
                </label>
                <div className="flex flex-wrap gap-3 mb-4">
                  {currentBlog.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="inline-flex items-center px-4 py-2 rounded-full text-sm bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200"
                    >
                      #{tag}
                      <button
                        type="button"
                        onClick={() => handleTagRemove(tag)}
                        className="ml-2 text-blue-600 hover:text-red-600 transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <input
                    type="text"
                    value={newTag}
                    onChange={(e) => setNewTag(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleTagAdd())}
                    className="flex-1 p-4 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                    placeholder="Add a tag..."
                  />
                  <button
                    type="button"
                    onClick={handleTagAdd}
                    className="px-6 py-4 bg-gradient-to-r from-gray-500 to-gray-600 text-white rounded-2xl hover:from-gray-600 hover:to-gray-700 transition-all duration-200 font-medium"
                  >
                    Add Tag
                  </button>
                </div>
              </div>

              {/* Featured Post Toggle */}
              <div className="flex items-center p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl border border-yellow-200">
                <input
                  type="checkbox"
                  name="featured"
                  checked={currentBlog.featured}
                  onChange={handleInputChange}
                  className="h-5 w-5 text-yellow-600 focus:ring-yellow-500 border-yellow-300 rounded"
                />
                <label className="ml-3 flex items-center text-yellow-800 font-medium">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                  </svg>
                  Featured Post
                </label>
              </div>

              {/* Submit Button */}
              <div className="flex gap-4 pt-4">
                <button
                  type="submit"
                  disabled={saving}
                  className="flex-1 md:flex-none px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-semibold disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  {saving ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Saving...</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{isEditing ? 'Update Blog' : 'Publish Blog'}</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Blog Management Section */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/20 p-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 gap-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-600 rounded-2xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
                    Manage Blog Posts
                  </h2>
                  <p className="text-gray-600">
                    View, edit, and organize your published content
                  </p>
                </div>
              </div>
              
              {/* Search and Filter Controls */}
              <div className="flex flex-col md:flex-row gap-4 w-full lg:w-auto">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                  </div>
                  <input
                    type="text"
                    placeholder="Search blogs..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-12 pr-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white w-full md:w-64"
                  />
                </div>
                
                <select
                  value={filterCategory}
                  onChange={(e) => setFilterCategory(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                >
                  <option value="">All Categories</option>
                  {categories.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
                
                <select
                  value={filterStatus}
                  onChange={(e) => setFilterStatus(e.target.value)}
                  className="px-4 py-3 border border-gray-200 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 bg-gray-50/50 hover:bg-white"
                >
                  <option value="">All Status</option>
                  <option value="published">📢 Published</option>
                  <option value="draft">📝 Draft</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="flex items-center justify-center py-16">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
                <span className="ml-4 text-gray-600">Loading blogs...</span>
              </div>
            ) : filteredBlogs.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">No blog posts found</h3>
                <p className="text-gray-600">Create your first blog post using the form above!</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredBlogs.map((blog) => (
                  <div key={blog.id} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg border border-gray-200/50 overflow-hidden hover:shadow-xl transition-all duration-300 group">
                    {/* Blog Image */}
                    {blog.image && (
                      <div className="relative h-48 overflow-hidden">
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        {blog.featured && (
                          <div className="absolute top-4 left-4">
                            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-yellow-400 text-yellow-900">
                              <svg className="w-3 h-3 mr-1" fill="currentColor" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
                              </svg>
                              Featured
                            </span>
                          </div>
                        )}
                        <div className="absolute top-4 right-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${
                            blog.status === 'published' 
                              ? 'bg-green-400 text-green-900' 
                              : 'bg-yellow-400 text-yellow-900'
                          }`}>
                            {blog.status === 'published' ? '📢 Published' : '📝 Draft'}
                          </span>
                        </div>
                      </div>
                    )}
                    
                    {/* Blog Content */}
                    <div className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1">
                          <h3 className="text-lg font-bold text-gray-900 line-clamp-2 group-hover:text-blue-600 transition-colors">
                            {blog.title}
                          </h3>
                          <p className="text-sm text-gray-600 mt-1">
                            {blog.category || 'Uncategorized'} • {blog.date || new Date(blog.createdAt).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      
                      {blog.excerpt && (
                        <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                          {blog.excerpt}
                        </p>
                      )}
                      
                      {blog.tags && blog.tags.length > 0 && (
                        <div className="flex flex-wrap gap-1 mb-4">
                          {blog.tags.slice(0, 3).map((tag, index) => (
                            <span key={index} className="inline-block px-2 py-1 text-xs bg-blue-100 text-blue-700 rounded-lg">
                              #{tag}
                            </span>
                          ))}
                          {blog.tags.length > 3 && (
                            <span className="inline-block px-2 py-1 text-xs bg-gray-100 text-gray-600 rounded-lg">
                              +{blog.tags.length - 3} more
                            </span>
                          )}
                        </div>
                      )}
                      
                      {/* Action Buttons */}
                      <div className="flex gap-2 pt-4 border-t border-gray-100">
                        <button
                          onClick={() => {
                            console.log('Edit button clicked for blog:', blog);
                            console.log('Blog ID for edit:', blog.id);
                            console.log('Blog ID type:', typeof blog.id);
                            handleEdit(blog);
                          }}
                          className="flex-1 bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium py-2 px-4 rounded-xl transition-colors flex items-center justify-center space-x-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                          <span>Edit</span>
                        </button>
                        <button
                          onClick={() => handleDuplicate(blog)}
                          className="flex-1 bg-green-500 hover:bg-green-600 text-white text-sm font-medium py-2 px-4 rounded-xl transition-colors flex items-center justify-center space-x-1"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                          </svg>
                          <span>Copy</span>
                        </button>
                        <button
                          onClick={() => {
                            console.log('Delete button clicked for blog ID:', blog.id);
                            console.log('Blog ID type:', typeof blog.id);
                            console.log('Blog ID length:', blog.id?.length);
                            console.log('Full blog object:', blog);
                            console.log('Blog keys:', Object.keys(blog));
                            
                            // This is important - ensure we're using the correct document ID
                            const docId = blog.id || blog._id || '';
                            console.log('Using document ID for deletion:', docId);
                            
                            if (!docId) {
                              toast.error('Blog ID is missing. Cannot delete this blog.');
                              return;
                            }
                            
                            handleDelete(docId);
                          }}
                          className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium py-2 px-3 rounded-xl transition-colors"
                        >
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
      <NewFooter />
    </>
  );
};

export default BlogCMS;
