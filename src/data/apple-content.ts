export interface AppleShow {
  id: string;
  title: string;
  genre: string;
  description: string;
  image: string;
  badge?: string;
  streamUrl: string;
}

export interface AppleBentoTile {
  id: string;
  headline: string;
  subhead: string;
  callout?: string;
  theme: 'dark' | 'light';
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  image: string;
  imageAlt: string;
}

export interface MegaMenuItem {
  title: string;
  sections: {
    heading: string;
    links: { label: string; url: string; badge?: string }[];
  }[];
}

export const APPLE_TV_SHOWS: AppleShow[] = [
  {
    id: 'friday-night-baseball',
    title: 'Friday Night Baseball',
    genre: 'Live Sports',
    description: 'Watch two marquee MLB games live every Friday night. Only on Apple TV+.',
    image: '/assets/images/tv_friday_night_baseball.jpg',
    badge: 'Live',
    streamUrl: 'https://tv.apple.com'
  },
  {
    id: 'slow-horses',
    title: 'Slow Horses',
    genre: 'Thriller',
    description: 'Gary Oldman stars as the leader of Slough House, a dumping ground for MI5 rejects.',
    image: '/assets/images/tv_slow_horses.jpg',
    badge: 'New Season',
    streamUrl: 'https://tv.apple.com'
  },
  {
    id: 'formula-1',
    title: 'Formula 1',
    genre: 'Documentary',
    description: 'An adrenaline-fueled behind-the-scenes look at the high-stakes world of elite racing.',
    image: '/assets/images/tv_formula_1.jpg',
    badge: 'Original Film',
    streamUrl: 'https://tv.apple.com'
  },
  {
    id: 'ted-lasso',
    title: 'Ted Lasso',
    genre: 'Comedy',
    description: 'Kindness makes a comeback. An American college football coach takes on British soccer.',
    image: '/assets/images/tv_ted_lasso.jpg',
    badge: 'Emmy Winner',
    streamUrl: 'https://tv.apple.com'
  },
  {
    id: 'mls',
    title: 'MLS Season Pass',
    genre: 'Live Soccer',
    description: 'Every match of Major League Soccer and Leagues Cup with zero blackouts.',
    image: '/assets/images/tv_mls.jpg',
    badge: 'Season Pass',
    streamUrl: 'https://tv.apple.com'
  },
  {
    id: 'mayday',
    title: 'Mayday',
    genre: 'Action Drama',
    description: 'Ryan Reynolds and Kenneth Branagh team up in this action-packed aerial espionage saga.',
    image: '/assets/images/tv_mayday.jpg',
    badge: 'Coming Soon',
    streamUrl: 'https://tv.apple.com'
  }
];

export const BENTO_PROMO_TILES: AppleBentoTile[] = [
  {
    id: 'macbook-air-m5',
    headline: 'MacBook Air',
    subhead: 'Now supercharged by M5.',
    theme: 'light',
    primaryBtnText: 'Learn more',
    primaryBtnLink: '/store',
    secondaryBtnText: 'Buy',
    secondaryBtnLink: '/store',
    image: '/assets/images/promo_macbook_air_m5_large_2x.jpg',
    imageAlt: 'Two open MacBook Air laptops in sky blue color emphasizing thin profile'
  },
  {
    id: 'carrier-deals',
    headline: 'Incredible carrier deals at Apple',
    subhead: 'Explore deals that accept eligible trade-in devices in any condition.',
    callout: 'Starting at $0 after trade-in',
    theme: 'light',
    primaryBtnText: 'Find your deal',
    primaryBtnLink: '/iphone',
    image: '/assets/images/promo_carriers_large_2x.jpg',
    imageAlt: 'iPhone 18 Pro, iPhone Duo, and iPhone 17 lineup with carrier offers'
  },
  {
    id: 'apple-watch-ultra-4',
    headline: 'Apple Watch Ultra 4',
    subhead: "A battery you can't outrun.",
    callout: 'Available starting 9.18',
    theme: 'dark',
    primaryBtnText: 'Learn more',
    primaryBtnLink: '/store',
    secondaryBtnText: 'Buy',
    secondaryBtnLink: '/store',
    image: '/assets/images/apple_watch_ultra_4_promo_2x.jpg',
    imageAlt: 'Apple Watch Ultra 4 in aerospace titanium with orange ocean band'
  },
  {
    id: 'airpods-5',
    headline: 'AirPods 5',
    subhead: 'Discover the magic of Active Noise Cancellation.',
    callout: 'Available starting 9.18',
    theme: 'dark',
    primaryBtnText: 'Learn more',
    primaryBtnLink: '/store',
    secondaryBtnText: 'Buy',
    secondaryBtnLink: '/store',
    image: '/assets/images/promo_airpods_5_preorder__lydvte0llb6i_large_2x.jpg',
    imageAlt: 'AirPods 5 with Active Noise Cancellation'
  },
  {
    id: 'apple-card',
    headline: 'Apple Card',
    subhead: 'Get up to 3% Daily Cash back with every purchase.',
    theme: 'light',
    primaryBtnText: 'Apply now',
    primaryBtnLink: '/store',
    secondaryBtnText: 'Learn more',
    secondaryBtnLink: '/store',
    image: '/assets/images/promo_apple_card__d8xz4kd4evwy_large_2x.jpg',
    imageAlt: 'Titanium Apple Card with laser-etched name'
  },
  {
    id: 'apple-trade-in',
    headline: 'Apple Trade In',
    subhead: 'Get $180-$650 in credit when you trade in iPhone 11 or higher.',
    theme: 'light',
    primaryBtnText: 'Get your estimate',
    primaryBtnLink: '/iphone',
    image: '/assets/images/promo_apple_upgrade__jvn6udm4tx2e_large_2x.jpg',
    imageAlt: 'Apple Trade In upgrade program devices'
  }
];

