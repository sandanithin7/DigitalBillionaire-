import React from 'react';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-purple-800 p-8">
      <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-white mb-4">Welcome to Our Courses!</h1>
        <p className="text-gray-200 text-lg mb-2">
          Our Welcome Courses are designed to help beginners take their first steps into the world of technology and digital skills.
          Whether you're interested in web development, design, or programming, we've crafted these courses to be simple, engaging, and effective.
        </p>
        <p className="text-gray-200 text-lg">
          No prior experience needed — just bring your curiosity! Get started with our free introductory lessons and build a solid foundation for your learning journey.
        </p>
      </div>
    </div>
  );
};

export default About;
