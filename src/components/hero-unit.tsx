import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface HeroUnitProps {
  id: string;
  headline: string;
  subhead: string;
  callout?: string;
  theme?: 'dark' | 'light';
  learnMoreUrl?: string;
  buyUrl?: string;
  buyLabel?: string;
  visualGraphic?: React.ReactNode;
}

export function HeroUnit({
  id,
  headline,
  subhead,
  callout,
  theme = 'dark',
  learnMoreUrl = '#',
  buyUrl = '#',
  buyLabel = 'Pre-order',
  visualGraphic,
}: HeroUnitProps) {
  const isDark = theme === 'dark';
  const containerRef = useRef<HTMLElement>(null);

  // Kinetic scroll-scrub animations tracking viewport entry to exit
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  // Dynamic scale, parallax depth, and luminous opacity
  const graphicScale = useTransform(scrollYProgress, [0.1, 0.5, 0.9], [0.95, 1.0, 1.02]);
  const graphicParallax = useTransform(scrollYProgress, [0.1, 0.9], [15, -15]);

  return (
    <section
      ref={containerRef}
      id={id}
      className={`relative w-full min-h-[580px] sm:min-h-[640px] lg:h-[692px] flex flex-col items-center justify-start text-center overflow-hidden pt-10 sm:pt-12 pb-0 mb-3 select-none ${
        isDark ? 'bg-[#000000] text-[#f5f5f7]' : 'bg-[#fbfbfd] text-[#1d1d1f]'
      }`}
    >
      {/* Dynamic Content Header */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-20px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-3xl mx-auto space-y-1.5 px-6"
      >
        <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-[56px] font-semibold tracking-[-0.03em] leading-tight">
          {headline}
        </h2>
        <p
          className={`text-xl sm:text-2xl lg:text-[28px] font-normal tracking-[-0.015em] ${
            isDark ? 'text-[#f5f5f7]' : 'text-[#1d1d1f]'
          }`}
        >
          {subhead}
        </p>
        {callout && (
          <p className="text-[13px] sm:text-[15px] font-normal text-[#86868b] pt-0.5">
            {callout}
          </p>
        )}

        {/* Dual CTAs with Apple Micro-elevation */}
        <div className="flex items-center justify-center gap-3.5 pt-2.5">
          <a
            href={learnMoreUrl}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full text-sm sm:text-[15px] font-normal bg-[#0071e3] hover:bg-[#0077ed] active:scale-[0.98] text-white transition-all shadow-sm"
          >
            Learn more
          </a>
          <a
            href={buyUrl}
            className="inline-flex items-center justify-center px-4 sm:px-5 py-2 rounded-full text-sm sm:text-[15px] font-normal border border-[#0071e3] text-[#2997ff] hover:bg-[#0071e3] hover:text-white active:scale-[0.98] transition-all bg-transparent"
          >
            {buyLabel}
          </a>
        </div>
      </motion.div>

      {/* Kinetic Scaled Graphic Canvas (Dominates Viewport) */}
      <motion.div
        style={{
          scale: graphicScale,
          y: graphicParallax,
        }}
        className="relative w-full max-w-[1480px] flex-1 flex items-center justify-center mt-2 sm:mt-4 px-4 overflow-hidden"
      >
        {visualGraphic}
      </motion.div>
    </section>
  );
}
