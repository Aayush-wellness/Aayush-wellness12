import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import { Suspense, lazy } from "react";
import React from "react";
import { AnimatePresence } from "framer-motion";
import PageTransition from "./PageTransition";
import './index.css';
import PageSkeleton from "./PageSkeleton";
import { AuthProvider } from "./contexts/Authcontext";
import FeatureModal from "./FeatureModal";

// Regular import for homepage
import Layout from "./Layout";
import LabTieUpForm from "./Labtieup";
import PressReleases from "./Releases";
import ReleaseCMS from "./ReleaseCMS";

import InitializeCMS from "./InitializeCMS";
import AdminLogin from "./AdminLogin";
import AayushLabsAnnouncement from "./AayushLabsAnnouncement";
import Articleconsultation from "./Articleconsultation";
import ArticleHealthRashi from "./ArticleHealthRashi";
import ArticleGST from "./ArticleGST";


// CMS Components
const BlogCMS = lazy(() => import("./BlogCMS"));
const DynamicBlog = lazy(() => import("./DynamicBlog"));
const BlogList = lazy(() => import("./BlogList"));
const MedicalLanding = lazy(() => import("./MedicalLanding"));
const HealthCheckup = lazy(() => import("./HealthCheckup"));

// Lazy imports for inner pages
const Pdf = lazy(() => import("./Pdf"));
const AdminPage = lazy(() => import("./AdminPage"));
const LifeCycle = lazy(() => import("./LifeCycle"));
const AboutUs = lazy(() => import("./AboutUs"));
const WaterRisk = lazy(() => import("./WaterRisk"));
const Ayurveda = lazy(() => import("./Ayurveda"));
const ErrorPage = lazy(() => import("./ErrorPage"));
const CsrAtAayush = lazy(() => import("./CsrAtAayush"));
const Investors = lazy(() => import("./Investors"));
const CompanyIntro = lazy(() => import("./CompanyIntro"));
const ModernScience = lazy(() => import("./ModernScience"));
const HealthWellness = lazy(() => import("./HealthWellness"));
const MissionVision = lazy(() => import("./MissionVision"));
const Malnutrition = lazy(() => import("./Malnutrition"));
const HealthCheck = lazy(() => import("./HealthCheck"));
const OurProduct = lazy(() => import("./OurProduct"));
const Sustnability = lazy(() => import("./Sustnability"));
const PressRelease = lazy(() => import("./PressRelease"));
const Career = lazy(() => import("./Career"));
const Support = lazy(() => import("./Support"));
const ContactPage = lazy(() => import("./ContactPage"));
const InTheNews = lazy(() => import("./InTheNews"));
const Library = lazy(() => import("./Library"));
const PrivacyPolicy = lazy(() => import("./PrivacyPolicy"));
const ProductCarousel = lazy(() => import("./ProductPage"));
const ProductGummies = lazy(() => import("./ProductPageGummies"));
const ProductPageSleep = lazy(() => import("./ProductPageSleep"));
const ProductPageBrain = lazy(() => import("./ProductPageBrain"));
const AayushVenture = lazy(() => import("./AayushVenture"));
const Health = lazy(() => import("./Health"));
const Healthh = lazy(() => import("./Healthh"));

const Blog1 = lazy(() => import("./Blog1"));
const Blog2 = lazy(() => import("./Blog2"));
const Blog3 = lazy(() => import("./Blog3"));
const Blog4 = lazy(() => import("./Blog4"));
const Blog5 = lazy(() => import("./Blog5"));
const Blog6 = lazy(() => import("./Blog6"));
const BlogH7 = lazy(() => import("./BlogH7"));
const BlogH8 = lazy(() => import("./BlogH8"));
const BlogH9 = lazy(() => import("./BlogH9"));
const BlogH10 = lazy(() => import("./BlogH10"));
const BlogH11 = lazy(() => import("./BlogH11"));
const BlogH12 = lazy(() => import("./BlogH12")); 
const BlogH13 = lazy(() => import("./BlogH13")); 
const BlogH14 = lazy(() => import("./BlogH14")); 
const BlogH15 = lazy(() => import("./BlogH15")); 
const BlogH16 = lazy(() => import("./BlogH16")); 
const BlogH17 = lazy(() => import("./BlogH17")); 
const BlogH18 = lazy(() => import("./BlogH18")); 
const BlogH19 = lazy(() => import("./BlogH19")); 
const BlogH20 = lazy(() => import("./BlogH20")); 
const BlogH21 = lazy(() => import("./BlogH21")); 
const BlogH22 = lazy(() => import("./BlogH22")); 

