import React from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";
import { motion } from "framer-motion";

const sections = [
  {
    title: "Why Choose Online Doctor Consultation in India?",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Connection___Scoop_it.jpg?v=1758631138", // Placeholder image
    content: `The way India approaches healthcare is changing fast. Rising preventive health awareness, the growing burden of chronic diseases, and digital adoption are driving patients to choose online doctor consultation services.\nThrough Aayush Wellness, you can easily book appointments for:\n•\tGeneral physician consultation online\n•\tSpecialist teleconsultation (cardiology, gynecology, pediatrics, dermatology, etc.)\n•\tChronic condition management (diabetes, hypertension, thyroid, etc.)\n•\tPreventive healthcare and wellness advice\nInstead of postponing care, you get timely treatment and expert guidance at your convenience.`
  },
  {
    title: "Aayush Wellness Advantage: A 360° Healthcare Ecosystem",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/We_know_you_have_a_choice__thank_you_for_choosing_us___Martin_Thuna.jpg?v=1758631138", // Placeholder image
    content: `Unlike standalone teleconsultation apps, Aayush Wellness offers a complete healthcare ecosystem that combines consultation, diagnostics, and wellness.\n•\tCertified Indian doctors available for video and phone consultations.\n•\tHome sample collection & online test booking through Aayush Labs.\n•\tDigital prescriptions and reports, accessible anytime.\n•\tIntegration with nutraceuticals and wellness supplements for holistic, preventive health.\n•\tSecure, patient-first telemedicine platform built for families, seniors, and professionals.\nThis integration ensures you don’t just get a one-time consultation—you get continuity of care designed around your lifestyle.`
  },
  {
    title: "Human-Centric Care, Real Stories",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/What_is_Radiography_and_How_Is_It_Different_Than_Radiology__-_Broke_and_Chic.jpg?v=1758631571", // Placeholder image
    content: `•\tMrs. Sharma, a 65-year-old in Jaipur, manages her blood pressure through regular online consultations, getting prescriptions updated without stepping out.\n•\tArjun, an IT professional in Bengaluru, books teleconsultations for stress management between work calls, keeping his health on track despite a hectic routine.\nThese stories reflect how teleconsultation in India is transforming lives by bridging the gap between care and convenience.`
  },
  {
    title: "The Growing Trend of Telemedicine in India",
    image: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Saudi_Arabia_Telemedicine_Market_Size_Share_Trend_and_Forecast_2026___TechSci_Research.jpg?v=1758631138", // Placeholder image
    content: `The telemedicine market in India is expected to cross $5.5 billion by 2025, with millions of patients turning to online healthcare services. This shift highlights how digital platforms like Aayush Wellness are enabling affordable, accessible doctor consultation online—especially in tier-2 and tier-3 cities where specialist access is limited.`
  }
];

export default function AayushLabsAnnouncement() {
  return (
    <>
      <Header />
    {/* Responsive Full Screen Banner */}
<div className="relative w-full h-[50vh] sm:h-[70vh] md:h-screen overflow-hidden mb-10" style={{ marginTop: "80px" }}>
  <picture>
    <source media="(max-width: 640px)" srcSet="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Gemini_Generated_Image_u3313su3313su331.png?v=1758696467" />
    <img
      src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Gemini_Generated_Image_u3313su3313su331.png?v=1758696467"
      alt="Aayush Labs Banner"
      className="w-full h-full object-cover brightness-75"
    />
  </picture>
  <div className="absolute inset-0 flex flex-col justify-center items-center px-2 sm:px-0">
    <p className="text-white text-base sm:text-2xl md:text-3xl mt-4 sm:mt-6 text-center max-w-2xl drop-shadow">
      Online Doctor Consultation in India: Expert Healthcare Anytime, Anywhere
    </p>
    <br></br>
     <a
        href="https://aayushlabs.com/collections/our-doctors" // Updated link for online consultation
        className="inline-flex items-center bg-[#33cccc] text-white px-8 sm:px-10 py-3 sm:py-4 rounded-full font-medium hover:bg-[#006060] transition-colors text-lg sm:text-xl"
      >
        Book Your Online Consultation Now
      </a>
  </div>
</div>
      {/* Announcement Text Section */}
      <div className="max-w-7xl mx-auto px-2 sm:px-4 py-6 sm:py-8 flex flex-col items-center justify-center">
        <div className="text-center">
          <h2 className="text-[#33cccc] text-xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
          Expert Healthcare Anytime, Anywhere in India
          </h2>
          <p className="text-gray-900 text-base sm:text-xl md:text-2xl leading-relaxed font-medium whitespace-pre-line" style={{ textAlign: "justify" }}>
            When sudden health concerns strike like a late-night fever, recurring headaches, or an elderly parent needing follow-ups finding the right doctor shouldn’t be difficult. That’s where Aayush Wellness Online Doctor Consultation steps in, making healthcare accessible, affordable, and reliable across India.
            With our secure teleconsultation platform, you can connect with certified doctors from the comfort of your home, avoiding long waits and travel. Whether you live in a metro city or a smaller town, quality medical advice is now just a click away.
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

