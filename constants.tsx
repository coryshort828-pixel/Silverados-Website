import { Music, MapPin, Beer, Truck, Dog } from 'lucide-react';
import React from 'react';

export const VENUE_INFO = {
  name: "Silverados",
  full_name: "Silverados WNC",
  email: "silveradosinfo@gmail.com",
  address: "2898 US-70, Black Mountain, NC 28711",
  phone: "(828) 555-0199", // Placeholder
  hours: [
    { day: "Mon-Thu", time: "4:00 PM - 12:00 AM" },
    { day: "Fri-Sat", time: "4:00 PM - 2:00 AM" },
    { day: "Sun", time: "12:00 PM - 10:00 PM" }
  ],
  social: {
    facebook: "https://facebook.com/silveradoswnc",
    instagram: "https://instagram.com/silveradoswnc"
  }
};

export const FEATURES = [
  {
    id: 'lounge',
    title: 'Bar & Lounge',
    description: 'A fully stocked bar with local craft beers, signature cocktails, and a relaxed atmosphere perfect for unwinding.',
    icon: <Beer className="w-8 h-8 text-yellow-500" />
  },
  {
    id: 'pool',
    title: 'Pool Tables',
    description: 'Challenge your friends at one of our professional-grade pool tables. Leagues and casual play welcome.',
    icon: <div className="w-8 h-8 rounded-full border-2 border-yellow-500 flex items-center justify-center font-bold text-xs text-yellow-500">8</div>
  },
  {
    id: 'music',
    title: 'Live Music',
    description: 'Intimate indoor live music performances featuring local talent and regional touring acts. Great vibes, great sound.',
    icon: <Music className="w-8 h-8 text-yellow-500" />
  },
  {
    id: 'food',
    title: 'Food Trucks',
    description: 'Rotating selection of the best food trucks in WNC. Tacos, burgers, BBQ, and more right outside our door.',
    icon: <Truck className="w-8 h-8 text-yellow-500" />
  },
  {
    id: 'dogpark',
    title: 'Dog Park (2026)',
    description: 'Coming soon! A spacious, safe place for your furry friends to run while you enjoy a cold drink.',
    icon: <Dog className="w-8 h-8 text-yellow-500" />
  }
];

export const MOCK_EVENTS = [
  {
    id: '1',
    title: 'Blackwater Station',
    date: 'Jan 10',
    day: 'Saturday',
    time: '9:00 PM',
    description: 'Southern Rock',
    image: 'https://picsum.photos/seed/blackwater/800/600'
  },
  {
    id: '2',
    title: 'Showboat Band',
    date: 'Jan 17',
    day: 'Saturday',
    time: '9:00 PM',
    description: 'Classic Rock',
    image: 'https://picsum.photos/seed/showboat/800/600'
  },
  {
    id: '3',
    title: 'Mojo Mountain',
    date: 'Jan 24',
    day: 'Saturday',
    time: '9:00 PM',
    description: 'Blues/Country/Soul',
    image: 'https://picsum.photos/seed/mojo/800/600'
  },
  {
    id: '4',
    title: 'Mayhem City Blues',
    date: 'Jan 31',
    day: 'Saturday',
    time: '9:00 PM',
    description: 'Blues/Rock',
    image: 'https://picsum.photos/seed/mayhem/800/600'
  },
  {
    id: '5',
    title: 'Blackwater Voodoo',
    date: 'Feb 07',
    day: 'Saturday',
    time: '9:00 PM',
    description: 'Classic Rock',
    image: 'https://picsum.photos/seed/voodoo/800/600'
  }
];