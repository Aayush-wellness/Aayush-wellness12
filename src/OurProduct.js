import { useState } from "react"
import { Eye, X } from "lucide-react"
import NewFooter from "./NewFooter"
import Header from "./Header"
import { Helmet } from 'react-helmet';

// Schema.org structured data for Product Collection
const productCollectionSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Product",
      "name": "Herbal Masala - Natural Fresh",
      "url": "https://aayushlife.com/pan-masala",
      "description": "Refreshing, herbal blend made with 100% natural ingredients – betel leaves, cardamom, clove & more for digestive wellness.",
      "brand": {
        "@type": "Brand",
        "name": "Aayush Wellness"
      }
    },
    {
      "@type": "Product",
      "name": "Herbal Masala - Herbal Zest",
      "url": "https://aayushlife.com/pan-masala",
      "description": "A bold fusion of mint, tulsi, and aromatic herbs for an instant burst of freshness and long-lasting aroma.",
      "brand": {
        "@type": "Brand",
        "name": "Aayush Wellness"
      }
    },
    {
      "@type": "Product",
      "name": "Herbal Masala - Royal Spice",
      "url": "https://aayushlife.com/pan-masala",
      "description": "Premium herbal masala with a royal blend of spices for an exquisite taste experience.",
      "brand": {
        "@type": "Brand",
        "name": "Aayush Wellness"
      }
    },
    {
      "@type": "Product",
      "name": "Beauty Vitamin Gummie",
      "url": "https://aayushlife.com/gummies",
      "description": "Glow from within with this skin-loving gummy enriched with Biotin, Vitamin C, and Zinc for hair strength, radiant skin, and nail health.",
      "brand": {
        "@type": "Brand",
        "name": "Aayush Wellness"
      }
    },
    {
      "@type": "Product",
      "name": "Dreamy Sleep Gummie",
      "url": "https://aayushlife.com/gummies-sleep",
      "description": "Wind down naturally with a calming blend of Melatonin, Chamomile, and L-Theanine for deeper sleep, reduced stress, and a reset sleep cycle.",
      "brand": {
        "@type": "Brand",
        "name": "Aayush Wellness"
      }
    },
    {
      "@type": "Product",
      "name": "BRAIN FUEL",
      "url": "https://aayushlife.com/brain-fuel",
      "description": "Coming soon! A powerful mix of Marine Collagen, Hyaluronic Acid, and Vitamin E for skin elasticity, hydration, and youthful radiance from the inside out.",
      "brand": {
        "@type": "Brand",
        "name": "Aayush Wellness"
      }
    }
  ]
};

// WebPage schema
const webpageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Our Products - Aayush Wellness Herbal & Natural Health Solutions",
  "description": "Explore Aayush Wellness' premium range of natural and herbal products for complete wellness and vitality. Discover our herbal masalas and health supplements.",
  "publisher": {
    "@type": "Organization",
    "name": "Aayush Wellness",
    "logo": {
      "@type": "ImageObject",
      "url": "https://aayushlife.com/logo.png"
    }
  }
};

const products = [
  {
    id: 1,
    category: "NATURAL FRESH",
    title: "Herbal Masala",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/AW_collection_PI.png?v=1743233945",
    description:
      "Refreshing, herbal blend made with 100% natural ingredients – betel leaves, cardamom, clove & more. Designed for lasting freshness and digestive wellness. Perfect for daily use with a clean aftertaste",
    options: ["No Tobacco", "Premium Series", "Ayurvedic"],
    url: "/pan-masala",
  },
  {
    id: 2,
    category: "HERBAL ZEST",
    title: "Herbal Masala",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/black.png?v=1743250694",
    description:
      "A bold fusion of mint, tulsi, and aromatic herbs. Crafted for an instant burst of freshness and long-lasting aroma. A healthier alternative to conventional mouth fresheners.",
    options: ["Tobacco-Free", "Cooling Effect", "100% Herbal"],
    url: "/pan-masala",
  },
  {
    id: 3,
    category: "ROYAL SPICE",
    title: "Herbal Masala",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/gold.png?v=1743250680",
    description:
      "Spiced with traditional Indian herbs and a touch of saffron, this blend delivers an indulgent, smooth flavor with wellness in every pinch. Best enjoyed after meals.",
    options: ["Digestive Boost", "Luxury Series", "No Chemicals"],
    url: "/pan-masala",
  },
  {
    id: 4,
    category: "NUTRACEUTICAL GUMMIES",
    title: "Beauty Vitamin Gummie",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/beauty.png?v=1743250718",
    description:
      "Glow from within with this skin-loving gummy enriched with Biotin, Vitamin C, and Zinc. Supports hair strength, radiant skin, and nail health. Tastes like berries, works like magic.",
    options: ["2:1 Daily Dose", "3.Sugar-Free", "Glow Series:1"],
    url: "/gummies",
  },
  {
    id: 5,
    category: "NUTRACEUTICAL GUMMIES",
    title: "Dreamy Sleep Gummie ",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/sleep.png?v=1743250707",
    description:
      "Wind down naturally with a calming blend of Melatonin, Chamomile, and L-Theanine. Designed to promote deeper sleep, reduce stress, and reset your sleep cycle.",
    options: ["Non-Habit Forming", "No Artificial Colors", "3.Relax Series"],
    url: "/gummies-sleep",
  },
  {
    id: 6,
    category: "BRAIN FUEL",
    title: "BRAIN FUEL",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/brain.jpg?v=1752674242",
    description:
      "Coming soon! A powerful mix of Marine Collagen, Hyaluronic Acid, and Vitamin E to support skin elasticity, hydration, and youthful radiance from the inside out.",
    options: ["Collagen Blend", "Anti-Aging Support", "3.Clinically Backed"],
    url: "/brain-fuel",
  },
]

