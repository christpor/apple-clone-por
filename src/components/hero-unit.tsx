import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

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

  return (
    <section
      id={id}
      className={`relative w-full flex flex-col justify-between items-center text-center overflow-hidden pt-12 pb-0 mb-3 ${
        isDark ? 'bg-[#000000] text-[#f5f5f7]' : 'bg-[#fbfbfd] text-[#1d1d1f]'
      }`}
    >
      {/* Content Stack */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-50px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 max-w-2xl mx-auto space-y-1.5 px-6"
      >
        <h2 className="text-4xl sm:text-5xl lg:text-[56px] font-semibold tracking-[-0.03em] leading-tight">
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
          <p className="text-[15px] sm:text-[17px] font-normal text-[#86868b] pt-0.5">
            {callout}
          </p>
        )}

        {/* Dual CTAs */}
        <div className="flex items-center justify-center gap-3.5 pt-3">
          <a
            href={learnMoreUrl}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-normal bg-[#0071e3] hover:bg-[#0077ed] text-white transition-colors"
          >
            Learn more
          </a>
          <a
            href={buyUrl}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-sm font-normal border border-[#0071e3] text-[#2997ff] hover:bg-[#0071e3] hover:text-white transition-all bg-transparent"
          >
            {buyLabel}
          </a>
        </div>
      </motion.div>

      {/* Visual Canvas / Graphic */}
      <div className="relative w-full max-w-[1260px] mx-auto mt-4 flex items-center justify-center">
        {visualGraphic}
      </div>
    </section>
  );
}
