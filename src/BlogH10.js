import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const BlogH10 = () => {
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
                        The Gut-Skin Connection: How Your Digestive Health Affects Your Glow
                    </h1>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_9.jpg?v=1744959346"
                        alt="Gut-Skin Connection"
                        className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-gray-700 text-black space-y-4 mt-6">
                        <p>Have you ever wondered why no amount of skincare seems to fix dull, irritated, or acne-prone skin? The secret to healthy, glowing skin might lie deeper than your skincare routine, right in your gut. This fascinating relationship between digestive health and skin appearance is known as the gut-skin connection. In this blog, we’ll explore how your gut health impacts your skin and share practical tips to help you glow from the inside out.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Understanding the Gut Microbiome</h2>
                        <p>Your gut is home to trillions of microorganisms, including bacteria, fungi, and viruses. This community is known as the gut microbiome. A balanced microbiome plays a crucial role in digestion, nutrient absorption, immune function, and even mood regulation.</p>
                        <p>There are both “good” and “bad” bacteria in your gut. When the good bacteria thrive, they keep the bad ones in check, supporting overall health. However, when this balance is disturbed, it can lead to various health issues including skin problems.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>The Gut-Skin Axis: How They Communicate</h2>
                        <p>The gut and skin communicate through what is known as the gut-skin axis. This is a two-way connection where changes in the gut can affect the skin, and vice versa.</p>
                        <p>When the gut is inflamed due to poor diet, infections, or stress, harmful substances can leak into the bloodstream — a condition known as leaky gut. These substances can trigger inflammation throughout the body, often showing up as skin issues like acne, eczema, or psoriasis.</p>
                        <p>Moreover, an unhealthy gut can lead to an imbalance in immune response, increased oxidative stress, and hormonal changes — all of which can negatively impact your skin. Therefore, nurturing your gut health can directly influence the clarity and glow of your skin.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Common Skin Conditions Linked to Gut Health</h2>
                        <p>Several skin conditions are closely linked to gut imbalances:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Acne:</strong> Inflammation and bacterial imbalance in the gut can contribute to clogged pores and breakouts.</li>
                            <li><strong>Rosacea:</strong> Often associated with small intestine bacterial overgrowth (SIBO).</li>
                            <li><strong>Eczema:</strong> Poor gut health can increase inflammatory responses, worsening eczema symptoms.</li>
                            <li><strong>Psoriasis:</strong> This autoimmune condition can be triggered or worsened by gut inflammation and leaky gut.</li>
                        </ul>
                        <p>By addressing gut health, many people have noticed improvements in these persistent skin issues.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Practical Tips for Improving Gut Health and Skin Glow</h2>
                        <p>To support a healthy gut and achieve radiant skin, consider the following tips:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Diet:</strong> Eat a balanced diet rich in fiber, fresh fruits, vegetables, whole grains, legumes, and healthy fats like omega-3s. Avoid highly processed foods, sugary snacks, and carbonated drinks, which can disrupt gut balance.</li>
                            <li><strong>Probiotics:</strong> These are beneficial bacteria that help maintain a healthy gut. You can find them in foods like yogurt, kefir, kimchi, sauerkraut, and in supplement form.</li>
                            <li><strong>Prebiotics:</strong> These are types of fiber that feed the good bacteria in your gut. Include foods like garlic, onions, bananas, oats, and asparagus in your meals.</li>
                            <li><strong>Hydration:</strong> Drinking enough water helps flush out toxins, aids digestion, and keeps your skin hydrated and supple.</li>
                            <li><strong>Stress Management:</strong> Chronic stress negatively affects gut health and can worsen skin conditions. Practice mindfulness, yoga, deep breathing, or other relaxation techniques regularly.</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}>Key Takeaway</h2>
                        <p>Your skin is often a reflection of your internal health — and your gut plays a central role in that picture. By supporting your digestive system with nourishing foods, probiotics, hydration, and stress management, you can improve both your gut health and your skin’s natural glow.</p>
                        <p>Start with small, consistent changes and observe the difference. For personalized advice, consider consulting a healthcare professional or nutritionist. Your journey to glowing skin could begin in your gut!</p>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    );
};

export default BlogH10;
