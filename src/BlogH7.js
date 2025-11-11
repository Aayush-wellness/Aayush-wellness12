import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const BlogH7 = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleBack = () => {
        window.history.back();
    };

    return (
        <>
            <Header />
            <div className="pt-40 px-6 bg-gray-100 text-gray-900 flex justify-center"
                style={{
                    backgroundImage: 'url("https://img.freepik.com/free-photo/pastel-blue-vignette-concrete-textured-background_53876-102637.jpg?uid=R186725298&ga=GA1.1.1760057800.1738908057&semt=ais_hybrid")',
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    minHeight: "100vh",
                }}>
                <button
                    className="absolute top-[100px] left-4 md:hidden z-20 w-8 h-8 flex justify-center items-center"
                    onClick={handleBack}
                >
                    <div className="w-6 h-6 border-t-4 border-l-4 border-gray-600 transform rotate-45"></div>
                </button>
                <div className="max-w-3xl w-full">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 text-center text-teal-700" style={{ color: '#000' }}>
                        The Power of Mindfulness: How It Can Improve Your Mental and Physical Health
                    </h1>
                    <img 
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_5.jpg?v=1744959350" 
                        alt="The Power of Mindfulness" 
                        className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-gray-700 text-black space-y-4 mt-6">
                        <p>In today’s busy world, most of us are living life on autopilot. We’re constantly rushing from one task to another, buried in our thoughts, and often stressed or overwhelmed. Rarely do we pause and truly experience the present moment. This disconnection can take a toll on our mental clarity, emotional balance, and even our physical health.</p>

                        <p>But there is a way to reconnect with ourselves and the world around us and that is through mindfulness.</p>

                        <p><strong>Mindfulness</strong> is not just a trend or a buzzword; it is a powerful practice backed by science, one that can deeply improve the quality of your life. Whether you are struggling with anxiety, chronic pain, or simply looking for peace amidst the chaos, mindfulness can help you regain control and feel more grounded.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>What is Mindfulness?</h2>
                        <p>Mindfulness means paying full attention to the present moment without judgment. It is the practice of being fully aware of what you are doing, thinking, or feeling, rather than being lost in your thoughts or reacting automatically.</p>

                        <p>This concept, which has its roots in ancient meditation traditions like Buddhism, has been widely adopted in modern health and wellness practices. Today, therapists, doctors, and researchers all recommend mindfulness as a tool to improve well-being and build resilience against stress.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>How Does Mindfulness Work?</h2>
                        <p>Mindfulness works by training your brain to focus on the here and now. When you regularly practice mindfulness, you become more aware of your thoughts and feelings without being overwhelmed by them. You start observing situations with clarity instead of reacting emotionally.</p>

                        <p>Scientific studies show that mindfulness practice can change the structure and function of the brain. The amygdala, the part involved in stress and fear, becomes less reactive. Meanwhile, the prefrontal cortex—responsible for decision-making and regulation—becomes stronger.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Mental Health Benefits of Mindfulness</h2>
                        <ul className="list-disc pl-6">
                            <li><strong>Reduces Stress and Anxiety:</strong> Mindfulness interrupts the automatic stress response, helping calm the nervous system and reduce cortisol levels.</li>
                            <li><strong>Improves Focus and Mental Clarity:</strong> It strengthens attention span and decision-making by reducing mental distractions.</li>
                            <li><strong>Enhances Emotional Resilience:</strong> Helps you respond to situations intentionally, rather than react impulsively.</li>
                            <li><strong>Helps in Managing Depression:</strong> Mindfulness-Based Cognitive Therapy (MBCT) is effective in reducing relapse in people with chronic depression.</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}>Physical Health Benefits of Mindfulness</h2>
                        <ul className="list-disc pl-6">
                            <li><strong>Improves Sleep:</strong> Mindfulness calms racing thoughts, aiding in better and deeper rest.</li>
                            <li><strong>Boosts Immunity:</strong> Reduced stress allows the immune system to function more efficiently.</li>
                            <li><strong>Lowers Blood Pressure:</strong> Regular mindfulness reduces cardiovascular strain and promotes heart health.</li>
                            <li><strong>Aids in Managing Chronic Pain:</strong> Shifts your relationship with pain, reducing emotional suffering tied to it.</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}>How to Practice Mindfulness in Daily Life</h2>
                        <ul className="list-disc pl-6">
                            <li><strong>Mindful Breathing:</strong> Spend a few minutes focusing solely on your breath.</li>
                            <li><strong>Body Scan Meditation:</strong> Observe each part of your body, noticing sensations without judgment.</li>
                            <li><strong>Mindful Eating:</strong> Eat slowly, savoring taste, texture, and smell without distractions.</li>
                            <li><strong>Mindful Walking:</strong> Walk slowly and with awareness of every step and movement.</li>
                            <li><strong>Use Technology Wisely:</strong> Try mindfulness apps like Headspace, Calm, or Insight Timer for guidance.</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}>Staying Consistent with Mindfulness</h2>
                        <ul className="list-disc pl-6">
                            <li>Choose a regular time each day (morning, evening) for practice.</li>
                            <li>Use reminders or apps to stay on track.</li>
                            <li>Accept wandering thoughts—gently bring your focus back.</li>
                            <li>Be kind to yourself. Mindfulness is about awareness, not perfection.</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}>Conclusion: A Healthier, Happier You</h2>
                        <p>Mindfulness is a gentle yet powerful practice that can truly transform your life. It reduces stress, enhances emotional and physical health, and reconnects you to the present moment. Even a few minutes a day can bring meaningful changes.</p>

                        <p>So take a deep breath, and begin your mindfulness journey today. Your mind and body will thank you.</p>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    );
};

export default BlogH7;
