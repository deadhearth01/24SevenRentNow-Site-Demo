'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function BookingForm() {
  const locations = [
    'Hollywood-Nextcar/Priceless/Flexways',
    '24/7 Rent Now, LAX/Flexways',
    'Custom Location'
  ];

  const [pickupLocation, setPickupLocation] = useState(locations[0]);
  const [returnLocation, setReturnLocation] = useState(locations[0]);
  const [pickupDate, setPickupDate] = useState('2025-10-06T08:07');
  const [returnDate, setReturnDate] = useState('2025-10-07T08:07');

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-6xl mx-auto -mt-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Pick Up Location
          </label>
          <select
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
            className="w-full px-4 py-3 border-2 border-orange-500 rounded-lg focus:outline-none focus:border-orange-600 bg-white"
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            From
          </label>
          <input
            type="datetime-local"
            value={pickupDate}
            onChange={(e) => setPickupDate(e.target.value)}
            className="w-full px-4 py-3 border-2 border-orange-500 rounded-lg focus:outline-none focus:border-orange-600"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Return Location
          </label>
          <select
            value={returnLocation}
            onChange={(e) => setReturnLocation(e.target.value)}
            className="w-full px-4 py-3 border-2 border-orange-500 rounded-lg focus:outline-none focus:border-orange-600 bg-white"
          >
            {locations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Until
          </label>
          <input
            type="datetime-local"
            value={returnDate}
            onChange={(e) => setReturnDate(e.target.value)}
            className="w-full px-4 py-3 border-2 border-orange-500 rounded-lg focus:outline-none focus:border-orange-600"
          />
        </div>

        <div>
          <Link 
            href={`/booking?pickupLocation=${encodeURIComponent(pickupLocation)}&returnLocation=${encodeURIComponent(returnLocation)}&pickupDate=${pickupDate}&returnDate=${returnDate}`}
          >
            <button className="w-full bg-black text-white py-3 px-8 rounded-lg font-semibold hover:bg-gray-800 transition-colors">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
