import React from 'react';
import { motion } from 'framer-motion';

interface PromoTileProps {
  id: string;
  headline: string;
  subhead: string;
  callout?: string;
  theme?: 'dark' | 'light';
  learnMoreUrl?: string;
  buyUrl?: string;
  buyLabel?: string;
  graphic?: React.ReactNode;
}

export function PromoTile({
  id,
  headline,
  subhead,
  callout,
  theme = 'dark',
  learnMoreUrl = '#',
  buyUrl = '#',
  buyLabel = 'Pre-order',
  graphic,
}: PromoTileProps) {
  const isDark = theme === 'dark';

  return (
    <motion.div
      id={id}
      whileHover={{ scale: 1.005 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`relative min-h-[490px] rounded-2xl flex flex-col justify-between items-center text-center overflow-hidden pt-12 pb-8 px-6 transition-shadow ${
        isDark ? 'bg-[#000000] text-[#f5f5f7]' : 'bg-[#fbfbfd] text-[#1d1d1f]'
      }`}
    >
      <div className="relative z-10 max-w-sm mx-auto space-y-1">
        <h3 className="text-3xl sm:text-4xl font-semibold tracking-[-0.02em]">
          {headline}
        </h3>
        <p
          className={`text-base sm:text-lg font-normal ${
            isDark ? 'text-[#86868b]' : 'text-[#6e6e73]'
          }`}
        >
          {subhead}
        </p>
        {callout && (
          <p className="text-xs text-[#86868b] pt-0.5">{callout}</p>
        )}

        <div className="flex items-center justify-center gap-3 pt-3">
          <a
            href={learnMoreUrl}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-normal bg-[#0071e3] hover:bg-[#0077ed] text-white transition-colors"
          >
            Learn more
          </a>
          <a
            href={buyUrl}
            className="inline-flex items-center justify-center px-4 py-2 rounded-full text-xs font-normal border border-[#0071e3] text-[#2997ff] hover:bg-[#0071e3] hover:text-white transition-all"
          >
            {buyLabel}
          </a>
        </div>
      </div>

      <div className="relative w-full flex-1 flex items-center justify-center mt-4">
        {graphic}
      </div>
    </motion.div>
  );
}
