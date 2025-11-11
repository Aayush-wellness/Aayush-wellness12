import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const BlogH22 = () => {
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
                        Surprising Reasons You’re Still Tired After 8 Hours of Sleep
                    </h1>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_21.jpg?v=1751719094"
                        alt="Tired After Sleep"
                        className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-black space-y-4 mt-6">
                        <p>
                            You go to bed on time. You avoid late-night scrolling. You clock in 8 solid hours under the covers. And yet, when morning comes, you feel just as exhausted as when you fell asleep.
                        </p>
                        <p>
                            If this sounds familiar, you're not alone. Many people experience persistent tiredness even after what seems like a full night's sleep. While 8 hours is often seen as the gold standard for rest, the number of hours alone isn’t the whole story. Sleep is a complex biological process, and many hidden factors can affect how well you rest.
                        </p>
                        <p>
                            In this blog, let’s dive into the unexpected and often overlooked reasons why you might still feel tired even after sleeping for 8 hours.
                        </p>

                        <h2 className="mt-6 font-semibold">1. You’re Sleeping, But Not Resting Deeply</h2>
                        <p>
                            Even 8 hours in bed doesn’t guarantee deep, restorative sleep. Light sleep and micro awakenings often unnoticed can interrupt crucial stages like REM and slow-wave sleep, which are essential for mental and physical recovery.
                        </p>

                        <h2 className="mt-6 font-semibold">2. You May Have an Undiagnosed Sleep Disorder</h2>
                        <p>
                            Conditions like sleep apnea or restless leg syndrome can quietly disrupt your sleep. These interruptions may not fully wake you but can block deeper sleep stages, leaving you feeling unrefreshed.
                        </p>

                        <h2 className="mt-6 font-semibold">3. Your Sleep Schedule Is Inconsistent</h2>
                        <p>
                            An erratic sleep-wake cycle throws off your circadian rhythm. Even if you sleep 8 hours, inconsistent timings can cause a “jet-lag” effect that reduces sleep quality.
                        </p>

                        <h2 className="mt-6 font-semibold">4. Mental Fatigue Is Weighing You Down</h2>
                        <p>
                            Emotional stress and overthinking can keep your brain active at night. If your mind doesn’t rest, you wake up feeling emotionally drained, even if your body was technically at rest.
                        </p>

                        <h2 className="mt-6 font-semibold">5. You’re Experiencing Dehydration Without Realizing It</h2>
                        <p>
                            Dehydration even mild can cause morning fatigue. Your body loses water overnight through breathing and sweating, and low hydration levels hinder cellular function.
                        </p>

                        <h2 className="mt-6 font-semibold">6. Nutritional Deficiencies Are Draining Your Energy</h2>
                        <p>
                            Lack of vital nutrients like iron, vitamin B12, magnesium, or vitamin D can lead to chronic tiredness. Your body can’t operate at full efficiency without these essentials.
                        </p>

                        <h2 className="mt-6 font-semibold">7. Your Mind Is Still Active During Sleep</h2>
                        <p>
                            Vivid dreams or nighttime anxiety can keep your brain working while your body rests. This cognitive activity fragments your sleep, leaving you groggy and unfocused in the morning.
                        </p>

                        <h2 className="mt-6 font-semibold">8. Your Bedroom Environment Is Not Sleep-Friendly</h2>
                        <p>
                            Noisy surroundings, room temperature issues, or even light from electronics can interfere with sleep quality. These subtle disturbances can prevent deep rest without fully waking you up.
                        </p>

                        <h2 className="mt-6 font-semibold">9. Too Much Screen Time Before Bed</h2>
                        <p>
                            Blue light from screens suppresses melatonin the sleep hormone making it harder to fall and stay asleep. Even if you sleep 8 hours, your body may not reach the restful depths needed to recharge.
                        </p>

                        <h2 className="mt-6 font-semibold">10. Underlying Health Conditions Are at Play</h2>
                        <p>
                            Chronic fatigue, thyroid problems, infections, or diabetes can sap energy silently. In such cases, your body is in a constant state of low-level stress or inflammation, making rest feel ineffective.
                        </p>

                        <h2 className="mt-6 font-semibold"> Conclusion</h2>
                        <p>
                            If you’re regularly feeling tired after a full night’s sleep, it’s a sign that something deeper is affecting your rest. Sleep isn’t just about clocking hours; it’s about how well your body and brain cycle through the night.
                        </p>
                        <p>
                            The good news? Once you understand what’s holding you back, you can take simple steps to improve your rest leading to brighter mornings and more energized days.
                        </p>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    );
};

export default BlogH22;
