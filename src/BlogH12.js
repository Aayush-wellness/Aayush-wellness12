import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const BlogH12 = () => {
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
                        The Effects of Too Much Screen Time on Your Health and How to Fix It
                    </h1>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_2.jpg?v=1745575992"
                        alt="Screen Time Effects"
                        className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-gray-700 text-black space-y-4 mt-6">
                        <p>We live in a digital world where screens are everywhere—phones, laptops, tablets, TVs, smartwatches. And while technology makes life easier, too much screen time is quietly messing with our health. From tired eyes to mental burnout, screen overload is becoming one of the biggest wellness issues of our time.</p>
                        <p>But here’s the good news: you don’t have to ditch your phone completely to feel better. A few simple changes can go a long way in fixing the effects of screen time and boosting your energy, mood, and focus. Let’s dive into what too much screen time does to your mind and body and how you can unplug without falling behind.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}> How Much Screen Time is “Too Much”?</h2>
                        <p>On average, adults spend 7–10 hours a day staring at screens. For teens, it's even more. That includes working on laptops, scrolling through social media, streaming shows, online shopping—you name it.</p>
                        <p>Here’s the catch: experts recommend no more than 2 hours of recreational screen time per day (outside of work or school). So if you're glued to your screen from morning till night, your body is paying the price even if you don’t feel it yet.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>The Effects of Too Much Screen Time on Your Health</h2>
                        <h3 className="mt-4" style={{ color: '#000' }}>1. Digital Eye Strain (Computer Vision Syndrome)</h3>
                        <p>Ever feel your eyes burning, blurry, or dry after a long day of screen use? That’s digital eye strain, and it’s incredibly common. Symptoms include:</p>
                        <ul className="list-disc pl-6">
                            <li>Headaches</li>
                            <li>Blurry vision</li>
                            <li>Dry, itchy eyes</li>
                            <li>Eye fatigue</li>
                        </ul>
                        <p>Staring at screens reduces your blink rate, dries out your eyes, and causes strain especially in poor lighting or when using small devices like phones.</p>

                        <h3 className="mt-4 " style={{ color: '#000' }}>2.Poor Sleep Quality</h3>
                        <p>If you're on your phone right before bed, you're not alone. But that blue light you're staring at? It’s suppressing your melatonin, the hormone that helps you fall asleep.</p>
                        <p>Screen time at night confuses your brain, making it harder to wind down. This leads to:</p>
                        <ul className="list-disc pl-6">
                            <li>Trouble falling asleep</li>
                            <li>Lighter, restless sleep</li>
                            <li>Waking up tired even after 8 hours</li>
                        </ul>

                        <h3 className="mt-4" style={{ color: '#000' }}>3. Increased Anxiety and Depression</h3>
                        <p>Studies show a strong link between excessive phone use and poor mental health especially among young people. Constant notifications, comparing lives on social media, and lack of real-life connection can leave you feeling:</p>
                        <ul className="list-disc pl-6">
                            <li>Overwhelmed</li>
                            <li>Insecure</li>
                            <li>Isolated</li>
                        </ul>
                        <p>The more time you spend on screens, the less time you're spending being present with yourself and others.</p>

                        <h3 className="mt-4" style={{ color: '#000' }}>4. Neck and Back Pain ("Tech Neck")</h3>
                        <p>Leaning over your phone or laptop all day puts major stress on your spine. Over time, this causes:</p>
                        <ul className="list-disc pl-6">
                            <li>Stiff neck and shoulders</li>
                            <li>Lower back pain</li>
                            <li>Poor posture</li>
                        </ul>
                        <p>It might feel normal now, but this constant pressure can lead to long-term health problems.</p>

                        <h3 className="mt-4" style={{ color: '#000' }}>5. Reduced Attention Span</h3>
                        <p>Thanks to fast content, endless scrolling, and constant multitasking, our ability to focus is shrinking. Too much screen time:</p>
                        <ul className="list-disc pl-6">
                            <li>Reduces deep thinking</li>
                            <li>Makes it harder to stay focused</li>
                            <li>Impacts memory and learning</li>
                        </ul>
                        <p>If you’re struggling to concentrate or finish tasks, your screen habits might be the reason.</p>

                        <h3 className="mt-4" style={{ color: '#000' }}>6. Physical Inactivity</h3>
                        <p>Let’s be real—most screen time involves sitting. And too much sitting has been linked to:</p>
                        <ul className="list-disc pl-6">
                            <li>Obesity</li>
                            <li>Diabetes</li>
                            <li>Heart disease</li>
                            <li>Lower energy levels</li>
                        </ul>
                        <p>It’s easy to lose track of time when you’re binge-watching or deep into your feed. But your body needs to move to stay healthy.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}> How to Fix It: Simple Ways to Cut Down Screen Time</h2>
                        <p>You don’t need a total digital detox. Just small, consistent steps can make a huge difference.</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Use the 20-20-20 Rule:</strong> Every 20 minutes, take a 20-second break and look at something 20 feet away. It helps relax your eye muscles and reduce strain.</li>
                            <li><strong>Set Screen Time Limits:</strong> Use built-in phone tools like Screen Time (iPhone) or Digital Wellbeing (Android) to track and limit your daily usage especially for social media apps.</li>
                            <li><strong>Create Screen-Free Zones:</strong> Make your bedroom, dining area, or bathroom screen-free zones. It encourages better habits, real conversations, and deeper rest.</li>
                            <li><strong>Replace Scrolling with a New Habit:</strong> Feeling bored? Instead of reaching for your phone, try reading a book, journaling, stretching, or listening to music or podcasts.</li>
                            <li><strong>Use Blue Light Filters or Glasses:</strong> If you work on screens all day, invest in blue light filter apps or settings, anti-glare screen protectors, or blue light blocking glasses.</li>
                            <li><strong>Have a Digital Wind-Down Routine:</strong> One hour before bed, shut down screens and switch to offline activities like meditation or reading a physical book.</li>
                            <li><strong>Take Tech-Free Breaks During the Day:</strong> Set aside blocks of time where you’re screen-free. Even a quick walk outside without your phone can reset your brain and boost your mood.</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}> What Happens When You Cut Back on Screen Time?</h2>
                        <p>Once you reduce your screen exposure, you’ll notice changes quickly:</p>
                        <ul className="list-disc pl-6">
                            <li>Better sleep</li>
                            <li>More energy</li>
                            <li>Improved focus</li>
                            <li>Less stress</li>
                            <li>Healthier eyes and posture</li>
                            <li>More time for things that bring real joy</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}> Final Thoughts: Take Control of Your Screen Time</h2>
                        <p>Technology is amazing but only when it’s used mindfully. If you're constantly feeling drained, distracted, or disconnected, your screen habits might be the problem.</p>
                        <p>The solution isn’t quitting tech. It’s learning how to balance it. By making small, intentional changes, you can protect your mental health, improve your physical wellbeing, and reconnect with what really matters.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}> Quick Action Steps to Start Today:</h2>
                        <ul className="list-disc pl-6">
                            <li>Track your daily screen time</li>
                            <li>Create 1 screen-free zone at home</li>
                            <li>Power down 30 mins before bed</li>
                            <li>Try 1 new offline activity this week</li>
                            <li>Share this post with someone who needs a reminder to unplug</li>
                        </ul>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    );
};

export default BlogH12;
