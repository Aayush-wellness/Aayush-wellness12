import React, { useEffect, useState, useRef } from "react";
import NewFooter from "./NewFooter";
import SkeletonLoader from "./SkeletonLoader";
import MissionHeader from "./MissionHeader";
import { db } from "./firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

// Your full press release content as HTML
const pressReleaseBody = `
  <p style="margin-bottom: 20px; color: black;">
    Aayush Wellness Limited, a leading name in India’s integrated healthcare landscape, proudly announces the official launch of ‘Aayush Health’, a state of the art teleconsultation and health records management platform. This marks the company's strategic expansion into India’s rapidly growing $1.62 billion Telemedicine and Healthcare Records Management Market, which is progressing at a robust CAGR of 21.2%.
  </p>
  <p style="margin-bottom: 20px; color: black;">
   The new initiative reinforces Aayush Wellness Limited’s commitment to reshaping access to quality healthcare services, particularly across Tier 2 and Tier 3 cities in India—areas where the availability of healthcare professionals, diagnostic infrastructure, and specialized care remains limited.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b style="color: black; margin-bottom: 20px;">Bridging Healthcare Gaps with Technology</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
 Aayush Health is available via <a href="https://www.aayush.health" target="_blank" style="color: black; text-decoration: underline;">www.aayush.health</a> and the <b>“Aayush Health”</b> Mobile App (Android & iOS), and is designed to bridge the long-standing divide between patients and medical professionals. By connecting users with qualified doctors virtually, the platform offers on-demand consultations, digital prescriptions, and secure health record management—all from the comfort of one’s home.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    “In a country where geography often limits access to quality healthcare, Aayush Health offers a seamless, affordable, and secure way for people to get the medical attention they need—on time and on demand,” said <b>Mr. Naveena Kumar, Managing Director, Aayush Wellness Limited.</b>
  </p>
  <p  style="color: black; margin-bottom: 20px;">
    <b>Empowering Patients and Doctors Alike</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    At the core of the Aayush Health platform is empowerment and accessibility—for both patients and doctors.
  </p style="margin-bottom: 20px; color: black;"> 
  <ol style="margin-left:1.5em;">
    <li><b>Patients</b> can review doctor profiles, view specialties, experience levels, ratings, and make informed choices for their healthcare needs.</li>
    <li style="margin-bottom: 20px;"><b>Doctors</b>, whether from urban centers or smaller towns, can empanel themselves on the platform and offer their services across India, removing geographical limitations while expanding their patient reach.</li>
  </ol>
  <p style="margin-bottom: 20px; color: black;">
    <b>Key Features of Aayush Health</b>
  </p>
  <ul>
    <li><b>24x7 Access to Verified Doctors:</b> Across general and specialty care disciplines.</li>
    <li><b>Digital Prescriptions:</b> Instantly available post consultation.</li>
    <li><b>Health Records Management:</b> Track, store, and share health documents securely.</li>
    <li><b>Smart Appointment Scheduling:</b> Enables hassle-free booking and follow-ups.</li>
    <li style="margin-bottom: 20px;"><b>Data Privacy & Security:</b> End-to-end encrypted patient data management.</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    The platform ensures an intuitive experience tailored to the Indian context, supporting multiple regional languages, minimal data usage, and simplified onboarding—especially for first-time users and the elderly.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>Aligned with India’s Digital Health Vision</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    Aayush Health is built to support and complement national initiatives like:
  </p>
  <ul style="margin-bottom: 20px; ">
   <b> <li>Ayushman Bharat Digital Mission (ABDM)</li></b>
  <b>  <li>National Digital Health Mission (NDHM)</li></b>
   <b> <li>Unified Health Interface (UHI)</li> </b>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    The platform allows users to create and integrate their ABHA (Ayushman Bharat Health Account) IDs, fostering a more interoperable and accessible healthcare ecosystem. This integration ensures that health records and prescriptions can be universally accepted and shared across hospitals, clinics, and pharmacies—making patients future-ready for India’s digital health transformation.
  </p>
 
`;

