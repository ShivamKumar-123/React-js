import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-white/80 shadow-md animate-fadeInDown">
      <nav className="max-w-screen-xl mx-auto px-6 py-3">
        <div className="flex items-center justify-between">

          {/* Logo + Brand */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="https://cdn-icons-png.flaticon.com/512/2721/2721297.png"
              className="h-10 w-10 hover:scale-110 transition duration-300"
              alt="Tech Study Logo"
            />
            <span className="text-xl font-extrabold text-gray-900 tracking-wide">
              TechStudy
            </span>
          </Link>

          {/* Nav Links */}
          <ul className="hidden md:flex gap-8 font-medium">
            {[
              { name: "Home", path: "/" },
              { name: "About", path: "/about" },
              { name: "Contact", path: "/contact" },
              { name: "GitHub", path: "/Github" },
            ].map((item) => (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `relative text-gray-700 transition
                     after:absolute after:left-0 after:-bottom-1
                     after:h-[2px] after:bg-orange-600
                     after:transition-all after:duration-300
                    ${
                      isActive
                        ? "after:w-full text-orange-600"
                        : "after:w-0 hover:after:w-full hover:text-orange-600"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/login"
              className="px-4 py-2 text-gray-700 hover:text-orange-600 transition"
            >
              Log in
            </Link>
            <Link
              to="/signup"
              className="px-5 py-2 bg-orange-600 text-white rounded-xl shadow
              hover:bg-orange-700 hover:scale-105 transition duration-300"
            >
              Get Started
            </Link>
          </div>

        </div>
      </nav>
    </header>
  );
}
