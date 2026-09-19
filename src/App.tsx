import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/navbar';
import { Footer } from './components/footer';
import { HomePage } from './pages/home';
import { StorePage } from './pages/store';
import { IPhonePage } from './pages/iphone';
import { SupportPage } from './pages/support';
import { motion, AnimatePresence } from 'framer-motion';

export function App() {
  const [currentRoute, setCurrentRoute] = useState(() => window.location.pathname || '/');

  // Initialize Lenis Kinetic Smooth Scrolling
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    const handlePopState = () => {
      setCurrentRoute(window.location.pathname || '/');
      lenis.scrollTo(0, { immediate: true });
    };

    window.addEventListener('popstate', handlePopState);

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('popstate', handlePopState);
      lenis.destroy();
    };
  }, []);

  const handleNavigate = (route: string) => {
    window.history.pushState({}, '', route);
    setCurrentRoute(route);
    window.scrollTo(0, 0);
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case '/store':
        return <StorePage onSelectRoute={handleNavigate} />;
      case '/iphone':
        return <IPhonePage />;
      case '/support':
        return <SupportPage />;
      case '/':
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7] flex flex-col justify-between selection:bg-[#0071e3] selection:text-white">
      {/* Global Navigation Header with Frosted Glass & Mega-Menus */}
      <Navbar currentRoute={currentRoute} onNavigate={handleNavigate} />

      {/* Top Banner Notice */}
      <div className="pt-[44px] bg-[#000000] text-center py-3 px-4 text-[12px] text-[#f5f5f7] border-b border-white/[0.08]">
        <p>
          Last chance to get a gift card up to $150* when you buy Mac or iPad with education savings. Ends 9.24.{' '}
          <button
            onClick={() => handleNavigate('/store')}
            className="text-[#2997ff] hover:underline inline-flex items-center ml-1"
          >
            Shop &gt;
          </button>
        </p>
      </div>

      {/* Animated Route View */}
      <main className="flex-1 w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentRoute}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          >
            {renderCurrentPage()}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Global Directory Footer */}
      <Footer />
    </div>
  );
}

export default App;
