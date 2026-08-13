import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Features", href: "#features" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-100 shadow-sm transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex-shrink-0 flex items-center cursor-pointer group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold text-lg shadow-md group-hover:scale-105 transition-transform duration-300">
              A
            </div>
            <span className="ml-3 text-lg font-semibold text-slate-800 tracking-tight group-hover:text-blue-600 transition-colors duration-200">
              SB <span className="text-blue-600">Corp</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 bg-slate-100/80 p-1.5 rounded-full border border-slate-200/60 shadow-inner">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-medium text-slate-600 px-4 py-2 rounded-full hover:text-slate-900 hover:bg-white hover:shadow-xs transition-all duration-200 ease-in-out"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Call to Action */}
          <div className="hidden md:flex items-center space-x-3">
            <a
              href="#login"
              className="text-xs font-semibold text-slate-600 hover:text-blue-600 px-3 py-2 transition-colors duration-200"
            >
              Sign In
            </a>
            <a
              href="#get-started"
              className="relative inline-flex items-center justify-center text-xs font-semibold text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-full shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="text-slate-600 hover:text-slate-900 focus:outline-none p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden animate-in slide-in-from-top-2 duration-200 border-b border-slate-100 bg-white px-4 pt-2 pb-6 shadow-lg">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 hover:text-blue-600 hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <hr className="my-2 border-slate-100" />
            <a
              href="#login"
              className="text-sm font-medium text-slate-700 hover:text-blue-600 px-3 py-2 transition-colors"
            >
              Sign In
            </a>
            <a
              href="#get-started"
              className="text-center text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 py-2.5 rounded-xl shadow-md transition-colors"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
