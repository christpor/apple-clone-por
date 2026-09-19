import React, { useState, useEffect, useRef } from 'react';
import { Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { APPLE_TV_SHOWS } from '../data/apple-content';

export function EntertainmentCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous autoplay cycle
  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % APPLE_TV_SHOWS.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [isPlaying]);

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + APPLE_TV_SHOWS.length) % APPLE_TV_SHOWS.length);
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % APPLE_TV_SHOWS.length);
  };

  // Apple card width calculations for true peek ribbon geometry
  const cardWidth = Math.min(windowWidth * 0.82, 1220);
  const gap = windowWidth < 640 ? 16 : 28;
  const trackOffset = (windowWidth / 2) - (cardWidth / 2) - (activeIndex * (cardWidth + gap));

  return (
    <section className="relative w-full py-16 sm:py-20 bg-black overflow-hidden select-none">
      {/* Section Header */}
      <div className="max-w-[1280px] mx-auto px-4 sm:px-6 mb-8 sm:mb-12 flex items-end justify-between">
        <div>
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-tight">
            Endless entertainment.
          </h2>
          <p className="text-sm sm:text-lg text-[#86868b] mt-1.5 font-normal">
            Stream award-winning Apple Originals on the Apple TV app.
          </p>
        </div>

        {/* Play / Pause Autoplay Controller */}
        <button
          onClick={() => setIsPlaying(!isPlaying)}
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 text-white flex items-center justify-center backdrop-blur-md transition-all border border-white/10"
          aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
        >
          {isPlaying ? <Pause className="w-4 h-4 sm:w-5 sm:h-5" /> : <Play className="w-4 h-4 sm:w-5 sm:h-5 ml-0.5" />}
        </button>
      </div>

      {/* Kinetic Infinite Horizontal Peek Slider Track */}
      <div className="relative w-full overflow-hidden py-4">
        <motion.div
          className="flex items-center"
          animate={{ x: trackOffset }}
          transition={{ type: 'spring', stiffness: 220, damping: 30 }}
          style={{ width: `${APPLE_TV_SHOWS.length * (cardWidth + gap)}px` }}
        >
          {APPLE_TV_SHOWS.map((show, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={show.id}
                onClick={() => !isActive && setActiveIndex(index)}
                style={{
                  width: `${cardWidth}px`,
                  marginRight: `${gap}px`,
                }}
                className={`relative flex-shrink-0 transition-all duration-700 ease-out cursor-pointer ${
                  isActive
                    ? 'scale-100 opacity-100 shadow-2xl ring-1 ring-white/20'
                    : 'scale-[0.92] opacity-40 hover:opacity-70'
                }`}
              >
                <div className="relative aspect-[16/9] sm:aspect-[21/9] w-full rounded-2xl sm:rounded-3xl overflow-hidden bg-[#161617]">
                  <img
                    src={show.image}
                    alt={show.title}
                    className="w-full h-full object-cover select-none"
                    loading="lazy"
                  />

                  {/* Apple TV+ Logo Watermark */}
                  <div className="absolute top-4 sm:top-6 right-4 sm:right-6 z-20 flex items-center gap-1 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md text-white text-xs font-medium border border-white/10">
                    <span className="font-semibold tracking-tight">tv</span>
                    <span className="text-white/70">+</span>
                  </div>

                  {/* Gradient Scrim & Info Overlay */}
                  <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-5 sm:p-8 lg:p-10">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-white/80">
                            {show.genre}
                          </span>
                          {show.badge && (
                            <span className="text-[10px] sm:text-xs font-medium px-2 py-0.5 rounded-full bg-white/20 text-white backdrop-blur-sm">
                              {show.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-sm sm:text-base text-[#d2d2d7] max-w-xl font-normal line-clamp-2">
                          {show.description}
                        </p>
                      </div>

                      {/* Action Pill */}
                      <a
                        href={show.streamUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center gap-2 px-5 sm:px-6 py-2.5 sm:py-3 rounded-full bg-white hover:bg-[#f5f5f7] active:scale-95 text-black text-xs sm:text-sm font-semibold transition-all shadow-lg self-start sm:self-center"
                      >
                        <Play className="w-3.5 h-3.5 fill-current" />
                        Stream now
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Floating Navigation Controls (Desktop Peeking Arrows) */}
        <button
          onClick={handlePrev}
          className="absolute left-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 hidden lg:flex"
          aria-label="Previous show"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-6 top-1/2 -translate-y-1/2 z-30 w-11 h-11 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center backdrop-blur-md border border-white/20 transition-all hover:scale-105 active:scale-95 hidden lg:flex"
          aria-label="Next show"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Apple Dynamic Progress Dots / Indicators */}
      <div className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10">
        {APPLE_TV_SHOWS.map((show, index) => {
          const isActive = index === activeIndex;

          return (
            <button
              key={show.id}
              onClick={() => setActiveIndex(index)}
              className="group py-2 focus:outline-none"
              aria-label={`Jump to ${show.title}`}
            >
              <div
                className={`h-2 rounded-full transition-all duration-300 relative overflow-hidden ${
                  isActive ? 'w-10 bg-white/30' : 'w-2 bg-white/20 hover:bg-white/40'
                }`}
              >
                {isActive && isPlaying && (
                  <motion.div
                    initial={{ width: '0%' }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 4.5, ease: 'linear' }}
                    key={`progress-${activeIndex}`}
                    className="h-full bg-white rounded-full"
                  />
                )}
                {isActive && !isPlaying && (
                  <div className="h-full w-full bg-white rounded-full" />
                )}
              </div>
            </button>
          );
        })}
      </div>
    </section>
  );
}
