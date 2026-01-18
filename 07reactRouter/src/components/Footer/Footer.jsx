import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-indigo-50 via-white to-pink-50 border-t">
      <div className="max-w-screen-xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 animate-fadeInUp">

          {/* Logo */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
                className="h-12 w-12"
                alt="Tech Study Logo"
              />
              <h2 className="text-xl font-bold text-gray-900">
                TechStudy
              </h2>
            </div>
            <p className="text-gray-600 text-sm">
              Learn modern web development, programming, and software
              engineering with practical, real-world projects.
            </p>
          </div>

          {/* Links */}
          <div>
            <h2 className="mb-4 font-semibold text-gray-900 uppercase">
              Resources
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="/" className="hover:text-indigo-600 transition">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-indigo-600 transition">
                  About
                </Link>
              </li>
              <li>
                <Link to="/github" className="hover:text-indigo-600 transition">
                  GitHub
                </Link>
              </li>
            </ul>
          </div>

          {/* Follow */}
          <div>
            <h2 className="mb-4 font-semibold text-gray-900 uppercase">
              Follow Us
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <a
                  href="https://github.com/ShivamKumar-123"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-indigo-600 transition"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-indigo-600 transition"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h2 className="mb-4 font-semibold text-gray-900 uppercase">
              Legal
            </h2>
            <ul className="space-y-2 text-gray-600">
              <li>
                <Link to="#" className="hover:text-indigo-600 transition">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="#" className="hover:text-indigo-600 transition">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-gray-200" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">

          <p className="text-sm text-gray-500">
            © 2025{" "}
            <span className="font-semibold text-gray-700">
              TechStudy
            </span>
            . All rights reserved.
          </p>

          {/* Social Icons */}
          <div className="flex gap-4">
            {["GitHub", "LinkedIn", "Twitter"].map((icon, i) => (
              <div
                key={i}
                className="p-2 rounded-full bg-white shadow
                hover:scale-110 hover:text-indigo-600 transition duration-300 cursor-pointer"
              >
                {icon[0]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
