import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <div className="relative bg-gradient-to-br from-orange-50 via-white to-pink-50 min-h-[800px] flex items-center justify-center py-20">
      <div className="max-w-6xl mx-auto sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* ================= CONTACT INFO ================= */}
          <div className="p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition duration-500 animate-fadeInLeft">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-4">Get in Touch</h1>
            <p className="text-gray-600 mb-8">Fill in the form and start a conversation with us.</p>

            {/* Address */}
            <div className="flex items-center mb-6 text-gray-600">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-orange-500">
                <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span className="ml-4 font-semibold">Acme Inc, Street, State, Postal Code</span>
            </div>

            {/* Phone */}
            <div className="flex items-center mb-6 text-gray-600">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-orange-500">
                <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="ml-4 font-semibold">+44 1234567890</span>
            </div>

            {/* Email */}
            <div className="flex items-center mb-8 text-gray-600">
              <svg fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" className="w-8 h-8 text-orange-500">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="ml-4 font-semibold">info@acme.org</span>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4 mt-4">
              <a href="#" className="text-orange-600 hover:text-orange-800 transition"><FaFacebookF /></a>
              <a href="#" className="text-orange-600 hover:text-orange-800 transition"><FaTwitter /></a>
              <a href="#" className="text-orange-600 hover:text-orange-800 transition"><FaLinkedinIn /></a>
              <a href="#" className="text-orange-600 hover:text-orange-800 transition"><FaGithub /></a>
            </div>
          </div>

          {/* ================= CONTACT FORM ================= */}
          <form className="p-8 bg-white rounded-3xl shadow-2xl hover:shadow-3xl transition duration-500 animate-fadeInRight flex flex-col gap-4">
            <input
              type="text"
              placeholder="Full Name"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-orange-500 transition"
            />
            <input
              type="email"
              placeholder="Email"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-orange-500 transition"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-orange-500 transition"
            />
            <textarea
              placeholder="Your Message"
              className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:border-orange-500 transition h-32"
            />
            <button
              type="submit"
              className="bg-orange-600 hover:bg-orange-700 text-white font-bold py-3 px-6 rounded-xl transition transform hover:scale-105"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* ================= MAP SECTION ================= */}
        <div className="mt-16 rounded-3xl overflow-hidden shadow-lg animate-fadeInUp">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019545665556!2d-122.41941508468116!3d37.77492977975944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064f3e38d87%3A0x62ed7fdb1f4db81e!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1637590030760!5m2!1sen!2sus"
            width="100%"
            height="400"
            className="border-0 w-full"
            allowFullScreen=""
            loading="lazy"
            title="Office Location"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
