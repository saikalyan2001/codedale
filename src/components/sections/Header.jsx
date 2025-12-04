import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header = () => {
  const navLinks = ['Services', 'Our Work', 'Achievements', 'FAQs', 'Contact'];
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 pt-4 sm:pt-6">
        {/* =================================================================== */}
        {/* Desktop / Tablet layout (>= 768px)                                */}
        {/* =================================================================== */}
        <div className="hidden md:flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#0067F4] rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[18px] font-satoshi font-bold text-[#0067F4]">
                CodeDale
              </span>
            </div>
          </div>

          {/* Center nav pill */}
          <div className="flex-1 flex justify-center px-4">
            <div
              className="flex items-center rounded-full bg-white px-6 lg:px-10 py-3 gap-4 lg:gap-7"
              style={{ boxShadow: '0 18px 45px rgba(15, 23, 42, 0.12)' }}
            >
              {navLinks.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase().replace(' ', '-')}`}
                  className="text-gray-800 font-inter text-[14px] lg:text-[15px] whitespace-nowrap"
                >
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Right black CTA pill */}
          <div className="flex-shrink-0">
            <button
              className="rounded-full bg-black text-white px-6 lg:px-7 py-3 font-inter text-[14px] font-medium flex items-center gap-2"
              style={{ boxShadow: '0 18px 45px rgba(15, 23, 42, 0.35)' }}
            >
              Book a Call
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10">
                ↗
              </span>
            </button>
          </div>
        </div>

        {/* =================================================================== */}
        {/* Mobile layout (< 768px): pill that expands                       */}
        {/* =================================================================== */}
        <motion.div
          className="md:hidden bg-white rounded-3xl overflow-hidden"
          style={{ boxShadow: '0 6px 24px rgba(0,0,0,0.06)' }}
          initial={false}
          animate={{ height: 'auto' }}
        >
          {/* Top row */}
          <div className="flex items-center justify-between px-4 py-3">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 bg-[#0067F4] rounded-full flex items-center justify-center">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 3L4 14h7l-1 7 9-11h-7l1-7z"
                    fill="white"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-[16px] font-satoshi font-bold text-[#0067F4]">
                CodeDale
              </span>
            </div>

            {/* Hamburger / X */}
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F7]"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? (
                <svg className="w-4 h-4 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-4 h-4 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile dropdown content */}
          <AnimatePresence initial={false}>
            {open && (
              <motion.div
                className="px-4 pt-3 pb-4"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2 }}
                style={{ overflow: 'hidden' }}
              >
                <nav className="mb-4 space-y-1">
                  {navLinks.map((link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="block text-gray-900 font-inter text-[15px] py-2.5"
                      onClick={() => setOpen(false)}
                    >
                      {link}
                    </a>
                  ))}
                </nav>
                <button
                  className="w-full bg-[#F5F5F7] text-gray-900 rounded-full py-3 text-[15px] font-inter border border-gray-200"
                  onClick={() => setOpen(false)}
                >
                  Book a Call
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