const BlogH23 = lazy(() => import("./BlogH23")); 
const BlogH24 = lazy(() => import("./BlogH24")); 
const BlogH25 = lazy(() => import("./BlogH25")); 
const BlogH26 = lazy(() => import("./BlogH26")); 
const BlogH27 = lazy(() => import("./BlogH27")); 
const BlogH28 = lazy(() => import("./BlogH28")); 
const BlogH29 = lazy(() => import("./BlogH29")); 
const BlogH30 = lazy(() => import("./BlogH30")); 



const AnimatedRoutes = () => {
  const location = useLocation();

  // Track internal navigation for modal logic
  React.useEffect(() => {
    // Set flag indicating this is internal navigation (not a refresh or direct URL entry)
    sessionStorage.setItem('internalNavigation', 'true');
  }, [location.pathname]);

  return (
    <AnimatePresence mode="wait">
      <Suspense fallback={<PageSkeleton />}>
      <Routes location={location} key={location.pathname}>
      
        <Route path="/" element={<PageTransition><Layout /></PageTransition>} />
        <Route path="sustainability" element={<PageTransition><Sustnability /></PageTransition>} />
        <Route path="newsroom/in-the-news" element={<PageTransition><PressRelease/></PageTransition>} />
        <Route path="/career" element={<PageTransition><Career /></PageTransition>} />
        <Route path="support" element={<PageTransition><Support /></PageTransition>} />
         <Route path="ContactPage" element={<PageTransition><ContactPage /></PageTransition>} />
        <Route path="newsroom/press-release" element={<PageTransition><InTheNews /></PageTransition>} />
        <Route path="newsroom/library" element={<PageTransition><Library /></PageTransition>} />
        <Route path="privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="press-releases" element={<PageTransition><PressReleases /></PageTransition>} />
        <Route path="/press-cms" element={<PageTransition><ReleaseCMS /></PageTransition>} />
        
        {/* CMS Routes */}
        <Route path="/admin/login" element={<PageTransition><AdminLogin /></PageTransition>} />
        <Route path="/admin/blog-cms" element={<PageTransition><BlogCMS /></PageTransition>} />
        <Route path="/blogs" element={<PageTransition><BlogList /></PageTransition>} />
        <Route path="/blog/:slug" element={<PageTransition><DynamicBlog /></PageTransition>} />
  <Route path="consultation" element={<PageTransition><MedicalLanding /></PageTransition>} />
  <Route path="healthcheck" element={<PageTransition><HealthCheckup /></PageTransition>} />
        
        <Route path="growth-accelerator" element={<PageTransition><AayushVenture /></PageTransition>} />
        {/* this is for about us only name health*/}
        <Route path="about-us" element={<PageTransition><Health /></PageTransition>} />
         <Route path="pan-masala" element={<PageTransition><ProductCarousel /></PageTransition>} />
    <Route path="gummies" element={<PageTransition><ProductGummies /></PageTransition>} />
    <Route path="gummies-sleep" element={<PageTransition><ProductPageSleep /></PageTransition>} />
        <Route path="healthcare" element={<PageTransition><Healthh/></PageTransition>} />
        <Route path="healthcare/Lab-registration" element={<PageTransition><LabTieUpForm /></PageTransition>} />
        <Route path="pan-masala" element={<PageTransition><ProductCarousel /></PageTransition>} />
        <Route path="gummies" element={<PageTransition><ProductGummies /></PageTransition>} />
        <Route path="gummies-sleep" element={<PageTransition><ProductPageSleep /></PageTransition>} />
        <Route path="brain-fuel" element={<PageTransition><ProductPageBrain/></PageTransition>} />
        <Route path="/Blog1" element={<Blog1 />} />
        <Route path="/Blog2" element={<Blog2 />} />
        <Route path="/Blog3" element={<Blog3 />} />
        <Route path="/Blog4" element={<Blog4 />} />
    <Route path="/nutraceuticals-vs-traditional" element={<Blog5 />} />
     <Route path="/top-7-ayurvedic-ingredients" element={<Blog6 />} />

     <Route path="/BlogH7" element={<BlogH7 />} />
     <Route path="/BlogH8" element={<BlogH8 />} />
     <Route path="/BlogH9" element={<BlogH9 />} />
     <Route path="/BlogH10" element={<BlogH10 />} />
     <Route path="/BlogH11" element={<BlogH11 />} />
     <Route path="/BlogH12" element={<BlogH12 />} />
      <Route path="/BlogH13" element={<BlogH13 />} />
     <Route path="/BlogH14" element={<BlogH14 />} />
  <Route path="/BlogH15" element={<BlogH15 />} />
     <Route path="/BlogH16" element={<BlogH16 />} />
      <Route path="/BlogH17" element={<BlogH17 />} />
     <Route path="/BlogH18" element={<BlogH18 />} />
   <Route path="/BlogH19" element={<BlogH19 />} />
     <Route path="/BlogH20" element={<BlogH20 />} />
   <Route path="/BlogH21" element={<BlogH21 />} />
     <Route path="/BlogH22" element={<BlogH22 />} />

   <Route path="/BlogH23" element={<BlogH23 />} />
     <Route path="/BlogH24" element={<BlogH24 />} />
      <Route path="/BlogH25" element={<BlogH25 />} />
     <Route path="/BlogH26" element={<BlogH26 />} />
   <Route path="/BlogH27" element={<BlogH27 />} />
     <Route path="/BlogH28" element={<BlogH28 />} />
   <Route path="/BlogH29" element={<BlogH29 />} />
     <Route path="/BlogH30" element={<BlogH30 />} />


        <Route path="ourproduct" element={<PageTransition><OurProduct /></PageTransition>} />
        <Route path="csr-at-aayush/health-check" element={<PageTransition><HealthCheck/></PageTransition>} />
        <Route path="csr-at-aayush/malnutrition" element={<PageTransition><Malnutrition/></PageTransition>} />
        <Route path="investors" element={<PageTransition><Investors/></PageTransition>} />
        <Route path="wellness/modern-science" element={<PageTransition><ModernScience/></PageTransition>} />
        <Route path="about/company-intro" element={<PageTransition><CompanyIntro/></PageTransition>} />
        <Route path="wellness/health-wellness" element={<PageTransition><HealthWellness/></PageTransition>} />
        <Route path="about/mission-vision" element={<PageTransition><MissionVision/></PageTransition>} />
        <Route path="ayurveda" element={<PageTransition><Ayurveda/></PageTransition>} />
        <Route path="sustainability/csr-at-aayush" element={<PageTransition><CsrAtAayush/></PageTransition>} />
        <Route path="sustainability/waterrisk" element={<PageTransition><WaterRisk/></PageTransition>} />
        <Route path="about" element={<PageTransition><AboutUs/></PageTransition>} />
        <Route path="pdf" element={<PageTransition><Pdf/></PageTransition>} />
        <Route path="sustainability/lifecycle" element={<PageTransition><LifeCycle/></PageTransition>} />
        <Route path="adminpage" element={<PageTransition><AdminPage/></PageTransition>} />
   <Route path="/aayush-labs-announcement" element={<AayushLabsAnnouncement />} />
    <Route path="/article-consultation" element={<Articleconsultation />} />
          <Route path="/article-health-rashi" element={<ArticleHealthRashi />} />
           <Route path="/article-gst" element={<ArticleGST />} />
        <Route path="*" element={<PageTransition><ErrorPage /></PageTransition>} />
        

        
        
      </Routes>
      </Suspense>
    </AnimatePresence>
  );
};

function App() {
  return (
    <Router>
      <AuthProvider>
        <InitializeCMS />
        <FeatureModal />
        <AnimatedRoutes />
      </AuthProvider>
    </Router>
  );
}


export default App;
