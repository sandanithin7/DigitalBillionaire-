import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PremiumPackage = () => {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);

  const packageDetails = {
    name: "Premium",
    features: [
      "Access to 35 courses",
      "VIP Support",
      "Community Access",
      "Daily Live Sessions",
      "Premium Resources",
      "24/7 Priority Support"
    ],
    mrp: "₹9,999",
    price: "₹7,999",
    description: "Premium learning experience with VIP support and daily live sessions",
    gradient: "from-rose-500 to-pink-600",
    bgGradient: "from-slate-900 via-rose-900/10 to-slate-900",
    image: "/images/premium-banner.jpg",
    highlights: [
      "35 Courses",
      "VIP Support",
      "Daily Sessions"
    ],
    benefits: [
      {
        title: "VIP Access",
        description: "Get access to 35 courses with lifetime validity"
      },
      {
        title: "VIP Support",
        description: "Get priority VIP support 24/7"
      },
      {
        title: "Daily Sessions",
        description: "Join interactive daily live sessions"
      }
    ]
  };

  const handlePurchase = async () => {
    if (!isProcessing) {
      setIsProcessing(true);
      try {
        // Simulate payment process
        await new Promise(resolve => setTimeout(resolve, 1500));
        alert('Redirecting to payment gateway...');
        navigate('/payment-success');
      } catch (error) {
        alert('There was an error processing your payment. Please try again.');
      } finally {
        setIsProcessing(false);
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Hero Section */}
      <div className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:60px_60px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/20 to-black/50" />
        
        <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Package Header */}
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight">
                <span className="inline-block bg-gradient-to-r from-rose-400 to-pink-400 bg-clip-text text-transparent">
                  Premium Package
                </span>
                  </h1>
              <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
                {packageDetails.description}
              </p>
            </div>

            {/* Main Content */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Package Details */}
              <div className="space-y-10">
                {/* Price Card */}
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <div className="flex flex-col items-center">
                    <p className="text-gray-400 text-lg line-through mb-2">MRP: {packageDetails.mrp}</p>
                    <div className="text-5xl font-bold text-white mb-4">
                      ₹7,999
                      <span className="text-lg text-gray-400 ml-2">/ lifetime</span>
                    </div>
                    <button
                      onClick={handlePurchase}
                      disabled={isProcessing}
                      className="w-full bg-gradient-to-r from-rose-500 to-pink-600 text-white rounded-xl py-4 px-8 font-semibold text-lg transition-all duration-200 transform hover:scale-[1.02] hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isProcessing ? "Processing..." : "Get Started Now"}
                    </button>
                  </div>
                </div>

                {/* Features List */}
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6">What's Included</h3>
                  <div className="space-y-4">
                    {packageDetails.features.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div className="flex-shrink-0 w-5 h-5 rounded-full bg-rose-500/20 flex items-center justify-center">
                          <svg className="w-3.5 h-3.5 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column - Benefits & Highlights */}
              <div className="space-y-10">
              {/* Highlights */}
              <div className="grid grid-cols-3 gap-4">
                {packageDetails.highlights.map((highlight, index) => (
                  <div 
                    key={index}
                      className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-xl border border-white/10 rounded-xl p-4 text-center"
                  >
                    <p className="text-white font-semibold">{highlight}</p>
                  </div>
                ))}
              </div>

                {/* Benefits */}
                <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <h3 className="text-xl font-semibold text-white mb-6">Key Benefits</h3>
                  <div className="space-y-6">
                    {packageDetails.benefits.map((benefit, index) => (
                      <div key={index} className="space-y-2">
                        <h4 className="text-lg font-medium text-rose-400">{benefit.title}</h4>
                        <p className="text-gray-300">{benefit.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Support Card */}
                <div className="bg-gradient-to-br from-rose-500/10 to-pink-500/10 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="p-3 bg-rose-500/20 rounded-lg">
                      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-white">VIP Support</h4>
                      <p className="text-gray-400">24/7 priority support for all your needs</p>
                    </div>
                  </div>
                <Link
                  to="/contact"
                    className="block w-full text-center bg-white/10 hover:bg-white/20 text-white rounded-xl py-3 px-4 font-medium transition-colors duration-200"
                >
                  Contact Support
                </Link>
              </div>
            </div>
            </div>
          </div>
            </div>
          </div>

      {/* Course Preview Section */}
      <div className="bg-slate-900/50 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Available Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Expert Digital Marketing",
                  description: "Master advanced digital marketing strategies",
                  duration: "10 weeks",
                  icon: "M13 10V3L4 14h7v7l9-11h-7z"
                },
                {
                  title: "Advanced Analytics",
                  description: "Master data analytics and visualization",
                  duration: "8 weeks",
                  icon: "M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                },
                {
                  title: "Content Strategy Pro",
                  description: "Create expert-level content strategies",
                  duration: "9 weeks",
                  icon: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
                }
              ].map((course, index) => (
                <div
                  key={index}
                  className="group bg-white/[0.02] hover:bg-white/[0.05] backdrop-blur-xl rounded-2xl p-6 border border-white/10 transition-all duration-200"
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-rose-500/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                      <svg className="w-6 h-6 text-rose-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={course.icon} />
                      </svg>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{course.title}</h3>
                  <p className="text-gray-400 mb-4">{course.description}</p>
                  <div className="flex items-center text-gray-500">
                    <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.duration}
                  </div>
                </div>
              ))}
            </div>
          </div>
            </div>
          </div>

          {/* FAQ Section */}
      <div className="bg-slate-900 py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-12 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  question: "What's included in the Premium package?",
                  answer: "The Premium package includes access to 35 courses, VIP support, community access, daily live sessions, premium resources, and 24/7 priority support."
                },
                {
                  question: "How is Premium different from Premium Max?",
                  answer: "Premium offers access to 35 courses, VIP support, community access, daily live sessions, and premium resources. Premium Max offers complete course access, personal mentorship, elite community access, and additional exclusive benefits not available in other packages."
                },
                {
                  question: "What kind of support is included?",
                  answer: "You get VIP support with 24/7 priority response times and dedicated support team access."
                },
                {
                  question: "Is there a payment plan?",
                  answer: "Yes, we offer flexible EMI options for the Premium package. Contact support for details."
                }
              ].map((faq, index) => (
                <div
                  key={index}
                  className="bg-white/[0.02] backdrop-blur-xl rounded-xl p-6 border border-white/10"
                >
                  <h3 className="text-lg font-semibold text-white mb-2">{faq.question}</h3>
                  <p className="text-gray-400">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPackage;