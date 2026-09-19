import React from 'react';
import { HeroUnit } from '../components/hero-unit';
import { PromoTile } from '../components/promo-tile';
import { EntertainmentCarousel } from '../components/entertainment-carousel';
import { BENTO_PROMO_TILES } from '../data/apple-content';

export function HomePage() {
  return (
    <div className="w-full overflow-hidden">
      {/* 1. Flagship Hero 1: iPhone 18 Pro Full-Bleed Titanium Smoke */}
      <HeroUnit
        id="iphone-18-pro"
        headline="iPhone 18 Pro"
        subhead="Pro further."
        callout="Available starting 9.18"
        theme="dark"
        buyLabel="Pre-order"
        visualGraphic={
          <div className="relative w-full flex items-center justify-center">
            <img
              src="/assets/images/iphone_18_pro_startframe_2x.jpg"
              alt="iPhone 18 Pro with PRO titanium text and smoke"
              className="w-full max-w-[1480px] h-auto max-h-[680px] sm:max-h-[760px] object-contain drop-shadow-2xl"
            />
          </div>
        }
      />

      {/* 2. Flagship Hero 2: iPhone Duo Full-Bleed Foldable Dual Display */}
      <HeroUnit
        id="iphone-duo"
        headline="iPhone Duo"
        subhead="Hello, hello."
        callout="Pre-order starting 5:00 a.m. PT on 10.16. Available starting 10.23"
        theme="light"
        buyLabel="View pricing"
        visualGraphic={
          <div className="relative w-full flex items-center justify-center">
            <img
              src="/assets/images/iphone_duo_hero_2x.jpg"
              alt="iPhone Duo foldable dual display"
              className="w-full max-w-[1280px] h-auto max-h-[580px] sm:max-h-[660px] object-contain drop-shadow-xl"
            />
          </div>
        }
      />

      {/* 3. Flagship Hero 3: Apple Watch Series 12 Sensor Array */}
      <HeroUnit
        id="apple-watch-series-12"
        headline="Apple Watch Series 12"
        subhead="The most accurate heart rate sensing in a wearable."
        callout="Available starting 9.18"
        theme="dark"
        buyLabel="Pre-order"
        visualGraphic={
          <div className="relative w-full flex items-center justify-center">
            <img
              src="/assets/images/apple_watch_series_12_hero_2x.jpg"
              alt="Apple Watch Series 12 dual devices with optical health sensors"
              className="w-full max-w-[1240px] h-auto max-h-[560px] sm:max-h-[640px] object-contain drop-shadow-2xl"
            />
          </div>
        }
      />

      {/* 4. Complete 2x3 Bento Promo Grid with Real Apple Retina Assets */}
      <section className="max-w-[1280px] mx-auto px-3 py-3 grid grid-cols-1 md:grid-cols-2 gap-3">
        {BENTO_PROMO_TILES.map((tile) => (
          <PromoTile
            key={tile.id}
            id={tile.id}
            headline={tile.headline}
            subhead={tile.subhead}
            callout={tile.callout}
            theme={tile.theme}
            learnMoreUrl={tile.primaryBtnLink}
            buyUrl={tile.secondaryBtnLink || tile.primaryBtnLink}
            buyLabel={tile.secondaryBtnText || tile.primaryBtnText}
            graphic={
              <img
                src={tile.image}
                alt={tile.imageAlt}
                className="w-full max-h-[290px] object-contain drop-shadow-lg"
              />
            }
          />
        ))}
      </section>

      {/* 5. Apple TV+ Endless Entertainment Kinetic Infinite Ribbon Carousel */}
      <EntertainmentCarousel />

      {/* Footnote Disclosures */}
      <section className="max-w-[1024px] mx-auto px-4 py-8 text-[11px] text-[#86868b] border-t border-white/[0.08] space-y-3 leading-relaxed">
        <p>
          1. Trade-in values will vary based on the condition, year, and configuration of your eligible trade-in device. Not all devices are eligible for credit. You must be at least 18 years old to be eligible to trade in for credit or for an Apple Gift Card. Trade-in value may be applied toward qualifying new device purchase, or added to an Apple Gift Card.
        </p>
        <p>
          2. Carrier deals: Terms apply. Available to qualified customers only. Monthly price reflects net monthly payment, after application of Apple trade-in credit applied at purchase and manufacturer trade-in credit applied over bill cycles.
        </p>
        <p>
          Apple TV+ is $9.99/month after free trial. Only one offer per Apple Account. Plan automatically renews until cancelled. Restrictions and other terms apply.
        </p>
      </section>
    </div>
  );
}