// 2nd Press Release Body
const pressReleaseBody2 = `
  <p style="margin-bottom: 20px; color: black;">
    <b>Affordable, Accessible Healthcare Right at Your Doorstep</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    Aayush Wellness Limited, India’s leading integrated healthcare company, proudly announces its strategic expansion into the diagnostic testing, home sample collection, and teleconsultation segments, in line with its mission to make healthcare simple, accessible, and affordable for every Indian household.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    With an already operational and successful primary healthcare center, Aayush Wellness Limited continues to transform the way health services are accessed, by launching a digital-first model that blends convenience, quality, and reliability. The newly introduced services will be available via the Aayush Health website and mobile application designed specifically to help families, working professionals, and senior citizens access essential health services from the comfort of their homes.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>Comprehensive Healthcare, Now Simplified</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    The new platform will offer a wide range of integrated features and services, including:
  </p>
  <ul style="color: black;">
    <li><b>Diagnostic Testing:</b> Access to a broad spectrum of lab tests such as blood profiles, preventive health panels, and chronic disease monitoring—all at competitive prices and processed through certified labs.</li>
    <li><b>Home Sample Collection:</b> Phlebotomist-enabled doorstep sample collection, ensuring complete comfort and time efficiency, especially for the elderly, differently abled, or those with busy schedules.</li>
    <li><b>Video-Based Teleconsultation:</b> Consult with certified doctors online for general health queries, specialist advice, or chronic condition follow-ups, without the hassle of clinic visits.</li>
    <li><b>Digital Medical Reports:</b> Easy-to-access lab reports, prescriptions, and consultation history delivered securely on the platform’s web and mobile versions.</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    <b>Capturing Growth in India’s Booming Diagnostics Market</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    India’s diagnostics market is currently valued at ₹1.11 lakh crores, with a CAGR of 14%, and home sample collection is projected to account for 25–30% of this share in the upcoming year. Recognizing the immense potential and rising consumer demand, Aayush Wellness Limited is strategically positioned to tap into this high-growth vertical by combining user-friendly technology with reliable on-ground service delivery.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    “Our goal is to bring simplicity and reliability to every household where booking a test or consulting a doctor is as easy as ordering groceries online. We’re entering this segment with a focus on affordability, trust, and convenience. This is more than a business expansion—it’s a step towards reshaping everyday healthcare for millions,” said <b>Mr. Naveena Kumar, Managing Director, Aayush Wellness Limited.</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>An End-to-End Digital Health Ecosystem</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    In today’s fragmented healthcare environment, accessing even the most basic services often means long wait times, confusing logistics, and high costs. With the launch of this initiative, Aayush Wellness Limited eliminates these challenges by offering a unified digital healthcare ecosystem, where:
  </p>
  <ul style="color: black;">
    <li>Patients can book tests online</li>
    <li>Samples are collected from their doorstep</li>
    <li>Doctors consult remotely</li>
    <li>Reports and prescriptions are delivered digitally</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    This integrated solution helps patients save time, avoid unnecessary travel, and receive quality medical care from the safety and convenience of home.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>Empowering Proactive Health Management</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    Aayush Wellness’s digital-first model is not just about convenience, it's about empowering individuals to take control of their health proactively. Whether it’s:
  </p>
  <ul style=" color: black;">
    <li>Chronic condition management,</li>
    <li>Preventive screenings,</li>
    <li>Senior citizen monitoring, or</li>
    <li>Busy professionals delaying checkups due to packed schedules,</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    The platform brings health management directly into users’ lives on-demand and without disruption.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>Strategic Fit in a Vertically Integrated Health Ecosystem</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    With this expansion, Aayush Wellness Limited is deepening its ecosystem, now spanning across:
  </p>
  <ul  color: black;">
    <li>Preventive care & diagnostics</li>
    <li>Telemedicine & health record management</li>
    <li>Wellness & herbal nutraceutical products</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    This vertical integration allows the company to serve the complete preventive and wellness journey of its consumers, while improving operational efficiency, risk management, and revenue visibility.
  </p>
`;


