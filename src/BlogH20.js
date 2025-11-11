import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const BlogH20 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = () => {
        window.history.back();
    };

    return (
        <>
            <Header />
            <div
                className="pt-40 px-6 bg-gray-100 text-gray-900 flex justify-center"
                style={{
                    backgroundImage: 'url("https://img.freepik.com/free-photo/pastel-blue-vignette-concrete-textured-background_53876-102637.jpg")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    minHeight: "100vh",
                }}
            >
                <button
                    className="absolute top-[100px] left-4 md:hidden z-20 w-8 h-8 flex justify-center items-center"
                    onClick={handleBack}
                >
                    <div className="w-6 h-6 border-t-4 border-l-4 border-gray-600 transform rotate-45"></div>
                </button>
                <div className="max-w-3xl w-full">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center text-red-700" style={{ color: '#000' }}>
                        How Harmful Ingredients in Pan Masala Affect Your Health
                    </h1>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_19.jpg?v=1751461688"
                        alt="Pan Masala Harmful Ingredients"
                        className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-gray-800 text-black space-y-4 mt-6">
                        <p>Pan Masala is a widely consumed product in many parts of India. It is often marketed as a mouth freshener and cultural tradition. But behind the attractive packaging and flavored aroma, many Pan Masala products contain harmful ingredients that can silently damage your health over time.</p>

                        <p>This blog uncovers the truth behind common harmful ingredients in Pan Masala, their long-term impact on your body, and why being informed is the first step toward better wellness.</p>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>🔍 What Is Pan Masala?</h2>
                        <p>Pan Masala is a mix of areca nut (supari), slaked lime, catechu, flavoring agents, and sometimes tobacco. Even “tobacco-free” versions often contain chemicals and additives that are potentially dangerous.</p>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>1. Areca Nut (Supari) – A Silent Addictive Agent</h2>
                        <ul className="list-disc pl-6">
                            <li>Oral Submucous Fibrosis (OSMF) – stiffening of cheeks</li>
                            <li>Increased risk of oral cancer</li>
                            <li>Dependency and nervous system stimulation</li>
                        </ul>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>2. Slaked Lime (Chuna) – Corrosive to Tissues</h2>
                        <ul className="list-disc pl-6">
                            <li>Mouth lining damage and burning sensation</li>
                            <li>Gastrointestinal irritation</li>
                            <li>Stomach ulcers and long-term disorders</li>
                        </ul>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>3. Synthetic Flavours and Artificial Colors – Chemical Overload</h2>
                        <ul className="list-disc pl-6">
                            <li>Hyperactivity and toxicity (from artificial colors)</li>
                            <li>Liver and kidney strain (from solvents/preservatives)</li>
                        </ul>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>4. Heavy Metals – The Hidden Dangers</h2>
                        <ul className="list-disc pl-6">
                            <li>Traces of lead, cadmium, arsenic found in studies</li>
                            <li>Neurological and hormonal damage</li>
                            <li>Kidney damage and developmental issues in children</li>
                        </ul>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>5. Nicotine and Tobacco – Direct Link to Addiction and Cancer</h2>
                        <ul className="list-disc pl-6">
                            <li>Risk of oral, throat, and esophageal cancers</li>
                            <li>Nicotine addiction and cardiovascular issues</li>
                        </ul>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>Long-Term Impact on Health</h2>
                        <ul className="list-disc pl-6">
                            <li>Dental issues: staining, gum disease, and tooth loss</li>
                            <li>Digestive problems: ulcers, acidity, and constipation</li>
                            <li>Mental health issues: anxiety, dependency</li>
                            <li>High cancer risk: especially oral and GI cancers</li>
                        </ul>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>Social and Behavioral Risks</h2>
                        <ul className="list-disc pl-6">
                            <li>Public spitting, smell, and stained teeth</li>
                            <li>Financial stress and family conflict</li>
                            <li>Decreased workplace productivity</li>
                        </ul>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>A Safer and Smarter Choice: Aayush Herbal Masala</h2>
                        <p>Unlike traditional Pan Masala, Aayush Herbal Masala contains:</p>
                        <ul className="list-disc pl-6">
                            <li>No supari, no tobacco</li>
                            <li>No artificial colors or preservatives</li>
                            <li>Herbal ingredients like Ashwagandha, Mulethi, and Amla</li>
                        </ul>
                        <p>It offers a refreshing experience without harming your health and supports mindful, toxin-free living.</p>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>Final Thoughts</h2>
                        <p>Pan Masala might seem like a small indulgence, but it carries big health risks. Being informed is the first step to breaking the cycle of addiction and damage.</p>
                        <p>If you're looking to quit or choose better, products like Aayush Herbal Masala offer a safer, wellness-driven path that still satisfies taste without compromising your health.</p>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    );
};

export default BlogH20;
