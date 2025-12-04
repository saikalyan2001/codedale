import Footer from './components/sections/Footer';
import Header from './components/sections/Header';
import Hero from './components/sections/Hero';
import Testimonials from './components/sections/Testimonials';

/**
 * Main App Component
 * Renders header and hero section
 */
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Testimonials />
        <Footer />
      </main>
    </div>
  );
}

export default App;

