import { useState } from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="min-h-screen bg-[#F5F5F7] flex items-center justify-center pt-40 pb-12 px-6 relative overflow-hidden">
      <div className="w-full max-w-[1600px] mx-auto px-4">
        <div className="text-center relative">
          {/* Notification Banner */}
          <motion.div
            className="inline-flex items-center gap-2.5 bg-white px-5 py-2 rounded-full shadow-sm border border-gray-200 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-0 animate-slow-ping"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>

            <span className="text-[14px] font-inter text-gray-800">Only 2 open slots available!</span>
            <svg className="w-4 h-4 text-gray-500" viewBox="0 0 24 24" fill="none">
              <path d="M5 12h14M12 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          {/* Main Headline - Mobile */}
          <motion.h1
            className="block md:hidden text-[34px] leading-[1.1] text-center font-semibold tracking-tighter px-2 text-gray-900 font-satoshi mb-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            World-class Tech Partner <br /> Engineering Your Digital Success
          </motion.h1>

          {/* Main Headline - Desktop */}
          <motion.h1
            className="hidden md:block text-gray-900 font-satoshi font-semibold mb-5 pt-4 leading-[1.15] tracking-tight max-w-[900px] mx-auto"
            style={{ fontSize: '48px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            World-class Tech Partner{' '}
            <span className="inline-block">🎯</span>{' '}
            <span className="inline-block">💎</span>
            <br />
            Engineering Your Digital{' '}
            <span className="inline-block">⚡</span>{' '}
            <span className="text-[#0067F4]">Success</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-gray-700 font-inter text-[15px] md:text-[16px] leading-relaxed max-w-[620px] mx-auto mb-8 px-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Trusted by startups and enterprises to design, build, and scale products that perform globally.
          </motion.p>

          {/* CTA Button with hover effect */}
          {/* CTA Button with hover effect */}
<motion.button
  className="bg-[#1a1a1a] hover:bg-black text-white px-7 py-3.5 rounded-full font-inter text-[14px] font-medium transition-all duration-200 flex items-center mx-auto shadow-lg hover:shadow-xl mb-8"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  whileHover={{ scale: 1.02 }}
  whileTap={{ scale: 0.98 }}
  onMouseEnter={() => setIsHovered(true)}
  onMouseLeave={() => setIsHovered(false)}
>
  {/* Expandable container for icons */}
  <motion.div
    className="flex items-center relative overflow-visible"
    animate={{ width: isHovered ? '90px' : '28px' }}
    transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
  >
    {/* Logo Icon - stays on left */}
    <motion.div
      className="w-7 h-7 bg-white rounded-full flex items-center justify-center flex-shrink-0 absolute left-0 z-10"
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <img 
        src="/logo.png" 
        alt="CodeDale" 
        className="w-5 h-5 object-contain"
      />
    </motion.div>

    {/* Plus symbol */}
    <motion.span
      className="text-[14px] font-medium absolute"
      style={{ left: '50%', transform: 'translateX(-50%)' }}
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      +
    </motion.span>

    {/* You badge - appears on right */}
    <motion.div
      className="w-7 h-7 bg-[#0067F4] rounded-full flex items-center justify-center flex-shrink-0 absolute right-0"
      animate={{ opacity: isHovered ? 1 : 0 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
    >
      <span className="text-white text-[12px] font-semibold">You</span>
    </motion.div>
  </motion.div>

  <span className="whitespace-nowrap ml-2.5">Book a 30-Min call</span>
</motion.button>


          {/* User Avatars and Rating */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {/* Avatars */}
            <div className="flex items-center -space-x-2">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 border-2 border-white"></div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 border-2 border-white"></div>
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 border-2 border-white"></div>
              <div className="w-9 h-9 rounded-full bg-[#1a1a1a] border-2 border-white flex items-center justify-center">
                <span className="text-white text-[11px] font-semibold">+30</span>
              </div>
            </div>

            {/* Star Rating with text below */}
            <div className="flex flex-col items-center sm:items-start gap-0.5">
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-[17px] h-[17px] text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>
              <p className="text-gray-600 text-[13px] font-inter">From 30+ reviews</p>
            </div>
          </motion.div>

          {/* Left Testimonial Card */}
          <motion.div
            className="hidden xl:block absolute -left-6 top-[50%] w-[250px]"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: -8 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div
              className="relative bg-white rounded-2xl text-xs p-5 w-full rotate-[-8deg]"
              style={{ boxShadow: '0 10px 50px -12px rgba(0, 0, 0, 0.15)' }}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-gray-500 text-[13px] font-medium tracking-tight mb-3 leading-[1.2]">
                  &ldquo;CodeDale turned the impossible into possible and redefined our expectations of technology partners.&rdquo;
                </p>
                <svg className="w-4 h-4 flex-shrink-0 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>
              <span className="block font-semibold text-gray-900 text-xs">
                - Narasimha Reddy, CEO, TFS
              </span>
            </div>
          </motion.div>

          {/* Right Testimonial Card */}
          <motion.div
            className="hidden xl:block absolute -right-6 top-[42%] w-[250px]"
            initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
            animate={{ opacity: 1, scale: 1, rotate: 8 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div
              className="relative bg-white rounded-2xl text-xs p-5 w-full rotate-[8deg]"
              style={{ boxShadow: '0 10px 50px -12px rgba(0, 0, 0, 0.15)' }}
            >
              <div className="flex items-start justify-between gap-3">
                <p className="text-gray-500 text-[13px] font-medium tracking-tight mb-3 leading-[1.2]">
                  &ldquo;CodeDale didn&apos;t just help us build our vision — they helped us build our future.&rdquo;
                </p>
                <svg className="w-4 h-4 flex-shrink-0 text-gray-300" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                </svg>
              </div>
              <span className="block font-semibold text-gray-900 text-xs">
                - Sujith Reddy Gopu, CEO, Fluent Pro
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
