import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const BlogH17 = () => {
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
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center text-teal-700" style={{ color: '#000' }}>
                        Sattvic Diet: The Underrated Key to Calm, Clear Thinking
                    </h1>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_16.jpg?v=1750919519"
                        alt="Mental Health Awareness"
                        className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-gray-700 text-black space-y-4 mt-6">
                        <p>In a world where stress, anxiety, and mental fatigue are constant companions, finding peace of mind and clarity in thought has become more important than ever. Many people turn to meditation, yoga, or digital detoxes to calm their minds but there’s a deeper, often overlooked solution rooted in ancient wisdom: the Sattvic diet.</p>
                        <p>This way of eating, grounded in Ayurveda and yogic philosophy, goes beyond just nourishing the body. It brings emotional balance, mental clarity, and spiritual lightness making it a powerful key to inner calm.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>What is a Sattvic Diet?</h2>
                        <p>The word “Sattva” in Sanskrit means purity, balance, truth, and harmony. A Sattvic diet includes foods that are fresh, seasonal, pure, and full of prana (life energy). These foods are believed to support mental peace, emotional stability, and higher awareness. It’s not just about nutrition—it’s about a conscious and mindful approach to food and life.</p>
                        <p>A typical Sattvic meal is simple, light, and made with love and intention. The diet encourages eating in a clean, calm environment, chewing slowly, and avoiding overeating or waste.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>What Foods Are Considered Sattvic?</h2>
                        <ul className="list-disc pl-6">
                            <li>Fresh fruits and vegetables (especially seasonal)</li>
                            <li>Whole grains like brown rice, millets, and oats</li>
                            <li>Legumes and pulses such as moong dal and lentils</li>
                            <li>Nuts and seeds in small amounts</li>
                            <li>Natural dairy like milk and ghee (if sourced ethically)</li>
                            <li>Mild spices like turmeric, cumin, coriander, and ginger</li>
                            <li>Herbal teas, honey, jaggery, and filtered water</li>
                        </ul>
                        <p>These foods are often cooked at home, freshly prepared, and eaten in moderation.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Sattvic vs Rajasic vs Tamasic Diet</h2>
                        <p>To better understand the Sattvic diet, it helps to compare it with other Ayurvedic food types:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Rajasic foods:</strong> Spicy, salty, overly stimulating, and processed. These can lead to restlessness, aggression, and hyperactivity. Examples include deep-fried items, coffee, excessive spices, and fast food.</li>
                            <li><strong>Tamasic foods:</strong> Heavy, stale, or lifeless. They slow down the body and mind and may lead to laziness or confusion. Examples include leftover food, canned products, red meat, alcohol, and sugary desserts.</li>
                        </ul>
                        <p>The Sattvic diet promotes calmness, clarity, and inner strength. It’s considered the most ideal for spiritual growth and mental health.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>How the Sattvic Diet Supports Clear Thinking</h2>
                        <ul className="list-disc pl-6">
                            <li><strong>1. Improves Mental Clarity:</strong> Sattvic foods are light and energizing. They don’t overload the digestive system or cloud the mind. People who follow a Sattvic diet often report a sense of mental sharpness, better concentration, and clear decision-making.</li>
                            <li><strong>2. Reduces Stress and Anxiety:</strong> Ingredients like tulsi (holy basil), fresh fruits, and warm herbal teas have a calming effect on the nervous system. Unlike caffeine or processed sugar that can cause energy crashes, Sattvic foods provide steady, calm energy throughout the day.</li>
                            <li><strong>3. Enhances Mood and Emotional Balance:</strong> Ayurveda teaches that food affects not only the body but also the emotions. A Sattvic diet, rich in fresh and natural ingredients, helps create a sense of emotional stability.</li>
                            <li><strong>4. Supports Better Sleep:</strong> Since Sattvic meals are light and not overly stimulating, they promote better digestion and deeper rest. Eating early and avoiding heavy dinners helps the body wind down leading to improved sleep quality.</li>
                            <li><strong>5. Boosts Vital Energy (Prana):</strong> Sattvic foods are considered to carry high levels of prana, or life force. This energy nourishes the mind, body, and soul, increasing vitality and motivation naturally.</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}>How to Transition to a Sattvic Lifestyle</h2>
                        <p>You don’t need to make a drastic change overnight. Begin by adding more Sattvic elements into your current routine. Here’s how:</p>
                        <ul className="list-disc pl-6">
                            <li>Start your day with warm water or herbal tea.</li>
                            <li>Include fresh fruits, soaked almonds, or dates in your breakfast.</li>
                            <li>Cook with mild spices and avoid overly spicy or fried meals.</li>
                            <li>Choose whole grains and legumes over processed foods.</li>
                            <li>Eat meals at regular times and avoid eating late at night.</li>
                            <li>Practice mindful eating, chew slowly and avoid distractions like phones or TV while eating.</li>
                        </ul>
                        <p>Most importantly, cook and eat with awareness and gratitude. The energy you put into your food reflects in your mind.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Common Myths About the Sattvic Diet</h2>
                        <ul className="list-disc pl-6">
                            <li><strong>“It’s boring and tasteless.”</strong> Not true. You can use a variety of herbs, spices, and natural ingredients to create delicious and satisfying meals.</li>
                            <li><strong>“It’s only for spiritual people or yogis.”</strong> While it is ideal for yoga practitioners, anyone seeking better mental focus, emotional control, and overall wellness can benefit from it.</li>
                            <li><strong>“It’s too restrictive.”</strong> You can personalize your Sattvic journey. The key is balance, not perfection. Even reducing the intake of tamasic and rajasic foods and gradually including more Sattvic meals can bring noticeable benefits.</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}>Why the Sattvic Diet Matters Today</h2>
                        <p>In today’s lifestyle of hustle culture, endless scrolling, and mental overload, we are constantly consuming not just food, but information, emotions, and energy. The Sattvic diet reminds us to pause, nourish, and realign ourselves with nature.</p>
                        <p>It’s a diet that respects your body, clears your mind, and uplifts your spirit.</p>
                        <p>While food fads come and go, ancient traditions like the Sattvic diet have stood the test of time—not because of marketing, but because of results.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Conclusion</h2>
                        <p>The Sattvic diet is more than a nutritional plan; it's a way of life that encourages peace, clarity, and vitality. In a noisy world filled with mental clutter, this simple, mindful approach to eating can be the anchor that keeps you grounded and focused.</p>
                        <p>If you’re searching for a sustainable path to calm, clear thinking and emotional resilience, the Sattvic diet may just be the underrated key you’ve been looking for.</p>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    );
};

export default BlogH17;
