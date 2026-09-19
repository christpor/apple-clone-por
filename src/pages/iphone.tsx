import React from 'react';
import { motion } from 'framer-motion';

const IPHONE_MODELS = [
  { name: 'iPhone 18 Pro', chip: 'A19 Pro chip', camera: 'Pro Fusion 48MP', battery: 'Up to 33 hours', price: 'From $999' },
  { name: 'iPhone Duo', chip: 'A19 Pro chip', camera: 'Dual 48MP Ultrawide', battery: 'Dual Cell 36 hours', price: 'From $1499' },
  { name: 'iPhone 18', chip: 'A19 chip', camera: 'Advanced 48MP Dual', battery: 'Up to 27 hours', price: 'From $799' },
];

export function IPhonePage() {
  return (
    <div className="max-w-[1024px] mx-auto px-6 py-20">
      <div className="text-center space-y-4 mb-16">
        <span className="text-xs uppercase tracking-widest text-[#2997ff] font-semibold">iPhone Lineup</span>
        <h1 className="text-4xl sm:text-6xl font-semibold tracking-[-0.03em] text-white">
          Designed to be loved.
        </h1>
        <p className="text-lg text-stone-400 max-w-xl mx-auto">
          Explore the world's most powerful mobile architecture with Apple Intelligence built into every core.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {IPHONE_MODELS.map((phone, idx) => (
          <motion.div
            key={phone.name}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.08, duration: 0.6 }}
            className="p-8 rounded-3xl bg-[#161617] border border-white/10 flex flex-col justify-between h-[420px] text-center"
          >
            <div>
              <h3 className="text-2xl font-bold text-white">{phone.name}</h3>
              <p className="text-sm text-[#2997ff] mt-1">{phone.price}</p>
            </div>

            <div className="space-y-4 py-6 border-y border-white/[0.08] text-sm text-stone-300">
              <p className="font-medium text-white">{phone.chip}</p>
              <p>{phone.camera}</p>
              <p>{phone.battery}</p>
            </div>

            <div className="flex gap-3 justify-center">
              <button className="px-4 py-2 bg-[#0071e3] hover:bg-[#0077ed] text-white text-xs rounded-full transition-colors">
                Pre-order
              </button>
              <button className="px-4 py-2 border border-[#0071e3] text-[#2997ff] hover:bg-[#0071e3] hover:text-white text-xs rounded-full transition-all">
                Learn more
              </button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
