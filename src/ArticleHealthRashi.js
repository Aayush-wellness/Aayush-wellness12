import React from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Technology-Enabled Transformation to Revolutionize Last-Mile Healthcare Access",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ey-future-of-digital-health.jpg?v=1758629651", // Placeholder for Technology-Enabled Transformation
    content: `As part of this Collaboration Aayush Wellness Limited will source medical equipment from Healthrashi Nextgen India Ltd including AI-enabled health kiosks, state-of-the-art mobile clinics, automated diagnostic platforms, and healthcare vending machines at Optimized cost. Aayush Wellness will harness this innovation under its own brand, leveraging its strong market presence to deliver affordable and accessible healthcare services at scale. By partnering with corporates, banks, residential societies, and educational institutions, it will provide on-ground health checkups directly to the masses. This approach addresses critical gaps in last-mile access where traditional healthcare often struggles to reach, while enabling scalable growth without significant capital expenditure`
  },
  {
    title: "Building Long-Term Growth Verticals",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Healthcare_Manager.jpg?v=1758629878", // Placeholder for Building Long-Term Growth
    content: `This Synergy creates a highly differentiated, technology enabled model for last mile healthcare delivery. It strengthens Aayush Wellness’s long-term growth verticals, creates new recurring revenue opportunities, and reinforces its leadership as a multivertical health and wellness platform. The move also highlights the company’s vision to harness technology for inclusive healthcare solutions that are accessible, scalable, and impactful.`
  },
  {
    title: "Driving Innovation through Startup Accelerator Program",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Transforming_healthcare.jpg?v=1758629879", // Placeholder for Driving Innovation
    content: `The ₹50 Million Startup Accelerator Program, under which this alliance has been established, underscores Aayush Wellness’s commitment to nurturing Indian entrepreneurship, fostering innovation, and shaping a future-ready wellness ecosystem. This initiative is particularly attractive to investors seeking highgrowth, impact-driven opportunities in India’s rapidly expanding USD 372 billion healthcare market. Overall, the partnership strengthens the investment landscape by enhancing startup viability, driving market disruption, and unlocking new, recurring revenue streams within the health and wellness sector.`
  },
  {
    title: "About Aayush Wellness Limited",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/1718878939128Aayush_Wellness_Board_Approved_10-for-1_Stock_Split_and_ESOP.jpg?v=1758630199", // Placeholder for About Aayush Wellness
    content: `(ISO 9000 and 22000 certified company) Aayush Wellness Limited [BSE scrip code: 539528], established in 1989 is a pioneering name in health and wellness solutions, dedicated to offering products that merge wellbeing with innovation. We are India’s integrated healthcare company committed to offer quality products and services to enhance the consumer well-being. Aayush Wellness continues to lead the industry in promoting healthier lifestyle choices through its diverse range of wellness products and services. For more information, please visit www.aayushwellness.com or Call: 8655611700 for business inquiries.`
  }
];

export default function AayushLabsAnnouncement() {
  return (
    <>
      <Header />
    {/* Responsive Full Screen Banner */}
    <div className="relative w-full h-[50vh] sm:h-[70vh] md:h-screen overflow-hidden mb-10" style={{ marginTop: "80px" }}>
  <picture>
    <source media="(max-width: 640px)" srcSet="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ChatGPT_Image_Sep_23_2025_05_53_55_PM.png?v=1758630250" />
    <img
      src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/ChatGPT_Image_Sep_23_2025_05_53_55_PM.png?v=1758630250"
      alt="Aayush Labs Banner"
      className="w-full h-full object-cover brightness-75"
    />
  </picture>
  <div className="absolute inset-0 flex flex-col justify-center items-center px-2 sm:px-0">
    <p className="text-white text-base sm:text-2xl md:text-3xl mt-4 sm:mt-6 text-center max-w-2xl drop-shadow">
      Aayush Wellness Limited Announces Collaboration with Healthrashi Nextgen India Ltd to Expand Healthcare Services
    </p>
    <br></br>
     <a
        href="https://www.bseindia.com/xml-data/corpfiling/AttachLive/e9142c59-eaac-4944-8753-d0eb422e267b.pdf"
        download
        className="inline-flex items-center bg-[#33cccc] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:bg-[#006060] transition-colors text-lg sm:text-xl"
      >
        View Press Release
      </a>
  </div>
</div>
      {/* Announcement Text Section */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#33cccc] text-xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Aayush Wellness Limited Announces Collaboration with Healthrashi Nextgen India Ltd to Expand Healthcare Services
          </h2>
          <p className="text-gray-900 text-base sm:text-xl md:text-2xl leading-relaxed font-medium whitespace-pre-line" style={{ textAlign: "justify" }}>
            Aayush Wellness Limited (BSE Listed), a diversified health and wellness company, today announced a strategic collaboration with Healthrashi Nextgen India Ltd, under its recently launched ₹50 Million Startup Accelerator Program. This partnership marks Aayush Wellness’s expansion into India’s rapidly growing $370 Billion HEALTHCARE. Preventive healthcare is emerging as one of the fastest-growing segments of India’s USD 1.3 trillion healthcare and wellness industry, driven by lifestyle disorders, rising health awareness, and government initiatives encouraging early detection and wellness adoption. According to NITI Aayog, nearly 65 % of hospital infrastructure is concentrated in urban India, leaving vast semi-urban and rural populations underserved. This presents a massive opportunity for scalable, technology-enabled solutions.

            “This collaboration is a strategic leap forward, perfectly aligning with our mission to build a technology-driven wellness ecosystem. By integrating these scalable healthcare innovations, we are poised to unlock meaningful value for our investors and, most importantly, deliver affordable preventive care to millions of people who need it most.” Naveena Kumar Managing Director of Aayush Wellness MARKET.
          </p>
        </div>
      </div>

      {/* Sections with Large Images and Prominent Text */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-8 sm:py-10 space-y-16 sm:space-y-24">
        {sections.map((section, idx) => {
          const isEven = idx % 2 === 1;
          return (
           <motion.section
  key={idx}
  initial={{ opacity: 0, x: isEven ? 200 : -200 }}
  whileInView={{ opacity: 1, x: 0 }}
  viewport={{ once: true, amount: 0.3 }}
  transition={{ duration: 0.7, type: "spring" }}
  className={`flex flex-col md:flex-row items-center gap-6 sm:gap-10 md:gap-20 ${isEven ? "md:flex-row-reverse" : ""}`}
>
             <motion.div
    initial={{ opacity: 0, scale: 0.95 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7 }}
    className="md:w-1/2 w-full flex justify-center p-4"
  >
               <img
      src={section.image}
      alt={section.title}
      className="w-full max-w-sm sm:max-w-md md:max-w-lg h-auto object-cover rounded-lg shadow-lg"
    />
             </motion.div>
  <div className="md:w-1/2 w-full h-full flex flex-col justify-center p-4">
    <h2 className="text-[#33cccc] text-2xl sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6 leading-tight">{section.title}</h2>
    <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed whitespace-pre-line">{section.content}</p>
  </div>
</motion.section>
          );
        })}
      </div>

      {/* Book Your Test Now Button */}
      <div className="flex justify-center my-10">
        
      </div>
      <NewFooter />
    </>
  );
}

