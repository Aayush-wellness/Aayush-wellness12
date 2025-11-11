import React, { useEffect } from "react";
import Header from "./Header";
import NewFooter from "./NewFooter";

const BlogH9 = () => {
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
                    backgroundImage: 'url("https://img.freepik.com/free-photo/pastel-blue-vignette-concrete-textured-background_53876-102637.jpg")',
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
                        Home Workouts That Actually Work: Fitness Without the Gym
                    </h1>
                    <img
                        src="https://cdn.shopify.com/s/files/1/0636/5226/6115/files/BLOG_7.jpg?v=1744959347"
                        alt="Home Workouts"
                        className="w-full h-auto md:h-[400px] lg:h-[500px] object-cover rounded-lg shadow-lg"
                    />
                    <div className="text-gray-700 text-black space-y-4 mt-6">
                        <p>Think you need a gym membership to get fit? Think again! Home workouts are transforming how we stay healthy, no fancy machines or expensive classes required. With just your body and a little space, you can build strength, burn fat, and boost flexibility. Plus, it’s convenient, cost-effective, and surprisingly fun!</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Why Home Workouts Work</h2>
                        <p>Home workouts are not just a pandemic trend, they’re here to stay. Why? Because they work. You don’t need bulky gym equipment to see real results. By using your body weight, gravity, and smart movement, you can build endurance, strength, and mobility. No commute, no crowds — just efficient exercise on your schedule.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Essential Equipment (Optional)</h2>
                        <p>While your body is your best tool, a few affordable items can enhance your workout. Consider investing in resistance bands, a yoga mat, and a pair of dumbbells. That said, great workouts can still happen with zero equipment!</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Workout Routine 1: Bodyweight Blast</h2>
                        <p>This strength-focused routine builds muscle and tones your entire body, no weights needed!</p>
                        <p><strong>Circuit (Repeat 3 times):</strong></p>
                        <ul className="list-disc pl-6">
                            <li>Push-ups – 10-15 reps (Strengthens chest, shoulders, and triceps)</li>
                            <li>Squats – 15-20 reps (Targets glutes, quads, and hamstrings)</li>
                            <li>Glute Bridges – 15 reps (Engages glutes and lower back)</li>
                            <li>Plank to Shoulder Tap – 10 taps per side (Improves core stability and upper-body control)</li>
                            <li>Wall Sit – Hold for 30 seconds (Builds leg endurance and strength)</li>
                        </ul>
                        <p>Rest 30 seconds between exercises, 1 minute between rounds.</p>
                        <p>This routine boosts muscular endurance while sculpting your body, all with just your body weight!</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Workout Routine 2: Cardio Crusher</h2>
                        <p>Get your heart rate up and burn calories fast with this high-energy cardio workout.</p>
                        <p><strong>Circuit (Repeat 3 times):</strong></p>
                        <ul className="list-disc pl-6">
                            <li>Jumping Jacks – 45 seconds (Full-body warm-up and calorie burner)</li>
                            <li>Mountain Climbers – 30 seconds (Boosts heart rate and strengthens core)</li>
                            <li>High Knees – 30 seconds (Engages lower abs and improves agility)</li>
                            <li>Burpees – 10-12 reps (Total-body cardio blast)</li>
                            <li>Skaters – 20 reps (Tones legs and improves balance)</li>
                        </ul>
                        <p>Rest 20-30 seconds between exercises, 1 minute between rounds.</p>
                        <p>This quick routine is perfect for fat loss, stamina, and heart health, all from your living room.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Workout Routine 3: Flexibility & Core</h2>
                        <p>Stretch, strengthen, and stabilize your body with this mindful routine.</p>
                        <ul className="list-disc pl-6">
                            <li>Cat-Cow Stretch – 5 breaths (Improves spine flexibility)</li>
                            <li>Bird-Dog – 10 reps per side (Core control and balance)</li>
                            <li>Forearm Plank – Hold for 30 seconds (Core and shoulder strength)</li>
                            <li>Seated Forward Fold – Hold for 30 seconds (Hamstring and back stretch)</li>
                            <li>Glute Stretch (Figure 4) – Hold 20 seconds per side (Hip release and mobility)</li>
                        </ul>
                        <p>Doing this a few times a week improves posture, reduces tightness, and builds a stronger core.</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Tips for Success</h2>
                        <p>Set a schedule, start small, and stay consistent. Create a workout space, use music for motivation, and track your progress. Most importantly, celebrate every small win!</p>

                        <h2 className="mt-6" style={{ color: '#000' }}>Final Thoughts</h2>
                        <p>Home workouts are powerful, practical, and proven to work. You don’t need a gym to become your strongest, healthiest self. Start today, move with purpose, and feel the difference in your body and mind!</p>
                    </div>
                </div>
            </div>
            <NewFooter />
        </>
    );
};

export default BlogH9;
