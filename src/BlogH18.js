import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const BlogH18 = () => {
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
                        Exploring Mental Health Stigma in Today’s Fast-Moving World
                    </h1>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_17.jpg?v=1750919516"
                        alt="Mental Health Awareness"
                        className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-gray-700 text-black space-y-4 mt-6">
                        <p>In our fast-moving and constantly connected world, conversations around mental health are more important than ever. Despite the growing awareness and education, mental health stigma continues to be a barrier for millions of people seeking help and support. This blog explores what mental health stigma really means, why it exists, and how we can overcome it together.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>What Is Mental Health Stigma?</h2>
                        <p>Mental health stigma refers to negative beliefs, attitudes, and discrimination directed toward people living with mental health conditions. It often leads to shame, isolation, and fear of judgment. Individuals may avoid seeking treatment or even talking about their struggles because they fear being labeled or misunderstood.</p>
                        <p>There are two main types of stigma:</p>
                        <ul className="list-disc pl-6">
                            <li>Social Stigma: Negative public attitudes and stereotypes.</li>
                            <li>Self-Stigma: When individuals internalize those negative beliefs about themselves.</li>
                        </ul>
                        <p>In today’s digital age, where everything moves quickly and appearances matter, these forms of stigma can be even more intense and harmful.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Why Does Stigma Still Exist?</h2>
                        <p>Even with medical advancements and better information, mental health stigma in modern society remains. Here are a few reasons why:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Lack of Awareness:</strong> Many people still don’t understand the complexity of mental illnesses. They may view conditions like anxiety or depression as a sign of weakness or lack of willpower.</li>
                            <li><strong>Cultural Beliefs:</strong> In some cultures, mental health is considered a taboo subject. Talking about emotions or psychological problems is seen as inappropriate or shameful.</li>
                            <li><strong>Media Misrepresentation:</strong> TV shows, films, and news often portray people with mental health issues as dangerous, unstable, or unpredictable. This further deepens public fear and misunderstanding.</li>
                            <li><strong>Pressure of the Modern World:</strong> With the rise of social media, many feel the need to appear “perfect” or “happy” all the time. This creates pressure to hide emotional struggles and pretend everything is fine.</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}>How Mental Health Stigma Affects Us</h2>
                        <p>Stigma has real and damaging effects, both on individuals and society as a whole. Here’s how it plays out:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Delayed Treatment:</strong> Many people avoid therapy or professional help because they fear being judged. This delay can worsen symptoms and lead to serious consequences.</li>
                            <li><strong>Low Self-Esteem:</strong> When someone constantly hears negative messages about mental illness, they may start to believe them. This can lead to guilt, shame, and low confidence.</li>
                            <li><strong>Workplace Challenges:</strong> Employees with mental health issues often hide their conditions from employers, fearing job loss or discrimination. This affects productivity, morale, and workplace wellbeing.</li>
                            <li><strong>Broken Relationships:</strong> Misunderstanding or judgment from family and friends can lead to isolation and loneliness for those struggling with mental health.</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}>Breaking the Stigma: What Can We Do?</h2>
                        <p>Reducing mental health stigma is possible, but it requires consistent effort, empathy, and open conversation. Here are steps we can all take:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Educate Yourself and Others:</strong> Learn the facts about mental health and share them with your family, colleagues, and community. Understanding that mental illness is just like any other health issue can change mindsets.</li>
                            <li><strong>Encourage Open Conversations:</strong> Create a safe space for people to talk about their struggles without fear of judgment. Listen with compassion and avoid using harmful language like “crazy” or “weak.”</li>
                            <li><strong>Be Mindful of Your Words:</strong> Language matters. Use respectful, non-stigmatizing words when talking about mental health. Say “person with depression” instead of “depressed person.”</li>
                            <li><strong>Support Mental Health Campaigns:</strong> Participate in awareness drives, mental health walks, webinars, and social media campaigns. The more we talk, the more we normalize these conversations.</li>
                            <li><strong>Promote Mental Wellness at Work:</strong> Encourage mental health days, employee wellness programs, and open dialogue in the workplace. A mentally healthy team is a productive and positive one.</li>
                        </ul>

                        <h2 className="mt-6" style={{ color: '#000' }}>The Role of Technology in Tackling Stigma</h2>
                        <p>Interestingly, the same technology that increases pressure can also help break stigma. Mental health apps, online therapy platforms, and social media campaigns have made it easier for people to access support and connect with others facing similar challenges.</p>
                        <p>Online influencers, mental health advocates, and professionals are using platforms like Instagram, LinkedIn, and YouTube to share real stories, coping tips, and resources. This is slowly reshaping how society views mental health.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Real Change Starts With You</h2>
                        <p>You don’t have to be a therapist to make a difference. Here are small but powerful things you can do every day:</p>
                        <ul className="list-disc pl-6">
                            <li>Check in with your friends and family.</li>
                            <li>Share your own mental health journey, if you’re comfortable.</li>
                            <li>Challenge myths and stereotypes when you hear them.</li>
                            <li>Be kind to others and yourself.</li>
                        </ul>
                        <p>Even one conversation can break years of silence.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Final Thoughts</h2>
                        <p>In today’s fast-paced world, mental health challenges are becoming increasingly common. Yet, stigma remains a major roadblock in the path to healing. By promoting mental health awareness, encouraging empathy, and normalizing open conversations, we can create a world where seeking help is seen as strength not weakness.</p>
                        <p>It’s time to slow down, reflect, and support one another in building a mentally healthier society.</p>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    );
};

export default BlogH18;