const pressReleaseBody3 = `
  <p style="margin-bottom: 20px; color: black;">
    <b>June 09, 2025</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>Aayush Wellness Limited to Establish Wholly Owned Subsidiary in Singapore to Accelerate Southeast Asia Expansion</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    Aayush Wellness Limited, India’s leading integrated healthcare and wellness company, is pleased to announce that its Board of Directors has approved the formation of a wholly owned subsidiary in Singapore with an initial capital investment of SGD 10,000.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    This strategic move represents a pivotal milestone in Aayush Wellness Limited’s global growth strategy, enabling the company to tap into the high-potential Southeast Asian wellness and nutraceutical markets, and further expand its international footprint in preventive healthcare, herbal supplements, and functional nutrition.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>Strengthening Global Presence Through Singapore</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    The newly formed Singapore subsidiary will serve as a regional base to launch and scale the company’s nutraceutical and wellness products across the ASEAN region. Singapore has been identified as an optimal location due to its:
  </p>
  <ul style="color: black;">
    <li>Strong consumer demand for holistic wellness and health supplements</li>
    <li>Business-friendly environment and regulatory clarity</li>
    <li>Robust infrastructure and access to neighboring markets</li>
    <li>Position as a trusted international trade and innovation hub</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    “Our new Singapore-based subsidiary will enable us to tap into one of the world’s most dynamic wellness markets, offering greater agility in operations, regulatory efficiency, and direct access to high-growth ASEAN economies. This is a critical step toward building a global wellness brand,”
    said <b>Mr. Naveena Kumar, Managing Director, Aayush Wellness Limited.</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    <b>Unlocking ASEAN Growth Opportunities</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    The Southeast Asian nutraceutical market is witnessing significant growth, projected to reach USD 15.1 billion by 2028, with a CAGR of 7.5%. Factors driving this growth include increasing health awareness, a preference for natural remedies, rising lifestyle diseases, and growing urban populations.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    Singapore’s own nutraceutical sector is valued at over USD 1.3 billion, fueled by high health literacy, an aging population, and increasing demand for plant-based and science-backed wellness products. This provides a launchpad for Aayush Wellness Limited to expand into neighboring markets such as:
  </p>
  <ul style="color: black;">
    <li>Malaysia</li>
    <li>Indonesia</li>
    <li>Thailand</li>
    <li>Vietnam</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    <b>Core Objectives of the Singapore Subsidiary</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    The formation of the subsidiary is not just an operational extension, it is a strategic investment in regional innovation and distribution. Key focus areas will include:
  </p>
  <ul style="color: black;">
    <li>Localization of Product Offerings: Tailoring formulations to meet regional consumer preferences and regulatory guidelines.</li>
    <li>Strategic Alliances: Building partnerships with regional distributors, e-commerce platforms, and wellness retailers.</li>
    <li>Export-Led Growth: Driving exports from India while expanding global brand presence.</li>
    <li>Innovation & R&D Hub: Establishing a regional research center to align with local wellness trends and develop new product pipelines.</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    <b>In Line with Aayush Wellness Limited’s Global Vision</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    The expansion into Singapore supports Aayush Wellness Limited’s long-term mission of delivering science-backed, sustainable, and natural healthcare solutions to global consumers. The company’s broader vision is to become a trusted international name in herbal, preventive, and functional wellness, while also promoting Indian formulations and innovations to the world stage.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    This move complements Aayush Wellness’s diversified operations across:
  </p>
  <ul style=" color: black;">
    <li>Primary healthcare services</li>
    <li>Diagnostics & teleconsultation</li>
    <li>Nutraceuticals & herbal formulations</li>
    <li>Digital health platforms</li>
  </ul>
  <p style="margin-bottom: 20px; color: black;">
    <b>About Aayush Wellness Limited</b>
  </p>
  <p style="margin-bottom: 20px; color: black;">
    Headquartered in New Delhi, the company focuses on bridging the gap between traditional wellness and modern healthcare through products and services that are effective, affordable, and rooted in nature and science.
  </p>
  <p style="margin-bottom: 20px; color: black;">
    From herbal masalas and health supplements to digital-first diagnostic and telemedicine platforms, Aayush Wellness Limited is actively shaping the future of preventive health in India and beyond.
  </p>
`;

