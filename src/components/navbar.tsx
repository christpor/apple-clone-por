import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AppleLogo, AppleSearchIcon, AppleBagIcon } from './apple-icons';
import { Menu, X, ArrowRight, ShoppingBag } from 'lucide-react';
import { MEGA_MENUS } from '../data/apple-content';

interface NavbarProps {
  currentRoute: string;
  onNavigate: (route: string) => void;
}

export const NAV_ITEMS = [
  { id: 'store', label: 'Store', path: '/store' },
  { id: 'mac', label: 'Mac', path: '/store' },
  { id: 'ipad', label: 'iPad', path: '/store' },
  { id: 'iphone', label: 'iPhone', path: '/iphone' },
  { id: 'watch', label: 'Watch', path: '/store' },
  { id: 'vision', label: 'Vision', path: '/store' },
  { id: 'airpods', label: 'AirPods', path: '/store' },
  { id: 'tv-home', label: 'TV & Home', path: '/' },
  { id: 'entertainment', label: 'Entertainment', path: '/' },
  { id: 'accessories', label: 'Accessories', path: '/store' },
  { id: 'support', label: 'Support', path: '/support' },
];

export function Navbar({ currentRoute, onNavigate }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);
  const [bagOpen, setBagOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleRouteClick = (route: string) => {
    onNavigate(route);
    setMobileMenuOpen(false);
    setActiveMenuId(null);
    setBagOpen(false);
    setSearchOpen(false);
  };

  const activeMegaMenu = activeMenuId ? MEGA_MENUS[activeMenuId] : null;

  return (
    <>
      <header 
        className="fixed top-0 inset-x-0 z-50 h-[44px] apple-glass border-b border-white/[0.08] text-[#d6d6d7]"
        onMouseLeave={() => setActiveMenuId(null)}
      >
        <div className="max-w-[1024px] mx-auto px-4 h-full flex items-center justify-between text-xs font-normal">
          {/* Apple Logo */}
          <button
            onClick={() => handleRouteClick('/')}
            className="p-2 hover:text-white transition-colors flex items-center justify-center"
            aria-label="Apple Home"
          >
            <AppleLogo className="w-[14px] h-[44px] fill-current" />
          </button>

          {/* Desktop Nav Items with Hover Mega-Menus */}
          <nav className="hidden lg:flex items-center justify-between flex-1 px-6">
            {NAV_ITEMS.map((item) => {
              const isActive = currentRoute === item.path;

              return (
                <div
                  key={item.id}
                  className="relative py-3"
                  onMouseEnter={() => {
                    if (MEGA_MENUS[item.id]) {
                      setActiveMenuId(item.id);
                    } else {
                      setActiveMenuId(null);
                    }
                  }}
                >
                  <button
                    onClick={() => handleRouteClick(item.path)}
                    className={`relative transition-colors ${
                      isActive ? 'text-white font-medium' : 'hover:text-white'
                    }`}
                  >
                    {item.label}
                    {isActive && (
                      <motion.div
                        layoutId="apple-nav-dot"
                        className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-white rounded-full"
                      />
                    )}
                  </button>
                </div>
              );
            })}
          </nav>

          {/* Right Action Icons: Search & Bag */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setSearchOpen(true)}
              className="p-2 hover:text-white transition-colors flex items-center justify-center"
              aria-label="Search apple.com"
            >
              <AppleSearchIcon className="w-[15px] h-[15px] fill-current" />
            </button>

            <button
              onClick={() => setBagOpen(!bagOpen)}
              className="p-2 hover:text-white transition-colors flex items-center justify-center relative"
              aria-label="Shopping Bag"
            >
              <AppleBagIcon className="w-[14px] h-[14px] fill-current" />
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 lg:hidden hover:text-white transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Apple Desktop Mega-Menu Hover Sheet */}
        <AnimatePresence>
          {activeMegaMenu && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="absolute top-[44px] left-0 w-full bg-[#161617]/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl py-8 px-8 z-40 text-left"
              onMouseEnter={() => setActiveMenuId(activeMenuId)}
              onMouseLeave={() => setActiveMenuId(null)}
            >
              <div className="max-w-[1024px] mx-auto grid grid-cols-3 gap-8">
                {activeMegaMenu.sections.map((section, sIdx) => (
                  <div key={sIdx} className="space-y-3">
                    <span className="text-[11px] uppercase tracking-wider text-[#86868b] font-medium">
                      {section.heading}
                    </span>
                    <ul className="space-y-2.5">
                      {section.links.map((link, lIdx) => (
                        <li key={lIdx}>
                          <button
                            onClick={() => handleRouteClick(link.url)}
                            className="text-sm text-white/90 hover:text-[#2997ff] transition-colors flex items-center gap-2 group"
                          >
                            <span>{link.label}</span>
                            {link.badge && (
                              <span className="text-[10px] px-1.5 py-0.5 rounded-full bg-[#0071e3]/20 text-[#2997ff] font-medium border border-[#0071e3]/30">
                                {link.badge}
                              </span>
                            )}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Apple Bag Cart Drawer */}
        <AnimatePresence>
          {bagOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.15 }}
              className="absolute top-[52px] right-4 sm:right-12 w-80 rounded-2xl bg-[#1d1d1f] border border-white/10 shadow-2xl p-6 z-50 text-left space-y-4"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <span className="text-sm font-semibold text-white">Your Bag is Empty</span>
                <ShoppingBag className="w-4 h-4 text-[#86868b]" />
              </div>
              <p className="text-xs text-[#86868b] leading-relaxed">
                Shop the latest iPhone 18 Pro, MacBook Air, and accessories.
              </p>
              <button
                onClick={() => handleRouteClick('/store')}
                className="w-full py-2.5 rounded-full text-xs font-semibold bg-[#0071e3] hover:bg-[#0077ed] text-white transition-colors flex items-center justify-center gap-1.5"
              >
                <span>Shop Apple Store</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Global Quick Search Modal (Cmd+K) */}
      <AnimatePresence>
        {searchOpen && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-black/60 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="w-full max-w-xl rounded-3xl bg-[#1d1d1f] border border-white/10 shadow-2xl overflow-hidden p-4 space-y-4"
            >
              <div className="flex items-center gap-3 px-3 py-2 border-b border-white/10">
                <AppleSearchIcon className="w-4 h-4 fill-[#86868b]" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search apple.com or products..."
                  autoFocus
                  className="w-full bg-transparent text-sm text-white focus:outline-none placeholder:text-[#86868b]"
                />
                <button onClick={() => setSearchOpen(false)} className="text-xs text-[#86868b] hover:text-white">
                  Cancel
                </button>
              </div>

              <div className="space-y-1 px-2 text-xs">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#86868b]">Quick Links</span>
                <div className="pt-2 space-y-2">
                  <button onClick={() => handleRouteClick('/iphone')} className="w-full text-left py-1.5 px-3 rounded-xl hover:bg-white/10 text-white flex items-center justify-between">
                    <span>iPhone 18 Pro</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#86868b]" />
                  </button>
                  <button onClick={() => handleRouteClick('/store')} className="w-full text-left py-1.5 px-3 rounded-xl hover:bg-white/10 text-white flex items-center justify-between">
                    <span>MacBook Air M5</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#86868b]" />
                  </button>
                  <button onClick={() => handleRouteClick('/store')} className="w-full text-left py-1.5 px-3 rounded-xl hover:bg-white/10 text-white flex items-center justify-between">
                    <span>Apple Watch Series 12</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#86868b]" />
                  </button>
                  <button onClick={() => handleRouteClick('/support')} className="w-full text-left py-1.5 px-3 rounded-xl hover:bg-white/10 text-white flex items-center justify-between">
                    <span>AppleCare+ and Repairs</span>
                    <ArrowRight className="w-3.5 h-3.5 text-[#86868b]" />
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Mobile Navigation Sheet */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            data-lenis-prevent
            className="fixed inset-0 top-[44px] z-40 bg-[#000000] px-8 py-8 overflow-y-auto overscroll-contain flex flex-col justify-between"
          >
            <div className="space-y-4">
              <nav className="flex flex-col space-y-3">
                {NAV_ITEMS.map((item, index) => (
                  <motion.button
                    key={item.id}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.03 }}
                    onClick={() => handleRouteClick(item.path)}
                    className="text-left text-2xl font-semibold text-[#f5f5f7] hover:text-[#2997ff] transition-colors py-1"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </nav>
            </div>

            <div className="pt-8 border-t border-white/[0.1] text-xs text-[#86868b] space-y-2">
              <p>Apple Inc. Sovereign Clone</p>
              <p className="text-[11px]">Engineered with React 18, Vite, Lenis, and Tailwind CSS.</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
