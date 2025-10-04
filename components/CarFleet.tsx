'use client'

import Link from 'next/link'
import { FaCar, FaAppleAlt, FaAndroid, FaCog, FaSnowflake } from 'react-icons/fa'

interface Car {
  id: string
  name: string
  type: string
  image: string
  features: string[]
  price: number
}

const cars: Car[] = [
  {
    id: '1',
    name: "Intermediate 'ICAR'",
    type: 'Intermediate',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=600',
    features: ['Apple Car Play', 'Android Auto', 'Automatic Transmission', 'Air Conditioning'],
    price: 45
  },
  {
    id: '2',
    name: "Luxury Sedan 'LCAR'",
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1563720360172-67b8f3dce741?w=600',
    features: ['Apple Car Play', 'Android Auto', 'Automatic Transmission', 'Air Conditioning'],
    price: 85
  },
  {
    id: '3',
    name: "Luxury Convertible 'LTAR'",
    type: 'Convertible',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=600',
    features: ['Apple Car Play', 'Android Auto', 'Automatic Transmission', 'Air Conditioning'],
    price: 120
  },
  {
    id: '4',
    name: "Standard Elite SUV 'RFAR'",
    type: 'SUV',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=600',
    features: ['Apple Car Play', 'Android Auto', 'Automatic Transmission', 'Air Conditioning'],
    price: 95
  },
  {
    id: '5',
    name: "Premium Sports 'PSAR'",
    type: 'Sports',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=600',
    features: ['Apple Car Play', 'Android Auto', 'Automatic Transmission', 'Air Conditioning'],
    price: 150
  },
  {
    id: '6',
    name: "Full Size 'FFAR'",
    type: 'Full Size SUV',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600',
    features: ['Apple Car Play', 'Android Auto', 'Automatic Transmission', 'Air Conditioning'],
    price: 110
  },
]

export default function CarFleet() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Top Car Rentals in Los Angeles, LAX, Inglewood & West Hollywood</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Choose from the best fleet of cheap rentals, premium sedans, SUVs, and convertibles. 
            Whether you're landing at LAX or staying in Inglewood or West Hollywood, your perfect ride is just a click away.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div key={car.id} className="card">
              <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
                <img
                  src={car.image}
                  alt={car.name}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <h3 className="text-xl font-bold mb-2">{car.name}</h3>
              <p className="text-gray-600 mb-4">{car.type}</p>

              <div className="grid grid-cols-2 gap-2 mb-4">
                {car.features.map((feature, index) => (
                  <div key={index} className="flex items-center text-sm text-gray-600">
                    <FaCog className="mr-2 text-primary" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <span className="text-2xl font-bold text-primary">${car.price}</span>
                  <span className="text-gray-600">/day</span>
                </div>
                <Link href="/booking" className="bg-primary hover:bg-orange-600 text-white px-6 py-2 rounded-full transition-colors inline-block">
                  Rent Now
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
