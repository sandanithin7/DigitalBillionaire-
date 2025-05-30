import React from 'react';
import { Link } from 'react-router-dom';

const Packages = () => {
  const packages = [
    {
      name: "Pro",
      features: [
        "Get access to 19 courses",
        "Free Live Trainings",
        "Additional Bonus Recorded Sessions",
        "Learning from Leaders",
        "WhatsApp, Email and Call Support",
        "Complimentary Freelance Training"
      ],
      price: "₹4,999",
      recommended: false,
      path: "/packages/pro"
    },
    {
      name: "Supreme",
      features: [
        "Get access to 30 courses",
        "Free Live Trainings",
        "Additional Bonus Recorded Sessions",
        "Learning from Leaders",
        "WhatsApp, Email and Call Support",
        "Complimentary Freelance Training"
      ],
      price: "₹7,999",
      recommended: true,
      path: "/packages/supreme"
    },
    {
      name: "Premium",
      features: [
        "Get Access to 38 Courses",
        "Free Live Trainings",
        "Additional Bonus Recorded Sessions",
        "Learning from Leaders",
        "WhatsApp, Email and Call Support",
        "Complimentary Freelance Training"
      ],
      price: "₹9,999",
      recommended: true,
      path: "/packages/premium"
    },
    {
      name: "Premium Plus",
      features: [
        "Get Access to All Courses",
        "Free Live Trainings",
        "Additional Bonus Recorded Sessions",
        "Learning from Leaders",
        "WhatsApp, Email and Call Support",
        "Complimentary Freelance Training"
      ],
      price: "₹14,999",
      recommended: false,
      path: "/packages/premium-plus"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Learning Path</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select the perfect package that matches your learning goals and budget
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => (
            <div 
              key={index} 
              className={`relative rounded-xl overflow-hidden border transition-all duration-300 hover:shadow-xl ${
                pkg.recommended ? 'border-blue-500' : 'border-gray-200'
              }`}
            >
              {pkg.recommended && (
                <div className="absolute top-0 right-0 bg-blue-600 text-white px-3 py-1 text-xs font-bold rounded-bl-lg">
                  POPULAR
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-4">{pkg.name}</h3>
                <div className="text-3xl font-bold mb-6 text-blue-600">{pkg.price}</div>
                <ul className="space-y-3 mb-6">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <svg className="h-5 w-5 text-green-500 mr-2 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link 
                  to={pkg.path}
                  className={`block w-full py-3 rounded-md font-medium text-center transition-all duration-300 ${
                    pkg.recommended 
                      ? 'bg-blue-600 text-white hover:bg-blue-700' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="mt-20 max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: "What's included in each package?",
                answer: "Each package includes access to a specific number of courses, live training sessions, recorded sessions, and support from industry leaders. The higher the package, the more courses and features you get access to."
              },
              {
                question: "Can I upgrade my package later?",
                answer: "Yes, you can upgrade your package at any time. The price difference will be calculated based on your current package and the time remaining in your subscription."
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept all major credit cards, debit cards, UPI, and net banking. We also offer EMI options for certain packages."
              },
              {
                question: "Is there a refund policy?",
                answer: "Yes, we offer a 7-day money-back guarantee if you're not satisfied with the course content. However, this doesn't apply to live sessions you've already attended."
              }
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-3">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Support */}
        <div className="mt-20 text-center">
          <h2 className="text-2xl font-bold mb-4">Need Help Choosing?</h2>
          <p className="text-gray-600 mb-8">Our team is here to help you select the perfect package for your needs.</p>
          <Link 
            to="/contact" 
            className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Packages;
