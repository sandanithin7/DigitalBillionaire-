import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  // Mock data - In a real app, this would come from an API
  const userData = {
    name: "John Doe",
    enrolledCourses: 3,
    completedCourses: 1,
    progress: 35,
    nextLiveSession: "2024-03-20T10:00:00",
    package: "Premium"
  };

  const courses = [
    {
      id: 1,
      title: "Digital Marketing Fundamentals",
      progress: 75,
      lastAccessed: "2024-03-15",
      nextLesson: "Social Media Marketing"
    },
    {
      id: 2,
      title: "SEO Mastery",
      progress: 30,
      lastAccessed: "2024-03-18",
      nextLesson: "Keyword Research"
    },
    {
      id: 3,
      title: "Content Marketing",
      progress: 0,
      lastAccessed: "Not started",
      nextLesson: "Introduction to Content Marketing"
    }
  ];

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="h-screen overflow-hidden bg-gradient-to-br from-black via-gray-700 to-purple-800">
      <div className="container mx-auto px-4 h-full py-4">
        <div className="grid grid-cols-12 gap-4 h-full">
          {/* Left Column - Welcome and Stats */}
          <div className="col-span-12 lg:col-span-4 space-y-4">
            {/* Welcome Section */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-purple-500/30">
              <div className="flex justify-between items-center">
                <div>
                  <h1 className="text-xl font-bold text-white">Welcome, {userData.name}!</h1>
                  <p className="text-gray-300 text-sm">Your learning progress</p>
                </div>
                <span className="inline-block bg-purple-500/20 text-purple-200 px-2 py-1 rounded-full text-xs font-medium border border-purple-500/30">
                  {userData.package}
                </span>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-2">
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-purple-500/30">
                <h3 className="text-gray-300 text-xs font-medium">Enrolled</h3>
                <p className="text-2xl font-bold text-white">{userData.enrolledCourses}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-purple-500/30">
                <h3 className="text-gray-300 text-xs font-medium">Completed</h3>
                <p className="text-2xl font-bold text-white">{userData.completedCourses}</p>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 border border-purple-500/30">
                <h3 className="text-gray-300 text-xs font-medium">Progress</h3>
                <p className="text-2xl font-bold text-white">{userData.progress}%</p>
              </div>
            </div>

            {/* Next Live Session */}
            <div className="bg-purple-500/10 backdrop-blur-md rounded-xl p-4 border border-purple-500/30">
              <h2 className="text-lg font-bold text-white mb-2">Next Live Session</h2>
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <svg className="h-6 w-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-white">Digital Marketing Live Training</p>
                  <p className="text-xs text-gray-300">{formatDate(userData.nextLiveSession)}</p>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-2">
              <Link 
                to="/courses"
                className="bg-white/10 backdrop-blur-md rounded-xl p-3 hover:bg-white/20 transition-all duration-300 border border-purple-500/30"
              >
                <h3 className="text-sm font-medium text-white mb-1">Browse Courses</h3>
                <p className="text-xs text-gray-300">Explore catalog</p>
              </Link>
              <Link 
                to="/support"
                className="bg-white/10 backdrop-blur-md rounded-xl p-3 hover:bg-white/20 transition-all duration-300 border border-purple-500/30"
              >
                <h3 className="text-sm font-medium text-white mb-1">Get Support</h3>
                <p className="text-xs text-gray-300">Need help?</p>
              </Link>
            </div>
          </div>

          {/* Right Column - Courses */}
          <div className="col-span-12 lg:col-span-8">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-purple-500/30 h-full overflow-y-auto">
              <h2 className="text-lg font-bold text-white mb-4">Your Courses</h2>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div key={course.id} className="border-b border-purple-500/30 pb-4 last:border-0 last:pb-0">
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h3 className="text-sm font-medium text-white">{course.title}</h3>
                        <p className="text-xs text-gray-300">
                          Next: {course.nextLesson}
                        </p>
                      </div>
                      <span className="inline-block bg-purple-500/20 text-purple-200 px-2 py-1 rounded-full text-xs border border-purple-500/30">
                        Last: {course.lastAccessed}
                      </span>
                    </div>
                    <div className="w-full bg-gray-700/50 rounded-full h-1.5">
                      <div 
                        className="bg-purple-500 h-1.5 rounded-full" 
                        style={{ width: `${course.progress}%` }}
                      ></div>
                    </div>
                    <div className="mt-1 flex justify-between items-center">
                      <span className="text-xs text-gray-300">{course.progress}% Complete</span>
                      <Link 
                        to={`/courses/${course.id}`}
                        className="text-purple-400 hover:text-purple-300 text-xs font-medium transition-colors duration-300"
                      >
                        Continue →
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
