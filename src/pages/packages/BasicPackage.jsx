import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const BasicPackage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);

  const handlePurchase = async () => {
    if (!user) {
      navigate('/login', { state: { from: '/packages/basic' } });
      return;
    }

    setIsProcessing(true);
    try {
      // Here you would typically make an API call to process the purchase
      // For now, we'll just simulate a delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      alert('Thank you for your purchase! You will receive an email with further instructions.');
      navigate('/dashboard');
    } catch (error) {
      alert('There was an error processing your purchase. Please try again.');
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-blue-900 to-violet-900 pt-16">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Package Header */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-900/20 to-violet-700/20 text-sm font-medium tracking-wider text-blue-300 uppercase mb-4 backdrop-blur-sm border border-blue-500/20">
              Basic Package
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold mt-4 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-white">
              Start Your Learning Journey
            </h1>
            <p className="text-lg text-gray-300 mb-8">
              Perfect for beginners looking to explore digital skills
            </p>
          </div>

          {/* Package Details */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 mb-12 border border-blue-500/20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Left Column - Features */}
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">What's Included</h2>
                <ul className="space-y-4">
                  {[
                    "Access to 5 foundational courses",
                    "Basic Support via email",
                    "Community Access",
                    "Monthly Live Sessions",
                    "Basic Learning Resources",
                    "Email Support"
                  ].map((feature, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 flex items-center justify-center">
                        <svg
                          className="w-3 h-3 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="3"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </span>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Right Column - Pricing & CTA */}
              <div className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-blue-500/20">
                <div className="text-center mb-6">
                  <div className="text-sm text-gray-400 mb-2">One-time Payment</div>
                  <div className="text-4xl font-bold text-white mb-1">₹1,999</div>
                  <div className="text-sm text-gray-400">Lifetime Access</div>
                </div>

                <button
                  onClick={handlePurchase}
                  disabled={isProcessing}
                  className={`w-full bg-gradient-to-r from-blue-600 to-violet-600 text-white py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 mb-4 relative overflow-hidden ${
                    isProcessing ? 'opacity-75 cursor-not-allowed' : 'hover:from-blue-700 hover:to-violet-700'
                  }`}
                >
                  {isProcessing ? (
                    <div className="flex items-center justify-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Processing...
                    </div>
                  ) : (
                    'Purchase Now'
                  )}
                </button>

                <div className="text-center">
                  <p className="text-sm text-gray-400 mb-4">
                    30-day money-back guarantee
                  </p>
                  <Link
                    to="/contact"
                    className="text-blue-400 hover:text-blue-300 transition-colors duration-300"
                  >
                    Have questions? Contact us
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Course Preview */}
          <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-blue-500/20">
            <h2 className="text-2xl font-bold text-white mb-6">Available Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Digital Marketing Basics",
                  description: "Learn the fundamentals of digital marketing",
                  duration: "4 weeks"
                },
                {
                  title: "Social Media Strategy",
                  description: "Master social media marketing essentials",
                  duration: "3 weeks"
                },
                {
                  title: "Content Creation",
                  description: "Create engaging content for your audience",
                  duration: "4 weeks"
                },
                {
                  title: "SEO Fundamentals",
                  description: "Understand search engine optimization basics",
                  duration: "3 weeks"
                },
                {
                  title: "Email Marketing",
                  description: "Build effective email marketing campaigns",
                  duration: "2 weeks"
                }
              ].map((course, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-xl rounded-xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {course.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">{course.description}</p>
                  <div className="flex items-center text-sm text-gray-400">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    {course.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BasicPackage; 