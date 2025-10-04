import Link from 'next/link'
import Image from 'next/image'
import { FaFacebook, FaInstagram, FaYoutube, FaTiktok } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-8">
          {/* About */}
          <div>
            <Link href="/" className="inline-block mb-4">
              <Image 
                src="/24SevenRentCarLogo.png" 
                alt="24 Seven Rent A Car" 
                width={100} 
                height={50}
                className="object-contain"
              />
            </Link>
            <p className="text-gray-400 text-sm mt-4">
              Trusted car rental service with offices in West Hollywood and Inglewood. 
              We offer 24/7 support, affordable rates, and easy booking for LAX and Los Angeles travelers.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-gray-400 hover:text-orange-500 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-gray-400 hover:text-orange-500 transition-colors">Contact</Link></li>
              <li><Link href="/blog" className="text-gray-400 hover:text-orange-500 transition-colors">Blog</Link></li>
            </ul>
          </div>

          {/* Get In Contact */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Get In Contact</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link href="/" className="text-gray-400 hover:text-orange-500 transition-colors">Reserve Now</Link></li>
              <li><Link href="/faq" className="text-gray-400 hover:text-orange-500 transition-colors">FAQ</Link></li>
              <li><Link href="/careers" className="text-gray-400 hover:text-orange-500 transition-colors">Careers</Link></li>
            </ul>
          </div>

          {/* Our Locations */}
          <div>
            <h3 className="text-base md:text-lg font-semibold mb-3 md:mb-4">Our Locations</h3>
            <ul className="space-y-2 text-sm md:text-base">
              <li><Link href="/west-hollywood" className="text-gray-400 hover:text-orange-500 transition-colors">West Hollywood</Link></li>
              <li><Link href="/inglewood" className="text-gray-400 hover:text-orange-500 transition-colors">Inglewood</Link></li>
            </ul>
            <div className="flex space-x-4 mt-4 md:mt-6">
              <a href="https://www.facebook.com/24sevenrentacar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FaFacebook size={20} className="md:w-6 md:h-6" />
              </a>
              <a href="https://www.instagram.com/24sevenrentacar/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FaInstagram size={20} className="md:w-6 md:h-6" />
              </a>
              <a href="https://www.youtube.com/@24sevenrentacar9" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FaYoutube size={20} className="md:w-6 md:h-6" />
              </a>
              <a href="https://www.tiktok.com/@24sevenrentacar" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-500 transition-colors">
                <FaTiktok size={20} className="md:w-6 md:h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-6 md:mt-8 pt-6 md:pt-8 text-center text-xs md:text-sm text-gray-400">
          <p className="mb-2 md:mb-0">© 2025 24Seven Rent A Car. All rights reserved. | Locations: West Hollywood • Inglewood</p>
          <div className="mt-2 flex flex-col md:flex-row justify-center items-center gap-2 md:gap-0">
            <Link href="/terms" className="hover:text-orange-500 transition-colors">Terms & Conditions</Link>
            <span className="hidden md:inline mx-2">|</span>
            <Link href="/privacy" className="hover:text-orange-500 transition-colors">Privacy Policy</Link>
            <span className="hidden md:inline mx-2">|</span>
            <Link href="/payment" className="hover:text-orange-500 transition-colors">Payment Information</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
