import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const BlogH26 = () => {
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
                        Daily Wellness Routine for Balanced Mind and Healthy Body
                    </h1>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0674/9614/9171/files/Blog_25.jpg?v=1752318696"
                        alt="Daily Wellness Routine"
                        className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-black space-y-4 mt-6">
                        <p>
                            In a world that's always “on,” where screens glow late into the night and tasks demand constant attention, the idea of “wellness” can often feel out of reach. But it doesn't have to be. Building a daily wellness routine is one of the most powerful tools to bring balance, energy, and clarity into your life.
                            This blog explores simple yet effective routines that support mental balance and physical well-being, without overcomplicating your day. If you’ve ever felt burned out, distracted, or disconnected from yourself, a wellness routine can help you reclaim your rhythm.
                        </p>

                        <h2 className="mt-6 font-semibold">Why a Wellness Routine Matters</h2>
                        <p>
                            Wellness is not just the absence of illness; it’s a state of harmony between mind, body, and emotions. Creating a structured daily routine helps reduce stress, increase productivity, improve emotional resilience, and support long-term health.
                            It’s not about perfection. It’s about creating space mentally and physically for restoration, focus, and calm, no matter how busy your day is.
                        </p>

                        <h2 className="mt-6 font-semibold">Morning: Build Momentum with Purpose</h2>
                        <p>How you start your day influences how you live it. A grounded morning routine helps activate the mind and body, giving you control over the day ahead.</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Wake up at the same time daily:</strong> Regulates your body clock and improves sleep patterns over time.</li>
                            <li><strong>Move your body gently:</strong> Stretching, walking, or mindful movement boosts mental alertness and energy.</li>
                            <li><strong>Practice quiet time:</strong> Silence, reflection, or journaling provides mental clarity before the noise of the day begins.</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">Midday: Maintain Balance and Focus</h2>
                        <p>As the day progresses, energy and concentration naturally fluctuate. A mid-day wellness check-in allows you to stay mentally centered and physically refreshed.</p>
                        <ul className="list-disc pl-6">
                            <li>Take mindful breaks between tasks or meetings.</li>
                            <li>Practice intentional breathing to calm your system and reset focus.</li>
                            <li>Declutter your physical space to promote mental clarity.</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">Mind Wellness: Cultivating Emotional Stability</h2>
                        <p>A balanced mind doesn’t mean the absence of stress—it means the ability to manage it effectively.</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Digital boundaries:</strong> Set screen limits, especially during transitions like wake-up and bedtime.</li>
                            <li><strong>Single-tasking:</strong> Focus on one thing at a time to reduce overwhelm.</li>
                            <li><strong>Gratitude reflection:</strong> Think of one thing you’re grateful for—it can shift your mood instantly.</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">Movement: Your Natural Energy Booster</h2>
                        <p>Movement supports not just fitness, but also mental clarity and motivation.</p>
                        <ul className="list-disc pl-6">
                            <li>Take short movement breaks—stand up, stretch, or walk briefly.</li>
                            <li>Find joyful motion—dance, walk, or do any movement you enjoy.</li>
                            <li>Avoid long sedentary periods—move every 45–60 minutes.</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">Evening: Restore, Reflect, and Recharge</h2>
                        <p>Evening routines help you let go of stress and ease into restful sleep.</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Unplug from digital devices:</strong> Screen light and content overstimulate the brain.</li>
                            <li><strong>Create a calm environment:</strong> Dim lights, clean space, and soft music aid relaxation.</li>
                            <li><strong>Practice reflection:</strong> Journaling or mentally reviewing the day helps you wind down.</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">Breath, Silence, and Presence: The Unsung Tools of Wellness</h2>
                        <p>In a noisy world, stillness and silence become powerful tools for balance.</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Conscious breathing:</strong> Just a few slow breaths reduce stress instantly.</li>
                            <li><strong>Mindful observation:</strong> Notice surroundings or sensations without judgment.</li>
                            <li><strong>Still moments:</strong> Pausing between transitions creates space in your day.</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">Weekend Wellness: Reset and Reconnect</h2>
                        <p>Use weekends to deepen your routine and reset your rhythm.</p>
                        <ul className="list-disc pl-6">
                            <li>Engage in mindful hobbies or creative work.</li>
                            <li>Spend time outdoors and reconnect with nature.</li>
                            <li>Reflect on the past week and set intentions for the next.</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">Final Thoughts: Wellness as a Daily Practice</h2>
                        <p>
                            Creating a wellness routine isn’t about perfection—it’s about presence, consistency, and self-respect. You don’t need a strict plan or hours of self-care. Small, intentional habits throughout the day make a lasting difference.
                        </p>
                        <p>
                            By focusing on mental balance, physical movement, and mindful structure, you build a foundation for a calmer, clearer, and more energized life.
                        </p>
                        <p>Your routine is your rhythm. Let it support clarity, calm, and vitality—one simple habit at a time.</p>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    );
};

export default BlogH26;