const ProductCard = ({ product }) => {
  const [showDetails, setShowDetails] = useState(false)

  const handleCardClick = () => {
    window.location.href = product.url
  }

  const handleButtonClick = (e) => {
    e.stopPropagation() // Prevent card click when button is clicked
    setShowDetails(!showDetails)
  }

  return (
    <div
      className="bg-[#efecdf] rounded-[45px] overflow-hidden relative h-full cursor-pointer transition-all duration-300"
      onClick={handleCardClick}
      style={{
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.05)",
        transition: "all 0.3s ease",
      }}
      onMouseOver={(e) => (e.currentTarget.style.boxShadow = "0 10px 25px rgba(0, 0, 0, 0.1)")}
      onMouseOut={(e) => (e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.05)")}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="text-black-500 text-sm font-medium mb-2" style={{fontFamily: "Minionpro"}}>{product.category}</div>
        <h2 className="text-[24px] font-bold mb-4" style={{fontFamily: "ROGBold", letterSpacing: "1px"}}>{product.title}</h2>

        <div className="relative flex-grow flex items-center justify-center">
          <div
            className={`transition-all duration-300 w-full h-full flex items-center justify-center ${showDetails ? "blur-md" : ""}`}
          >
            <img
              src={product.image || "/placeholder.svg"}
              alt={product.title}
              className="mx-auto object-contain max-w-full max-h-full !pt-[0px]"
              style={{ objectFit: "contain" }}
            />
          </div>

          {showDetails && (
            <div className="absolute inset-0 flex flex-col justify-start p-4">
              <p className="text-black text-sm sm:text-base mb-2 sm:mb-4" style={{fontFamily: "Minionpro"}}>{product.description}</p>
              <div className="flex flex-wrap gap-1 sm:gap-2" style={{fontFamily: "Minionpro"}}>
                {product.options.map((option, index) => (
                  <span
                    key={index}
                    className="bg-white text-gray-800 px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-xs sm:text-sm border border-gray-200"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      <button
        onClick={handleButtonClick}
        className="absolute bottom-4 right-4 bg-white rounded-full p-2 sm:p-3 shadow-md hover:shadow-lg transition-shadow hover:bg-black h-[40px] w-[40px] sm:h-[70px] sm:w-[70px]"
      >
        {showDetails ? (
          <X size={20} className="sm:ml-[14px] ml-[2px]" />
        ) : (
          <Eye size={20} className="sm:ml-[14px] ml-[2px]" />
        )}
      </button>
    </div>
  )
}

const OurProduct = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Our Products - Aayush Wellness Herbal & Natural Health Solutions</title>
        <meta 
          name="description" 
          content="Explore Aayush Wellness' premium range of natural and herbal products for complete wellness and vitality. Discover our herbal masalas and health supplements." 
        />
        <script type="application/ld+json">
          {JSON.stringify(productCollectionSchema)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(webpageSchema)}
        </script>
      </Helmet>
      
      <Header />
      
      {/* Hidden SEO Headers with consistent keywords */}
      <h1 style={{ display: 'none' }}>Our Products - Aayush Wellness Herbal & Natural Health Solutions</h1>
      <h2 style={{ display: 'none' }}>Premium Range of Natural & Herbal Products for Complete Wellness</h2>
      
      <main className="flex-grow">
        <div className="w-full px-[15px] sm:px-[30px] pt-[80px] sm:pt-[120px]">
          <div className="max-w-full mx-auto py-8 lg:py-12 md:py-12">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 justify-items-center">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="product-card-container w-full"
                  style={{
                    maxWidth: "598px",
                    height: "auto",
                    aspectRatio: "1/1",
                  }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <NewFooter />
    </div>
  )
}

export default OurProduct
