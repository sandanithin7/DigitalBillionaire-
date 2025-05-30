import React from "react";
import { Link } from "react-router-dom";
import logo from "/images/logo.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-purple-800">
      {/* Hero Section */}
      <section className="relative text-white min-h-screen w-full overflow-hidden">
        {/* Enhanced animated background pattern */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/hero-pattern.png')] bg-cover opacity-10 animate-pulse-slow"></div>
          <div className="absolute inset-0 bg-gradient-to-br from-black/20 via-gray-700/30 to-purple-800/40"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-800/10 via-transparent to-transparent animate-pulse"></div>
        </div>

        {/* Enhanced animated shapes with more vibrant effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-24 sm:w-32 md:w-40 lg:w-48 h-24 sm:h-32 md:h-40 lg:h-48 bg-gradient-to-r from-purple-800/20 to-black/30 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/3 w-32 sm:w-40 md:w-48 lg:w-56 h-32 sm:h-40 md:h-48 lg:h-56 bg-gradient-to-r from-purple-800/20 to-black/30 rounded-full blur-3xl animate-float-delayed"></div>
          <div className="absolute top-1/2 right-1/4 w-20 sm:w-24 md:w-28 lg:w-32 h-20 sm:h-24 md:h-28 lg:h-32 bg-gradient-to-r from-purple-800/20 to-black/30 rounded-full blur-2xl animate-float-slow"></div>
          <div className="absolute top-1/3 right-1/3 w-16 sm:w-20 md:w-24 lg:w-28 h-16 sm:h-20 md:h-24 lg:h-28 bg-gradient-to-r from-purple-800/20 to-black/20 rounded-full blur-2xl animate-float"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Content Section */}
            <div className="text-center lg:text-left space-y-6 sm:space-y-8">
              {/* Enhanced title with more dramatic gradient text and animation */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight animate-fadeIn text-white">
                Unlock Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A1CAC] to-[#7A1CAC] animate-gradient relative">
                  Digital Potential
                  <div className="absolute inset-0 bg-gradient-to-r from-[#7A1CAC]/20 to-[#7A1CAC]/20 blur-xl -z-10"></div>
                </span>{" "}
                with IDIGITALPRENEUR
              </h1>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed max-w-2xl mx-auto lg:mx-0 text-white">
                Master in-demand skills with our comprehensive e-learning
                platform. Learn, Implement & Grow your digital business.
              </p>

              {/* Enhanced CTA buttons with more dramatic glassmorphism effect */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/register"
                  className="group relative bg-gradient-to-r from-[#7A1CAC] to-[#000000] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-gradient-to-r hover:from-[#7A1CAC]/90 hover:to-[#000000]/90 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7A1CAC]/20 flex items-center justify-center gap-3 border border-white/20 overflow-hidden text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6 transform group-hover:rotate-180 transition-transform duration-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z"
                        clipRule="evenodd"
                      />
                    </svg>
                    Register Now
                  </span>
                </Link>
                <Link
                  to="/courses"
                  className="group relative bg-gradient-to-r from-[#000000] to-[#7A1CAC] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold hover:bg-gradient-to-r hover:from-[#000000]/90 hover:to-[#7A1CAC]/90 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7A1CAC]/20 flex items-center justify-center gap-3 border-2 border-white/30 overflow-hidden text-sm sm:text-base"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 sm:h-6 sm:w-6 transform group-hover:rotate-180 transition-transform duration-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                    </svg>
                    Browse Courses
                  </span>
                </Link>
              </div>

              {/* Enhanced Feature cards with more dramatic glassmorphism */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mt-8 sm:mt-12">
                {[
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 sm:h-9 sm:w-9 text-pink-400 transform group-hover:scale-110 transition-transform duration-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    ),
                    title: "High Value",
                    subtitle: "Certification",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 sm:h-9 sm:w-9 text-purple-400 transform group-hover:scale-110 transition-transform duration-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                        />
                      </svg>
                    ),
                    title: "Lifetime",
                    subtitle: "Access",
                  },
                  {
                    icon: (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-8 w-8 sm:h-9 sm:w-9 text-blue-400 transform group-hover:scale-110 transition-transform duration-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                        />
                      </svg>
                    ),
                    title: "1000+",
                    subtitle: "Students",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="group relative bg-white/5 backdrop-blur-md p-4 sm:p-5 rounded-xl border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-2xl hover:shadow-purple-500/10 overflow-hidden"
                  >
                    <div className="text-xl sm:text-2xl font-bold mb-2 flex items-center justify-center gap-2">
                      <span className="transform group-hover:scale-110 transition-transform duration-500">
                        {feature.icon}
                      </span>
                      {feature.title}
                    </div>
                    <div className="text-sm sm:text-base opacity-90 group-hover:text-purple-300 transition-colors duration-500">
                      {feature.subtitle}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 rounded-xl"></div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enhanced Hero Image Section with more dramatic effects */}
            <div className="relative hidden lg:block">
              <div className="relative w-full">
                <img
                  src={logo}
                  alt="Digital entrepreneur working"
                  className="w-full h-auto object-cover rounded-xl"
                />
              </div>
              
              {/* Enhanced decorative elements */}
              <div className="absolute -top-4 -right-4 w-32 h-32 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-3xl animate-pulse-delayed"></div>
              <div className="absolute top-1/2 left-1/2 w-48 h-48 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full blur-3xl animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Packages Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">Educational Packages</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              Unlock Your Potential with Our Educational Packages - Enroll Today!
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              {
                name: "Pro",
                features: [
                  "Get access to 19 courses",
                  "Free Live Trainings",
                  "Additional Bonus Recorded Sessions",
                  "Learning from Leaders",
                  "WhatsApp, Email and Call Support",
                  "Complimentary Freelance Training",
                ],
                price: "₹4,999",
                recommended: false,
              },
              {
                name: "Supreme",
                features: [
                  "Get access to 30 courses",
                  "Free Live Trainings",
                  "Additional Bonus Recorded Sessions",
                  "Learning from Leaders",
                  "WhatsApp, Email and Call Support",
                  "Complimentary Freelance Training",
                ],
                price: "₹7,999",
                recommended: true,
              },
              {
                name: "Premium",
                features: [
                  "Get Access to 38 Courses",
                  "Free Live Trainings",
                  "Additional Bonus Recorded Sessions",
                  "Learning from Leaders",
                  "WhatsApp, Email and Call Support",
                  "Complimentary Freelance Training",
                ],
                price: "₹9,999",
                recommended: true,
              },
              {
                name: "Premium Plus",
                features: [
                  "Get Access to All Courses",
                  "Free Live Trainings",
                  "Additional Bonus Recorded Sessions",
                  "Learning from Leaders",
                  "WhatsApp, Email and Call Support",
                  "Complimentary Freelance Training",
                ],
                price: "₹14,999",
                recommended: false,
              },
            ].map((pkg, index) => (
              <div
                key={index}
                className={`relative bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 ${
                  pkg.recommended ? "ring-2 ring-purple-500" : ""
                }`}
              >
                {pkg.recommended && (
                  <div className="absolute top-0 right-0 bg-purple-600 text-white px-3 py-1 rounded-bl-lg text-xs sm:text-sm font-medium">
                    Recommended
                  </div>
                )}
                <div className="p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 sm:mb-4">{pkg.name}</h3>
                  <div className="text-2xl sm:text-3xl font-bold text-purple-400 mb-4 sm:mb-6">{pkg.price}</div>
                  <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <svg
                          className="h-4 w-4 sm:h-5 sm:w-5 text-purple-400 mr-2 mt-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                        <span className="text-sm sm:text-base text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={`/packages/${pkg.name.toLowerCase()}`}
                    className="block w-full bg-purple-600 text-white text-center py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-purple-700 transition-colors duration-300"
                  >
                    Get Started
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Freelance Training Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto bg-white/10 backdrop-blur-md rounded-xl shadow-lg overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 p-6 sm:p-8 md:p-12">
                <div className="flex items-center mb-4">
                  <img
                    src="/trainer-avatar.jpg"
                    alt="Trainer"
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4 border-2 border-purple-500"
                  />
                  <div>
                    <h4 className="text-purple-400 font-medium text-sm sm:text-base">Harsh Vira</h4>
                    <p className="text-gray-200 text-xs sm:text-sm">
                      Trainer | NISM certified | Tedx Speaker
                    </p>
                  </div>
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
                  How to start Stock Market Trading?
                </h2>
                <div className="flex items-center text-gray-200 mb-4 sm:mb-6">
                  <svg
                    className="h-4 w-4 sm:h-5 sm:w-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                  <span className="text-sm sm:text-base">April 07, 2025</span>
                </div>
                <p className="text-gray-200 mb-6 leading-relaxed text-sm sm:text-base">
                  Discover the secrets to grow your money in stock market with
                  right strategy and knowledge from top notch expert, Harsh Vira
                  who is NISM certified and has trained thousands of students.
                  Don't miss the session on 7 April 2025 at sharp 4 PM.
                </p>
                <button className="bg-purple-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-purple-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center">
                  Explore Now
                  <svg
                    className="w-4 h-4 sm:w-5 sm:h-5 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </button>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/training-banner.jpg"
                  alt="Training Banner"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">Why EduNexx</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              Your Gateway to Lifelong Learning and Success.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: (
                  <svg
                    className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                ),
                title: "Experienced Trainers",
                description:
                  "Learn from industry experts with years of practical experience in their fields.",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                ),
                title: "Growing Course Library",
                description:
                  "Access to constantly updated courses with new content added regularly.",
              },
              {
                icon: (
                  <svg
                    className="w-10 h-10 sm:w-12 sm:h-12 text-purple-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                ),
                title: "Supportive Community",
                description:
                  "Join a network of like-minded learners and professionals.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 sm:p-8 rounded-xl hover:shadow-md transition-shadow duration-300 text-center"
              >
                <div className="flex justify-center mb-4">{item.icon}</div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3 text-white">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-200">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 text-white">What Our Students Say</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-200 max-w-2xl mx-auto">
              Success stories from our growing community of learners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Rahul Sharma",
                role: "Digital Marketer",
                avatar: "/avatar-1.jpg",
                quote:
                  "The courses transformed my career. I went from beginner to professional in just 3 months!",
                rating: 5,
              },
              {
                name: "Priya Patel",
                role: "Graphic Designer",
                avatar: "/avatar-2.jpg",
                quote:
                  "The practical approach helped me build a portfolio that landed me multiple freelance clients.",
                rating: 5,
              },
              {
                name: "Amit Singh",
                role: "Stock Trader",
                avatar: "/avatar-3.jpg",
                quote:
                  "The stock market course gave me the confidence to start trading independently. Highly recommended!",
                rating: 4,
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-md p-4 sm:p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover mr-3 sm:mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-white text-sm sm:text-base">{testimonial.name}</h4>
                    <p className="text-gray-200 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-200 mb-3 sm:mb-4 italic text-sm sm:text-base">
                  "{testimonial.quote}"
                </p>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 sm:w-5 sm:h-5 ${
                        i < testimonial.rating
                          ? "text-yellow-400"
                          : "text-yellow-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
