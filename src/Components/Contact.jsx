import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-green-500 h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-8 space-y-8">
        <div className="text-center text-white">
          <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
          <p className="text-lg">We'd love to hear from you!</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Form Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-gray-700 font-semibold">Name</label>
                <input type="text" id="name" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold">Email</label>
                <input type="email" id="email" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 font-semibold">Message</label>
                <textarea id="message" rows="4" className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
              </div>
              <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition duration-300">Send Message</button>
            </form>
          </div>

          {/* Map Location Section */}
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-xl font-bold text-gray-700 mb-4">Our Location</h2>
            <div className="h-64 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14193.639658286907!2d77.9852846!3d27.2062772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1734505344284!5m2!1sen!2sin"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
