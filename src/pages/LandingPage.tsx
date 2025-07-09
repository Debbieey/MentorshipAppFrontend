import React from "react";
import { Link } from "react-router-dom";

const LandingPage: React.FC = () => {
  return (
    <section className="bg-white min-h-screen text-gray-800 py-16">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Welcome to <span className="text-blue-600">Scholar Support</span>; Where guidance meets growth, and connections fuel success.
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
          We bring mentees and mentors together in a collaborative space where knowledge is shared, skills are honed, and leaders are made.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link
            to="/signup"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded"
          >
            Begin Your Journey
          </Link>
          <Link
            to="/about"
            className="border border-blue-600 text-blue-600 hover:bg-blue-100 font-semibold px-6 py-3 rounded"
          >
            Explore Further
          </Link>
        </div>

        {/* Optional: Feature highlights */}
        <div className="mt-16 grid gap-4 md:grid-cols-2">
          <div>
            <h3 className="text-xl font-semibold mb-2">Expert Mentors</h3>
            <p>Find the perfect mentor in your field and gain valuable insights to propel your journey.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Milestone Monitoring</h3>
            <p>Monitor your progress and achieve milestones with your personalized tracking dashboard.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Trusted space</h3>
            <p>Safe, secure, and confidential - share freely knowing your data is always protected.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LandingPage;
