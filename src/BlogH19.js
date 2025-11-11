import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const BlogH19 = () => {
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
                        Top 5 Natural Ways to Boost Your Energy and Wellness Every Day
                    </h1>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_18.jpg?v=1751461690"
                        alt="Energy and Wellness"
                        className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-gray-700 text-black space-y-4 mt-6">
                        <p>In today’s fast-moving world, feeling tired and drained has become the new normal. Whether it’s long work hours, screen fatigue, or constant multitasking, energy dips can affect both productivity and overall wellness.</p>
                        <p>The good news? You don’t need complicated routines or synthetic supplements to feel better. This blog highlights five powerful, natural lifestyle habits you can adopt to boost your energy levels and enhance your overall wellness every day.</p>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>1. Start Your Day with a Clear Mind</h2>
                        <p>Your mornings set the tone for the rest of the day. Try 5 to 10 minutes of mindful silence, journaling, or positive affirmations to reduce stress and gain mental clarity.</p>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>2. Prioritize Quality Sleep Over Quantity</h2>
                        <p>Sleep quality matters more than hours. Improve it by maintaining a consistent schedule, avoiding screens before bed, and creating a calming routine like light stretching or reading.</p>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>3. Stay Hydrated and Active Throughout the Day</h2>
                        <p>Fatigue is often a sign of dehydration or inactivity. Keep a water bottle nearby and set reminders to stretch or walk briefly every hour for a noticeable energy lift.</p>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>4. Practice Digital Detox for Mental Refreshment</h2>
                        <p>Too much screen time drains mental energy. Schedule phone-free breaks to lower anxiety and regain focus throughout your day.</p>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>5. Connect with Nature and Natural Light</h2>
                        <p>Sunlight boosts mood-regulating hormones and balances sleep. Step outside for a few minutes daily—even a balcony break helps. Touching grass or sitting near plants also calms your system.</p>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>Final Thoughts</h2>
                        <p>These five simple, natural habits—mental clarity, better sleep, hydration, digital detox, and connecting with nature—can transform your daily energy and wellness. Start small and build consistently for a noticeable boost in your well-being.</p>

                        <h2 className="mt-6 font-semibold" style={{ color: '#000' }}>Key Takeaways:</h2>
                        <ul className="list-disc pl-6">
                            <li>Mental clarity in the morning helps reduce stress and increase energy.</li>
                            <li>High-quality sleep is essential for natural energy and wellness.</li>
                            <li>Hydration and physical movement combat fatigue and improve focus.</li>
                            <li>Digital detox breaks help restore mental energy.</li>
                            <li>Sunlight and nature exposure uplift mood and regulate energy levels.</li>
                        </ul>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    );
};

export default BlogH19;
