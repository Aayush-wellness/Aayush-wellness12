import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Banner2 from './Banner2'
import Specialities from './Specilalities'
import Blog from './Blog'
import Service from './Service'
import Testimonal from './Testimonal'
import HNewFooter from './HNewfooter'
import EarningPotentialSection from './Earningpotential'
import FormSelector from './Form-selector'
import Asection8 from './Asection8'


const Healthh = () => {
  return (
    <>
    <Header/>
    <Banner/>
    <Banner2 />
    <FormSelector />
    <Specialities/>
    <Service/>
    <div className = "testing1">
      <style>background-image =url("https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Screenshot_2025-10-10_123822.png?v=1760080397")</style>
    </div>
    <Asection8/>
    
     <Blog />
    <Testimonal />
    <EarningPotentialSection/>
    <HNewFooter />

    {/* Floating WhatsApp and Call Buttons */}
     <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-4">
        {/* WhatsApp Button */}
        <a
          href="https://wa.me/+918433732988"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center w-14 h-14 bg-green-500 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Contact us on WhatsApp"
        >
          <div className="absolute -left-40 bg-white px-3 py-2 rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-sm font-medium">
            Chat on WhatsApp
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
            <path d="M17.6 6.32A7.85 7.85 0 0 0 12.05 4c-4.38 0-7.93 3.55-7.93 7.93a7.9 7.9 0 0 0 1.07 3.98L4 20l4.17-1.1a7.9 7.9 0 0 0 3.78.96h.01c4.38 0 7.93-3.55 7.93-7.93 0-2.12-.82-4.1-2.3-5.6zm-5.55 12.17h-.01a6.55 6.55 0 0 1-3.35-.92l-.24-.14-2.47.65.66-2.41-.16-.25a6.55 6.55 0 0 1-1-3.49c0-3.63 2.96-6.58 6.6-6.58a6.56 6.56 0 0 1 6.58 6.58c0 3.64-2.96 6.59-6.6 6.59zm3.61-4.93c-.2-.1-1.17-.58-1.35-.64-.18-.07-.32-.1-.45.1-.13.2-.5.64-.62.77-.11.13-.23.15-.43.05a5.42 5.42 0 0 1-2.68-2.34c-.2-.35.2-.32.58-1.08.07-.13.03-.24-.02-.34-.05-.1-.45-1.08-.62-1.48-.16-.39-.32-.33-.45-.34-.11-.01-.24-.01-.37-.01-.13 0-.34.05-.52.25-.18.2-.68.67-.68 1.62 0 .96.7 1.88.8 2.01.1.13 1.37 2.1 3.32 2.94.46.2.83.32 1.11.41.47.15.89.13 1.23.08.37-.06 1.17-.48 1.33-.94.17-.46.17-.86.12-.94-.05-.08-.19-.13-.4-.23z" />
          </svg>
        </a>

        {/* Call Button */}
        <a
          href="tel:+918433732988"
          className="flex items-center justify-center w-14 h-14 bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition-all duration-300 hover:scale-110 active:scale-95 group"
          aria-label="Call us"
        >
          <div className="absolute -left-24 bg-white px-3 py-2 rounded-lg shadow-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 text-sm font-medium">
            Call Us
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-7 h-7">
            <path d="M19.23 15.26l-2.54-.29a1.99 1.99 0 0 0-1.64.57l-1.84 1.84a15.045 15.045 0 0 1-6.59-6.59l1.85-1.85c.43-.43.64-1.03.57-1.64l-.29-2.52a2.001 2.001 0 0 0-1.99-1.77H5.03c-1.13 0-2.07.94-2 2.07.53 8.54 7.36 15.36 15.89 15.89 1.13.07 2.07-.87 2.07-2v-1.73c.01-1.01-.75-1.86-1.76-1.98z" />
          </svg>
        </a>
      </div>
    </>
  )
}

export default Healthh
