const Footer = () => {
  return (
    <footer className="bg-[#F5F5F7] pt-16 md:pt-20 lg:pt-24 pb-8 md:pb-12 relative overflow-hidden font-inter">
      {/* Background Watermark Text */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-full pointer-events-none select-none">
        <h1 className="text-[15vw] font-bold text-gray-200/40 text-center leading-none tracking-tight opacity-50">
          CodeDale
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 md:px-8 lg:px-12 relative z-10">
        {/* Main Grid Layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-[1.2fr_auto_auto_1.5fr] lg:items-start justify-between gap-12 lg:gap-x-16 lg:gap-y-0 mb-16 lg:mb-24">
          {/* Left: Logo & Description */}
<div className="flex flex-col gap-6">
  <div className="flex items-center gap-2">
    <div className="w-8 h-8 flex items-center justify-center shrink-0">
      <img 
        src="/logo.png" 
        alt="CodeDale Logo" 
        className="w-8 h-8 object-contain"
      />
    </div>
    <span className="text-[22px] font-satoshi font-bold text-[#0067F4]">CodeDale</span>
  </div>

  <p className="text-gray-500 text-[15px] leading-relaxed max-w-[280px]">
    Strategic web design, and campaigns tailored to drive result and conversions.
  </p>
</div>


          {/* Company Links - Desktop only */}
          <div className="flex-shrink-0 lg:block hidden">
            <h3 className="text-gray-900 font-medium text-[15px] mb-6">Company</h3>
            <ul className="flex flex-col gap-3.5">
              {['Services', 'Our Work', 'Achievements', 'FAQs', 'Brand', 'Contact'].map((item) => (
                <li key={item}>
                  <a href="#" className="group relative text-gray-500 hover:text-gray-900 transition-colors text-[14px] inline-block">
                    {item}
                    <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials Links - Desktop only */}
          <div className="flex-shrink-0 lg:block hidden">
            <h3 className="text-gray-900 font-medium text-[15px] mb-6">Socials</h3>
            <ul className="flex flex-col gap-3.5">
              {[
                { name: 'Email', url: '#' },
                { name: 'Instagram', url: '#' },
                { name: 'LinkedIn', url: '#' }
              ].map((social) => (
                <li key={social.name}>
                  <a href={social.url} className="group flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors text-[14px] w-fit">
                    <span className="relative">
                      {social.name}
                      <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                    <span className="text-[10px] ml-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      ↗
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter - Desktop only */}
          <div className="flex-1 max-w-[400px] lg:max-w-none lg:justify-self-end lg:block hidden">
            <h3 className="text-gray-900 font-medium text-[15px] mb-4">Newsletter</h3>
            <p className="text-gray-500 text-[14px] mb-6 leading-relaxed">
              Stay ahead with design & marketing tips and strategies that drive results.
            </p>

            <div className="relative group w-full">
              <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 z-10 text-[15px]">@</span>

              <input
                type="email"
                placeholder="Enter your email..."
                className="w-full bg-white rounded-full h-[56px] pl-10 pr-20 text-[15px] text-gray-800 placeholder:text-gray-400 outline-none shadow-sm focus:ring-1 focus:ring-blue-100 transition-all"
              />

              <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-14 h-[46px] bg-[#0067F4] rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all shadow-sm hover:scale-105">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile/Tablet Layout */}
          <div className="lg:w-[65%] flex flex-col gap-10 lg:gap-16 lg:hidden">
            {/* Links Group (Company + Socials side by side) */}
            <div className="flex gap-12 sm:gap-20">
              {/* Company Links */}
              <div className="flex-shrink-0">
                <h3 className="text-gray-900 font-medium text-[15px] mb-6">Company</h3>
                <ul className="flex flex-col gap-3.5">
                  {['Services', 'Our Work', 'Achievements', 'FAQs', 'Brand', 'Contact'].map((item) => (
                    <li key={item}>
                      <a href="#" className="group relative text-gray-500 hover:text-gray-900 transition-colors text-[14px] inline-block">
                        {item}
                        <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Socials Links */}
              <div className="flex-shrink-0">
                <h3 className="text-gray-900 font-medium text-[15px] mb-6">Socials</h3>
                <ul className="flex flex-col gap-3.5">
                  {[
                    { name: 'Email', url: '#' },
                    { name: 'Instagram', url: '#' },
                    { name: 'LinkedIn', url: '#' }
                  ].map((social) => (
                    <li key={social.name}>
                      <a href={social.url} className="group flex items-center gap-1 text-gray-500 hover:text-gray-900 transition-colors text-[14px] w-fit">
                        <span className="relative">
                          {social.name}
                          <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
                        </span>
                        <span className="text-[10px] ml-1 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                          ↗
                        </span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter - Stacks below on mobile/tablet */}
            <div className="flex-1 max-w-[400px]">
              <h3 className="text-gray-900 font-medium text-[15px] mb-4">Newsletter</h3>
              <p className="text-gray-500 text-[14px] mb-6 leading-relaxed">
                Stay ahead with design & marketing tips and strategies that drive results.
              </p>

              <div className="relative group w-full">
                <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 z-10 text-[15px]">@</span>

                <input
                  type="email"
                  placeholder="Enter your email..."
                  className="w-full bg-white rounded-full h-[56px] pl-10 pr-20 text-[15px] text-gray-800 placeholder:text-gray-400 outline-none shadow-sm focus:ring-1 focus:ring-blue-100 transition-all"
                />

                <button className="absolute right-1.5 top-1/2 -translate-y-1/2 w-14 h-[46px] bg-[#0067F4] rounded-full flex items-center justify-center text-white hover:bg-blue-700 transition-all shadow-sm hover:scale-105">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-0 gap-6 md:gap-4 text-center md:text-left">
          <p className="text-gray-500 text-[13px]">
            ©2025 CodeDale All rights reserved
          </p>
          <div className="flex gap-6 md:gap-8">
            <a href="#" className="relative group text-gray-500 hover:text-gray-900 text-[13px] transition-colors">
              Privacy Policy
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="relative group text-gray-500 hover:text-gray-900 text-[13px] transition-colors">
              Terms of Service
              <span className="absolute left-0 bottom-0 w-0 h-[1px] bg-gray-900 transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
