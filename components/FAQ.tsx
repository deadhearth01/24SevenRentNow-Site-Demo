'use client'

import { useState } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa'

interface FAQItem {
  question: string
  answer: string
}

const faqs: FAQItem[] = [
  {
    question: 'Can I pick up my rental car directly at LAX Airport?',
    answer: 'Yes, 24Seven Rent A Car offers direct pick-up at LAX Airport. Simply confirm your booking, and our team will guide you to the pickup zone for a quick, hassle-free experience.'
  },
  {
    question: 'Are cheap car rentals available in Inglewood and West Hollywood?',
    answer: 'Absolutely! We provide budget-friendly rental options in both Inglewood and West Hollywood. Whether you need a compact car for city driving or an SUV for longer trips, you\'ll find affordable choices nearby.'
  },
  {
    question: 'Do you offer luxury rentals in West Hollywood?',
    answer: 'Yes. West Hollywood travelers can enjoy a range of premium cars, SUVs, and convertibles. Perfect for cruising the Sunset Strip or exploring Beverly Hills in style.'
  },
  {
    question: 'How do I return my rental car at Los Angeles Airport?',
    answer: 'Returning your car at LAX Airport is simple. Follow the return instructions provided at booking, and our team will meet you at the designated drop-off zone for a fast check-out.'
  },
  {
    question: 'What types of cars can I rent from 24Seven Rent A Car?',
    answer: 'We offer a wide variety of rental cars, including compact cars, SUVs, convertibles, sedans, electric vehicles, and luxury cars in West Hollywood and Los Angeles.'
  },
  {
    question: 'Is 24Seven Rent A Car open 24/7?',
    answer: 'Yes! We provide 24/7 car rental services, including late-night pick-ups and emergency bookings. You can rent a car any time, even on weekends.'
  },
  {
    question: 'Can I rent a car without a credit card or with bad credit?',
    answer: 'Absolutely. We offer car rentals with debit card or cash payment. No credit check is needed — just bring your ID and deposit.'
  },
  {
    question: 'What documents do I need to rent a car?',
    answer: 'You\'ll need a valid driver\'s license, a payment method (we only accept major credit cards), and your ID. International renters are welcome with passports.'
  }
]

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Find answers to common questions about our car rental services
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                {openIndex === index ? (
                  <FaChevronUp className="text-primary flex-shrink-0" />
                ) : (
                  <FaChevronDown className="text-gray-400 flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
