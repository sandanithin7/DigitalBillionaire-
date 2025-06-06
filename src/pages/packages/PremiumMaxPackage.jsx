import React from 'react';
import { Link } from 'react-router-dom';

const PremiumMaxPackage = () => {
  const packageDetails = {
    name: "Premium Max",
    features: [
      "Access to All Courses",
      "24/7 VIP Support",
      "Elite Community Access",
      "Unlimited Live Sessions",
      "All Resources",
      "All Tools + Mentorship"
    ],
    mrp: "₹24,999",
    price: "₹9,999",
    description: "Our most comprehensive package with exclusive benefits and personal mentorship",
    gradient: "from-amber-600 to-orange-500",
    bgGradient: "from-amber-900/40 via-black to-black",
    image: "/images/banner.jpg",
    highlights: [
      "All Courses Access",
      "Personal Mentorship",
      "Elite Benefits"
    ],
    benefits: [
      {
        title: "Complete Access",
        description: "Get access to all courses, tools, and resources"
      },
      {
        title: "Personal Mentorship",
        description: "One-on-one guidance from industry experts"
      },
      {
        title: "Elite Community",
        description: "Join our exclusive elite community"
      }
    ]
  };

  return (
    <div className={`min-h-screen bg-gradient-to-br ${packageDetails.bgGradient} py-20`}>
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Floating Elements */}
          <div className="absolute top-20 left-10 w-20 h-20 bg-amber-500/20 rounded-full blur-xl animate-pulse"></div>
          <div className="absolute top-40 right-10 w-32 h-32 bg-orange-400/20 rounded-full blur-xl animate-pulse-delayed"></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 relative">
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-orange-500 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
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
                <Link
                  to="/signup"
                  className={`inline-block bg-gradient-to-r ${packageDetails.gradient} text-white px-8 py-4 rounded-xl font-bold text-lg hover:scale-105 transition-transform duration-300 text-center shadow-lg relative overflow-hidden group`}
                >
                  <span className="relative z-10">Buy Now</span>
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
                </Link>
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
                <div className="absolute -inset-0.5 bg-gradient-to-r from-amber-600 to-orange-500 rounded-2xl blur opacity-50"></div>
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
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-amber-400/50 transition-colors duration-300 group hover:transform hover:scale-105"
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
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Why Choose Premium Max Package?</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {packageDetails.benefits.map((benefit, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-amber-400/50 transition-colors duration-300 transform hover:scale-105"
                >
                  <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                  <p className="text-gray-300">{benefit.description}</p>
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
                  question: "What's included in the Premium Max package?",
                  answer: "The Premium Max package includes access to all courses, personal mentorship, 24/7 VIP support, elite community access, and all tools and resources."
                },
                {
                  question: "How is Premium Max different from Premium?",
                  answer: "Premium Max offers complete course access, personal mentorship, elite community access, and additional exclusive benefits not available in other packages."
                },
                {
                  question: "What kind of mentorship is included?",
                  answer: "You get one-on-one mentorship sessions with industry experts who will guide you through your learning journey and career growth."
                },
                {
                  question: "Is there a payment plan?",
                  answer: "Yes, we offer flexible EMI options for the Premium Max package. Contact support for details."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-amber-400/50 transition-colors duration-300"
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

export default PremiumMaxPackage; 