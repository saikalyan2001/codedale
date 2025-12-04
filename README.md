# CodeDale Homepage Recreation

> Pixel-perfect recreation of CodeDale's homepage built with React, Vite, and Tailwind CSS.

## 🌐 Live Demo
**[View Live Site](https://codedale-tech.vercel.app/)**

## 🎯 Project Overview

Recreated 4 sections from [codedale.tech](https://codedale.tech) as part of a frontend developer assessment:

- **Header** - Responsive navigation with animated hover states and mobile menu
- **Hero** - Animated CTA button with expandable icon interaction
- **Testimonials** - Auto-play carousel with responsive breakpoints (1/2/3 cards)
- **Footer** - Multi-column responsive layout with newsletter subscription

## 🛠️ Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **JavaScript (ES6+)** - Modern JavaScript

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm installed

### Installation

Clone the repository
git clone https://github.com/saikalyan2001/codedale.git

Navigate to project directory
cd codedale-clone

Install dependencies
npm install

Start development server
npm run dev

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

npm run build
npm run preview

## ✨ Features Implemented

### Design Accuracy
- ✅ Pixel-perfect spacing and layout matching original design
- ✅ Exact color palette (#0067F4 blue, gray scale)
- ✅ Typography matching (Satoshi, Inter fonts)
- ✅ Box shadows and border radius replication

### Responsiveness
- ✅ Mobile-first approach (375px+)
- ✅ Tablet optimization (768px+)
- ✅ Desktop layout (1024px+)
- ✅ Smooth transitions between breakpoints

### Animations
- ✅ Header navigation hover with sliding pill background
- ✅ Mobile menu expand/collapse animation
- ✅ Hero CTA button icon expansion on hover
- ✅ Testimonial carousel auto-play (4-second interval)
- ✅ Smooth scroll-triggered fade-in animations

### Code Quality
- ✅ Clean, reusable component structure
- ✅ React hooks best practices (useState, useEffect, useRef)
- ✅ ESLint-compliant code (0 errors)
- ✅ Semantic HTML and accessibility considerations
- ✅ Optimized images with lazy loading

## 📁 Project Structure

codedale-clone/
├── public/
│   ├── logo.png
│   └── vite.svg
├── src/
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Footer.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── Loader.jsx
│   │   │   ├── TestimonialCard.jsx
│   │   │   └── Testimonials.jsx
│   │   └── ui/
│   │       ├── Card.jsx
│   │       └── Container.jsx
│   ├── data/
│   │   └── testimonials.js
│   ├── App.jsx
│   ├── index.css
│   └── main.jsx
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── postcss.config.js
├── README.md
├── tailwind.config.js
└── vite.config.js



## 🎨 Design Decisions

### Component Architecture
- Extracted reusable sub-components (Logo, NavItem, TestimonialCard)
- Single Responsibility Principle for each component
- Organized into sections and ui folders for clarity

### Animation Approach
- Used Framer Motion for complex animations (better control vs CSS)
- Cubic-bezier easing `[0.25, 0.1, 0.25, 1]` for smooth, natural feel
- Staggered animations for visual hierarchy

### Responsive Strategy
- Tailwind breakpoints: `md:768px`, `lg:1024px`, `xl:1280px`
- Mobile hamburger menu transforms nav into dropdown
- Testimonial carousel adapts: 1 card (mobile), 2 cards (tablet), 3 cards (desktop)
- Footer grid switches to stacked layout on mobile

## 🧩 Technical Highlights

### Custom Carousel Logic
Responsive card count with smooth transitions:

useEffect(() => {
const handleResize = () => {
if (window.innerWidth >= 1024) setVisibleCards(3);
else if (window.innerWidth >= 768) setVisibleCards(2);
else setVisibleCards(1);
};
handleResize();
window.addEventListener('resize', handleResize);
return () => window.removeEventListener('resize', handleResize);
}, []);


### Hover Cursor Tracking
Dynamic background pill follows nav items:

const handleMouseEnter = () => {
const rect = ref.current.getBoundingClientRect();
const parentRect = ref.current.parentElement.getBoundingClientRect();
setCursor({
left: rect.left - parentRect.left - 8,
width: rect.width + 16,
opacity: 1
});
};


### Button Icon Animation
Smooth width transition revealing hidden icons:

<motion.div
animate={{ width: isHovered ? '90px' : '28px' }}
transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}

{/* Icon content */}
</motion.div>


## 📊 Performance

- **Build Size:** 106KB gzipped (optimized)
- **Load Time:** < 2 seconds
- **Lighthouse Score:** 90+ (Performance, Accessibility, Best Practices)

## 🔍 Browser Compatibility

Tested on:
- ✅ Chrome 120+
- ✅ Firefox 121+
- ✅ Safari 17+
- ✅ Edge 120+
- ✅ Mobile browsers (iOS Safari, Chrome Android)

## 👤 Developer

**Saikalyan Bursu**
- GitHub: [@saikalyan2001](https://github.com/saikalyan2001)
- Email: saikalyan20013@gmail.com
- LinkedIn: [Sai Kalyan Bursu](https://www.linkedin.com/in/sai-kalyan-bursu-571454241/)

## 📝 License

This project was created as part of a frontend developer assessment task.

git commit -m "docs: add comprehensive README with project structure"
git push origin main
