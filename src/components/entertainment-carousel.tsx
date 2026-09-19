import React, { useState, useEffect } from 'react';
import { Play, Pause } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { APPLE_TV_SHOWS } from '../data/apple-content';

export function EntertainmentCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % APPLE_TV_SHOWS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeShow = APPLE_TV_SHOWS[activeIndex];

  return (
    <section className="relative w-full py-16 bg-black overflow-hidden select-none">
      {/* Section Header */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-3xl sm:text-5xl font-semibold tracking-tight text-white">
            Endless entertainment.
          </h2>
          <p className="text-sm sm:text-base text-[#86868b] mt-1 font-normal">
            Stream award-winning Apple Originals on the Apple TV app.
          </p>
        </div>

        {/* Play / Pause Autoplay Control */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center backdrop-blur-md transition-colors border border-white/10"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 ml-0.5" />}
        </button>
      </div>

      {/* Main Kinetic Stage */}
      <div className="relative max-w-[1280px] mx-auto px-4 sm:px-6">
        <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-[#161617]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeShow.id}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-full h-full"
            >
              <img
                src={activeShow.image}
                alt={activeShow.title}
                className="w-full h-full object-cover"
              />

              {/* Gradient Scrim for Legibility */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent"></div>

              {/* Show Information & CTAs */}
              <div className="absolute bottom-6 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
                <div className="space-y-2 max-w-xl">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-md uppercase tracking-wider">
                      {activeShow.genre}
                    </span>
                    {activeShow.badge && (
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#0071e3] text-white">
                        {activeShow.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                    {activeShow.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-normal leading-relaxed line-clamp-2">
                    {activeShow.description}
                  </p>
                </div>

                {/* Stream Now Button */}
                <a
                  href={activeShow.streamUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-6 py-3 rounded-full text-xs sm:text-sm font-semibold bg-white text-black hover:bg-white/90 shadow-lg transition-transform active:scale-95 flex items-center gap-2"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Stream now</span>
                </a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Timed Indicator Pills (Matching Apple's dotnav) */}
        <div className="flex items-center justify-center gap-2.5 mt-6">
          {APPLE_TV_SHOWS.map((show, idx) => {
            const isActive = activeIndex === idx;

            return (
              <button
                key={show.id}
                onClick={() => {
                  setActiveIndex(idx);
                  setIsPlaying(false);
                }}
                className={`relative h-2 rounded-full transition-all duration-300 ${
                  isActive ? 'w-8 bg-white' : 'w-2 bg-white/30 hover:bg-white/60'
                }`}
                aria-label={`Go to slide ${idx + 1}: ${show.title}`}
              >
                {isActive && isPlaying && (
                  <motion.div
                    className="absolute inset-0 bg-[#0071e3] rounded-full"
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 4.5, ease: 'linear' }}
                    style={{ originX: 0 }}
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
