import React, { useState } from 'react';
import { AppleSearchIcon } from '../components/apple-icons';
import { CheckCircle2, Laptop, Smartphone, Watch, Headphones } from 'lucide-react';

const DEVICE_TYPES = [
  { id: 'iphone', label: 'iPhone', icon: Smartphone },
  { id: 'mac', label: 'Mac', icon: Laptop },
  { id: 'watch', label: 'Watch', icon: Watch },
  { id: 'airpods', label: 'AirPods', icon: Headphones },
];

export function SupportPage() {
  const [query, setQuery] = useState('');
  const [selectedDevice, setSelectedDevice] = useState<string | null>(null);

  return (
    <div className="max-w-[800px] mx-auto px-6 py-20 text-center">
      <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-white mb-3">
        Apple Support
      </h1>
      <p className="text-stone-400 mb-8">What can we assist you with today?</p>

      {/* Search Input */}
      <div className="relative max-w-lg mx-auto mb-12">
        <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none text-stone-500">
          <AppleSearchIcon className="w-4 h-4 fill-current" />
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for topics, hardware questions, or repairs..."
          className="w-full pl-11 pr-4 py-3.5 bg-[#1d1d1f] border border-white/10 rounded-2xl text-white placeholder:text-stone-500 text-sm focus:outline-none focus:border-[#0071e3] transition-colors"
        />
      </div>

      {/* Select Device Category */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {DEVICE_TYPES.map((dev) => {
          const Icon = dev.icon;
          const isSelected = selectedDevice === dev.id;
          return (
            <button
              key={dev.id}
              onClick={() => setSelectedDevice(dev.id)}
              className={`p-6 rounded-2xl border transition-all flex flex-col items-center gap-3 ${
                isSelected
                  ? 'bg-[#0071e3]/10 border-[#0071e3] text-white'
                  : 'bg-[#161617] border-white/10 text-stone-300 hover:text-white hover:border-white/20'
              }`}
            >
              <Icon className="w-8 h-8" strokeWidth={1.5} />
              <span className="text-sm font-medium">{dev.label}</span>
            </button>
          );
        })}
      </div>

      {selectedDevice && (
        <div className="mt-8 p-6 rounded-2xl bg-emerald-950/30 border border-emerald-500/30 text-emerald-300 text-sm flex items-center justify-center gap-2">
          <CheckCircle2 className="w-5 h-5 text-emerald-400" />
          <span>Diagnostic online: All systems operational for {selectedDevice.toUpperCase()}.</span>
        </div>
      )}
    </div>
  );
}
