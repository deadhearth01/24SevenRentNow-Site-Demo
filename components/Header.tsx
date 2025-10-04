'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="bg-black text-white py-3 md:py-4 px-4 md:px-6 sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image 
            src="/24SevenRentCarLogo.png" 
            alt="24 Seven Rent A Car" 
            width={100} 
            height={50}
            className="object-contain md:w-[120px] md:h-[60px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-4 lg:space-x-6 text-sm lg:text-base">
          <Link href="/" className="hover:text-orange-500 transition-colors">
            Reserve Now
          </Link>
          <Link href="#testimonials" className="hover:text-orange-500 transition-colors">
            Testimonials
          </Link>
          <Link href="#about" className="hover:text-orange-500 transition-colors">
            About Us
          </Link>
          <Link href="#team" className="hover:text-orange-500 transition-colors">
            Team
          </Link>
          <Link href="#contact" className="hover:text-orange-500 transition-colors">
            Contact
          </Link>
          <Link href="#reservations" className="hover:text-orange-500 transition-colors">
            My Reservations
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-2xl"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden mt-4 pb-4 border-t border-gray-700 pt-4">
          <div className="flex flex-col space-y-3">
            <Link 
              href="/" 
              className="hover:text-orange-500 transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Reserve Now
            </Link>
            <Link 
              href="#testimonials" 
              className="hover:text-orange-500 transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link 
              href="#about" 
              className="hover:text-orange-500 transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              About Us
            </Link>
            <Link 
              href="#team" 
              className="hover:text-orange-500 transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Team
            </Link>
            <Link 
              href="#contact" 
              className="hover:text-orange-500 transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              Contact
            </Link>
            <Link 
              href="#reservations" 
              className="hover:text-orange-500 transition-colors px-4 py-2"
              onClick={toggleMenu}
            >
              My Reservations
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