const pressReleases = [
  {
    id: 1,
    name: "Aayush Wellness Enters $1.62 Billion Telemedicine Market with the Launch of Aayush Health Platform",
    url: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/63aed704-65fa-4a90-b496-87da8bf457ee.pdf?v=1752142566",
    date: "2025-07-01",
    year: 2025,
    type: "Announcement",
    body: pressReleaseBody,
  },
  {
    id: 2,
    name: "Aayush Wellness Limited Expands into Diagnostic Testing and Teleconsultation Services",
    url: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/PR-_20.06.25.pdf?v=1752210983",
    date: "2025-06-20",
    year: 2025,
    type: "Announcement",
    body: pressReleaseBody2,

  },
  {
    id: 3,
    name: "Aayush Wellness Limited to Establish Wholly Owned Subsidiary in Singapore to Accelerate Southeast Asia Expansion",
    url: "https://cdn.shopify.com/s/files/1/0636/5226/6115/files/June_09.25.pdf?v=1752210981",
    date: "2025-06-09",
    year: 2025,
    type: "Announcement",
    body: pressReleaseBody3,
  },
];

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return (
    date.toLocaleString("en-IN", {
      month: "short",
      day: "numeric",
      year: "numeric",

    })
  );
}
function getAllYears(list) {
  return Array.from(new Set(list.map((pr) => pr.year))).sort((a, b) => b - a);
}
function getAllTypes(list) {
  return Array.from(new Set(list.map((pr) => pr.type))).sort();
}

// Custom hook to detect mobile
function useIsMobile(breakpoint = 768) {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.innerWidth < breakpoint : false
  );
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < breakpoint);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [breakpoint]);
  return isMobile;
}

