import React from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";
import { motion } from "framer-motion";

const sections = [
  {
    title: "GST Reduction: Aayush Wellness Strengthens Healthcare in India",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Gemini_Generated_Image_u1nm3mu1nm3mu1nm.png?v=1758709193", // Reusing image, replace with relevant image if available
    content: `Aayush Wellness Limited, a leading integrated healthcare company, welcomes the Government of India’s announcement to reduce the Goods and Service Tax (GST) on various healthcare and wellness products, a move that will make preventive healthcare more affordable for a larger section of the population. In line with this decision, Aayush Wellness will make its nutraceutical products and healthcare services more affordable than ever, strengthening the company’s Position into the USD 370 Billion Healthcare market and deliver high-quality healthcare and wellness solutions to millions while unlocking significant growth opportunities.`
  },
  {
    title: "Supporting a Healthier Nation & Affordable Care",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/No_GST_hike_for_textile_products_Council_decides_to_hold_on_12_rise.jpg?v=1758716936", // Reusing image, replace with relevant image if available
    content: `These reforms strongly support Aayush Wellness’s long-term goal of building a healthier nation. The change encourages citizens to adopt preventive practices focused on nutrition, fitness, and wellness, helping to reduce lifestyle-related diseases and promote sustainable health outcomes for the population.

For Indian families, healthcare costs have long been an urgent concern. By adjusting its pricing structure according to the new policy framework, Aayush Wellness is helping to reduce household expenses while also increasing access to preventive care. This initiative ensures that consumers can choose affordable options without sacrificing quality or reliability.`
  },
  {
    title: "Transparent Pricing & Commitment to Consumers",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Gemini_Generated_Image_vwvvlfvwvvlfvwvv.png?v=1758709349", // Reusing image, replace with relevant image if available
    content: `At Aayush Wellness, we have revised our pricing structure for nutraceutical products and other healthcare services to ensure customers benefit directly from the new reforms. The updated Maximum Retail Price (MRP) for our products and services have been communicated to our entire distribution network and partners, ensuring full transparency. While some existing stock with earlier pricing may still be available during this transition, the revised lower MRP is already in effect across our authorized partners. This reflects our commitment to pass on every advantage to our consumers without compromise. 

“This change is more than a policy update; it is a breakthrough for millions of Indians aspiring to better healthcare at reduced costs. At Aayush Wellness, every saving from this new GST reform is being directly transferred to our consumers. This commitment reflects our mission of making Preventive healthcare truly affordable & accessible across the nation.” Said by Mr. Naveena Kumar, Managing Director of Aayush Wellness Limited.`
  },
  {
    title: "Expanding Healthcare Access & Impact",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/How_to_Keep_Your_New_Year_s_Resolutions.jpg?v=1758716936", // Reusing image, replace with relevant image if available
    content: `Aayush Wellness is actively expanding its portfolio across preventive and proactive healthcare, covering areas such as nutraceuticals, diagnostic solutions, and other accessible healthcare services. With India’s preventive healthcare market surging and nutraceutical demand on a steep upcurve, this reform acts as a catalyst, enabling the company to make healthcare more inclusive and impactful for communities across India.

About Aayush Wellness Limited:
(ISO 9000 and 22000 certified company)
Aayush Wellness Limited [BSE scrip code: 539528], established in 1984 is a pioneering name in health and wellness solutions, dedicated to offering products that merge wellbeing with innovation. We are India’s integrated healthcare company committed to offer quality products and services to enhance the consumer well-being. Aayush Wellness continues to lead the industry in promoting healthier lifestyle choices through its diverse range of wellness products and services. For more information, please visit www.aayushwellness.com or Call: 8655611700 for business inquiries.`
  }
];

export default function ArticleGST() { // Changed component name to ArticleGST
  return (
    <>
      <Header />
    {/* Responsive Full Screen Banner */}
<div className="relative w-full h-[50vh] sm:h-[70vh] md:h-screen overflow-hidden mb-10" style={{ marginTop: "80px" }}>
  <picture>
    <source media="(max-width: 640px)" srcSet="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/No_late_fees_for_filing_GSTR-7_after_deadline_Here_s_why_these_taxpayers_still_need_to_file_it_t.jpg?v=1758711410" />
    <img
      src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/No_late_fees_for_filing_GSTR-7_after_deadline_Here_s_why_these_taxpayers_still_need_to_file_it_t.jpg?v=1758711410"
      alt="Aayush Labs Banner"
      className="w-full h-full object-cover brightness-75"
    />
  </picture>
  <div className="absolute inset-0 flex flex-col justify-center items-center px-2 sm:px-0">
    <p className="text-white text-base sm:text-2xl md:text-3xl mt-4 sm:mt-6 text-center max-w-2xl drop-shadow">
      Ignite Momentum in India’s USD 370 Billion Healthcare Sector.
    </p>
    <br></br>
     <a
        href="https://www.bseindia.com/xml-data/corpfiling/AttachLive/e9f32b37-9d9c-45d1-bfa6-7c05ea224178.pdf"
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
          Aayush Wellness to Pass on GST Benefits to Consumers
          </h2>
          <p className="text-gray-900 text-base sm:text-xl md:text-2xl leading-relaxed font-medium whitespace-pre-line" style={{ textAlign: "justify" }}>
            Aayush Wellness Limited, a leading integrated healthcare company,
            welcomes the Government of India’s announcement to reduce the Goods and
            Service Tax (GST) on various healthcare and wellness products, a
            move that will make preventive healthcare more affordable for a larger
            section of the population. In line with this decision, Aayush Wellness will
            make its nutraceutical products and healthcare services more affordable
            than ever, strengthening the company’s position into the USD 370 Billion
            Healthcare market and deliver high-quality healthcare and wellness
            solutions to millions while unlocking significant growth opportunities.
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
    className="md:w-1/2 w-full flex justify-center h-full"
  >
               <img
      src={section.image}
      alt={section.title}
      className="w-full max-w-xs sm:max-w-lg md:max-w-2xl h-[220px] sm:h-[350px] md:h-[500px] object-cover"
    />
             </motion.div>
  <div className="md:w-1/2 w-full h-full flex flex-col justify-center">
    <h2 className="text-[#33cccc] text-lg sm:text-3xl md:text-4xl font-extrabold mb-4 sm:mb-6">{section.title}</h2>
    <p className="text-gray-800 text-base sm:text-xl md:text-2xl leading-relaxed whitespace-pre-line">{section.content}</p>
  </div>
</motion.section>
          );
        })}
      </div>

      {/* Book Your Test Now Button */}
      {/* <div className="flex justify-center my-10">
        <a
          href="https://www.aayushlabs.com/book-test"
          className="inline-flex items-center bg-[#33cccc] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:bg-[#006060] transition-colors text-lg sm:text-xl"
        >
          Book Your Online Consultation Now
        </a>
      </div> */}
      <NewFooter />
    </>
  );
}


