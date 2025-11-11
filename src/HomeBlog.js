import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { blogService } from '../src/services/blogService';
import BlogContentRenderer from './BlogContentRenderer';

function HomeBlog() {
  const [showMoreBlogs, setShowMoreBlogs] = useState(false);
  const [cmsBlogs, setCmsBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const buttonRef = useRef(null);

  // Load CMS blogs from Firebase
  useEffect(() => {
    const loadCMSBlogs = async () => {
      try {
        setLoading(true);
        console.log('Loading blogs from Firebase...');
        const firebaseBlogs = await blogService.getAllBlogs();
        console.log('Loaded blogs:', firebaseBlogs);
        const publishedBlogs = firebaseBlogs
          .filter(blog => blog.status === 'published')
          .sort((a, b) => {
            // Sort by createdAt timestamp first, then by date field
            const dateA = a.createdAt?.toDate?.() || new Date(a.date || a.createdAt);
            const dateB = b.createdAt?.toDate?.() || new Date(b.date || b.createdAt);
            return dateB - dateA; // Latest first
          });
        console.log('Published blogs:', publishedBlogs);
        setCmsBlogs(publishedBlogs);
      } catch (error) {
        console.error('Error loading CMS blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    loadCMSBlogs();
  }, []);

  // Static blogs (existing ones)
  const staticBlogs = [
     {
          date: "17. 07. 2025",
      title: "The Hidden Dangers of Pan Masala and Why Herbal Masala Is a Healthier Choice",
      link: "/BlogH29",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Blog_29.jpg?v=1752754497",
        },
 {
        date: "17. 07. 2025",
      title: " How to Reduce Digital Fatigue Naturally with Ayurveda and Meditation",
      link: "/BlogH30",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Blog_28.jpg?v=1752754506",
        },
    {
         date: "12. 07. 2025",
      title: "Skin Glow Supplements: How Beauty Gummies Support Clearer, Healthier Skin",
      link: "/BlogH24",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Blog_22.jpg?v=1751981382",
        },

        {
       date: "12. 07. 2025",
      title: "  Herbal Stress Relief Remedies: Natural Ways to Reduce Anxiety and Stay Calm",
      link: "/BlogH23",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Blog_23.jpg?v=1751981381",
        },
    {
         date: "05. 07. 2025",
      title: " How Meditation Can Enhance Your Overall Wellness and Calm Your Mind",
      link: "/BlogH21",
      image: " https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_20.jpg?v=1751719097",
        },

        {
       date: "05. 07. 2025",
      title: " Surprising Reasons You’re Still Tired After 8 Hours of Sleep",
      link: "/BlogH22",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_21.jpg?v=1751719094",
        },
    {
     date: "03. 07. 2025",
      title: " Top 5 Natural Ways to Boost Your Energy and Wellness Every Day",
      link: "/BlogH19",
      image: "  https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_18.jpg?v=1751461690 ",
        },

      {
       date: "03. 07. 2025",
      title: " How Harmful Ingredients in Pan Masala Affect Your Health",
      link: "/BlogH20",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_19.jpg?v=1751461688",
        },
    {
      date: "25. 06. 2025",
      title: "Side Effects of Chewing Tobacco: What It’s Really Doing to Your Body",
      link: "/BlogH15",
      image: "  https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_15.jpg?v=1750765642 ",
        }, 

      {
       date: "25. 06. 2025",
      title: " How Practicing Gratitude Can Transform Your Emotional and Physical Wellness",
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
    },
    {
          date: "18. 04. 2025",
          title: "The Power of Mindfulness: How It Can Improve Your Mental and Physical Health",
          link: "/BlogH7",
          image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_5.jpg?v=1744959350",
    },
    {
      date: "18. 04. 2025",
      title: "The Role of Yoga in Holistic Wellness and Overall Health",
      link: "/BlogH18",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_6.jpg?v=1744959349",
    },
    {
      date: "18. 04. 2025",
      title: "Home Workouts That Actually Work: Fitness Without the Gym",
      link: "/BlogH19",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_7.jpg?v=1744959347",
    },
    {
      date: "18. 04. 2025",
      title: "The Gut-Skin Connection: How Your Digestive Health Affects Your Glow",
      link: "/BlogH10",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_9.jpg?v=1744959346",
    },
     {
     date: "18. 04. 2025",
          title: "Unlock the Benefits of Sleep: The Health Hack You Need",
          link: "/BlogH11",
          image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_1.jpg?v=1745575993",
    },
    {
       date: "18. 04. 2025",
          title: "The Effects of Too Much Screen Time on Your Health and How to Fix It",
          link: "/BlogH12",
          image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_2.jpg?v=1745575992",
    },
    {
      date: "01. 03. 2025",
      title: "Nutraceuticals vs. Traditional Supplements: What's the Difference?",
      link: "/nutraceuticals-vs-traditional",
      image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_-1.jpg?v=1740834248",
    },
    {
      date: "01. 03. 2025",
      title: "Top 7 Ayurvedic Ingredients to Improve Focus and Mental Clarity.",
      link: "/top-7-ayurvedic-ingredients",
      image: "https://cdn.shopify.com/s/files/1/0653/9830/9053/files/BLOG_-_2.jpg?v=17408342490",
    },
    {
       date: "25. 06. 2025",
      title: "Sattvic Diet: The Underrated Key to Calm, Clear Thinking",
      link: "/BlogH17",
      image: "  https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_16.jpg?v=1750919519 ",
    },
    {
       date: "25. 06. 2025",
      title: " Exploring Mental Health Stigma in Today’s Fast-Moving World",
      link: "/BlogH18",
      image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_17.jpg?v=1750919516",

    },
     

    
  ];

  // Convert CMS blogs to the same format as static blogs
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

  // Combine CMS blogs (first) and static blogs, then split into initial and additional
  const allBlogs = [...cmsFormattedBlogs, ...staticBlogs];
  const initialBlogs = allBlogs.slice(0, 6);
  const additionalBlogs = allBlogs.slice(6);

  const handleToggleBlogs = () => {
    setShowMoreBlogs((prev) => !prev);
  };

  useEffect(() => {
    if (showMoreBlogs && buttonRef.current) {
      setTimeout(() => {
        buttonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }, [showMoreBlogs]);

  const renderBlog = (blog, index) => (
    <React.Fragment key={index}>
      {index > 0 && <div className="border-t border-gray-800 my-8"></div>}
      <article className="mb-16 md:mb-24">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#292929] p-[25px] rounded-xl relative">
          {/* CMS Blog Badge */}
          {blog.isCMS && (
            <div className="absolute top-4 left-4 z-10">
              <span className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                New
              </span>
            </div>
          )}
          
          {/* Featured Badge */}
          {blog.featured && (
            <div className="absolute top-4 right-4 z-10">
              <span className="bg-yellow-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Featured
              </span>
            </div>
          )}

          <div className="order-2 md:order-1">
            <div className="text-[#33cccc] mb-4">{blog.date}</div>
            {blog.category && (
              <div className="text-gray-400 text-sm mb-2">{blog.category}</div>
            )}
            <h2 className="text-[25px] md:text-4xl text-white font-bold mb-6" style={{fontFamily: "Minionpro"}}>
              {blog.title}
            </h2>
            {blog.excerpt && (
              <p className="text-gray-300 mb-4 text-sm line-clamp-3">
                {blog.excerpt}
              </p>
            )}
            <Link
              to={blog.link}
              className="inline-flex items-center text-[#33cccc] hover:text-white transition-colors" style={{fontFamily: "Minionpro"}}
            >
              Read Post
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <div className="order-1 md:order-2">
            <img
              src={blog.image || "/placeholder.svg"}
              alt={blog.title}
              className="w-full h-64 md:h-80 object-fill rounded-lg !pt-0 "
              loading="lazy"
            />
          </div>
        </div>
      </article>
    </React.Fragment>
  );

  return (
    <div className="min-h-screen bg-[#000] text-[#33cccc]">
      <main className="max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-center text-[25px] md:text-[40px] pb-[25px] md:pb-[60px]" style={{fontFamily: "Minionpro"}}>
            Blogs
          </h1>
          {/* <Link 
            to="/blogs"
            className="text-[#33cccc] hover:text-white transition-colors underline"
            style={{fontFamily: "Minionpro"}}
          >
            View All Blogs
          </Link> */}
        </div>

        {/* CMS Status Indicator */}
      

        {/* Show initial blogs (6 blogs) */}
        {initialBlogs.map((blog, index) => renderBlog(blog, index))}

        {/* Show additional blogs when expanded */}
        {showMoreBlogs && additionalBlogs.map((blog, index) => renderBlog(blog, index + initialBlogs.length))}

        {/* Show More/Less Button - only if there are additional blogs */}
        {additionalBlogs.length > 0 && (
          <div className="flex justify-center my-12" ref={buttonRef}>
            <button
              id="read-more-button"
              onClick={handleToggleBlogs}
              className="relative px-8 py-4 bg-[#33cccc] hover:bg-[#33cccc] text-black font-bold rounded-lg transform transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#00c9a7]/30"
            >
              <span className="relative z-10" style={{fontFamily: "Minionpro"}}>
                {showMoreBlogs ? "Show Less" : `Explore ${additionalBlogs.length} More Articles`}
              </span>
            </button>
          </div>
        )}

        {/* CSS for line-clamp */}
        <style jsx>{`
          .line-clamp-3 {
            display: -webkit-box;
            -webkit-line-clamp: 3;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </main>
    </div>
  );
}

export default HomeBlog;
