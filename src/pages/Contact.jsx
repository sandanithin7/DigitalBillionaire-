import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically handle the form submission
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thank you for your message. We will get back to you soon!');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-700 to-purple-800 py-8">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-8 text-white">Contact Us</h1>
          
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h2 className="text-2xl font-bold mb-6 text-white">Get in Touch</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-400">Address</h3>
                  <p className="text-gray-300">
                    123 Education Street<br />
                    Learning City, LC 12345<br />
                    United States
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-400">Email</h3>
                  <p className="text-gray-300">
                    info@edunexx.com<br />
                    support@edunexx.com
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-400">Phone</h3>
                  <p className="text-gray-300">
                    +1 (555) 123-4567<br />
                    +1 (555) 987-6543
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-2 text-purple-400">Working Hours</h3>
                  <p className="text-gray-300">
                    Monday - Friday: 9:00 AM - 6:00 PM<br />
                    Saturday: 10:00 AM - 4:00 PM<br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-purple-500/30">
              <h2 className="text-2xl font-bold mb-6 text-white">Send us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-purple-500/30 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-purple-500/30 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-white/5 border border-purple-500/30 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="4"
                    className="w-full px-4 py-2 bg-white/5 border border-purple-500/30 rounded-md text-gray-200 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-purple-600 text-white py-2 px-4 rounded-md hover:bg-purple-700 transition-colors duration-200"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 