'use client';

import { useState, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

function BookingContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const cars = [
    { name: 'Intermediate ICAR', price: 40, seats: 5, transmission: 'Automatic', doors: 4, ac: true },
    { name: 'Fullsize FCAR', price: 43, seats: 5, transmission: 'Automatic', doors: 4, ac: true },
    { name: 'Standard SCAR', price: 45, seats: 5, transmission: 'Automatic', doors: 4, ac: true, recommended: true },
  ];

  const [selectedCar, setSelectedCar] = useState(cars[0]);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [bookingDetails] = useState({
    pickupLocation: searchParams.get('pickupLocation') || 'Hollywood-Nextcar/Priceless/Flexways',
    returnLocation: searchParams.get('returnLocation') || 'Hollywood-Nextcar/Priceless/Flexways',
    pickupDate: searchParams.get('pickupDate') || '2025-10-06T08:07',
    returnDate: searchParams.get('returnDate') || '2025-10-07T08:07',
  });

  const [loading, setLoading] = useState(false);

  // Calculate days
  const days = Math.ceil(
    (new Date(bookingDetails.returnDate).getTime() - new Date(bookingDetails.pickupDate).getTime()) /
      (1000 * 60 * 60 * 24)
  ) || 1;

  // Calculate prices dynamically
  const baseAmount = days * selectedCar.price;
  const tax = parseFloat((baseAmount * 0.105).toFixed(2));
  const surcharge = 3.99;
  const registrationFee = 2.99;
  const ccp = 4.00;
  const tripFee = 9.99;
  const totalAmount = (baseAmount + tax + surcharge + registrationFee + ccp + tripFee).toFixed(2);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || formData.name.trim() === '') {
      alert('Please enter your name');
      return;
    }
    
    if (!formData.email || formData.email.trim() === '') {
      alert('Please enter your email');
      return;
    }
    
    if (!formData.phone || formData.phone.trim() === '') {
      alert('Please enter your phone number');
      return;
    }

    setLoading(true);

    try {
      // Generate booking ID
      const bookingId = `BK${Math.floor(100000 + Math.random() * 900000)}`;

      const fullBookingData = {
        ...bookingDetails,
        ...formData,
        carType: selectedCar.name,
        bookingId,
        totalAmount,
        days,
        baseAmount: baseAmount.toFixed(2),
      };

      // Send booking request
      const response = await fetch('/api/booking', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(fullBookingData),
      });

      const result = await response.json();

      if (result.success) {
        // Redirect to confirmation page with booking details
        router.push(`/confirmation?bookingId=${bookingId}&amount=${totalAmount}&phone=${encodeURIComponent(formData.phone)}`);
      } else {
        alert('Booking failed. Please try again.');
      }
    } catch (error) {
      console.error('Booking error:', error);
      alert('An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-bold mb-8">Complete Your Booking</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Booking Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-2xl font-semibold mb-6 text-orange-500">Available Vehicle Classes</h2>
                
                {/* Vehicle Selection */}
                <div className="space-y-4 mb-8">
                  {cars.map((car) => (
                    <div 
                      key={car.name} 
                      onClick={() => setSelectedCar(car)}
                      className={`border-2 rounded-lg p-4 transition-all cursor-pointer relative ${
                        selectedCar.name === car.name 
                          ? 'border-orange-500 bg-orange-50' 
                          : 'border-gray-200 hover:border-orange-300'
                      }`}
                    >
                      {car.recommended && (
                        <span className="absolute top-2 right-2 bg-orange-500 text-white px-3 py-1 text-xs rounded-full">
                          Recommended
                        </span>
                      )}
                      <div className="flex justify-between items-center">
                        <div>
                          <h3 className="font-semibold text-lg">{car.name}</h3>
                          <div className="flex gap-4 mt-2 text-sm text-gray-600">
                            <span>👥 {car.seats} Seater</span>
                            <span>⚙️ {car.transmission}</span>
                            <span>🚪 {car.doors}-doors</span>
                            {car.ac && <span>❄️ AC</span>}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold">${car.price}.00</div>
                          <div className="text-sm text-gray-600">/ day</div>
                          <div className="text-sm text-gray-500 mt-1">${(car.price * days).toFixed(2)} total for {days} Day{days > 1 ? 's' : ''}</div>
                          <div className="text-xs text-gray-500">Excl. taxes & insurance(s)</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Customer Information Form */}
                <div className="border-t pt-8">
                  <h2 className="text-2xl font-semibold mb-6 text-orange-500">Customer Information</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Demo Data Display */}
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                      <p className="text-sm text-blue-800">
                        <strong>Demo Mode:</strong> Pickup/return locations and dates are pre-filled. Enter your details to receive WhatsApp confirmation.
                      </p>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Name * <span className="text-orange-500">(Required for WhatsApp confirmation)</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-2 border-2 border-orange-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-2 border-2 border-orange-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number * <span className="text-orange-500">(Enter your number for WhatsApp confirmation)</span>
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-2 border-2 border-orange-500 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                        placeholder="+1 (555) 000-0000"
                      />
                      <p className="text-xs text-gray-500 mt-1">Include country code (e.g., +1 for US, 91 for India)</p>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-black text-white py-4 px-8 rounded-lg font-semibold text-lg hover:bg-gray-800 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
                    >
                      {loading ? 'Processing...' : 'Next Step'}
                    </button>
                  </form>
                </div>
              </div>
            </div>

            {/* Right Column - Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-lg p-6 sticky top-4">
                <h2 className="text-xl font-semibold mb-4">Summary</h2>
                
                <div className="space-y-4 text-sm">
                  <div>
                    <div className="font-semibold text-orange-500 mb-1">Pickup</div>
                    <div className="text-gray-700">
                      {new Date(bookingDetails.pickupDate).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: '2-digit', 
                        year: 'numeric' 
                      })} @ {new Date(bookingDetails.pickupDate).toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                    <div className="text-gray-600 text-xs">Location: {bookingDetails.pickupLocation}</div>
                  </div>

                  <div>
                    <div className="font-semibold text-orange-500 mb-1">Return</div>
                    <div className="text-gray-700">
                      {new Date(bookingDetails.returnDate).toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: '2-digit', 
                        year: 'numeric' 
                      })} @ {new Date(bookingDetails.returnDate).toLocaleTimeString('en-US', { 
                        hour: '2-digit', 
                        minute: '2-digit' 
                      })}
                    </div>
                    <div className="text-gray-600 text-xs">Location: {bookingDetails.returnLocation}</div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="font-semibold">{selectedCar.name}</div>
                    <div className="flex justify-between mt-2">
                      <span>{days}x Days:</span>
                      <span>${baseAmount.toFixed(2)}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="font-semibold mb-2">Miscellaneous</div>
                    <div className="space-y-1 text-xs">
                      <div className="flex justify-between">
                        <span>Sales Tax (10.5%):</span>
                        <span>${tax.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Surcharge:</span>
                        <span>${surcharge.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Vehicle registration Fee:</span>
                        <span>${registrationFee.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>CCP:</span>
                        <span>${ccp.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Trip Fee:</span>
                        <span>${tripFee.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>${totalAmount}</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <div className="flex justify-between text-base font-bold text-red-600">
                      <span>Security Deposit</span>
                      <span>$500.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function BookingPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <BookingContent />
    </Suspense>
  );
}
