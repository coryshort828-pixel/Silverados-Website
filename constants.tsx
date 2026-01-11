import { Music, MapPin, Beer, Disc, Mic2, Guitar, Drum, ExternalLink } from 'lucide-react';
import React from 'react';

export const VENUE_INFO = {
  name: "Silverados",
  full_name: "Silverados WNC",
  email: "silveradosinfo@gmail.com",
  address: "2898 US-70, Black Mountain, NC 28711",
  phone: "(828) 669-0000",
  hours: [
    { day: "MON-THU", time: "4:00 PM - 12:00 AM" },
    { day: "FRI-SAT", time: "4:00 PM - 2:00 AM" },
    { day: "SUN", time: "12:00 PM - 10:00 PM" }
  ],
  social: {
    facebook: "https://facebook.com/silveradoswnc",
    instagram: "https://instagram.com/silveradoswnc"
  }
};

export const FEATURES = [
  {
    id: 'lounge',
    title: 'THE AMPLIFIER BAR',
    description: 'High-voltage cocktails and local WNC craft beers. Fuel your night in our industrial lounge.',
    icon: <Beer className="w-8 h-8 text-red-600" />
  },
  {
    id: 'pool',
    title: 'HUSTLE & FLOW',
    description: 'Pro-grade pool tables kept in stadium condition. Casual games or tournament grit.',
    icon: <Disc className="w-8 h-8 text-orange-500" />
  },
  {
    id: 'music',
    title: 'MAIN STAGE INDOOR',
    description: 'Intimate live shows with festival-grade sound. Local legends and touring titans.',
    icon: <Guitar className="w-8 h-8 text-yellow-500" />
  }
];

export const MOCK_EVENTS = [
  {
    id: '1',
    title: 'BLACKWATER STATION',
    date: 'JAN 10',
    day: 'SATURDAY',
    time: '9:00 PM',
    genre: 'SOUTHERN ROCK',
    image: 'https://images.unsplash.com/photo-1521334885634-9547aa693471?w=800&q=80',
    social: 'https://www.facebook.com/p/Blackwater-Station-Band-61565956504352/'
  },
  {
    id: '2',
    title: 'SHOWBOAT BAND',
    date: 'JAN 17',
    day: 'SATURDAY',
    time: '9:00 PM',
    genre: 'CLASSIC ROCK',
    image: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80',
    social: 'https://www.facebook.com/p/The-Showboat-Band-61564955702573/'
  },
  {
    id: '3',
    title: 'MOJO MOUNTAIN',
    date: 'JAN 24',
    day: 'SATURDAY',
    time: '9:00 PM',
    genre: 'BLUES / COUNTRY / SOUL',
    image: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&q=80',
    social: 'https://www.facebook.com/mojomountainmusic/'
  },
  {
    id: '4',
    title: 'MAYHEM CITY BLUES',
    date: 'JAN 31',
    day: 'SATURDAY',
    time: '9:00 PM',
    genre: 'HARD BLUES / ROCK',
    image: 'https://images.unsplash.com/photo-1524368535928-5b5e00ddc76b?w=800&q=80',
    social: 'https://www.facebook.com/p/Mayhem-City-Blues-61569285011639/'
  },
  {
    id: '5',
    title: 'BLACKWATER VOODOO',
    date: 'FEB 07',
    day: 'SATURDAY',
    time: '9:00 PM',
    genre: 'CLASSIC ROCK LEGENDS',
    image: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=800&q=80',
    social: 'https://www.facebook.com/BlackwaterVoodooMusic/'
  }
];