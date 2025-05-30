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
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Welcome Section */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Welcome back, {userData.name}!</h1>
              <p className="text-gray-600 mt-1">Here's your learning progress</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {userData.package} Package
              </span>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-500 text-sm font-medium">Enrolled Courses</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{userData.enrolledCourses}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-500 text-sm font-medium">Completed Courses</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{userData.completedCourses}</p>
          </div>
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-gray-500 text-sm font-medium">Overall Progress</h3>
            <p className="text-3xl font-bold text-gray-900 mt-2">{userData.progress}%</p>
          </div>
        </div>

        {/* Next Live Session */}
        <div className="bg-blue-50 rounded-xl p-6 mb-8">
          <h2 className="text-xl font-bold text-gray-900 mb-4">Next Live Session</h2>
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
            </div>
            <div className="ml-4">
              <p className="text-lg font-medium text-gray-900">Digital Marketing Live Training</p>
              <p className="text-gray-600">{formatDate(userData.nextLiveSession)}</p>
            </div>
          </div>
        </div>

        {/* Enrolled Courses */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Your Courses</h2>
          <div className="space-y-6">
            {courses.map((course) => (
              <div key={course.id} className="border-b border-gray-200 pb-6 last:border-0 last:pb-0">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{course.title}</h3>
                    <p className="text-sm text-gray-600 mt-1">
                      Next lesson: {course.nextLesson}
                    </p>
                  </div>
                  <div className="mt-4 md:mt-0">
                    <span className="inline-block bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm">
                      Last accessed: {course.lastAccessed}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div 
                    className="bg-blue-600 h-2.5 rounded-full" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="mt-2 flex justify-between items-center">
                  <span className="text-sm text-gray-600">{course.progress}% Complete</span>
                  <Link 
                    to={`/courses/${course.id}`}
                    className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                  >
                    Continue Learning →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            to="/courses"
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">Browse More Courses</h3>
            <p className="text-gray-600">Explore our full catalog of courses</p>
          </Link>
          <Link 
            to="/support"
            className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-lg font-medium text-gray-900 mb-2">Get Support</h3>
            <p className="text-gray-600">Need help? Contact our support team</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
