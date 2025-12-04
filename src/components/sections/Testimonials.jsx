import { useState, useEffect, useRef } from 'react';

const testimonials = [
  {
    id: 1,
    image: 'https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800&auto=format&fit=crop&q=80',
    clientQuote: 'We imagined the extraordinary—a 3D immersive experience. CodeDale brought it to life with precision and creativity.',
    clientName: 'Nino Gorbach',
    clientRole: 'COO, ATH',
    clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    reply: 'Pushing boundaries is what we do',
    company: 'CodeDale'
  },
  {
    id: 2,
    image: 'https://images.unsplash.com/photo-1555421689-d68471e189f2?w=800&auto=format&fit=crop&q=80',
    clientQuote: 'CodeDale turned our vision into reality. Instant, personalized feedback changed student learning forever.',
    clientName: 'Sujith Reddy Gopu',
    clientRole: 'Founder of Fluent Pro',
    clientAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    reply: 'Honored to drive lasting impact.',
    company: 'CodeDale'
  },
  {
    id: 3,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80',
    clientQuote: 'From vision to live product in seven days—unbelievable! CodeDale delivered speed and perfection.',
    clientName: 'Karim A. Oumran',
    clientRole: 'Founder of SaaS King',
    clientAvatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&auto=format&fit=crop&q=80',
    reply: 'Thrilled to make the impossible real.',
    company: 'CodeDale'
  },
  {
    id: 4,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80',
    clientQuote: 'We thought it was impossible. CodeDale made it possible and changed how we see tech partners.',
    clientName: 'Narasimha Reddy',
    clientRole: 'Founder & CEO of TFS',
    clientAvatar: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&auto=format&fit=crop&q=80',
    reply: 'Grateful to set new standards together.',
    company: 'CodeDale'
  },
  {
    id: 5,
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&auto=format&fit=crop&q=80',
    clientQuote: "CodeDale's attention to detail and commitment to excellence transformed our entire digital infrastructure.",
    clientName: 'Sarah Chen',
    clientRole: 'CTO, TechFlow',
    clientAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
    reply: 'Building the future, together.',
    company: 'CodeDale'
  },
  {
    id: 6,
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&auto=format&fit=crop&q=80',
    clientQuote: "The team didn't just deliver code—they delivered a complete transformation of how we operate digitally.",
    clientName: 'Michael Torres',
    clientRole: 'Product Lead, Innovate Co',
    clientAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
    reply: 'Your success is our mission.',
    company: 'CodeDale'
  },
  {
    id: 7,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80',
    clientQuote: 'Working with CodeDale felt like having an in-house team that truly understood our business challenges.',
    clientName: 'Priya Sharma',
    clientRole: 'CEO, DataVision',
    clientAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
    reply: 'Partnership over projects.',
    company: 'CodeDale'
  },
  {
    id: 8,
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&auto=format&fit=crop&q=80',
    clientQuote: 'They transformed our outdated system into a modern, scalable platform in record time without compromising quality.',
    clientName: 'Alex Johnson',
    clientRole: 'Director of Engineering, CloudBase',
    clientAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
    reply: 'Excellence without shortcuts.',
    company: 'CodeDale'
  },
  {
    id: 9,
    image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&auto=format&fit=crop&q=80',
    clientQuote: 'CodeDale brought creativity and technical expertise that exceeded all our expectations. A game-changer for our startup.',
    clientName: 'Lisa Martinez',
    clientRole: 'Co-Founder, StartupHub',
    clientAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&auto=format&fit=crop&q=80',
    reply: 'Empowering innovation daily.',
    company: 'CodeDale'
  },
  {
    id: 10,
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=800&auto=format&fit=crop&q=80',
    clientQuote: 'Their ability to translate complex requirements into elegant solutions is unmatched. True professionals.',
    clientName: 'David Kim',
    clientRole: 'VP Product, FinTech Solutions',
    clientAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
    reply: 'Simplifying complexity together.',
    company: 'CodeDale'
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(1);
  const timeoutRef = useRef(null);

  // Responsive logic: determine how many cards to show
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setVisibleCards(3);
      } else if (window.innerWidth >= 768) {
        setVisibleCards(2);
      } else {
        setVisibleCards(1);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

    const resetTimeout = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };

  // Auto-play carousel every 4 seconds
  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(() => {
      setActiveIndex((prevIndex) => {
        const maxIndex = testimonials.length - visibleCards;
        return prevIndex >= maxIndex ? 0 : prevIndex + 1;
      });
    }, 4000);

    return () => resetTimeout();
  }, [activeIndex, visibleCards]);



  const maxIndex = testimonials.length - visibleCards;

  return (
    <section className="py-12 md:py-24 bg-[#F5F5F7] overflow-hidden">
      <div className="w-full max-w-[1400px] mx-auto px-4 md:px-8">
        {/* Carousel Window */}
        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * (100 / visibleCards)}%)` }}
          >
            {testimonials.map((item) => (
              <div
                key={item.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${100 / visibleCards}%` }}
              >
                <TestimonialCard item={item} />
              </div>
            ))}
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-2 mt-8 flex-wrap">
          {Array.from({ length: maxIndex + 1 }).map((_, idx) => (
            <button
              key={idx}
              className={`w-2 h-2 rounded-full transition-colors duration-300 ${
                activeIndex === idx ? 'bg-gray-800' : 'bg-gray-300'
              }`}
              onClick={() => setActiveIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

/**
 * Individual testimonial card with chat bubble UI
 */
const TestimonialCard = ({ item }) => {
  return (
    <div className="group rounded-[38px] translate-z-0 hover:-translate-y-3 hover:will-change-transform transition-all duration-300 ease-in-out w-full h-full bg-white p-3 shrink-0 shadow-[0_0_0_0_rgba(0,0,0,0.03)] hover:shadow-[0px_22px_33px_0px_rgba(0,0,0,0.03)] cursor-pointer flex flex-col">
      {/* Image */}
      <div className="relative w-full h-64 overflow-hidden z-10 rounded-3xl bg-gray-100">
        <img
          alt={`${item.clientName}-project`}
          loading="lazy"
          className="w-full h-full object-cover rounded-inherit"
          src={item.image}
        />
      </div>

      {/* Chat Area */}
      <div className="flex flex-col w-full gap-3 p-2 flex-1">
        {/* Left Bubble */}
        <div className="flex flex-col p-3 bg-[#f5f5f5] gap-2 rounded-t-3xl rounded-br-3xl max-w-[90%]">
          <p className="font-medium text-sm md:text-[15px] text-gray-900 leading-relaxed">
            {item.clientQuote}
          </p>
          <span className="text-black/30 text-xs font-medium">
            {item.clientName}
          </span>
        </div>

        {/* Right Bubble */}
        <div className="flex flex-col p-3 bg-[#f5f5f5] gap-2 rounded-t-3xl items-end self-end rounded-bl-2xl max-w-[80%] group-hover:invert transition-all duration-500 ease-in-out mt-auto">
          <p className="font-medium text-sm md:text-[15px] leading-relaxed text-right">
            {item.reply}
          </p>
          <span className="text-black/30 text-xs font-medium">
            {item.company}
          </span>
        </div>
      </div>

      {/* Footer */}
      <div className="flex items-center gap-2 p-2 mt-auto">
        <img
          alt={item.clientName}
          loading="lazy"
          className="w-10 h-10 rounded-full object-cover"
          src={item.clientAvatar}
        />
        <div className="flex flex-col items-start gap-0.5">
          <p className="font-medium leading-[1] text-sm text-gray-900">
            {item.clientName}
          </p>
          <span className="text-black/50 text-xs">
            {item.clientRole}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
