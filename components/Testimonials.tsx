'use client'

import { useState } from 'react'
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const testimonials = [
  {
    name: 'Erfan Karimian',
    rating: 5,
    text: 'I recently rented a car from this Rental Car Company and had a fantastic experience! The booking process was easy and efficient, and the staff was friendly and helpful. The car was clean, comfortable.'
  },
  {
    name: 'Kimberly Garcia',
    rating: 5,
    text: 'Easy process to rent a car. Booked the night before for a day trip. Julian walked me through everything at check-in. Affordable and convenient location. Would book with them again!'
  },
  {
    name: 'Lauren Josephine',
    rating: 5,
    text: 'I recently rented a car from this Rental Car Company and had a fantastic experience! The booking process was easy and efficient, and the staff was friendly and helpful. The car was clean, comfortable.'
  },
  {
    name: 'Jeramy Culanag',
    rating: 5,
    text: 'I did my last-minute reservation over the phone and the customer service rep was very helpful. And the guy that assisted me was very friendly and polite. The car they assigned to me was clean. It was a smooth and good experience.'
  }
]

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Clients' Testimonials</h2>
          <h3 className="text-2xl text-primary mb-4">Excellence, Endorsed</h3>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Don't just take our word for it. Here's what people say about their hassle-free 
            experiences with 24Seven—where renting is always straightforward, reliable, and tailored to your needs.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-xl p-8 md:p-12 relative">
            {/* Navigation Buttons */}
            <button
              onClick={prev}
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={next}
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-primary text-white p-3 rounded-full hover:bg-orange-600 transition-colors"
            >
              <FaChevronRight />
            </button>

            {/* Testimonial Content */}
            <div className="text-center px-12">
              <div className="flex justify-center mb-4">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <FaStar key={i} className="text-yellow-400 text-2xl mx-1" />
                ))}
              </div>
              <p className="text-gray-700 text-lg mb-6 italic">
                "{testimonials[currentIndex].text}"
              </p>
              <h4 className="text-xl font-bold text-primary">
                {testimonials[currentIndex].name}
              </h4>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-primary' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
