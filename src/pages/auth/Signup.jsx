import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    state: '',
    age: '',
    gender: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { signup } = useAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await signup(formData);
      navigate('/login');
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to sign up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-purple-800 flex items-center justify-center py-6 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-float-delayed"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-pink-500/20 rounded-full blur-3xl animate-float-slow"></div>
      </div>

      <div className="max-w-4xl w-full space-y-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl shadow-2xl border-2 border-purple-500/30 transform hover:scale-[1.01] transition-all duration-300 relative">
        {/* Decorative elements */}
        <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-purple-500/30 to-pink-500/30 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-xl animate-pulse-delayed"></div>

        <div className="sm:mx-auto sm:w-full relative">
          <div className="flex justify-center">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg shadow-purple-500/30 transform hover:scale-110 transition-transform duration-300">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>
          <h2 className="mt-4 text-center text-3xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent animate-gradient">
            Create your account
          </h2>
          <p className="mt-1 text-center text-sm text-gray-300">
            Or{' '}
            <Link to="/login" className="font-medium text-purple-400 hover:text-purple-300 transition-colors duration-300 hover:underline">
              sign in to your account
            </Link>
          </p>
        </div>

        <div className="mt-4">
          <div className="bg-white/5 backdrop-blur-md py-4 px-4 rounded-xl shadow-lg border border-purple-500/20 relative overflow-hidden">
            {/* Animated border gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/20 to-purple-500/0 animate-gradient-x"></div>

            {error && (
              <div className="mb-3 bg-red-500/10 border border-red-500/20 text-red-400 px-3 py-2 rounded-lg flex items-center space-x-2 text-sm">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>{error}</span>
              </div>
            )}

            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="group">
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                    First name
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="firstName"
                      name="firstName"
                      type="text"
                      required
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter your first name"
                      className="appearance-none block w-full px-3 py-2 bg-white/5 border border-purple-500/30 rounded-lg shadow-sm placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 group-hover:border-purple-500/50 text-sm"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                    Last name
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="lastName"
                      name="lastName"
                      type="text"
                      required
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter your last name"
                      className="appearance-none block w-full px-3 py-2 bg-white/5 border border-purple-500/30 rounded-lg shadow-sm placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 group-hover:border-purple-500/50 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="group">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                    Email address
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="appearance-none block w-full px-3 py-2 bg-white/5 border border-purple-500/30 rounded-lg shadow-sm placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 group-hover:border-purple-500/50 text-sm"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                    Password
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="new-password"
                      required
                      value={formData.password}
                      onChange={handleChange}
                      placeholder="Enter your password"
                      className="appearance-none block w-full px-3 py-2 bg-white/5 border border-purple-500/30 rounded-lg shadow-sm placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 group-hover:border-purple-500/50 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="group">
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                    Phone number
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="appearance-none block w-full px-3 py-2 bg-white/5 border border-purple-500/30 rounded-lg shadow-sm placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 group-hover:border-purple-500/50 text-sm"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="state" className="block text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                    State
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="state"
                      name="state"
                      type="text"
                      value={formData.state}
                      onChange={handleChange}
                      placeholder="Enter your state"
                      className="appearance-none block w-full px-3 py-2 bg-white/5 border border-purple-500/30 rounded-lg shadow-sm placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 group-hover:border-purple-500/50 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="group">
                  <label htmlFor="age" className="block text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                    Age
                  </label>
                  <div className="mt-1 relative">
                    <input
                      id="age"
                      name="age"
                      type="number"
                      min="1"
                      value={formData.age}
                      onChange={handleChange}
                      placeholder="Enter your age"
                      className="appearance-none block w-full px-3 py-2 bg-white/5 border border-purple-500/30 rounded-lg shadow-sm placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 group-hover:border-purple-500/50 text-sm"
                    />
                  </div>
                </div>

                <div className="group">
                  <label htmlFor="gender" className="block text-sm font-medium text-gray-300 group-hover:text-purple-400 transition-colors duration-300">
                    Gender
                  </label>
                  <div className="mt-1 relative">
                    <select
                      id="gender"
                      name="gender"
                      value={formData.gender}
                      onChange={handleChange}
                      className="appearance-none block w-full px-3 py-2 bg-white/5 border border-purple-500/30 rounded-lg shadow-sm placeholder-gray-400 text-gray-200 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all duration-300 group-hover:border-purple-500/50 text-sm"
                    >
                      <option value="">Select gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full flex justify-center items-center space-x-2 py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-700 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500 disabled:opacity-50 transform hover:scale-[1.02] transition-all duration-300 relative overflow-hidden group"
                >
                  <span className="relative z-10 flex items-center">
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Creating account...
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Create account
                      </>
                    )}
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup; 