export const MEGA_MENUS: Record<string, MegaMenuItem> = {
  store: {
    title: 'Store',
    sections: [
      {
        heading: 'Shop',
        links: [
          { label: 'Shop the Latest', url: '/store', badge: 'New' },
          { label: 'Mac', url: '/store' },
          { label: 'iPad', url: '/store' },
          { label: 'iPhone', url: '/iphone' },
          { label: 'Apple Watch', url: '/store' },
          { label: 'Accessories', url: '/store' }
        ]
      },
      {
        heading: 'Quick Links',
        links: [
          { label: 'Find a Store', url: '/store' },
          { label: 'Order Status', url: '/store' },
          { label: 'Apple Trade In', url: '/iphone' },
          { label: 'Financing', url: '/store' }
        ]
      },
      {
        heading: 'Shop Special Stores',
        links: [
          { label: 'Certified Refurbished', url: '/store' },
          { label: 'Education Savings', url: '/store' },
          { label: 'Business', url: '/store' }
        ]
      }
    ]
  },
  mac: {
    title: 'Mac',
    sections: [
      {
        heading: 'Explore Mac',
        links: [
          { label: 'Explore All Mac', url: '/store' },
          { label: 'MacBook Air M5', url: '/store', badge: 'New' },
          { label: 'MacBook Pro M4', url: '/store' },
          { label: 'iMac', url: '/store' },
          { label: 'Mac mini', url: '/store' },
          { label: 'Mac Studio', url: '/store' }
        ]
      },
      {
        heading: 'Shop Mac',
        links: [
          { label: 'Shop Mac', url: '/store' },
          { label: 'Mac Accessories', url: '/store' },
          { label: 'Apple Trade In', url: '/iphone' }
        ]
      },
      {
        heading: 'More from Mac',
        links: [
          { label: 'Mac Support', url: '/support' },
          { label: 'macOS Sequoia', url: '/support' },
          { label: 'Apple Intelligence', url: '/iphone' }
        ]
      }
    ]
  },
  iphone: {
    title: 'iPhone',
    sections: [
      {
        heading: 'Explore iPhone',
        links: [
          { label: 'Explore All iPhone', url: '/iphone' },
          { label: 'iPhone 18 Pro', url: '/iphone', badge: 'New' },
          { label: 'iPhone Duo', url: '/iphone', badge: 'Foldable' },
          { label: 'iPhone 17', url: '/iphone' },
          { label: 'iPhone SE', url: '/iphone' },
          { label: 'Compare iPhone', url: '/iphone' }
        ]
      },
      {
        heading: 'Shop iPhone',
        links: [
          { label: 'Shop iPhone', url: '/store' },
          { label: 'iPhone Accessories', url: '/store' },
          { label: 'Carrier Deals', url: '/iphone' },
          { label: 'Financing', url: '/store' }
        ]
      },
      {
        heading: 'Go Further',
        links: [
          { label: 'iPhone Support', url: '/support' },
          { label: 'Apple Intelligence', url: '/iphone' },
          { label: 'iOS 19 Preview', url: '/support' }
        ]
      }
    ]
  },
  watch: {
    title: 'Watch',
    sections: [
      {
        heading: 'Explore Watch',
        links: [
          { label: 'Explore All Apple Watch', url: '/store' },
          { label: 'Apple Watch Series 12', url: '/store', badge: 'New' },
          { label: 'Apple Watch Ultra 4', url: '/store', badge: 'Titanium' },
          { label: 'Apple Watch SE', url: '/store' },
          { label: 'Compare Watch', url: '/store' }
        ]
      },
      {
        heading: 'Shop Watch',
        links: [
          { label: 'Shop Apple Watch', url: '/store' },
          { label: 'Apple Watch Bands', url: '/store' },
          { label: 'Apple Watch Accessories', url: '/store' }
        ]
      },
      {
        heading: 'More from Watch',
        links: [
          { label: 'Apple Watch Support', url: '/support' },
          { label: 'watchOS 12', url: '/support' },
          { label: 'Apple Fitness+', url: '/store' }
        ]
      }
    ]
  }
};
