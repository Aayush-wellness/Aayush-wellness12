import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const BlogH25 = () => {
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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center text-black">
                        Pan Masala Addiction: Causes, Symptoms, and Herbal Alternatives
                    </h1>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Blog_24.jpg?v=1752318692"
                        alt="Pan Masala Awareness"
                        className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-black space-y-4 mt-6">
                        <p>
                            Pan masala has long been a part of Indian culture, often used as a mouth freshener after meals or during social occasions. However, behind the glossy packaging and strong flavor lies a growing concern about pan masala addiction. While it may not be officially classified as a disease, frequent and prolonged use of pan masala can lead to a deep-seated habit that’s hard to break. In this blog, we’ll explore the causes behind pan masala dependency, its long-term impact on wellness, and how herbal alternatives are emerging as safer, more conscious choices for individuals looking to make a switch.
                        </p>

                        <h2 className="mt-6 font-semibold">Understanding Pan Masala and Why It Becomes Habit-Forming</h2>
                        <p>
                            Pan masala is typically a mixture of areca nut (supari), slaked lime, catechu, and added flavoring agents. In many commercial brands, tobacco and artificial chemicals are also included often without being clearly disclosed. These elements, especially when consumed regularly, can trigger both physical and psychological dependency.
                        </p>
                        <p>
                            Unlike traditional habits that fade over time, pan masala use tends to grow stronger through repetition, becoming integrated into a user’s daily routine after meals, during stress, or even as a form of social bonding. Over time, it becomes less of a choice and more of a compulsion.
                        </p>

                        <h2 className="mt-6 font-semibold">Why Do People Get Hooked on Pan Masala?</h2>
                        <ul className="list-disc pl-6">
                            <li><strong>Stimulating Sensation:</strong> Areca nut and tobacco deliver a buzz or alertness that becomes addictive.</li>
                            <li><strong>Cultural and Social Influence:</strong> Pan masala is normalized through tradition, hospitality, and social interaction.</li>
                            <li><strong>Easy Availability and Low Cost:</strong> Inexpensive, widely available, and marketed aggressively.</li>
                            <li><strong>Flavored Addictions:</strong> Flavors like saffron, mint, and cardamom create strong sensory associations.</li>
                            <li><strong>Lack of Regulation and Awareness:</strong> Misleading packaging and lack of ingredient transparency conceal risks.</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">Long-Term Impact of Regular Pan Masala Use</h2>
                        <ul className="list-disc pl-6">
                            <li><strong>Oral Issues:</strong> Dry mouth, reduced taste, and poor oral hygiene.</li>
                            <li><strong>Digestive Discomfort:</strong> Acidity, ulcers from lime and chemicals.</li>
                            <li><strong>Addictive Dependency:</strong> Inability to function without chewing.</li>
                            <li><strong>Lifestyle Disruption:</strong> Constant cravings affect focus, social life, and work.</li>
                        </ul>
                        <p>
                            These aren’t just symptoms—they’re lifestyle challenges that gradually erode one’s health, energy, and mental peace.
                        </p>

                        <h2 className="mt-6 font-semibold">The Shift Towards Herbal Alternatives</h2>
                        <p>
                            A growing number of consumers are switching to natural, chemical-free options. Herbal pan masalas offer a non-addictive, clean-label alternative.
                        </p>
                        <p>Common ingredients in herbal versions include:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Cardamom (Elaichi):</strong> Natural mouth freshener</li>
                            <li><strong>Clove (Laung):</strong> Supports oral health</li>
                            <li><strong>Mint leaves:</strong> Cooling and digestive</li>
                            <li><strong>Saffron, Rose, Fennel:</strong> Flavor-rich and Ayurvedic</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">Introducing Aayush Herbal Masala – A Safe and Tasty Alternative</h2>
                        <p>
                            If you're looking to enjoy the richness of pan masala without the health risks, <strong>Aayush Herbal Masala</strong> is a tobacco-free, areca nut-free, non-addictive option. Crafted from pure, lab-tested ingredients, it respects tradition while supporting wellness.
                        </p>
                        <p>
                            Available on trusted platforms like Amazon and Flipkart, it's the ideal choice for those wanting to make a mindful switch.
                        </p>

                        <h2 className="mt-6 font-semibold">Why This Matters Today</h2>
                        <p>
                            Addictions don’t always announce themselves loudly. Pan masala may seem harmless, but its long-term use quietly undermines well-being. Herbal options are more than substitutes—they represent self-care and conscious living.
                        </p>

                        <h2 className="mt-6 font-semibold">Final Thoughts</h2>
                        <p>
                            Pan masala addiction may not show immediate harm, but it subtly affects your lifestyle and health. Herbal alternatives like Aayush Herbal Masala empower you to reclaim control without sacrificing taste or tradition.
                        </p>
                        <p>Make the switch. Stay mindful. Stay fresh—naturally.</p>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    );
};

export default BlogH25;
