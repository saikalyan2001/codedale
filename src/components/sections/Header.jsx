import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const NAV_LINKS = ['Services', 'Our Work', 'Achievements', 'FAQs', 'Contact'];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [cursor, setCursor] = useState({ left: 0, width: 0, opacity: 0 });

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 pt-4 sm:pt-6">
        {/* Desktop / Tablet layout (>= 768px) */}
        <div className="hidden md:flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Logo size="desktop" />
          </div>

          {/* Center nav pill with hover background */}
          <div className="flex-1 flex justify-center px-4">
            <div
              className="relative flex items-center rounded-full bg-white px-6 lg:px-10 py-3 gap-4 lg:gap-7 transition-all duration-200 hover:-translate-y-[2px]"
              style={{ boxShadow: '0 18px 45px rgba(15, 23, 42, 0.12)' }}
              onMouseLeave={() => setCursor((p) => ({ ...p, opacity: 0 }))}
            >
              {/* Sliding background pill */}
              <motion.div
                className="absolute top-1 bottom-1 rounded-full bg-[#F5F5F7]"
                animate={cursor}
                transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                style={{ zIndex: 0 }}
              />

              {NAV_LINKS.map((link) => (
                <NavItem key={link} label={link} setCursor={setCursor} />
              ))}
            </div>
          </div>

          {/* Right black CTA pill with hover effect */}
          <div className="flex-shrink-0">
            <button
              className="rounded-full bg-black text-white px-6 lg:px-7 py-3 font-inter text-[14px] font-medium flex items-center gap-2 transition-all duration-200 hover:-translate-y-[2px] hover:scale-[1.02]"
              style={{ boxShadow: '0 18px 45px rgba(15, 23, 42, 0.35)' }}
            >
              Book a Call
              <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-white/10">
                ↗
              </span>
            </button>
          </div>
        </div>

        {/* Mobile layout (< 768px): pill that expands */}
        <motion.div
          className="md:hidden bg-white rounded-3xl overflow-hidden"
          style={{ boxShadow: '0 6px 24px rgba(0,0,0,0.06)' }}
          initial={false}
          animate={{ height: 'auto' }}
        >
          {/* Top row */}
          <div className="flex items-center justify-between px-4 py-3">
            <Logo size="mobile" />

            {/* Hamburger / X */}
            <button
              className="w-8 h-8 flex items-center justify-center rounded-full bg-[#F5F5F7] transition-all duration-200 hover:scale-110 active:scale-95"
              onClick={() => setOpen((o) => !o)}
              aria-label="Toggle menu"
            >
              {open ? <CloseIcon /> : <MenuIcon />}
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
                  {NAV_LINKS.map((link) => (
                    <a
                      key={link}
                      href={`#${link.toLowerCase().replace(' ', '-')}`}
                      className="block text-gray-900 font-inter text-[15px] py-2.5 transition-colors hover:text-[#0067F4]"
                      onClick={() => setOpen(false)}
                    >
                      {link}
                    </a>
                  ))}
                </nav>
                <button
                  className="w-full bg-[#F5F5F7] text-gray-900 rounded-full py-3 text-[15px] font-inter border border-gray-200 transition-all duration-200 hover:bg-gray-900 hover:text-white active:scale-[0.98]"
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

/**
 * Individual navigation link with hover cursor tracking
 */
const NavItem = ({ label, setCursor }) => {
  const ref = useRef(null);

  return (
    <button
      ref={ref}
      type="button"
      onMouseEnter={() => {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const parentRect = ref.current.parentElement.getBoundingClientRect();
        const width = rect.width + 16;
        const left = rect.left - parentRect.left - 8;

        setCursor({ left, width, opacity: 1 });
      }}
      className="relative z-10 text-gray-800 font-inter text-[14px] lg:text-[15px] whitespace-nowrap transition-colors"
    >
      {label}
    </button>
  );
};

/**
 * CodeDale logo with lightning bolt icon
 */
const Logo = ({ size }) => {
  const textSize = size === 'mobile' ? 'text-[16px]' : 'text-[18px]';

  return (
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
      <span className={`${textSize} font-satoshi font-bold text-[#0067F4]`}>
        CodeDale
      </span>
    </div>
  );
};

const MenuIcon = () => (
  <svg className="w-4 h-4 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CloseIcon = () => (
  <svg className="w-4 h-4 text-gray-800" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default Header;
