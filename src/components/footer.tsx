import React from 'react';

export function Footer() {
  return (
    <footer className="w-full bg-[#161617] text-[#86868b] text-[11px] font-normal leading-relaxed border-t border-white/[0.08] px-4 py-8">
      <div className="max-w-[1024px] mx-auto space-y-4">
        {/* Footnotes */}
        <div className="space-y-2 pb-4 border-b border-white/[0.08]">
          <p>
            1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card.
          </p>
          <p>
            2. Apple Intelligence is available in beta on all iPhone 18 models, iPhone 16 models, iPad, and Mac with M1 and later, with Siri and device language set to U.S. English.
          </p>
        </div>

        {/* Directory Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 pt-4">
          <div className="space-y-3">
            <h4 className="text-white font-semibold">Shop and Learn</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white">Store</a></li>
              <li><a href="#" className="hover:text-white">Mac</a></li>
              <li><a href="#" className="hover:text-white">iPad</a></li>
              <li><a href="#" className="hover:text-white">iPhone</a></li>
              <li><a href="#" className="hover:text-white">Watch</a></li>
              <li><a href="#" className="hover:text-white">Vision</a></li>
              <li><a href="#" className="hover:text-white">AirPods</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold">Account</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white">Manage Your Apple Account</a></li>
              <li><a href="#" className="hover:text-white">Apple Store Account</a></li>
              <li><a href="#" className="hover:text-white">iCloud.com</a></li>
            </ul>
            <h4 className="text-white font-semibold pt-2">Entertainment</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white">Apple TV+</a></li>
              <li><a href="#" className="hover:text-white">Apple Music</a></li>
              <li><a href="#" className="hover:text-white">Apple Arcade</a></li>
              <li><a href="#" className="hover:text-white">Apple Podcasts</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold">Apple Store</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white">Find a Store</a></li>
              <li><a href="#" className="hover:text-white">Genius Bar</a></li>
              <li><a href="#" className="hover:text-white">Today at Apple</a></li>
              <li><a href="#" className="hover:text-white">Apple Trade In</a></li>
              <li><a href="#" className="hover:text-white">Order Status</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold">For Business</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white">Apple and Business</a></li>
              <li><a href="#" className="hover:text-white">Shop for Business</a></li>
            </ul>
            <h4 className="text-white font-semibold pt-2">For Education</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white">Apple and Education</a></li>
              <li><a href="#" className="hover:text-white">Shop for K-12</a></li>
              <li><a href="#" className="hover:text-white">Shop for College</a></li>
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="text-white font-semibold">Apple Values</h4>
            <ul className="space-y-1.5">
              <li><a href="#" className="hover:text-white">Accessibility</a></li>
              <li><a href="#" className="hover:text-white">Education</a></li>
              <li><a href="#" className="hover:text-white">Environment</a></li>
              <li><a href="#" className="hover:text-white">Privacy</a></li>
              <li><a href="#" className="hover:text-white">Supply Chain</a></li>
            </ul>
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-6 border-t border-white/[0.08] flex flex-col md:flex-row items-center justify-between gap-2 text-stone-500">
          <p>Copyright © 2026 Apple Inc. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-3">
            <a href="#" className="hover:text-stone-300">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-stone-300">Terms of Use</a>
            <span>|</span>
            <a href="#" className="hover:text-stone-300">Sales and Refunds</a>
            <span>|</span>
            <a href="#" className="hover:text-stone-300">Legal</a>
            <span>|</span>
            <a href="#" className="hover:text-stone-300">Site Map</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
