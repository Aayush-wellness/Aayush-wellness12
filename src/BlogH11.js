import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const BlogH11 = () => {
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
                        Unlock the Benefits of Sleep: The Health Hack You Need
                    </h1>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_1.jpg?v=1745575993"
                        alt="Benefits of Sleep"
                        className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-gray-700 text-black space-y-4 mt-6">
                        <p>If there’s one wellness secret that doesn’t require a gym membership, a diet plan, or expensive supplements — it’s sleep. Yes, you read that right. Getting a good night’s sleep might just be the most powerful and underrated health hack of all time.</p>
                        <p>In today’s fast-paced world, where productivity is often prized over rest, sleep is often the first thing we sacrifice. But science and real-life experience tells us otherwise. Sleep isn't just about resting; it’s about healing, restoring, and thriving.</p>
                        <p>Let’s dive into the many benefits of sleep, why it should be your top wellness priority, and how you can start getting better sleep starting tonight.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>💤 Why Sleep Is So Important for Your Health</h2>
                        <p>Sleep affects every single system in your body. From your brain to your heart to your immune system, everything functions better when you’re well-rested.</p>

                        <h3 className="font-bold">1. Boosts Brain Power</h3>
                        <ul className="list-disc pl-6">
                            <li>Better focus and concentration</li>
                            <li>Improved decision-making</li>
                            <li>Sharper memory</li>
                            <li>Enhanced creativity</li>
                        </ul>
                        <p>Think of sleep as your brain’s overnight cleaning service!</p>

                        <h3 className="font-bold">2. Strengthens the Immune System</h3>
                        <p>When you sleep, your body releases proteins called cytokines, which help fight infection and inflammation. That’s why you feel tired when you’re sick — your body is telling you to rest and heal.</p>

                        <h3 className="font-bold">3. Improves Heart Health</h3>
                        <p>During deep sleep, your heart rate and blood pressure drop, giving your heart a break. Poor sleep can raise the risk of heart disease and hypertension.</p>

                        <h3 className="font-bold">4. Supports Healthy Weight and Metabolism</h3>
                        <p>Lack of sleep increases the hunger hormone (ghrelin) and reduces the fullness hormone (leptin), which can lead to overeating and weight gain. Sleep helps regulate metabolism, making it easier to maintain a healthy weight.</p>

                        <h3 className="font-bold">5. Enhances Mood and Mental Health</h3>
                        <ul className="list-disc pl-6">
                            <li>Lower stress</li>
                            <li>Better emotional stability</li>
                            <li>Increased overall happiness</li>
                        </ul>
                        <p>Sleep and mental health are deeply connected — don’t underestimate the power of rest.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>🌙 How Much Sleep Do You Really Need?</h2>
                        <ul className="list-disc pl-6">
                            <li><strong>Adults:</strong> 7–9 hours</li>
                            <li><strong>Teens:</strong> 8–10 hours</li>
                            <li><strong>Children:</strong> 9–12 hours</li>
                            <li><strong>Toddlers & Infants:</strong> 12–16 hours</li>
                        </ul>
                        <p>It’s not just about how long you sleep — quality matters just as much.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>🛏️ Signs You're Not Getting Enough Quality Sleep</h2>
                        <ul className="list-disc pl-6">
                            <li>Waking up tired</li>
                            <li>Constant caffeine dependence</li>
                            <li>Mood swings or irritability</li>
                            <li>Trouble focusing or remembering</li>
                            <li>Getting sick often</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}>✅ Easy Tips to Sleep Better Tonight</h2>
                        <ul className="list-disc pl-6">
                            <li><strong>Stick to a schedule:</strong> Same sleep/wake times daily.</li>
                            <li><strong>Build a bedtime routine:</strong> Read, stretch, or meditate — no screens.</li>
                            <li><strong>Limit screen time:</strong> Avoid blue light at least 1 hour before bed.</li>
                            <li><strong>Optimize your bedroom:</strong> Cool, dark, quiet, tech-free zone.</li>
                            <li><strong>Watch your intake:</strong> Skip caffeine, heavy meals, and alcohol near bedtime.</li>
                            <li><strong>Exercise (not too late):</strong> Move your body during the day for deeper sleep.</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}>🌟 The Long-Term Benefits of Good Sleep</h2>
                        <ul className="list-disc pl-6">
                            <li>More energy and motivation</li>
                            <li>Clearer skin and better digestion</li>
                            <li>Improved relationships</li>
                            <li>Higher productivity</li>
                            <li>Longer life expectancy</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}>🧠 Sleep Isn’t a Luxury — It’s a Priority</h2>
                        <p>We live in a culture that glorifies hustle. But rest is essential. You can’t pour from an empty cup. When you prioritize sleep, everything else becomes easier — work, relationships, workouts, and more.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>🔑 Final Thoughts: Make Sleep Your Superpower</h2>
                        <p>If you’re looking for a simple, free, and effective way to level up your health — start with sleep. It’s the health hack you need to glow from the inside out.</p>
                        <p><strong>Want to be more productive? Sleep.<br />
                        Want glowing skin? Sleep.<br />
                        Want to boost immunity and prevent burnout? You guessed it — sleep.</strong></p>
                        <p>Tonight, choose rest. Your mind and body will thank you.</p>

                        <p className="mt-6 font-semibold">📢 Let’s Talk!</p>
                        <p>What’s your biggest struggle when it comes to sleep? Drop it in the comments or share this blog with someone who needs a reminder to rest.</p>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    );
};

export default BlogH11;
