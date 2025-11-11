import { useEffect, useState, useRef } from "react"
import NewFooter from "./NewFooter"
import MissionHeader from "./MissionHeader"
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { CheckCircle2 } from "lucide-react";

function MissionVision() {
  const [loading, setLoading] = useState(true)
  const desktopVideoRef = useRef(null)
  const mobileVideoRef = useRef(null)
  const [activeSection, setActiveSection] = useState('mission')


  // Schema.org structured data
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Aayush Wellness - Our Mission & Vision for Healthier Lives",
    "description": "Discover Aayush Wellness' mission to transform healthcare through Ayurveda and modern science. Learn about our vision for holistic wellness and sustainable health solutions.",
    "publisher": {
      "@type": "Organization",
      "name": "Aayush Wellness",
      "logo": {
        "@type": "ImageObject",
        "url": "https://aayushlife.com/logo.png"
      },
      "description": "Aayush Wellness combines traditional Ayurvedic wisdom with modern science to create effective health and wellness solutions.",
      "sameAs": [
        "https://www.facebook.com/aayushwellness",
        "https://www.instagram.com/aayushwellness",
        "https://twitter.com/aayushwellness"
      ]
    },
    "mainEntity": [{
      "@type": "Organization",
      "name": "Aayush Wellness",
      "description": "Transforming healthcare through the integration of Ayurveda and modern science",
      "mission": "To provide holistic health solutions that combine ancient wisdom with modern scientific advancements",
      "founder": {
        "@type": "Person",
        "name": "Aayush Wellness Team"
      },
      "foundingDate": "2020",
      "areaServed": "Worldwide",
      "sameAs": [
        "https://www.aayushlife.com",
        "https://www.facebook.com/aayushwellness",
        "https://www.instagram.com/aayushwellness"
      ]
    }]
  };


  // Video URLs
  const DESKTOP_VIDEO_URL = "https://res.cloudinary.com/dhofjux9o/video/upload/v1762842989/ur6urwkotb4kl7r4twfq_c4y2f9.mp4"
  const MOBILE_VIDEO_URL = "https://res.cloudinary.com/dhofjux9o/video/upload/v1762843006/eb4kqbvu48fawrrfixap_c1yhw5.mp4"

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 200)
  }, [])

  useEffect(() => {
    if (!loading) {
      // Direct MP4 loading - no HLS needed
      if (desktopVideoRef.current) {
        desktopVideoRef.current.src = DESKTOP_VIDEO_URL
        desktopVideoRef.current.load()
      }

      if (mobileVideoRef.current) {
        mobileVideoRef.current.src = MOBILE_VIDEO_URL
        mobileVideoRef.current.load()
      }
    }
  }, [loading])

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const navItems = [
    { id: 'mission', label: 'Our Mission' },
    { id: 'tobacco', label: 'Tobacco Control' },
    { id: 'nutrition', label: 'Nutrition' },
    { id: 'healthcare', label: 'Healthcare Access' },
    { id: 'vision', label: 'Our Vision' },
    { id: 'approach', label: 'Our Approach' }
  ];

  const sections = [
    {
      id: 'mission',
      title: 'Our Mission',
      subtitle: 'Transforming Healthcare Through Innovation',
      image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/approach-holistic.jpg?v=1759923526',
      content: (
        <>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At Aayush Wellness, we are dedicated to transforming healthcare and wellness by merging the ancient wisdom of Ayurveda with modern scientific advancements. Our mission is to enhance well-being through innovative solutions that address critical health challenges.
          </p>
          <ul className="space-y-4">
            <li className="flex items-start group">
              <div className="flex-shrink-0 w-6 h-6 text-primary mr-4 transition-transform group-hover:scale-110">
                <CheckCircle2 className="w-full h-full" />
              </div>
              <span className="text-gray-700">Combatting tobacco addiction with herbal alternatives</span>
            </li>
            <li className="flex items-start group">
              <div className="flex-shrink-0 w-6 h-6 text-primary mr-4 transition-transform group-hover:scale-110">
                <CheckCircle2 className="w-full h-full" />
              </div>
              <span className="text-gray-700">Providing nutritional supplementation for all</span>
            </li>
            <li className="flex items-start group">
              <div className="flex-shrink-0 w-6 h-6 text-primary mr-4 transition-transform group-hover:scale-110">
                <CheckCircle2 className="w-full h-full" />
              </div>
              <span className="text-gray-700">Enhancing healthcare accessibility for everyone</span>
            </li>
          </ul>
        </>
      ),
      reverse: false
    },
    {
      id: 'tobacco',
      title: 'Combatting Tobacco Addiction',
      subtitle: 'Herbal Alternatives for a Tobacco-Free Life',
      image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/tobacco-control.jpg?v=1759923526',
      content: (
        <>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Addressing the health risks of tobacco addiction by offering herbal alternatives to traditional tobacco products like pan masala and gutka. Our products are crafted to provide a satisfying experience while prioritizing health through natural compositions.
          </p>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Formulating products with Ayurvedic herbs that mimic the tobacco experience without harmful effects.</li>
            <li>Supporting individuals in overcoming tobacco addiction and reducing tobacco-related diseases.</li>
          </ul>
        </>
      ),
      reverse: true
    },
    {
      id: 'nutrition',
      title: 'Nutritional Supplementation for All',
      subtitle: 'Nourishing the Nation, One Supplement at a Time',
      image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/mission-healthcare.jpg?v=1759923534',
      content: (
        <>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Tackling malnutrition, especially in vulnerable populations. Providing Ayurvedic nutritional supplements that nourish and strengthen those in need.
          </p>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Collaborating with NGOs and government schemes to distribute supplements to underserved communities.</li>
            <li>Integrating Ayurvedic principles with modern nutritional science to address deficiencies and promote overall health.</li>
            <li>Integrating Ayurvedic principles with modern nutritional science to address deficiencies and promote overall health.</li>
          </ul>
        </>
      ),
      reverse: false
    },
    {
      id: 'healthcare',
      title: 'Enhancing Healthcare Accessibility',
      subtitle: 'Bridging Gaps, Empowering Communities',
      image: 'https://cdn.shopify.com/s/files/1/0636/5226/6115/files/healthcare-access.jpg?v=1759923526',
      content: (
        <>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Making healthcare and wellness accessible regardless of geographical or socioeconomic barriers. Educating and inspiring people to take control of their health through comprehensive campaigns.
          </p>
          <ul className="space-y-3 list-disc list-inside text-gray-700">
            <li>Promoting the benefits of Ayurvedic practices and balanced lifestyles.</li>
            <li>Working to improve healthcare infrastructure in collaboration with local health workers and government bodies.</li>
          </ul>
        </>
      ),
      reverse: true
    },

  ];

  return (
    <>
      <Helmet>
        <title>Aayush Wellness - Our Mission & Vision for Healthier Lives</title>
        <meta
          name="description"
          content="Discover Aayush Wellness' mission to transform healthcare through Ayurveda and modern science. Learn about our vision for holistic wellness and sustainable health solutions."
        />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>

      {/* Hidden SEO Headers */}
      <h1 style={{ display: 'none' }}>Aayush Wellness - Our Mission & Vision for Healthier Lives</h1>
      <h2 style={{ display: 'none' }}>Transforming healthcare through Ayurveda and modern science</h2>

      <div className="min-h-screen bg-white">
        <MissionHeader />



        {/* Hero Section with Video Background */}
        <div className="relative h-screen w-full overflow-hidden">
          {/* Video Background */}
          <div className="absolute inset-0 z-0">
            <video
              ref={desktopVideoRef}
              className="hidden md:block w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <video
              ref={mobileVideoRef}
              className="md:hidden block w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
            <div className="absolute inset-0 bg-black/50 z-10"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-20 h-full flex flex-col justify-center px-4 md:px-12 lg:px-24 text-white">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="max-w-4xl mx-auto text-center"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 font-rogbold">
                Purpose, Progress, Promise
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl font-medium mb-8 font-minion">
                Bringing the power of Ayurveda and modern science to your everyday health.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mt-8">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => {
                      document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' });
                      setActiveSection(item.id);
                    }}
                    className={`px-4 py-2 rounded-full transition-all duration-300 ${activeSection === item.id
                        ? 'bg-[#33cccc] text-white'
                        : 'bg-white/10 text-white hover:bg-white/20'
                      }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
              <div className="animate-bounce flex flex-col items-center">
                <span className="text-sm mb-2">Scroll to Explore</span>
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
              </div>
            </div>
          </div>
        </div>


        {/* Content Sections */}
        {sections.map((section, index) => (
          <motion.section
            key={section.id}
            id={section.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative scroll-mt-20"
          >
            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10"></div>

            {/* Black heading section with gradient overlay */}
            <div className="relative bg-[#1f2937] text-white py-16 overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent"></div>
              </div>

              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <motion.div
                  initial={{ y: 30, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="text-center"
                >
                  <motion.span
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    className="inline-block px-6 py-2 rounded-full bg-[#33cccc] text-white text-sm font-bold mb-6 shadow-glow"
                  >
                    {section.title}
                  </motion.span>
                  <h2 className=" md:text-4xl lg:text-5xl font-bold font-rogbold leading-tight text-[#33cccc]">
                    {section.subtitle}
                  </h2>
                </motion.div>
              </div>
            </div>

            {/* Content with image */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
              <div className={`flex flex-col ${section.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
                {/* Image side */}
                <motion.div
                  initial={{ opacity: 0, x: section.reverse ? 50 : -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="lg:w-1/2"
                >
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
                    <img
                      src={section.image}
                      alt={section.title}
                      className="w-full h-[400px] lg:h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  </div>
                </motion.div>

                {/* Content side */}
                <motion.div
                  initial={{ opacity: 0, x: section.reverse ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="lg:w-1/2"
                >
                  <div className="prose prose-lg max-w-none">
                    {section.content}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Divider */}
            {index < sections.length - 1 && (
              <div className="max-w-7xl mx-auto px-4">
                <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
              </div>
            )}
          </motion.section>
        ))}


      </div>

      <NewFooter />
    </>
  );
}

export default MissionVision;
