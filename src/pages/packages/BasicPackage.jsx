import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const BasicPackage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isProcessing, setIsProcessing] = useState(false);

  const packageDetails = {
    name: "Basic",
    features: [
      "Access to 5 courses",
      "Basic Support",
      "Community Access",
      "Monthly Live Sessions",
      "Basic Resources",
      "Email Support"
    ],
    mrp: "₹2,999",
    price: "₹1,999",
    description: "Perfect for beginners looking to explore digital skills with lifetime access",
    gradient: "from-blue-600 to-violet-600",
    bgGradient: "from-indigo-950 via-blue-900 to-violet-900",
    image: "/images/basic-banner.jpg",
    highlights: [
      "Lifetime Access",
      "5 Courses",
      "Basic Support"
    ],
    benefits: [
      {
        title: "Starter Access",
        description: "Get access to 5 essential courses with lifetime validity"
      },
      {
        title: "Community Learning",
        description: "Join our active learning community"
      },
      {
        title: "Basic Support",
        description: "Email support for your learning journey"
      }
    ]
  };

  const handlePurchase = async () => {
    if (!user) {
      navigate('/login', { state: { from: '/packages/basic' } });
      return;
    }

    setIsProcessing(true);
    try {
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
    <div className={`min-h-screen bg-gradient-to-br ${packageDetails.bgGradient} py-20`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-blue-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-32 h-32 bg-violet-400/20 rounded-full blur-xl animate-pulse-delayed"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 relative">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-violet-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative">
                  <h1 className={`text-5xl font-bold bg-gradient-to-r ${packageDetails.gradient} bg-clip-text text-transparent mb-4`}>
                    {packageDetails.name} Package
                  </h1>
                  <div className="space-y-2">
                    <p className="text-gray-400 text-lg line-through">MRP - {packageDetails.mrp}</p>
                    <p className="text-3xl font-bold text-white">
                      Special Price - {packageDetails.price}
                    </p>
                  </div>
                </div>
              </div>

              <p className="text-xl text-gray-300 leading-relaxed">
                {packageDetails.description}
              </p>

              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4">
                {packageDetails.highlights.map((highlight, index) => (
                  <div 
                    key={index}
                    className={`bg-gradient-to-br ${packageDetails.gradient} p-4 rounded-xl text-center transform hover:scale-105 transition-all duration-300 cursor-pointer`}
                  >
                    <p className="text-white font-semibold">{highlight}</p>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={handlePurchase}
                  disabled={isProcessing}
                  className={`inline-block bg-gradient-to-r ${packageDetails.gradient} text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 text-center shadow-lg relative overflow-hidden group ${
                    isProcessing ? 'opacity-75 cursor-not-allowed' : ''
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
                    <span className="relative z-10">Buy Now</span>
                  )}
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </button>
                <Link
                  to="/contact"
                  className="inline-block bg-white/10 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-colors duration-300 text-center backdrop-blur-sm"
                >
                  Contact Support
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative z-10 transform hover:scale-105 transition-transform duration-500">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl blur opacity-50"></div>
                <img
                  src={packageDetails.image}
                  alt={`${packageDetails.name} Package`}
                  className="relative w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              {/* Decorative Elements */}
              <div className={`absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-r ${packageDetails.gradient} rounded-full opacity-20 blur-3xl animate-pulse`}></div>
              <div className={`absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-r ${packageDetails.gradient} rounded-full opacity-20 blur-3xl animate-pulse-delayed`}></div>
            </div>
          </div>

          {/* Features Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Package Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {packageDetails.features.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-colors duration-300 group hover:transform hover:scale-105"
                >
                  <div className="flex items-start">
                    <span className={`flex-shrink-0 w-8 h-8 rounded-lg bg-gradient-to-r ${packageDetails.gradient} flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}>
                      <svg
                        className="w-5 h-5 text-white"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-200 text-lg group-hover:text-white transition-colors duration-300">{feature}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Basic Package?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packageDetails.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-colors duration-300 transform hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Course Preview Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Available Courses</h2>
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
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-colors duration-300 transform hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-300 mb-4">{course.description}</p>
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

          {/* FAQ Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: "What's included in the Basic package?",
                  answer: "The Basic package includes access to 5 foundational courses, email support, community access, and basic learning resources."
                },
                {
                  question: "Can I upgrade to Premium later?",
                  answer: "Yes, you can upgrade to Premium or Premium Max at any time and only pay the difference."
                },
                {
                  question: "What kind of support is included?",
                  answer: "You get email support with a 48-hour response time for all your learning questions."
                },
                {
                  question: "Is there a money-back guarantee?",
                  answer: "Yes, we offer a 30-day money-back guarantee if you're not satisfied with the Basic package."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-colors duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-300">{faq.answer}</p>
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