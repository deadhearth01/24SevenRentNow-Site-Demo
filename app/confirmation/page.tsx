import Link from 'next/link'
import { FaCheckCircle, FaWhatsapp, FaPhone } from 'react-icons/fa'

export default function ConfirmationPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-white rounded-lg shadow-lg p-12">
            <FaWhatsapp className="text-6xl text-green-500 mx-auto mb-6" />
            
            <h1 className="text-4xl font-bold mb-4">Check WhatsApp to Confirm Your Booking!</h1>
            
            <p className="text-xl text-gray-600 mb-8">
              We've sent a confirmation message to your WhatsApp. Please check your phone.
            </p>

            <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-8">
              <div className="flex items-center justify-center mb-4">
                <FaWhatsapp className="text-4xl text-green-600 mr-3" />
                <div className="text-left">
                  <p className="font-semibold text-lg">WhatsApp Message Sent!</p>
                  <p className="text-gray-600">Check your WhatsApp for booking confirmation</p>
                </div>
              </div>
            </div>

            <div className="space-y-4 text-left mb-8">
              <h3 className="font-bold text-lg">What's Next?</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>You'll receive a WhatsApp message with all your booking details</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Arrive 15 minutes before your scheduled pick-up time</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Bring your valid driver's license and credit card</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">✓</span>
                  <span>Our team will have your vehicle ready for you</span>
                </li>
              </ul>
            </div>

            <div className="bg-primary/10 rounded-lg p-6 mb-8">
              <p className="font-semibold mb-2">Need to make changes?</p>
              <a href="tel:8333247368" className="flex items-center justify-center text-primary font-bold text-lg">
                <FaPhone className="mr-2" />
                Call us at (833) 324-7368
              </a>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/" className="btn-primary">
                Back to Home
              </Link>
              <Link href="/reservations" className="btn-secondary">
                View My Reservations
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
