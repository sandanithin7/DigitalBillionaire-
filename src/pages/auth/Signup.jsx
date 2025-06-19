import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { FaUser, FaEnvelope, FaLock, FaPhone, FaMapMarker, FaCalendar, FaVenusMars, FaStar, FaHeadset, FaChartLine } from 'react-icons/fa';
import Navbar from '../../components/Navbar';

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
      const response = await signup(formData);
      if (response.success) {
        navigate('/login', { 
          state: { message: 'Account created successfully! Please login.' }
        });
      } else {
        setError(response.message || 'Failed to sign up');
      }
    } catch (err) {
      console.error('Signup error:', err);
      setError(err.message || 'Failed to sign up. Please try again.');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="min-h-screen bg-#111827 from-black via-gray-700 to-purple-800">
      <Navbar />
      <div className="pt-16 min-h-screen flex items-center justify-center p-4">
        <div className="flex flex-col lg:flex-row w-full max-w-6xl bg-white/10 backdrop-blur-sm rounded-2xl overflow-hidden shadow-2xl">
          {/* Left Side - Welcome Content */}
          <div className="lg:w-1/2 p-8 text-white flex flex-col">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-2">Welcome to DigitalBillionaire</h1>
              <p className="text-lg opacity-90">
                Join our platform and embark on your journey to digital success
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="bg-purple-600 p-2 rounded-full mr-3">
                  <FaStar className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Premium Content</h3>
                  <p className="opacity-80 text-sm">Access exclusive courses and resources</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-blue-600 p-2 rounded-full mr-3">
                  <FaHeadset className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Expert Support</h3>
                  <p className="opacity-80 text-sm">Get guidance from industry professionals</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-600 p-2 rounded-full mr-3">
                  <FaChartLine className="text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Growth Tools</h3>
                  <p className="opacity-80 text-sm">Everything you need to scale your business</p>
                </div>
              </div>
            </div>

            <div className="mt-auto">
              <img
                src="/images/signup.png"
                alt="Join DigitalBillionaire"
                className="rounded-lg w-full h-auto max-h-120 object-cover"
              />
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="lg:w-1/2 bg-#393E46 p-8 flex flex-col justify-center ">

          
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              Create Account
            </h2>

            {error && (
              <div className="mb-4 p-2 bg-red-50 border-l-4 border-red-500 text-red-700 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-3">
              <div className="relative col-span-2 sm:col-span-1">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              <div className="relative col-span-2 sm:col-span-1">
                <FaUser className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              <div className="relative col-span-2">
                <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              <div className="relative col-span-2">
                <FaLock className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              <div className="relative col-span-2 sm:col-span-1">
                <FaPhone className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              <div className="relative col-span-2 sm:col-span-1">
                <FaMapMarker className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="text"
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              <div className="relative col-span-2 sm:col-span-1">
                <FaCalendar className="absolute left-3 top-3 text-gray-400" />
                <input
                  type="number"
                  name="age"
                  placeholder="Age"
                  value={formData.age}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                />
              </div>

              <div className="relative col-span-2 sm:col-span-1">
                <FaVenusMars className="absolute left-3 top-3 text-gray-400" />
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className="pl-10 w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 text-sm"
                  required
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="col-span-2 py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors disabled:opacity-50 text-sm"
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>

              <p className="col-span-2 text-center text-xs text-white mt-2">
                Already have an account?{' '}
                <Link to="/login" className="text-blue-600 hover:text-blue-500 font-medium">
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>      </div>
    </div>
  );
};

export default Signup;