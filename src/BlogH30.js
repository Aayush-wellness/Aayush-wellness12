import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const BlogH30 = () => {
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
                    backgroundImage: 'url("https://img.freepik.com/free-photo/healthcare-medical-background-blue_1017-26807.jpg")',
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
                        How to Reduce Digital Fatigue Naturally with Ayurveda and Meditation
                    </h1>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/Blog_28.jpg?v=1752754506"
                        alt="Digital Fatigue Ayurveda"
                        className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-black space-y-4 mt-6">
                        <p>In today’s hyper-connected world, digital fatigue is no longer just a buzzword—it’s a reality. From endless video calls and constant screen exposure to social media scrolls and late-night emails, our minds are rarely offline.</p>
                        <p>The result? Irritability, lack of focus, mental exhaustion, headaches, poor sleep, and a growing sense of burnout.</p>
                        <p>While modern medicine might suggest reducing screen time or taking breaks, traditional Indian systems like Ayurveda and meditation offer holistic, time-tested solutions that work at a deeper level—calming the mind, rejuvenating the senses, and restoring balance.</p>
                        <p>This blog will guide you on how to naturally reduce digital fatigue using Ayurvedic practices and meditation, without the need for medications or lifestyle overhauls.</p>

                        <h2 className="mt-6 font-semibold">Understanding Digital Fatigue: The Silent Epidemic</h2>
                        <p>Digital fatigue refers to the mental and sensory exhaustion caused by overexposure to digital devices. It's a cognitive and emotional drain caused by continuous digital engagement.</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Eye strain and blurred vision</li>
                            <li>Mental fog and poor concentration</li>
                            <li>Sleep disturbances</li>
                            <li>Low motivation</li>
                            <li>Irritability or mood swings</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">The Ayurvedic Perspective on Digital Fatigue</h2>
                        <p>In Ayurveda, digital fatigue stems from an imbalance in the Vata and Pitta doshas:</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Excessive Vata → Restlessness, anxiety, overthinking</li>
                            <li>Pitta Imbalance → Irritability, burnout, overstimulation</li>
                        </ul>
                        <p>Balancing these doshas can help restore mental harmony and energy.</p>

                        <h2 className="mt-6 font-semibold">1. Start the Day with Mindful Silence (Mauna)</h2>
                        <p>Spend 10 minutes in silence before checking your phone. This helps preserve mental energy and gently awakens your mind.</p>
                        <p><strong>Tip:</strong> Sit comfortably, close your eyes, and observe your breath—no agenda, just stillness.</p>

                        <h2 className="mt-6 font-semibold">2. Digital Grounding Through “Abhyanga for the Mind”</h2>
                        <p>Try a mental version of self-massage to soothe the nervous system:</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Rub palms until warm</li>
                            <li>Place them over closed eyelids and temples</li>
                            <li>Breathe deeply and visualize healing warmth</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">3. Trataka: Ayurvedic Eye Relief from Screen Strain</h2>
                        <p>Steady gazing at a candle flame can detoxify and relax tired eyes.</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Place a candle 2–3 feet away at eye level</li>
                            <li>Gaze at the flame without blinking</li>
                            <li>When eyes water, close them and rest</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">4. Scheduled Digital Detachment (Dinacharya Reset)</h2>
                        <p>Follow the 3-3-3 rule to build healthy tech habits:</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>3 mins of breathing every 3 hrs of screen use</li>
                            <li>3 screen-free zones (e.g., bedroom, dining area)</li>
                            <li>3 hrs of digital detox weekly</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">5. Brahmari Pranayama: The Digital Stress Detox</h2>
                        <p>This humming bee breath technique relieves stress and promotes calm.</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>Sit in a quiet space</li>
                            <li>Inhale deeply, then exhale with a humming sound</li>
                            <li>Repeat 5 rounds, focusing on vibration</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">6. Midday Reset with Yoga Nidra</h2>
                        <p>Yoga Nidra is a guided meditation that rejuvenates the mind deeply in 20 minutes. Ideal after lunch to regain clarity without caffeine.</p>

                        <h2 className="mt-6 font-semibold">7. Evening “Shanti” Ritual to End the Digital Day</h2>
                        <p>Unplug consciously before sleep:</p>
                        <ul className="list-disc list-inside ml-4">
                            <li>10 minutes of silent meditation</li>
                            <li>Gratitude journaling</li>
                            <li>All screens off 1 hour before bed</li>
                        </ul>

                        <h2 className="mt-6 font-semibold">Final Thoughts: Choose Digital Balance, Not Digital Burnout</h2>
                        <p>Ayurveda and meditation don’t ask you to give up your devices—they teach you to create balance and intentional boundaries. Just a few of these practices daily can help you feel more present, calm, and focused.</p>
                        <p>So the next time you feel overwhelmed by screen time, remember—you don’t need to escape the digital world; you just need to balance it, naturally.</p>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    );
};

export default BlogH30;
