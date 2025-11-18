import React, { useState, useEffect } from 'react';
import Header from './Header';
import NewFooter from './NewFooter';
import { motion } from 'framer-motion';

export default function Career() {
    const [result, setResult] = useState("");
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Trigger animations after component mounts
        const timer = setTimeout(() => {
            setIsVisible(true);
        }, 100);
        return () => clearTimeout(timer);
    }, []);

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);
        formData.append("access_key", "4958ad24-02e2-4681-8174-e998d6b3fc67");

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json();

            if (data.success) {
                setResult("Form Submitted Successfully!");
                event.target.reset();
            } else {
                setResult(data.message || "Something went wrong. Please try again.");
            }
        } catch (error) {
            setResult("Failed to send message. Please try again later.");
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />
            
            {/* Hero Banner */}
            <div className="relative h-[400px] sm:h-[500px] md:h-[70vh] overflow-hidden">
               <div
  className="absolute inset-0 w-full h-full justify-center"
  style={{ marginTop: "90px" }}
>
                    <img 
                        src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/career_5.jpg?v=1723994079"
                        alt="Career Banner"
                       
                       
                    />
                    <div className="absolute inset-0  flex items-center justify-center px-4">
                        <motion.div 
                            initial={{ y: 30, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.8 }}
                            className="text-center w-full max-w-4xl px-4"
                        >
                           
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* Career Form Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-xl shadow-lg overflow-hidden mb-12 md:mb-16"
                    >
                        <div className="flex flex-col md:flex-row">
                            {/* Form Section */}
                            <div className="w-full md:w-2/3 p-6 sm:p-8 md:p-10">
                                <motion.div 
                                    variants={containerVariants}
                                    initial="hidden"
                                    animate={isVisible ? "visible" : "hidden"}
                                >
                                    <motion.h2 
                                        variants={itemVariants}
                                        className=" sm:text-3xl font-bold text-black-800 mb-2"
                                    >
                                        Career Inquiry
                                    </motion.h2>
                                    <motion.p 
                                        variants={itemVariants}
                                        className="text-gray-600 mb-6 sm:mb-8"
                                    >
                                        Fill out the form and we'll get back to you soon.
                                    </motion.p>
                                    
                                    <form onSubmit={onSubmit} className="space-y-4 sm:space-y-6">
                                        <motion.div 
                                            variants={itemVariants}
                                            className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6"
                                        >
                                            <div className="space-y-1">
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                                <input
                                                    type="text"
                                                    name="name"
                                                    id="name"
                                                    required
                                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#33cccc] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    id="email"
                                                    required
                                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#33cccc] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
                                                <input
                                                    type="tel"
                                                    name="phone"
                                                    id="phone"
                                                    required
                                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#33cccc] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                                />
                                            </div>

                                            <div className="space-y-1">
                                                <label htmlFor="position" className="block text-sm font-medium text-gray-700">Position</label>
                                                <input
                                                    type="text"
                                                    name="position"
                                                    id="position"
                                                    required
                                                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#33cccc] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                                />
                                            </div>
                                        </motion.div>

                                        <motion.div 
                                            variants={itemVariants}
                                            className="space-y-1"
                                        >
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                            <textarea
                                                name="message"
                                                id="message"
                                                rows="4"
                                                required
                                                className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#33cccc] focus:border-transparent transition-all duration-300 text-sm sm:text-base"
                                            ></textarea>
                                        </motion.div>

                                        <motion.div 
                                            variants={itemVariants}
                                            className="pt-2"
                                        >
                                            <button
                                                type="submit"
                                                className="w-full py-3 sm:py-3.5 px-6 bg-gradient-to-r from-[#33cccc] to-[#2ab8b8] text-white font-medium rounded-lg transition-all duration-300 hover:from-[#2ab8b8] hover:to-[#33cccc] hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#33cccc] text-sm sm:text-base"
                                            >
                                                Submit Application
                                            </button>
                                        </motion.div>

                                        {result && (
                                            <motion.div 
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                className={`p-4 rounded-md text-center text-sm ${
                                                    result.includes('Successfully') 
                                                        ? 'bg-green-100 text-green-800' 
                                                        : 'bg-red-100 text-red-800'
                                                }`}
                                            >
                                                {result}
                                            </motion.div>
                                        )}
                                    </form>
                                </motion.div>
                            </div>

                            {/* Image Section */}
                            <div className="hidden md:block md:w-1/3 bg-cover bg-center relative" 
                                style={{
                                    backgroundImage: 'url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80)'
                                }}>
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30 flex items-end p-6">
                                    <div className="text-white">
                                        <h3 className="text-2xl font-bold mb-2">Why Join Us?</h3>
                                        <p className="text-gray-200">Be part of an innovative team that values creativity and growth.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Benefits Section */}
                    <motion.div 
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-12 md:mb-16"
                    >
                        <h2 className=" font-bold text-center text-gray-800 mb-8 sm:mb-12">Why Work With Us</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                            {[
                                { 
                                    title: 'Career Growth', 
                                    desc: 'Opportunities for professional development and advancement',
                                    icon: '📈'
                                },
                                { 
                                    title: 'Great Team', 
                                    desc: 'Collaborate with talented and passionate professionals',
                                    icon: '👥'
                                },
                                { 
                                    title: 'Work-Life Balance', 
                                    desc: 'Flexible working hours and remote work options',
                                    icon: '⚖️'
                                }
                            ].map((item, index) => (
                                <motion.div 
                                    key={index}
                                    whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
                                    className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:border-[#33cccc] transition-all duration-300"
                                >
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-semibold text-[#33cccc] mb-3">{item.title}</h3>
                                    <p className="text-gray-600 text-sm sm:text-base">{item.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </main>

            <NewFooter />
        </div>
    );
}
