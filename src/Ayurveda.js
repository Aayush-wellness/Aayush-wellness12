import React, { useEffect, useState } from 'react';
import SkeletonLoader from './SkeletonLoader';
import Header from './Header';
import NewFooter from './NewFooter';

function Ayurveda() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false);
        }, 200);
    }, []);

    if (loading) {
        return <SkeletonLoader />;
    }

    return (
        <div className="min-h-screen flex flex-col bg-white">
            <Header />
            
            {/* Hero Banner */}
            <div className="w-full bg-cover bg-center h-[500px] bg-[url('https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Audumbaravleha.jpg?v=1757682588')] mt-32">
                <div className="flex items-center justify-center h-full bg-black bg-opacity-40">
                    <div className="text-center px-4">
                        <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                            <span className="block">Ayurveda</span>
                            <span className="block text-white mt-4 text-4xl md:text-5xl">The 'Science of Life'</span>
                        </h1>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <main className="flex-grow">
                <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
                    {/* Introduction Section */}
                    <section className="mb-16 bg-white p-6 rounded-lg shadow-sm">
                        <h2 className="text-3xl font-bold text-black mb-6">Understanding Ayurveda</h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Aayush wellness is a holistic approach to health that seeks to create balance and harmony within the body, mind, and spirit. Rooted in the ancient traditions of Ayurveda, this wellness philosophy emphasizes the importance of aligning one's lifestyle with natural rhythms and individual constitution. Ayurvedic practices focus on prevention through personalized diet, herbal remedies, physical activity, and mental well-being, aiming to maintain balance and prevent disease before it arises. By understanding and nurturing the body's unique needs, Ayurvedic wellness offers a path to sustained health, vitality, and inner peace.
                        </p>
                    </section>

                    {/* Ayurveda Overview */}
                    <section className="mb-16">
                        <h2 className="      font-bold text-black mb-6 pb-2 border-b border-[#33cccc]">
                            Understanding Ayurveda
                        </h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Ayurveda is a traditional practice of medicine from India, known for its well-organized approach to health care that encompasses both prevention and treatment. Widely practiced in various parts of Asia, Ayurveda is recognized as an important traditional medical practice.
                        </p>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            In 1971, the Indian government established the Indian Medical Council to uphold standards for medical education at both undergraduate and postgraduate levels. This council sets the qualifications for practitioners of Indian medicine and acknowledges several traditional practices, including Ayurveda, Unani, and Siddha.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                            Similar to modern scientific medicine, Ayurveda addresses both preventive and therapeutic aspects of health. Its preventive approach emphasizes adherence to a strict code of personal and social hygiene, tailored to an individual's specific needs, as well as the influences of climate and environment.
                        </p>
                    </section>

                    {/* Historical Context */}
                    <section className="mb-16 bg-gray-50 p-8 rounded-lg">
                        <h2 className="      font-bold text-black mb-6 pb-2 border-b border-[#33cccc]">
                            Historical Roots
                        </h2>
                        <p className="text-gray-700 leading-relaxed">
                            The origins of Ayurveda are attributed to Dhanvantari, a divine physician in Hindu mythology who is believed to have received this knowledge from the god Brahma. The earliest concepts of Ayurveda are found in the Atharvaveda, a section of the Vedas dating back to around the 2nd millennium BCE. The Vedic period of Ayurvedic medicine continued until about 800 BCE.
                        </p>
                    </section>

                    {/* Balance of Life Energy */}
                    <section className="mb-16">
                        <h2 className="      font-bold text-black mb-6 pb-2 border-b border-[#33cccc]">
                            The Balance of Life Energy
                        </h2>
                        <p className="text-gray-700 mb-6 leading-relaxed">
                            Ayurveda operates on the principle that everything in the universe, whether living or non-living, is interconnected. Good health is believed to result from the harmony of the mind, body, and spirit with the universe. When this balance is disrupted—due to factors like genetic conditions, injuries, climate changes, aging, or emotions—illness can occur.
                        </p>
                    </section>

                    {/* Global Practice */}
                    <section className="bg-[#33cccc] text-white p-8 rounded-lg">
                        <h2 className="      font-bold mb-6 pb-2 border-b border-white">
                            Global Practice of Ayurveda
                        </h2>
                        <p className="mb-6 leading-relaxed">
                            While exact statistics are unavailable, it is estimated that around 80% of the Indian population uses Ayurvedic treatments to some extent. In India, Ayurveda is regarded as a traditional medical system, with some practitioners even qualified to perform surgeries. In contrast, in the United States, Ayurveda is viewed as a form of complementary and alternative medicine.
                        </p>
                        <p className="leading-relaxed">
                            Ayurveda, rooted in the Indian subcontinent, is an alternative medical system practiced extensively in India, Nepal, Bangladesh, Pakistan, and Sri Lanka. Approximately 80% of the population in these regions reportedly use Ayurvedic practices. However, it's important to note that some aspects of Ayurveda, including the use of certain heavy metals like lead in its remedies, have been subject to scientific scrutiny.
                        </p>
                    </section>
                </div>
            </main>

            <NewFooter />
        </div>
    );
}

export default Ayurveda;