function PressReleaseSection() {
  const [pressReleases, setPressReleases] = useState([]);
  const [selected, setSelected] = useState(null);
  const [filters, setFilters] = useState({ year: "", type: "", name: "" });
  const isMobile = useIsMobile();

  useEffect(() => {
    const fetchPressReleases = async () => {
      const q = query(collection(db, "pressReleases"), orderBy("date", "desc"));
      const querySnapshot = await getDocs(q);
      const releasesData = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setPressReleases(releasesData);
    };
    fetchPressReleases();
  }, []);

  // Filter logic
  const filtered = React.useMemo(() => {
    return pressReleases.filter((pr) => {
      const matchesYear = filters.year ? pr.year.toString() === filters.year : true;
      const matchesType = filters.type ? pr.type === filters.type : true;
      const matchesName = filters.name
        ? pr.name.toLowerCase().includes(filters.name.toLowerCase())
        : true;
      return matchesYear && matchesType && matchesName;
    });
  }, [pressReleases, filters.year, filters.type, filters.name]);

  // Auto-select first item if none selected (desktop only)
  useEffect(() => {
    if (!isMobile && !selected && filtered.length > 0) setSelected(filtered[0]);
    if (!isMobile && selected && !filtered.find((pr) => pr.id === selected.id)) setSelected(filtered[0] || null);
  }, [filters, filtered, selected, isMobile]);

  // On mobile, if filters change, deselect
  useEffect(() => {
    if (isMobile) setSelected(null);
  }, [filters.year, filters.type, filters.name, isMobile]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg overflow-hidden border border-gray-100">
        <div className="md:flex min-h-[70vh]">
          {/* Left Sidebar - Filters and List */}
          <div className={`md:w-1/3 border-r border-gray-100 bg-gradient-to-b from-white to-gray-50 p-6 ${isMobile && selected ? 'hidden' : 'block'}`}>
            <div className="sticky top-6">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 font-rogbold">Press Releases</h2>

              {/* Search Box */}
              <div className="mb-6 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search press releases..."
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200"
                  value={filters.name}
                  onChange={(e) => setFilters({ ...filters, name: e.target.value })}
                />
              </div>

              {/* Filters */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Year</label>
                  <div className="relative">
                    <select
                      className="appearance-none w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white"
                      value={filters.year}
                      onChange={(e) => setFilters({ ...filters, year: e.target.value })}
                    >
                      <option value="">All Years</option>
                      {getAllYears(pressReleases).map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Category</label>
                  <div className="relative">
                    <select
                      className="appearance-none w-full pl-4 pr-10 py-2.5 border border-gray-200 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-200 bg-white"
                      value={filters.type}
                      onChange={(e) => setFilters({ ...filters, type: e.target.value })}
                    >
                      <option value="">All Categories</option>
                      {getAllTypes(pressReleases).map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Press Release List */}
              <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-800 mb-3">Latest Updates</h3>
                {filtered.length === 0 ? (
                  <div className="text-gray-500 text-center py-6 bg-white rounded-xl border border-gray-100">
                    <svg className="mx-auto h-10 w-10 text-gray-300 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    No press releases found
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[500px] overflow-y-auto pr-2 -mr-2">
                    {filtered.map((pr) => (
                      <button
                        key={pr.id}
                        onClick={() => setSelected(pr)}
                        className={`w-full text-left p-5 rounded-xl transition-all duration-200 ${selected?.id === pr.id
                            ? 'bg-gradient-to-r from-gray-50 to-white border-l-4 border-[#33cccc] shadow-sm'
                            : 'bg-white hover:bg-gray-50 border-l-4 border-transparent hover:border-gray-200 shadow-sm hover:shadow-md'
                          }`}
                      >
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium px-3 py-1 rounded-full bg-[#33cccc] bg-opacity-10 text-[#33cccc]">
                            {pr.type}
                          </span>
                          <span className="text-sm text-gray-700">{formatDate(pr.date)}</span>
                        </div>
                        <h4 className={`mt-3 text-base md:text-lg font-medium ${selected?.id === pr.id ? 'text-[#13233b]' : 'text-[#13233b]'
                          }`}>
                          {pr.name}
                        </h4>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side - Content */}
          <div className={`${isMobile ? 'w-full' : 'md:w-2/3'} bg-white`}>
            {selected ? (
              <div className="h-full flex flex-col">
                {/* Back button for mobile */}
                {isMobile && (
                  <button
                    onClick={() => setSelected(null)}
                    className="flex items-center text-gray-600 hover:text-gray-700 font-medium p-4 border-b border-gray-100 transition-colors"
                  >
                    <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    Back to List
                  </button>
                )}

                <div className="flex-1 overflow-y-auto p-6 md:p-8">
                  <div className="max-w-3xl mx-auto">
                    <div className="flex items-center space-x-3 mb-5">
                      <span className="text-sm md:text-base font-medium px-3 py-1 rounded-full bg-[#33cccc] bg-opacity-10 text-[#33cccc]">
                        {selected.type}
                      </span>
                      <span className="text-sm md:text-base text-gray-700">{formatDate(selected.date)}</span>
                    </div>

                    <h1 className="md:text-3xl font-bold text-[#13233b] mb-8 leading-snug">
                      {selected.name}
                    </h1>

                    <div
                      className="prose prose-lg max-w-none text-black leading-relaxed"
                      style={{
                        fontSize: '1.125rem',
                        lineHeight: '1.75',
                        color: '#111827', // Slightly softer than pure black
                        '--tw-prose-headings': '#13233b',
                        '--tw-prose-headings-font-family': 'ROGBold, sans-serif',
                        '--tw-prose-headings-font-weight': 'bold',
                        '--tw-prose-h1-font-size': '2.25em',
                        '--tw-prose-h2-font-size': '1.65em',
                        '--tw-prose-h3-font-size': '1.4em',
                        '--tw-prose-h4-font-size': '1.2em',
                        '--tw-prose-body': '#374151',
                        '--tw-prose-lead': '#4b5563',
                        '--tw-prose-links': '#33cccc',
                        '--tw-prose-bold': '#13233b',
                        '--tw-prose-counters': '#6b7280',
                        '--tw-prose-bullets': '#33cccc',
                        '--tw-prose-hr': '#e5e7eb',
                        '--tw-prose-quotes': '#111827',
                        '--tw-prose-quote-borders': '#33cccc',
                        '--tw-prose-captions': '#6b7280',
                        '--tw-prose-code': '#111827',
                        '--tw-prose-pre-code': '#e5e7eb',
                        '--tw-prose-pre-bg': '#27272a',
                        '--tw-prose-th-borders': '#e5e7eb',
                        '--tw-prose-td-borders': '#e5e7eb',
                      }}
                      dangerouslySetInnerHTML={{ __html: selected.body }}
                    />

                    <div className="mt-10 pt-6 border-t border-gray-100">
                      <a
                        href={selected.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-xl shadow-sm text-white bg-[#33cccc] hover:bg-[#2bb8b8] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#33cccc] transition-colors"
                        download
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Press Release (PDF)
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="h-full flex flex-col items-center justify-center p-8 text-center bg-gray-50">
                <div className="max-w-md">
                  <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-gray-100 mb-4">
                    <svg
                      className="h-8 w-8 text-gray-800"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
                      />
                    </svg>
                  </div>
                  <h3 className="mt-2 text-lg font-medium text-[#13233b]">Select a Press Release</h3>
                  <p className="mt-1 text-sm text-gray-700">
                    Choose a press release from the list to view its full contents and download options.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function PressReleases() {
  const [loading, setLoading] = useState(true);
  const desktopVideoRef = useRef(null);
  const mobileVideoRef = useRef(null);

  const DESKTOP_VIDEO_URL =
    "https://res.cloudinary.com/dhofjux9o/video/upload/v1762842989/ur6urwkotb4kl7r4twfq_c4y2f9.mp4";
  const MOBILE_VIDEO_URL =
    "https://res.cloudinary.com/dhofjux9o/video/upload/v1762843006/eb4kqbvu48fawrrfixap_c1yhw5.mp4";

  useEffect(() => {
    setTimeout(() => setLoading(false), 200);
  }, []);

  useEffect(() => {
    if (!loading) {
      // Direct MP4 loading - no HLS needed
      if (desktopVideoRef.current) {
        desktopVideoRef.current.src = DESKTOP_VIDEO_URL;
        desktopVideoRef.current.load();
      }
      if (mobileVideoRef.current) {
        mobileVideoRef.current.src = MOBILE_VIDEO_URL;
        mobileVideoRef.current.load();
      }
    }
  }, [loading]);

  if (loading) {
    return <SkeletonLoader />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <MissionHeader />

      {/* --- Video Hero Section --- */}
      <div className="relative h-[100vh] md:h-[100vh] overflow-hidden">
        {/* Black overlay */}
        <div
          className="absolute inset-0 z-10"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        />

        {/* Desktop Video */}
        <video
          ref={desktopVideoRef}
          className="w-full h-full object-cover hidden md:block relative z-0"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />

        {/* Mobile Video */}
        <video
          ref={mobileVideoRef}
          className="w-full h-full object-cover md:hidden block relative z-0"
          autoPlay
          muted
          loop
          playsInline
          controls={false}
        />

        {/* Text Content */}
        <div className="absolute inset-0 flex flex-col items-start justify-end md:justify-center  text-left px-6 md:px-[5vw] z-20 pb-[15vh] md:pb-0">
          <h1
            className="text-white font-semibold"
            style={{
              fontSize: "56px",
              lineHeight: "100%",
            }}
          >
            <span
              className="font-rogbold hidden md:inline"
              style={{ fontSize: "5.8vw", fontFamily: "ROGBold" }}
            >
              Our Press Releases
            </span>
            <span
              className="font-rogbold md:hidden block"
              style={{ fontFamily: "ROGBold" }}
            >
              Our Press Releases
            </span>
          </h1>

          <p
            className="text-white font-medium mt-4"
            style={{
              fontSize: "16px",
              lineHeight: "180%",
              maxWidth: "90%",
            }}
          >
            <span
              className="font-minion hidden md:inline"
              style={{ fontSize: "1.25vw", maxWidth: "38.4vw", fontFamily: "Minionpro" }}
            >
              Stay updated with our latest announcements and milestones
            </span>
            <span className="font-minion md:hidden block" style={{ fontFamily: "Minionpro" }}>
              Stay updated with our latest announcements and milestones
            </span>
          </p>
        </div>
      </div>

      {/* --- Press Release Section --- */}
      <div className="flex-1 bg-white">
        <PressReleaseSection />
      </div>

      {/* --- Footer --- */}
      <NewFooter />
    </div>
  );
}

export default PressReleases;
