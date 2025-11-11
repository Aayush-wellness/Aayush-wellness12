import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const BlogH21 = () => {
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
                        How Meditation Can Enhance Your Overall Wellness and Calm Your Mind
                    </h1>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_20.jpg?v=1751719097"
                        alt="Meditation and Wellness"
                        className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-black space-y-4 mt-6">
                        <p>
                            In today’s fast-paced world, stress and anxiety have become common parts of everyday life. Many people are constantly looking for natural and effective ways to feel better, stay focused, and improve their well-being. One ancient practice that continues to gain attention for its powerful benefits is meditation.
                        </p>
                        <p>
                            From calming the mind to improving sleep, boosting emotional health, and even enhancing physical wellness, meditation is more than just sitting in silence. It’s a science-backed habit that can truly transform your life mentally, emotionally, and physically.
                        </p>

                        <h2 className="mt-6 font-semibold">What Is Meditation?</h2>
                        <p>
                            Meditation is a practice where you focus your mind and eliminate the stream of distracting thoughts. This technique is used to increase awareness of the present moment, reduce stress, and promote emotional clarity. It is not tied to any particular religion and can be practiced by anyone, anywhere.
                        </p>
                        <p>There are several types of meditation, including:</p>
                        <ul className="list-disc pl-6">
                            <li>Mindfulness meditation</li>
                            <li>Guided meditation</li>
                            <li>Loving-kindness meditation</li>
                            <li>Body scan meditation</li>
                            <li>Breathing techniques</li>
                        </ul>
                        <p>Each type offers unique benefits but shares a common goal: achieving mental stillness and emotional balance.</p>

                        <h2 className="mt-6 font-semibold"> Mental Benefits of Meditation</h2>
                        <ul className="list-disc pl-6">
                            <li><strong>Reduces Stress and Anxiety:</strong> Lowers cortisol and activates the brain’s relaxation center.</li>
                            <li><strong>Improves Focus and Clarity:</strong> Just 10 minutes a day can improve concentration and decision-making.</li>
                            <li><strong>Enhances Emotional Well-being:</strong> Encourages happiness, balance, and thoughtful responses to life’s challenges.</li>
                        </ul>

                        <h2 className="mt-6 font-semibold"> Physical Benefits of Meditation</h2>
                        <ul className="list-disc pl-6">
                            <li><strong>Improves Sleep Quality:</strong> Helps relax the body and calm racing thoughts at night.</li>
                            <li><strong>Boosts Immune Function:</strong> Reduces inflammation and supports overall body balance.</li>
                            <li><strong>Lowers Blood Pressure and Heart Rate:</strong> Deep relaxation helps improve cardiovascular health.</li>
                        </ul>

                        <h2 className="mt-6 font-semibold"> Emotional and Spiritual Wellness</h2>
                        <ul className="list-disc pl-6">
                            <li><strong>Builds Self-Awareness:</strong> Helps you observe thoughts without judgment and grow personally.</li>
                            <li><strong>Fosters Inner Peace:</strong> Regular practice brings lasting calm and emotional resilience.</li>
                            <li><strong>Increases Compassion and Positivity:</strong> Encourages empathy and love through practices like loving-kindness meditation.</li>
                        </ul>

                        <h2 className="mt-6 font-semibold"> Meditation and Overall Wellness</h2>
                        <ul className="list-disc pl-6">
                            <li><strong>Mind-Body Connection:</strong> Strengthens awareness and promotes holistic health.</li>
                            <li><strong>Supports Healthy Habits:</strong> Encourages mindful eating, exercise, and digital balance.</li>
                            <li><strong>Boosts Workplace Productivity:</strong> Reduces burnout and improves creativity and focus.</li>
                        </ul>

                        <h2 className="mt-6 font-semibold"> How to Get Started with Meditation</h2>
                        <ul className="list-disc pl-6">
                            <li>Find a quiet space where you won’t be disturbed</li>
                            <li>Start with 5–10 minutes a day</li>
                            <li>Focus on your breath: Inhale slowly, exhale gently</li>
                            <li>Be consistent: Meditate at the same time daily</li>
                            <li>Use apps or guided meditations (like Headspace, Calm)</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">Final Thoughts</h2>
                        <p>
                            Meditation is a powerful tool for improving both mental health and overall wellness. With just a few minutes of daily practice, you can experience deeper calm, greater self-awareness, better sleep, and a stronger immune system.
                        </p>
                        <p>
                            Whether you’re looking to manage stress, improve your focus, or simply feel more balanced, meditation offers a gentle yet effective path forward. The best part? It’s free, flexible, and available to everyone.
                        </p>
                        <p>So why wait? Take a deep breath, close your eyes, and take the first step toward a healthier, happier you.</p>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    );
};

export default BlogH21;
