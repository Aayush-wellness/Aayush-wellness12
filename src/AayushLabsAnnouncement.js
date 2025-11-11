import React from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Market Opportunity & Growth",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/4_2.jpg?v=1758111118",
    content: `India’s diagnostics market—valued at ₹1.54 trillion in FY2024 and projected to nearly double to ₹2.98 trillion by FY2030 at a CAGR of 11.7%—is one of the fastest-growing healthcare segments. Growth is fueled by preventive health awareness, chronic diseases, and rapid digital adoption, with home sample collection driving nearly one-fourth of this expansion.`
  },
  {
    title: "Aayush Labs: Patient-First Diagnostics",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/1_8.jpg?v=1758111117",
    content: `Aayush Labs offers a wide range of diagnostic tests for preventive and chronic care, backed by hassle-free home sample collection. Secure teleconsultations ensure timely medical advice, while digital access to reports and prescriptions brings speed, transparency, and convenience.`
  },
  {
    title: "Unified Healthcare Ecosystem",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/3_4.jpg?v=1758111118",
    content: `Aayush Wellness’s core offerings including nutraceuticals, wellness supplements, and lifestyle products form the base of preventive healthcare. The addition of diagnostics strengthens this vertical by enabling evidence-based wellness and personalized care pathways.`
  },
  {
    title: "About Aayush Wellness Limited",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/2_7.jpg?v=1758111118",
    content: `(ISO 9000 and 22000 certified) Aayush Wellness Limited [BSE scrip code: 539528], established in 1984, is a pioneering name in health and wellness solutions, dedicated to offering products that merge wellbeing with innovation. For more information, visit www.aayushwellness.com or call 8655611700 for business inquiries.`
  }
];

export default function AayushLabsAnnouncement() {
  return (
    <>
      <Header />
    {/* Responsive Full Screen Banner */}
<div className="relative w-full h-[50vh] sm:h-[70vh] md:h-screen overflow-hidden mb-10" style={{ marginTop: "80px" }}>
  <picture>
    <source media="(max-width: 640px)" srcSet="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Home_page_slider_banner_1_mobile_2.jpg?v=1758104854" />
    <img
      src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-09-17_134434.png?v=1758096901"
      alt="Aayush Labs Banner"
      className="w-full h-full object-cover brightness-75"
    />
  </picture>
  <div className="absolute inset-0 flex flex-col justify-center items-center px-2 sm:px-0">
    <p className="text-white text-base sm:text-2xl md:text-3xl mt-4 sm:mt-6 text-center max-w-2xl drop-shadow">
      Integrated Healthcare, Digital Diagnostics, and Patient-First Solutions
    </p>
    <br></br>
     <a
        href="https://www.bseindia.com/xml-data/corpfiling/AttachHis/65446c61-60db-4c3e-a9c5-ccb73858dace.pdf"
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
            New Delhi, September 3rd, 2025
          </h2>
          <p className="text-gray-900 text-base sm:text-xl md:text-2xl leading-relaxed font-medium whitespace-pre-line" style={{ textAlign: "justify" }}>
            Aayush Wellness, an Integrated Healthcare company proudly announces the launch of
            Aayush Labs (www.aayushlabs.com), a cutting-edge diagnostics digital platform delivering online test booking, home sample collection, and digital report delivery. By combining an asset-light model with cloud-enabled integration and a state-of-the-art central lab for quality assurance, Aayush Labs is redefining diagnostics by making healthcare more accessible, affordable, and patient-first.

            The launch comes at a pivotal time, as India’s diagnostics market—valued at ₹1.54 trillion in FY2024 and projected to nearly double to ₹2.98 trillion by FY2030 at a CAGR of 11.7 percent—emerges as one of the fastest-growing segments in healthcare. Growth is being fueled by preventive health awareness, the rising burden of chronic diseases, and rapid digital adoption, with home sample collection expected to drive nearly one-fourth of this expansion.

            To meet the rising market demand, Aayush Labs offers a wide range of diagnostic tests for preventive and chronic care, backed by hassle-free home sample collection—a segment driving nearly one-fourth of industry growth. Secure teleconsultations ensure timely medical advice, while digital access to reports and prescriptions brings speed, transparency, and convenience, aligning healthcare with the lifestyle needs of families, seniors, and professionals.
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
    <p className="text-gray-800 text-base sm:text-xl md:text-2xl leading-relaxed">{section.content}</p>
  </div>
</motion.section>
          );
        })}
      </div>

      {/* Book Your Test Now Button */}
      <div className="flex justify-center my-10">
        <a
          href="https://www.aayushlabs.com/book-test" // Replace with actual booking link
          className="inline-flex items-center bg-[#33cccc] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:bg-[#006060] transition-colors text-lg sm:text-xl"
        >
          Book Your Test Now
        </a>
      </div>
      <NewFooter />
    </>
  );
}



