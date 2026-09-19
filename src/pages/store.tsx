import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const STORE_SHELVES = [
  { id: 'mac', name: 'Mac', tag: 'Supercharged by M4', color: 'from-blue-600 to-indigo-900' },
  { id: 'iphone', name: 'iPhone', tag: 'Titanium & Apple Intelligence', color: 'from-stone-700 to-stone-900' },
  { id: 'ipad', name: 'iPad', tag: 'Thinpossible OLED', color: 'from-purple-600 to-purple-950' },
  { id: 'watch', name: 'Apple Watch', tag: 'Series 12 & Ultra 4', color: 'from-emerald-700 to-emerald-950' },
  { id: 'airpods', name: 'AirPods', tag: 'Active Noise Cancellation', color: 'from-amber-600 to-orange-900' },
  { id: 'vision', name: 'Vision Pro', tag: 'Spatial Computing', color: 'from-cyan-600 to-blue-950' },
];

export function StorePage({ onSelectRoute }: { onSelectRoute: (route: string) => void }) {
  return (
    <div className="max-w-[1024px] mx-auto px-6 py-20">
      <div className="space-y-3 mb-12">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-[-0.03em] text-white">
          Store. <span className="text-stone-500">The best way to buy the products you love.</span>
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {STORE_SHELVES.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.05, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            onClick={() => onSelectRoute(`/${item.id}`)}
            className={`p-6 rounded-3xl bg-gradient-to-br ${item.color} border border-white/10 shadow-xl cursor-pointer hover:scale-[1.02] transition-transform flex flex-col justify-between h-64`}
          >
            <div>
              <span className="text-xs uppercase tracking-widest text-white/70 font-semibold">{item.tag}</span>
              <h3 className="text-2xl font-bold text-white mt-1">{item.name}</h3>
            </div>

            <div className="flex items-center gap-1 text-sm text-white font-medium">
              <span>Explore {item.name}</span>
              <ChevronRight className="w-4 h-4" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
